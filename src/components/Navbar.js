import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
           <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <Link class="navbar-brand">IT VEDANT</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link"  to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/about">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/contact">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/blogs">Blogs</Link>
        </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown">Student</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/student/register">Register</Link></li>
                                    <li><Link class="dropdown-item" to="/student/delete">Delete</Link></li>
                                    <li><Link class="dropdown-item" to="/student/update">Update</Link></li>
                                    <li><Link class="dropdown-item" to="/student/view" >View</Link></li>
                                </ul>
                            </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar;