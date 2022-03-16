import { heroes } from "../data/heroes"


export const getHeroById = (id = '') =>{
    console.log('gethero')
    return heroes.find(heroe => heroe.id === id);
};