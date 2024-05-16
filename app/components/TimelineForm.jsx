import React from 'react'

const TimelineForm = ({proyects}) => {
  if (proyects.length === 0) {
    return (
      <section>
        <div class='timeline'>
          No hay proyectos para mostrar en la linea de tiempo
        </div>
      </section>
    )
  }

  return (
    <>
      <section>
        <section class='timeline'>
          <div class="timeline-row">
          <h2 class="title">Proyectos</h2>
            <div class="timeline-box">
              {/* Uso de la funcion map para repetir lo elementos de la linea de tiempo */}
              {proyects.map(proyect => {
                return (
                  <div class="timeline-content" key={proyect.id}>
                    <div class="content">
                      <div class="nombre-anio"> 
                        <h2>{proyect.name}</h2>
                        <h2>{proyect.year}</h2>
                      </div>
                      <p>{proyect.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default TimelineForm