const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function Pokecard(props){
  const style = {
    backgroundColor: "grey",
    width: "150px",
    height: "100px"
  }
  return (
    <div style={style}>
      <h1> {props.poke.name}</h1>
      <img src={`${BASE_URL}/${props.poke.id}.png`}/>
      <h3>{props.poke.type}</h3>
      </div>
  )
}

export default Pokecard;