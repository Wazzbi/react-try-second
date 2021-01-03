// Stateless Functional Component
//! could be imported template by *sfc* by using extension Simple React Snippets
// props MUST be passed as parameter and then delete THIS reference for props in return fragment
// as last step i did deconstuction of props parameter as pass particular var
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{' '}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
