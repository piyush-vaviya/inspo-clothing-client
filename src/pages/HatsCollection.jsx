import { useState, useEffect } from "react";
import CollectionItem from "../components/CollectionItem";

export default function HatsCollection() {
  const [hatsCollection, setHatsCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    setLoading(true);
    const hatCollection = await fetch(`http://localhost:8080/shop/hat`);
    const response = await hatCollection.json();
    setHatsCollection(response.data);
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    setLoading(false);
  };

  return (
    <div className="product-collection">
      <h2>Hats</h2>
      <div className="collection-container">
        {hatsCollection.map((item, i) => (
          <CollectionItem key={i} item={item} loading={loading} />
        ))}
      </div>
    </div>
  );
}
