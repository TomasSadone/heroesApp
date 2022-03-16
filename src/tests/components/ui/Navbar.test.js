import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=> mockNavigate,
}));

// jest.mock('src/HeroesApp/dispatch')
// const mockDispatch = jest.fn()

        
const contextValue = {
    dispatch:jest.fn(),
    user:{
        logged: true,
        name: 'Tomas',
    }
};

const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
            <Navbar/>
        </MemoryRouter>
    </AuthContext.Provider>
);

describe('pruebas en navbar', () => {

    test('debe mostrar correctamente', () => {


        expect(wrapper.find('.text-info').text().trim()).toBe('Tomas');

    });

    test('debe llamar logout, navigate, y el dispatch con los argumentos', () => {

        /*  --## MOCK COMPLETO ##--
            --## MOCK DEL NAVIGATE ##--
            --## VER DONDE SE HACE CLICK ##--
            --## MOCK DEL DISPATCH, JEST.FN(). 
                 EL DISPATCH ES PARTE DE AUTHCONTEXT. ##--
            --## NO MOCK AL USECONTEXT ##--
        */  
        

            wrapper.find('button').prop('onClick')();

            expect(contextValue.dispatch).toHaveBeenCalledWith({'type':types.logout});
            expect(mockNavigate).toHaveBeenCalledWith( '/login',{replace: true});

    })

});