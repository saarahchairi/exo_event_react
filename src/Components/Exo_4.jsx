import React from 'react'

export default function Exo4() {
    return (
        <div>
            <h2>Exercice 4</h2>
            <input type="text" onCopy={()=>alert("Texte copié!")} />
        </div>
    )
}
