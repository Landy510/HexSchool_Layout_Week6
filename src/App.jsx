import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Header from './layout/header/Header';
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="container-xxl px-3">
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla laboriosam odit blanditiis praesentium molestiae quas dignissimos, aliquid corporis consequuntur necessitatibus voluptatibus rerum natus sapiente facilis deleniti quasi tempore sed voluptas reiciendis explicabo. Saepe voluptas, quos expedita explicabo eum debitis temporibus ut nemo vitae beatae quasi dignissimos architecto? Sequi commodi, delectus architecto debitis exercitationem fugiat dolor ipsa fuga natus est deleniti dolores! Nulla, sint non? Nihil consequuntur impedit, possimus natus veritatis deleniti aperiam nobis maiores dolorum incidunt facere unde eum quidem error dolor excepturi velit ut tenetur expedita blanditiis ipsum? Quos laborum eius neque excepturi? Blanditiis quidem unde voluptatum et.</p>
        <button disabled>Click me</button>
        <input type="text" placeholder='hello' />
      </main>
    </>
  )
}

export default App
