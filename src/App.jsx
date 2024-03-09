import NavigatorBar from "../components/NavigationBar";
import CategoriesPlaces from "../pages/CategoriesPlaces";
import FeaturedPlaces from "../pages/FeaturedPlaces";
import Footer from "../components/Footer";
import SearchPlaces from "../components/SearchPlaces";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <section>
          <NavigatorBar />
        </section>
        <section>
          <SearchPlaces></SearchPlaces>
        </section>
        <section>
          <CategoriesPlaces />
        </section>
        <section>
          <FeaturedPlaces />
        </section>
        <section>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}
export default App;
