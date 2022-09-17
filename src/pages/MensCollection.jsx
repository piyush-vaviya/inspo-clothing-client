import { useState, useEffect } from "react";
import CollectionItem from "../components/CollectionItem";

export default function JacketCollection() {
  const [mensCollection, setMensCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    setLoading(true);
    const menCollection = await fetch(`http://localhost:8080/shop/men`);
    const response = await menCollection.json();
    setMensCollection(response.data);
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    setLoading(false);
  };
  return (
    <div className="product-collection">
      <h2>Mens</h2>
      <div className="collection-container">
        {mensCollection.map((item, i) => (
          <CollectionItem key={i} item={item} loading={loading} />
        ))}
      </div>
    </div>
  );
}
