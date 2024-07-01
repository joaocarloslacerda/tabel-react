import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Icource {
  name: string,
  description: string,
  instructor: string,
  id: number
}

const cources: Icource[] = [
  {
    name: 'React JS',
    description: 'Curso de React JS com TypeScript',
    instructor: 'Luciel Santos',
    id: 1
  },
  {
    name: 'JS e CSS Pro',
    description: 'Curso de JS e CSS Pro JS com Typescript',
    instructor: 'Sabino',
    id: 2
  },
  {
    name: 'TypeScript', 
    description: 'Utilizando o TypeScript',
    instructor: 'Luciel Santos',
    id: 3
  },
  {
    name: 'Node', 
    description: 'Node JS',
    instructor: 'Cicero',
    id: 4
  }
]

function App() {
  return (
    <div>
      <h1>Tabela de Cursos</h1>

      <table className='tabela'>
        <thead>
          <tr className='cabecalho-table'>
            <th>Name</th>
            <th>Description</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          {cources.map((cource) => (
           <tr>
            <td>{cource.name}</td>
            <td>{cource.description}</td>
            <td>{cource.instructor}</td>
           </tr> 
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
