import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('pruebas en AppRouter', () => {

    test('debe mostrar login si no esta autenticado', () => {

        const contextValue = {
            user:{
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login')

    })

    test('debe mostrar Marvel si esta autenticado', () => {

        const contextValue = {
            user:{
                logged: true,
                name:"peter"
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true)

    })


})