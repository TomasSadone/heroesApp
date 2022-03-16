import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroesById';
import './hero.css'

const heroImg = require.context('../../assets', true);

  export const HeroScreen = () => {

    const {heroe} = useParams();
    const navigate = useNavigate()

    
    const hero = useMemo( ()=> getHeroById(heroe), [heroe]);

    const handleReturn = ()=> navigate(-1);

    if(!hero) {return <Navigate to='/'/>}


    return (
      <div className="grid">
          <div className="g-col-4 animate__animated animate__fadeInLeft">
            <img 
              src={heroImg(`./${heroe}.jpg`)}
              alt={hero.superhero}
              className='img-thmbnail'
             />
          </div>

          <div className="g-col-8 animate__animated animate__fadeInLeft">
            <h3>{hero.superhero}</h3>
            <ul className='list-group '>
              <li className='list-group-item'><b>Alter ego: </b>{hero.alter_ego}</li>
              <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
              <li className='list-group-item'><b>First appearance: </b>{hero.first_appearance}</li>
            </ul>

            <h5 className='mt-3'>Characters</h5>
            <p>{hero.characters}</p>

            <button className='btn btn-primary'
              onClick={handleReturn}
            >Regresar</button>

          </div>
      </div>
    )
  }
