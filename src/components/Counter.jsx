import {useState} from 'react';

export function Counter (){
  const [counter, setCounter] = useState(0);
  //desestruturando o array
  //porque let? Porque vem da frase deixe isso mudar em english

function increment (){
  setCounter (counter + 1);
}

  return (
    <div>
      <h2>{counter}</h2>
      <button 
      type="button"
      onClick={increment}>
        Increment 
        </button>
    </div>
  );
}