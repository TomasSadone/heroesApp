import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe('Pruebas en PrivateRoute', () => {

    Storage.prototype.setItem = jest.fn();
    test('debe mostrar el componente si esta autenticado y guardar en localStorage', () => {

        const contextValue = {
            user:{
                logged: true,
                name: 'Tomas',
            }
        };
    

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.text()).toBe('Private Component');
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/');

    })

})