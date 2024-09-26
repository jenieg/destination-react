import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import locationData from "./assets/locationData";

function App() {
    const locations = locationData.map((location) => {
        return <Card key={location.id} {...location} />;
    });

    return (
        <>
            <Header />
            <section className="card-list">
              {locations}
            </section>
            <Footer />
        </>
    );
}

export default App;
