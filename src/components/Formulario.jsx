import React, { useRef } from 'react'
import { useForm } from '../hooks/useForm'

const resetForm = {
    nombreEquipo: '',
    nombreEstadio: '',
    nombreTecnico: '',
    nombreCapitan: '',
    canTitulos: 0,
    liga: '',
    fechaFundacion:''
}

export const Formulario = ({ initialForm, SetNewEquipo, modEdicion, updateEquipo, loading, setModEdicion, inputRef, setError, error }) => {
    const { nombreEquipo, nombreEstadio, nombreTecnico, nombreCapitan, canTitulos, liga,fechaFundacion, flexRadioDefault = '',  handleInputChange, handleResetForm, formState } = useForm( initialForm )

    const handleSubmit = async (e) => {
        e.preventDefault()
        const pattern = RegExp("^[a-zA-Z ]+$")

        if ( !pattern.test( nombreEquipo ) ) {
            return setError('Nombre de equipo no puede contener números ni caracteres especiales')
        } else if ( nombreEquipo.trim().length === 0 ) {
            return setError('Nombre de equipo inválido')
        } else if ( !pattern.test( nombreEstadio )) {
            return setError('El nombre de estadio no puede contener números ni caracteres especiales')
        } else if ( nombreEstadio.trim().length === 0 ) {
            return setError('Nombre de estadio de fútbol inválido')
        } else if ( nombreTecnico.trim().length === 0 ) {
            return setError('Nombre de técnico inválido')
        } else if ( nombreTecnico.length <= 4 ) {
            return setError('Nombre de técnico de fútbol muy corto')
        } else if ( !pattern.test( nombreTecnico )) {
            return setError('El nombre del ténico deportivo no puede contener números ni caracteres especiales')
        } else if ( nombreCapitan.trim().length === 0 ) {
            return setError('Nombre del cápitan inválido')
        } else if ( nombreCapitan.length <= 4 ) {
            return setError('Nombre de capitán muy corto')
        } else if ( !pattern.test( nombreCapitan )) {
            return setError('El nombre del capitán de campo no puede contener números ni caracteres especiales')
        } else if ( canTitulos < 0 ) {
            return setError('El número de titulos es invalido. Ingrese un número mayor o igual a cero ')
        } else if ( liga === "" ) {
            return setError('Agregue la liga a la que pertenece el club ')
        } else if ( fechaFundacion === "" ) {
            return setError('Agregue la fecha en la que se fundó el equipo')
        }

        if ( modEdicion ) {
            await updateEquipo( formState )
        } else {
             await SetNewEquipo( formState )
        }
        handleResetForm(resetForm)
        setError( false )
    }

    const cancelarEdicion = () => {
        setModEdicion( false )
        handleResetForm(resetForm)
        setError( false )
    }

  return (
        <form 
            className='col-12 col-sm-10 col-md-6 col-lg-4 pb-3 px-3 border shadow rounded' 
            onSubmit={ handleSubmit }>
                <h3 className='pt-3'>{ modEdicion ? 'Editar' : 'Agregar'} información</h3>
                {
                    ( error ) && (
                        <div className="alert alert-danger" role="alert">
                            { error }
                        </div>
                    )
                }
            <div className='form-floating mb-3'>
                <input 
                    required
                    ref={ inputRef }
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
                    required
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
                    required
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
                    required
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
                    required
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
            
            <select required className='form-select mb-3' name='liga' value={ liga } onInput={ handleInputChange } >
                <option value="">--Selecciona--</option>
                <option value="LaLiga">LaLiga</option>
                <option value="Ligue-1">Ligue 1</option>
                <option value="Bundesliga">Bundesliga</option>
                <option value="Premier League">Premier League</option>
                <option value="Serie-A">Serie A</option>
            </select>
            <input 
                required
                placeholder='Fecha'
                className='form-control mb-3'
                type="date"
                name='fechaFundacion'
                value={ fechaFundacion }
                onChange={ handleInputChange }
                 />
            {
                modEdicion && 
                (   <>  
                        <p className='text-center'>¿Deseas conservar la imagen?</p>
                        <div className='d-flex justify-content-center gap-3'>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='no' onChange={ handleInputChange }/>
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                No
                              </label>
                            </div>
                            <div className="form-check mb-2">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value='si' defaultChecked onChange={ handleInputChange }/>
                              <label className="form-check-label " htmlFor="flexRadioDefault2"   >
                                Sí
                              </label>
                            </div>
                        </div> 
                    </>)
            }
            <div className='d-flex justify-content-evenly gap-3 align-items-center'>
                <button className={`btn btn-outline-${ modEdicion ? 'warning' : 'primary' }`} type='submit' disabled={ loading }>
                    { modEdicion ? 'Actualizar' : 'Agregar'}
                </button>
                <button onClick={ cancelarEdicion } type='button' className={`btn btn-outline-${ modEdicion ? 'warning' : 'primary' }`} disabled={ loading }>
                    { modEdicion ? 'Cancelar' : 'Limpiar'}
                </button>
            </div>
        </form>
  )
}
