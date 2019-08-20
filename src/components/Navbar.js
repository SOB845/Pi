import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';


 class Navbar extends Component {
  render() {
    return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Pi.ai</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        
        <NavLink className="nav-link" to="./login">Login</NavLink>
        {/*<a className="nav-link">Login<span class="sr-only">(current)</span></a>*/}

      </li>

      <li class="nav-item">
      <NavLink className="nav-link" to="./Signup">Sign Up</NavLink>
      {/*<a className="nav-link">Sign Up</a>*/}
      </li>

      <li class="nav-pub">
      <NavLink className="nav-link" to="./Publications">Recent papers</NavLink>
      {/*<a className="nav-link">Sign Up</a>*/}
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>

          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item">Partnership</a>
            <a class="dropdown-item">Contact</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item">Tech we use</a>
          </div>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search Content..." aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    
    )
  }
}
export default Navbar;
/*Can also be created typing 'rcc'*/