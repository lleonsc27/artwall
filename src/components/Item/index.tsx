import "./styles.css";
import ItemCount from "../ItemCount";
import UrbanSymphony from "../../images/UrbanSymphony.webp";

const Item = () => {
  return (
    <div className="item-box">
      <div className="item">
        <div className="item-img">
          <img src={UrbanSymphony} alt="" />
        </div>
        <div className="item-name">Urban Symphony</div>
        <div className="item-price-actions">
          <div className="item-price">R$79,90</div>
          <div className="item-actions">
            <ItemCount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
