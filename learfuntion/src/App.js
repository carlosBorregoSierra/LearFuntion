import {useState} from 'react';

const useContador =(inicial)=>{
  const [contador, setConatdor] = useState(inicial)
  const incrementar =()=>{
    setConatdor(contador+1)
  }
  return[contador, incrementar]
}

let App =()=>{
  const [contador, incrementar] = useContador(0)
  return(
    <div>
      <h2>Contador:<h1>{contador}</h1></h2>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
export default App;