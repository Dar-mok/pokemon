import Pokecard from './Pokecard';

function Pokedex(props){
//use map to loop through array of objects, inserting all the pertaining
//properties to the Pokecard component

return (
 <div>

 {props.pokemon.map(poke => <Pokecard poke={poke} /> )}

 </div>
)

}
export default Pokedex;