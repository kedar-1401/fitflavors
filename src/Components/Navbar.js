import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark font-white bg-success fs-5">
    <Link className="navbar-brand" to="#">fitflavours</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>
        
        </ul>
        <form className="form-inline my-2 my-lg-0">
        <button className="btn btn-outline-light my-2 my-sm-0 mx-5 bg-light text-dark"   ><Link className="nav-link" to='/login'>Login</Link></button>

        </form>
  </div>
</nav>
        </>
  )
}
