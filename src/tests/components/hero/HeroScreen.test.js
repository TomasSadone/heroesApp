import { MemoryRouter,Routes, Route } from "react-router-dom";
import { mount } from "enzyme";
import { HeroScreen } from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=> mockNavigate,
}));

describe('Pruebas en heroscreen', () => {

    test('no debe mostrat HeroScreen si no hay heroe en URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen/>}/>
                    <Route path="/" element={<h1>No Hero Page</h1>}/>
                </Routes>
            </MemoryRouter>)

        expect(wrapper.find('h1').text()).toBe('No Hero Page');

    });

    test('Debe mostrar un hero si se encuentra un parametro existente', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroe" element={<HeroScreen/>}/>
                    <Route path="/" element={<h1>No Hero Page</h1>}/>
                </Routes>
            </MemoryRouter>)

        expect(wrapper.find('.g-col-4').exists()).toBe(true);

    });

})