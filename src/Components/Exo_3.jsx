import React from 'react'

export default function Exo3() {
    let changeColorFocus = (e) => {
        e.target.style.backgroundColor = "green"
    }
    let retour = (e) => {
        e.target.style.backgroundColor = ""
    }
    return (
        <div>
            <h2>Exercice 3</h2>
            <input type="text" onFocus={changeColorFocus} onBlur={retour} />
        </div>
    )
}
