import React from 'react'

export const Formulario = () => {
  return (
    <div>
        <form onSubmit={ ()=>{  } }>
            <input 
                type="text"
                placeholder='Nombre del equipo'
                />
            <input 
                type="text"
                placeholder='Nombre del estadio de fútbol'
                />
            <input 
                type="text"
                placeholder='Nombre del Director técnico'
                />
            <input 
                type="text"
                placeholder='Nombre del capitán'
                />
            <input 
                type="number"
                placeholder='Numero de títulos obtenidos'
                />
            <select>
                <option value="">---Selecciona---</option>
                <option value="laLiga">LaLiga</option>
                <option value="ligue-1">Ligue 1</option>
                <option value="bundesliga">Bundesliga</option>
                <option value="premier">Premier League</option>
                <option value="serie-a">Serie A</option>
            </select>
            <input 
                type="date"
                 />
            <div>
                <button type='submit'>
                    Agregar
                </button>
                <button>
                    Limpiar
                </button>
            </div>
        </form>
    </div>
  )
}
