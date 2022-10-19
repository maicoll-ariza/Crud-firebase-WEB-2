import React, { useState } from 'react'
import { Cards } from './components/Cards'
import { Formulario } from './components/Formulario'
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

    
    const SetNewEquipo = async ( newEquipo ) => {
        const url = await getImage()
        newEquipo.img = url
        setEquipos([
            ...equipos,
            newEquipo
        ])
    }
  return (
    <div>
        <Formulario 
            initialForm={ initialForm }
            SetNewEquipo={ SetNewEquipo } />
        <div>
            {
                equipos.map( equipo => (
                    <Cards key={ equipo.img } equipo={ equipo } />
                ))
            }
        </div>
    </div>
  )
}
