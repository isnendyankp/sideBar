import React from 'react'
import { useGlobalContext } from './context'

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <div>Home</div>
  )
}

export default Home

// Progress:
// 1. Create Home component base
// 2. create call useGlobalContext function and pass in destructured values of openSidebar & openModal
// 3. import useGlobalContext from context.js