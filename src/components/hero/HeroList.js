import { useMemo } from "react"
import { getHeroesByPublisher } from "../../selectors/getHeroes.ByPublisher"
import { HeroCard } from "./HeroCard"

export const HeroList = ({publisher}) => {

    const heroes = useMemo (()=>getHeroesByPublisher(publisher), [publisher]);
    // const heroes = getHeroesByPublisher(publisher) me parece a mi que con esta liea y no la de arriba, andaria igual.

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
