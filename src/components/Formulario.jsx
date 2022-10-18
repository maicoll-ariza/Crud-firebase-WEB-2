import React from 'react'
import { useForm } from '../hooks/useForm'

export const Formulario = ({ initialForm }) => {
    const { nombreEquipo, nombreEstadio, nombreTecnico, nombreCapitan, canTitulos, liga,fechaFundacion, handleInputChange, handleResetForm } = useForm( initialForm )

  return (
    <div>
        <form>
            <input 
                type="text"
                placeholder='Nombre del equipo'
                name='nombreEquipo'
                value={ nombreEquipo }
                onChange={ handleInputChange }
                />
            <input 
                type="text"
                placeholder='Nombre del estadio de fútbol'
                name='nombreEstadio'
                value={ nombreEstadio }
                onChange={ handleInputChange }
                />
            <input 
                type="text"
                placeholder='Nombre del Director técnico'
                name='nombreTecnico'
                value={ nombreTecnico }
                onChange={ handleInputChange }
                />
            <input 
                type="text"
                placeholder='Nombre del capitán'
                name='nombreCapitan'
                value={ nombreCapitan }
                onChange={ handleInputChange }
                />
            <input 
                type="number"
                placeholder='Numero de títulos obtenidos'
                name='canTitulos'
                value={ canTitulos }
                onChange={ handleInputChange }
                />
            <select name='liga' value={ liga } onInput={ handleInputChange } >
                <option value="">---Selecciona---</option>
                <option value="laLiga">LaLiga</option>
                <option value="ligue-1">Ligue 1</option>
                <option value="bundesliga">Bundesliga</option>
                <option value="premier">Premier League</option>
                <option value="serie-a">Serie A</option>
            </select>
            <input 
                type="date"
                name='fechaFundacion'
                value={ fechaFundacion }
                onChange={ handleInputChange }
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
