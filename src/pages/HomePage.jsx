import { useNavigate } from "react-router-dom";
import "../style/pages/homepage.css";

export default function Homepage() {
  let navigate = useNavigate();

  const showHatsCollection = () => {
    navigate("/shop/hats");
  };
  const showJacketsCollection = () => {
    navigate("/shop/jackets");
  };
  const showSneakersCollection = () => {
    navigate("/shop/sneakers");
  };
  const showWomansCollection = () => {
    navigate("/shop/womans");
  };
  const showMensCollection = () => {
    navigate("/shop/mens");
  };

  return (
    <div className="homepage">
      <div className="collection-items">
        <div className="collection-type">
          <div
            className="image-container"
            style={{
              backgroundImage: `url("https://i.ibb.co/cvpntL1/hats.png")`,
            }}
          ></div>
          <div className="show-item" onClick={showHatsCollection}>
            <h1>hats</h1>
            <span>shop now</span>
          </div>
        </div>
        <div className="collection-type">
          <div
            className="image-container"
            style={{
              backgroundImage: `url("https://i.ibb.co/px2tCc3/jackets.png")`,
            }}
          ></div>
          <div className="show-item" onClick={showJacketsCollection}>
            <h1>jackets</h1>
            <span>shop now</span>
          </div>
        </div>
        <div className="collection-type">
          <div
            className="image-container"
            style={{
              backgroundImage: `url("https://i.ibb.co/0jqHpnp/sneakers.png")`,
            }}
          ></div>
          <div className="show-item" onClick={showSneakersCollection}>
            {" "}
            <h1>sneakers</h1>
            <span>shop now</span>
          </div>
        </div>
        <div className="collection-type">
          <div
            className="large image-container"
            style={{
              backgroundImage: `url("https://i.ibb.co/GCCdy8t/womens.png")`,
            }}
          ></div>
          <div className="show-item" onClick={showWomansCollection}>
            <h1>womans</h1>
            <span>view collection</span>
          </div>
        </div>
        <div className="collection-type">
          <div
            className="large image-container"
            style={{
              backgroundImage: `url("https://i.ibb.co/R70vBrQ/men.png")`,
            }}
          ></div>
          <div className="show-item" onClick={showMensCollection}>
            <h1>mens</h1>
            <span>view collection</span>
          </div>
        </div>
      </div>
    </div>
  );
}
