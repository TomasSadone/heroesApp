import { heroes } from "../data/heroes"


export const getHeroesByName = ( name = '') =>{
    console.log('se ejecuto')
    if (name.length === 0 ) {
        return []
    };
      
    name = name.toLowerCase();
    
    return heroes.filter(heroes => heroes.superhero.toLowerCase().includes(name))

}