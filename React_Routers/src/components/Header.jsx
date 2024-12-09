import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    
    <Link to="/">Home</Link><br></br>
    <Link to="/About">About</Link><br></br>
    <Link to="/login">Login</Link><br></br>
    </>
  )
}

export default Header
