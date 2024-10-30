import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
      dispatch(logout());
      navigate("/login"); // Redirect to login after logout
  };
  return (
    <div><nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" to={'/home'}>Home</Link>
            <Link class="nav-link" to={'/login'}>Login</Link>
            <Link class="nav-link" to={'/users'}>Users</Link>
          </div>
          <button type="button" class="btn btn-primary"  onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav></div>
  )
}

export default Navbar