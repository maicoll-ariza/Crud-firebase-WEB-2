import React, { useEffect, useRef, useState } from 'react'
import { Cards } from './components/Cards'
import { Formulario } from './components/Formulario'
import { startDeleting, startLoadEquipos, startSetNewEquipo, startUpdatingEquipo } from './firebase/CrudFirebase'
import { getImage } from './helpers/getImage'

const initialValue = {
    nombreEquipo: '',
    nombreEstadio: '',
    nombreTecnico: '',
    nombreCapitan: '',
    canTitulos: 0,
    liga: '',
    fechaFundacion:''
}
export const CrudAplication = () => {
    const inputRef = useRef()
    const [equipos, setEquipos] = useState([])
    const [initialForm, setInitialForm] = useState( initialValue )
    const [modEdicion, setModEdicion] = useState( false )
    const [error, setError] = useState( false )
    const [loading, setLoading] = useState( false )

    const cargarEquipos = async () => {
        const teams = await startLoadEquipos()
        setEquipos( teams )
    }

    useEffect(() => {
        cargarEquipos()
    }, [])
    
    
    
    const SetNewEquipo = async ( newEquipo ) => {
        setLoading( true )
        const url = await getImage()
        newEquipo.img = url
        delete newEquipo.id
        console.log('1 '+newEquipo.id + 'log en local 111')
        const id = await startSetNewEquipo( newEquipo )
        console.log('2 '+newEquipo.id + 'log en local 222')
        newEquipo.id = id
        console.log('3 '+newEquipo.id + 'log en local 333')
        setEquipos([
            ...equipos,
            newEquipo
        ])
        setLoading( false )
        setModEdicion( false )
    }

    const deleteEquipo = async ( id ) => {
        setLoading( true )
        const equiposUpdate = equipos.filter( equipo => (
            equipo.id !== id
        ))
        await startDeleting( id )
        setEquipos( equiposUpdate )
        setLoading( false )
    }

    const updateEquipo = async ( equipoEditado ) => {
        setLoading( true )
        if ( equipoEditado.flexRadioDefault === 'no' ) {
            const url = await getImage()
            equipoEditado.img = url
        }
        console.log(equipoEditado)
        await startUpdatingEquipo( equipoEditado )
        const equipoActualizado = equipos.map( equipo => {
            if ( equipo.id === equipoEditado.id ) {
                return equipoEditado
            }
            return equipo
        })
        setEquipos( equipoActualizado )
        setLoading( false )
        setModEdicion( false )
        alert('Actualizado con éxito')
    }

    const setModoEdición = ( equipo ) => {
        inputRef.current.focus()
        setInitialForm( equipo )
        setModEdicion( true )
        setError( false )
    }

  return (
    <div >
        <h1 className='mt-3 mb-4 text-center'>Base de Datos sobre equipos de fútbol</h1>
        <div className='d-flex justify-content-center mb-4'>
            <Formulario 
                setError={ setError }
                error={ error }
                inputRef={ inputRef }
                loading={ loading }
                setModEdicion={ setModEdicion }
                initialForm={ initialForm }
                modEdicion={ modEdicion }
                SetNewEquipo={ SetNewEquipo }
                updateEquipo={ updateEquipo } />
        </div>
        <hr />
        <div className='d-flex justify-content-evenly flex-wrap gap-3 my-4 p-4'>
            {
                equipos.map( equipo => (
                    <Cards key={ equipo.id } deleteEquipo={ deleteEquipo } loading={ loading } equipo={ equipo } activeModEdit={ setModoEdición } />
                ))
            }
        </div>
    </div>
  )
}
