import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const ArtWall = () => {
  return (
    <div className="app-box">
      <NavBar />
      <ItemListContainer />
    </div>
  );
};

export default ArtWall;
