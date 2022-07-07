import React from 'react'

export default function Exo2({text, setText}) {
    let modifie = (e) => {
        if(e.key === "Enter"){
            text = e.target.value;
            setText(text);
        }
    }
    return (
        <div>
            <h2>Exercice 2</h2>
            <p>{text}</p>
            <input type="text" onKeyPress={modifie} />
        </div>
    )
}
