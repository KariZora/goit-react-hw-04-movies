import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul style={{display:'flex', listStyle: 'none', borderBottom:'1px solid grey', paddingBottom:'20px'}}>
      <li style={{marginRight:'20px'}}>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
