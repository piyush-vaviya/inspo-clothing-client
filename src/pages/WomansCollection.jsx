import { useState, useEffect } from "react";
import CollectionItem from "../components/CollectionItem";

export default function JacketCollection() {
  const [womansCollection, setWomansCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    setLoading(true);
    const womenCollection = await fetch(`http://localhost:8080/shop/women`);
    const response = await womenCollection.json();
    setWomansCollection(response.data);
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    setLoading(false);
  };
  return (
    <div className="product-collection">
      <h2>Womans</h2>
      <div className="collection-container">
        {womansCollection.map((item, i) => (
          <CollectionItem key={i} item={item} loading={loading} />
        ))}
      </div>
    </div>
  );
}
