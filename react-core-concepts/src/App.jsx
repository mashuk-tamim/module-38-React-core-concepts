import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel'];
  const singers = [
    { id: 1, name: 'Dr. Mahfuj', age: 65 },
    { id: 2, name: 'Eva Rahman', age: 45 },
    { id: 3, name: 'Pritom', age: 35 }
  ]
  return (
    <>
      <h1>Vite + React</h1>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name={"Bapparaj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo task="learn REACT" isDone={true}></Todo>
      <Todo task="Explore core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Person name="Mashuk" age="26"></Person>
      <Person  name="Tamim"></Person>
      <Person></Person>
      <Student name="Mashuk" roll="1603113"></Student>
      <Student roll="1603120"></Student>
      <Student name="Sajjad"></Student>
      <Developer></Developer> */}
    </>
  )
}

function Person({ name = 'Mr. X', age = '00' }) {
  return <h3>I am {name} with age {age}</h3>
}
function Student({ name = 'unknown', roll = '1603xxx' }) {
  // const student = {
  //   name: 'Mashuk',
  //   roll: 1603113
  // }
  return (
    <div className='student'>
      <h3>Student:</h3>
      <p>name: {name}</p>
      <p>roll: {roll}</p>
    </div>
  )
}

function Developer() {
  const developer = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developer}>
      <h5>Developer</h5>
      <p>Coding</p>
    </div>
  )
}
export default App
