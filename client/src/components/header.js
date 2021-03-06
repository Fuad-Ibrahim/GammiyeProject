import "./header.css";
function Header() {
  return (
    <div className="bg-warning bg-size">
      <ul className="nav navigations">
        <li className="nav-item btn">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item dropdown btn">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Explore
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item btn">
          <a className="nav-link" href="#">
            Contact Us
          </a>
        </li>
        <li className="nav-item btn">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
