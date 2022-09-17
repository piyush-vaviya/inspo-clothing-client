import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions";
import "../style/components/collectionItem.css";

export default function CollectionItem({ item, loading }) {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  return (
    <div className="product">
      {loading ? (
        <Skeleton height={285} />
      ) : (
        <>
          <div className="collection-item">
            <div
              className="item-image"
              style={{
                backgroundImage: `url(${item.imageURL})`,
              }}
            ></div>
            <button className="addToCart-btn" onClick={() => addProduct(item)}>
              add to cart
            </button>
          </div>
          <div className="product-details">
            <div>{item.productName}</div>
            <span>${item.price}</span>
          </div>
        </>
      )}
    </div>
  );
}
