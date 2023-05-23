const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function Pokecard(props){
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "grey",
    width: "250px",
    height: "225px",
    padding: "10px",
    margin: "10px"
  }
  const textColor = {
    color: "blue",
    size: "10px",
    fontFamily: "Montserrat, sans-serif"
  }

  const imageSize ={
    width: "80px",
    height: "80px"
  }
  return (
    <div style={style}>
      <h1 style={textColor}> {props.poke.name}</h1>
      <img style={imageSize} src={`${BASE_URL}/${props.poke.id}.png`}/>
      <h3>Type: {props.poke.type}</h3>
      <h3>EXP: {props.poke.base_experience}</h3>
      </div>
  )
}

export default Pokecard;