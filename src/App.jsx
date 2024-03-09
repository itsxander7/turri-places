import NavigatorBar from "../components/NavigationBar";
import CategoriesPlaces from "../pages/CategoriesPlaces";
import FeaturedPlaces from "../pages/FeaturedPlaces";
import Footer from "../components/Footer";
import SearchPlaces from "../components/SearchPlaces";
import "../components/GlobalStyles.css";
import "../components/HeaderStyle.css";

function App() {
  return (
    <>
      <main>
        <section className="header-app">
             <section>
                <NavigatorBar />
              </section>
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
