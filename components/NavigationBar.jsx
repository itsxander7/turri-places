function NavigatorBar() {
  return (
    <header>
      <h1> TurriPlaces </h1>
      <nav>
        <a href="Home"> Home </a>
        <a href="About">About</a>
      </nav>
      <section>{/*Agregar componente Search*/}</section>
      
      <section>
        <button> Love</button>
        <button>Account</button>
      </section>
    </header>
  );
}
export default NavigatorBar;
