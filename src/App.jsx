import NavigatorBar from "../components/NavigationBar";
import CategoriesPlaces from "../pages/CategoriesPlaces";
import FeaturedPlaces from "../pages/FeaturedPlaces";
import Footer from "../components/Footer";
import SearchPlaces from "../components/SearchPlaces";
import "../components/GlobalStyles.css";
import "../components/HeaderStyle.css";
import "../components/MenuStyle.css";

function App() {
  return (
    <main className="pading-main">
        <header>
           <NavigatorBar />
        </header>
        <body>
          <section className="menu-information-app">
          <CategoriesPlaces />
          <FeaturedPlaces />
          </section>
        </body>
        <footer className="footer">
          <Footer />
        </footer>  
    </main>
  );
}
export default App;
