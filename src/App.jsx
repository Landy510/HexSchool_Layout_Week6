import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './layout/header/Header';
import './App.scss'

function App() {

  return (
    <>
      <Header />
      <main className="container-xxl px-3 py-5">
        <Outlet />
      </main>
    </>
  )
}

export default App
