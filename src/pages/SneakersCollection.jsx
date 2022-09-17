import { useState, useEffect } from "react";
import CollectionItem from "../components/CollectionItem";

export default function JacketCollection() {
  const [sneakersCollection, setSneakersCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    setLoading(true);
    const sneakerCollection = await fetch(`http://localhost:8080/shop/sneaker`);
    const response = await sneakerCollection.json();
    setSneakersCollection(response.data);
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    setLoading(false);
  };
  return (
    <div className="product-collection">
      <h2>Sneakers</h2>
      <div className="collection-container">
        {sneakersCollection.map((item, i) => (
          <CollectionItem key={i} item={item} loading={loading} />
        ))}
      </div>
    </div>
  );
}
