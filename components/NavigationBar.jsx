import SearchPlaces from "../components/SearchPlaces";
function NavigatorBar() {
  return (
    <section className="navigator-bar">
      <h1> TurriPlaces </h1>
    <section className=" navigator-bar-nav">
      <nav>
        <a href="Home"> Home </a>
        <a href="About">About</a>
      </nav>     
    </section>  
    <section> <SearchPlaces></SearchPlaces></section>
    <section className="navigator-bar-icono-login">
        <button className="navigator-bar-button-love"> Love</button>
        <button className="navigator-bar-button-account">Account</button>
    </section>
    </section>
  );
}
export default NavigatorBar;
