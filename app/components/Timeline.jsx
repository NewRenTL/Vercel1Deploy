
import TimelineForm from './TimelineForm'

const Timeline = () => {

  const proyects = [
    {
      id: '1',
      year: '2023',
      name: 'Proyecto con Python',
      description: 'Se desarrollo un proyecto con el lenguaje de programacion Python para ....'
    },
    {
      id: '2',
      year: '2024',
      name: 'Proyecto con Java',
      description: 'Se desarrollo un proyecto con el lenguaje de programacion Java para SDASD....'
    },
    {
      id: '3',
      year: '2025',
      name: 'Proyecto con JavaScript',
      description: 'Se desarrollo un proyecto con el lenguaje de programacion JavaScript para ....'
    },
    {
      id: '4',
      year: '2026',
      name: 'Proyecto con React',
      description: 'Se desarrollo un proyecto con el lenguaje de programacion JavaScript para ....'
    },
    {
      id: '5',
      year: '2027',
      name: 'Proyecto con Java 17',
      description: 'Se desarrollo un proyecto con el lenguaje de programacion JavaScript para ....'
    }
      
  ];

  return (
    <>
      <TimelineForm 
        proyects={proyects}
      />
    </>
  )
}

export default Timeline