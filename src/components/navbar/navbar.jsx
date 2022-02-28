import "./navbar.css";
import img from "./logo-default-group-en.svg";
function Navbar({ navbarStuff }) {
  return (
    <nav>
      <img src={img} className="image" />
      <ul className="list">
        {navbarStuff.map((x) =>
          x.dropdown == null ? (
            <li className="items">{x.item}</li>
          ) : (
            <li className="items">
              <div className="dropdown">
                <button className="dropbtn">
                  {x.item}
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  {x.dropdown.map((x) => (
                    <a href="https://fbox.to/?f">{x}</a>
                  ))}
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
export default Navbar;

{
}
