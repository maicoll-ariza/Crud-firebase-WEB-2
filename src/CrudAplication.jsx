import React, { useState } from 'react'
import { Formulario } from './components/Formulario'

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

  return (
    <div>
        <Formulario 
            initialForm={ initialForm } />
    </div>
  )
}
