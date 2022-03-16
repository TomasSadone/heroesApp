import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types"

describe('Pruebas en authReducer', () => {

    test('debe retornar el estado por defecto ', () => {

        const state = authReducer( {logged: false},  {});
        expect(state).toEqual({logged:false});

    });

    test('debe autentiacr y colocar el name del user', () => {

        const action = {
            type: types.login,
            payload:{
                name: 'Tomas',
            }
        }

        const state = authReducer( {logged: false}, action);

        expect(state).toEqual({
            logged:true,
            name: 'Tomas',
        })

    });

    test('debe borrar el name y hacre logout', () => {

        const action = {
            type: types.logout
        };

        const state = authReducer( {
            logged:true,
            name: 'Tomas',
        }, action);

        expect (state).toEqual({
            logged: false
        });

    })

})