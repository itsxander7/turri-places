import NavigatorBar from "../components/NavigationBar";
import CategoriesPlaces from "../pages/CategoriesPlaces";
import FeaturedPlaces from "../pages/FeaturedPlaces";

function App() {
  return (
    <>
      <main>
        <section>
          <NavigatorBar />
        </section>
        <section>
          <CategoriesPlaces />
        </section>
        <section>
          <FeaturedPlaces />
        </section>
      </main>
    </>
  );
}
export default App;
