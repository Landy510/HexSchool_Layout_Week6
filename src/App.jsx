import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button as="a" variant="success">
      Button as link
    </Button>
    </>
  )
}

export default App
