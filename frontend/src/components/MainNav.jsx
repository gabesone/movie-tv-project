import ButtonNav from "./ButtonNav";

function MainNav() {
  return (
    <nav className="bg-black text-white">
      <ul>
        {/* Home */}
        <ButtonNav path="/">
          <p>Home</p>
        </ButtonNav>

        {/* Movies */}
        <ButtonNav path="/movie">
          <p>Movie</p>
        </ButtonNav>

        {/* TV Shows */}
        <ButtonNav path="/tv">
          <p>TV</p>
        </ButtonNav>

        {/* Search */}
        <p>Search</p>
      </ul>
    </nav>
  );
}

export default MainNav;
