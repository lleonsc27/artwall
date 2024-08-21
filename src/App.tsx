import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const ArtWall = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Olá!" />
    </div>
  );
};

export default ArtWall;
