//snapshot
//disparar click del boton
// funcion handlelogin
//dispatch sea llamada con ese objeto (action)
//actualizacion del localstorage
//que navigate funcione

import { MemoryRouter, Route, Routes } from "react-router-dom";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/authContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=> mockNavigate,
}));


describe('pruebas en login', () => {

    const contextValue = {
        dispatch:jest.fn(),
        user:{
            logged: true,
            name: 'Tomas',
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginScreen/>}/> 
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('debe de hacer match con snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe realizar dipatch y navegacion', () => {

        wrapper.find('button').prop('onClick')();
        // handleClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'Tomas' }
        });

        expect(mockNavigate).toHaveBeenCalledWith('/',{replace:true});

    });

    test('debe navegar a /dc', () => {

        localStorage.setItem('lastPath', '/dc');


        wrapper.find('button').prop('onClick')();

        expect(mockNavigate).toHaveBeenCalledWith('/dc',{replace:true});


    })

});
