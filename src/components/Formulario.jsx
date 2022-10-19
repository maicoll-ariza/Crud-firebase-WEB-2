import React from 'react'
import { useForm } from '../hooks/useForm'

export const Formulario = ({ initialForm, SetNewEquipo }) => {
    const { nombreEquipo, nombreEstadio, nombreTecnico, nombreCapitan, canTitulos, liga,fechaFundacion, handleInputChange, handleResetForm, formState } = useForm( initialForm )

    const handleSubmit = e => {
        e.preventDefault()

        SetNewEquipo(formState)
    }

  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <div className='form-floating mb-3'>
                <input 
                    className='form-control'
                    type="text"
                    placeholder='Nombre del equipo'
                    id='nombreEquipo'
                    name='nombreEquipo'
                    value={ nombreEquipo }
                    onChange={ handleInputChange }
                />
                <label htmlFor="nombreEquipo">Nombre del equipo</label>
            </div>
            <div className='form-floating mb-3'>
                <input 
                    className='form-control'
                    type="text"
                    placeholder='Nombre del estadio de fútbol'
                    id="estadio"
                    name='nombreEstadio'
                    value={ nombreEstadio }
                    onChange={ handleInputChange }
                    />
                <label htmlFor="estadio">Nombre del estadio de fútbol</label>
            </div>
            <div className='form-floating mb-3'>
                <input 
                    className='form-control'
                    type="text"
                    placeholder='Nombre del Director técnico'
                    id='tecnico'
                    name='nombreTecnico'
                    value={ nombreTecnico }
                    onChange={ handleInputChange }
                    />
                <label htmlFor="tecnico">Nombre del Director técnico</label>
            </div>
            <div className='form-floating mb-3'>
                <input 
                    className='form-control'
                    type="text"
                    placeholder='Nombre del capitán'
                    id='capitan'
                    name='nombreCapitan'
                    value={ nombreCapitan }
                    onChange={ handleInputChange }
                    />
                <label htmlFor="capitan">Nombre del capitán</label>
            </div>
            <div className='form-floating mb-3'>
                <input
                    className='form-control'
                    type="number"
                    placeholder='Numero de títulos obtenidos'
                    id='titulos'
                    name='canTitulos'
                    value={ canTitulos }
                    onChange={ handleInputChange }
                    />
                <label htmlFor="titulos">Numero de títulos obtenidos</label>
            </div>
            
            <select className='form-select mb-3' name='liga' value={ liga } onInput={ handleInputChange } >
                <option value="">--Selecciona--</option>
                <option value="LaLiga">LaLiga</option>
                <option value="Ligue-1">Ligue 1</option>
                <option value="Bundesliga">Bundesliga</option>
                <option value="Premier League">Premier League</option>
                <option value="Serie-A">Serie A</option>
            </select>
            <input 
                className='form-control mb-3'
                type="date"
                name='fechaFundacion'
                value={ fechaFundacion }
                onChange={ handleInputChange }
                 />
            <div className='d-flex justify-content-evenly gap-3 align-items-center'>
                <button className='btn btn-outline-primary' type='submit'>
                    Agregar
                </button>
                <button type='button' className='btn btn-outline-danger'>
                    Limpiar
                </button>
            </div>
        </form>
    </div>
  )
}
