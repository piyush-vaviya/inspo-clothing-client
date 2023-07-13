import { useEffect } from "react";
import { useState } from "react";
import CollectionItem from "../components/CollectionItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AllCollection() {
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const showProduct = async () => {
      setLoading(true);

      const product = await fetch("http://localhost:8080/shop");
      const response = await product.json();
      setFilterData(response.data);
      await new Promise((resolve) => setTimeout(() => resolve(), 1000));
      setLoading(false);
    };

    showProduct();
  }, []);

  const hat = filterData.filter((item) => item.category === "hat");
  const sneaker = filterData.filter((item) => item.category === "sneaker");
  const jacket = filterData.filter((item) => item.category === "jacket");
  const woman = filterData.filter((item) => item.category === "women");
  const men = filterData.filter((item) => item.category === "men");

  return (
    <div className="all-collection">
      <div className="product-collection">
        <h2 className="collection-heading">hats</h2>
        <div className="collection-container">
          {hat.map((item, i) =>
            i < 4 ? (
              loading ? (
                <Skeleton key={i} height={280} />
              ) : (
                <CollectionItem key={i} item={item} />
              )
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="product-collection">
        <h2 className="collection-heading">sneakers</h2>
        <div className="collection-container">
          {sneaker.map((item, i) =>
            i < 4 ? (
              loading ? (
                <Skeleton key={i} height={280} />
              ) : (
                <CollectionItem key={i} item={item} />
              )
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="product-collection">
        <h2 className="collection-heading">jackets</h2>
        <div className="collection-container">
          {jacket.map((item, i) =>
            i < 4 ? (
              loading ? (
                <Skeleton key={i} height={280} />
              ) : (
                <CollectionItem key={i} item={item} />
              )
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="product-collection">
        <h2 className="collection-heading">woman</h2>
        <div className="collection-container">
          {woman.map((item, i) =>
            i < 4 ? (
              loading ? (
                <Skeleton key={i} height={280} />
              ) : (
                <CollectionItem key={i} item={item} />
              )
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="product-collection">
        <h2 className="collection-heading">mens</h2>
        <div className="collection-container">
          {men.map((item, i) =>
            i < 4 ? (
              loading ? (
                <Skeleton key={i} height={280} />
              ) : (
                <CollectionItem key={i} item={item} />
              )
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}
