import { useState, useEffect } from "react";
import CollectionItem from "../components/CollectionItem";

export default function JacketCollection() {
  const [jacketsCollection, setJacketsCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    setLoading(true);
    const jacketCollection = await fetch(`http://localhost:8080/shop/jacket`);
    const response = await jacketCollection.json();
    setJacketsCollection(response.data);
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    setLoading(false);
  };
  return (
    <div className="product-collection">
      <h2>Jackets</h2>
      <div className="collection-container">
        {jacketsCollection.map((item, i) => (
          <CollectionItem key={i} item={item} loading={loading} />
        ))}
      </div>
    </div>
  );
}
