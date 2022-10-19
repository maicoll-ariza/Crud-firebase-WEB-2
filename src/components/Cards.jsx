import React from 'react'

export const Cards = ({ equipo }) => {

    const { nombreEquipo, nombreEstadio, nombreTecnico, nombreCapitan, canTitulos, liga, fechaFundacion, img } = equipo

  return (
    <div>
        <div className="card">
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
              <button>
                Eliminar
              </button>
              <button>
                Editar
              </button>
            </div>
        </div>
    </div>
  )
}
