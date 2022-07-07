import React from 'react'

export default function Exo1({ monChiffre, setChiffre }) {
  let change = () =>{
    setChiffre(monChiffre+1)
  };
  return (
    <div>
      <h2>Exercice 1</h2>
      <p>Tu as cliqué {monChiffre} fois</p>
      <button onClick={change}>Clique</button>
    </div>
  )
}
