import "./App.css";
import Aula05 from "./components/Aula05";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const ArtWall = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <Aula05 />
    </div>
  );
};

export default ArtWall;
