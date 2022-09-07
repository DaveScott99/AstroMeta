import SalesCard from "./components/SalesCard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="astrometa-sales">
          <div className="astrometa-container">
              <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
