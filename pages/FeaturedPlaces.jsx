function FeaturedPlaces() {
  return (
    <section>
      <div>
        <img className="photo " src="/images/volcan.png" alt="Volcan" />
        <h1>Volcan Turrialba</h1>
        <h4>Lugar: Santa Cruz</h4>
        <p> Descripcion: Magestuoso lugar para camping en familia</p>
        <button>Visitar </button>
      </div>
      <div>
        <img
          className="photo "
          src="/images/restaurante.jpg"
          alt="Restaurante"
        />
        <h1>Restaurante mi pueblo</h1>
        <h4>Lugar: Sitio Mata</h4>
        <p> Descripcion: Deliciosas comidas tipicas costarricenses</p>
        <button>Visitar </button>
      </div>
      <div>
        <img className="photo " src="/images/farmacia.png" alt="Farmacia" />
        <h1>Farmacia TuSalud</h1>
        <p> Descripcion: Variedad de medicamentos que te sanan</p>
        <button>Visitar </button>
      </div>
    </section>
  );
}
export default FeaturedPlaces;
