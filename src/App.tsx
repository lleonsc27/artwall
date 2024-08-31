import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const ArtWall = () => {
  return (
    <div className="app-box">
      <NavBar />
      <ItemListContainer />
    </div>
  );
};

export default ArtWall;
