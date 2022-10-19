import React, { useEffect, useState } from 'react'
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

    const [equipos, setEquipos] = useState([])
    const [initialForm, setInitialForm] = useState( initialValue )
    const [modEdicion, setModEdicion] = useState( false )
    const [loading, setLoading] = useState( false )

    const cargarEquipos = async () => {
        const teams = await startLoadEquipos()
        setEquipos( teams )
    }

    useEffect(() => {
        cargarEquipos()
    }, [])
    
    
    
    const SetNewEquipo = async ( newEquipo ) => {
        const url = await getImage()
        newEquipo.img = url
        const id = await startSetNewEquipo( newEquipo )
        newEquipo.id = id
        setEquipos([
            ...equipos,
            newEquipo
        ])
    }

    const deleteEquipo = async ( id ) => {
        const equiposUpdate = equipos.filter( equipo => (
            equipo.id !== id
        ))
        await startDeleting( id )
        setEquipos( equiposUpdate )
    }

    const updateEquipo = async ( equipoEditado ) => {
        console.log(equipoEditado)
        // await startUpdatingEquipo( equipoEditado )
        const equipoActualizado = equipos.map( equipo => {
            if ( equipo.id === equipoEditado.id ) {
                return equipoEditado
            }
            return equipo
        })
        setEquipos( equipoActualizado )
    }

    const setModoEdición = ( equipo ) => {
        setInitialForm( equipo )
        setModEdicion( true )

    }

  return (
    <div>
        <Formulario 
            initialForm={ initialForm }
            modEdicion={ modEdicion }
            SetNewEquipo={ SetNewEquipo }
            updateEquipo={ updateEquipo } />
        <div>
            {
                equipos.map( equipo => (
                    <Cards key={ equipo.id } deleteEquipo={ deleteEquipo } equipo={ equipo } activeModEdit={ setModoEdición } />
                ))
            }
        </div>
    </div>
  )
}
