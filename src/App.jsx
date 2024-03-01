import NavigatorBar from "../components/NavigationBar";
import CategoriesPlaces from "../pages/CategoriesPlaces";

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
      </main>
    </>
  );
}
export default App;
