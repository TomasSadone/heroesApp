import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import {useForm} from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string'
import { queryByRole } from '@testing-library/react';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = ''} = queryString.parse(location.search);
  
  const heroesFiltered = useMemo(()=> getHeroesByName(q), [q]);

  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const {searchText} = formValues;
  

  const handleSearch = (e) =>{
    e.preventDefault(e);
    navigate(`?q=${searchText }`);
  }


  return (
    <>
        <h1>Búsquedas</h1>
        <hr/>

        <div className="grid">
          <h4>Buscar</h4>
          <hr/>

          <div>
            <form onSubmit={handleSearch}>
              <input
                type='text'
                placeholder='Buscar un Heroe'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={handleInputChange}
              />

              <button type='sumbit' className='btn btn-primary mt-1'>
                Buscar
              </button>

            </form>
          </div>

          <div>
            <h4>Resultados</h4>
            <hr/>

            {
              (q === '')
                ? <div className='alert alert-info'>Buscar un heroe</div>
                :(heroesFiltered.length === 0)
                  && <div className='alert alert-danger'>No hay resultados: {q}</div>
            }

            {
              heroesFiltered.map(hero =>(
                <HeroCard 
                  key={hero.id}
                  {...hero}
                />
              ))
            }
          </div>
        </div>
    </>
  )
}
