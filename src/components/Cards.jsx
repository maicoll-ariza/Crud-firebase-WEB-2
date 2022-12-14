import React from 'react'

export const Cards = ({ equipo, deleteEquipo, activeModEdit }) => {

    const { nombreEquipo, nombreEstadio, nombreTecnico, nombreCapitan, canTitulos, liga, fechaFundacion, img, id } = equipo

  return (
    <div className='col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 shadow mt-3'>
        <div className="card ">
            <img src={ img } className="card-img-top" alt="Imagen aleatoria"/>
            <div className="card-body">
              <h5 className="card-title">{ nombreEquipo }</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Estadio: { nombreEstadio }</li>
              <li className="list-group-item">Técnico: { nombreTecnico }</li>
              <li className="list-group-item">Capitán: { nombreCapitan }</li>
              <li className="list-group-item">Campeonatos: { canTitulos }</li>
              <li className="list-group-item">Liga: { liga }</li>
              <li className="list-group-item">Fecha de fundación: { fechaFundacion }</li>
            </ul>
            <div className="card-body d-flex justify-content-evenly">
              <button 
                className='btn btn-outline-danger'
                onClick={ ()=> deleteEquipo( id ) }>
                Eliminar
              </button>
              <button 
                className='btn btn-outline-warning'
                onClick={ ()=> activeModEdit( equipo ) }>
                Editar
              </button>
            </div>
        </div>
    </div>
  )
}
