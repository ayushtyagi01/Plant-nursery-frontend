import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../UserCart.css";

const UserCart = ({ cartItemCount, setCartItemCount, onClose }) => {
  const [cartItemsData, setCartItemsData] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData.id;

  const [deliveryMethod, setDeliveryMethod] = useState("home_delivery");
  const [address, setAddress] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/customer/getFromCart/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          setCartItemsData(data);
        } else {
          console.error("Failed to fetch cart items.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchCartItems();
  }, [cartItemCount]);

  console.log("from cart------->", cartItemsData);

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/customer/removeFromCart/${userId}/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Update cart items data and perform any necessary actions
        const updatedCartItems = cartItemsData.filter(
          (item) => item.product.id !== productId
        );
        setCartItemsData(updatedCartItems);
        setCartItemCount((prevCount) => prevCount - 1);

        toast.info("🪴Item removed from cart!");
      } else {
        console.error("Failed to remove item from cart.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const orderData = cartItemsData.map((item) => ({
        user: { id: userId },
        product: { id: item.product.id },
        quantity: item.quantity,
        type:
          deliveryMethod === "home_delivery" ? "homeDelivery" : "storePickup",
        orderStatus: 0, 
        dateAndTime: pickupTime,
        address: address,
      }));

      const response = await fetch("http://localhost:8080/customer/addOrders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Clear cart or perform other actions upon successful order placement
        const cartDeleteResponse = await fetch(
          `http://localhost:8080/customer/deleteCart/${userId}`,
          {
            method: "DELETE",
          }
        );

        if (!cartDeleteResponse.ok) {
          console.error("Failed to clear cart items.");
        }

        const updatedCartItemsData = [];
        setCartItemsData(updatedCartItemsData);

        toast.success("🪴Order placed successfully!");
      } else {
        console.error("Failed to place order.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <div className="user-cart-container open">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <span className="close-icon" onClick={onClose}>
            ×
          </span>
        </div>
        {cartItemsData.length === 0 ? (
          <div className="cart-empty-message">Your cart is empty!</div>
        ) : (
          <div className="cart-items">
            {cartItemsData.map((item) => (
              <div key={item.product.id} className="cart-item">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.productName}
                  className="product-image"
                />
                <div className="product-details">
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "100%" }}>
                      <h3>{item.product.productName}</h3>
                    </div>
                    <div
                      style={{ justifyContent: "flex-end", cursor: "pointer" }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                        width={20}
                        onClick={() => handleRemoveFromCart(item.product.id)}
                      />
                    </div>
                  </div>
                  <p>Price: ₹{item.product.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}

            <div className="delivery-options">
              <h3 style={{ fontWeight: "bold" }}>
                Choose your Delivery Method:
              </h3>
              <div className="radio-options">
                <label>
                  <input
                    type="radio"
                    value="home_delivery"
                    checked={deliveryMethod === "home_delivery"}
                    onChange={() => setDeliveryMethod("home_delivery")}
                  />
                  Home Delivery
                </label>
                <label>
                  <input
                    type="radio"
                    value="in_store_pickup"
                    checked={deliveryMethod === "in_store_pickup"}
                    onChange={() => setDeliveryMethod("in_store_pickup")}
                  />
                  In-Store Pickup
                </label>
              </div>
              {deliveryMethod === "home_delivery" && (
                <div className="address-input">
                  <label>Delivery Address:</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={4} // Adjust the number of rows as needed
                    placeholder="Enter your delivery address..."
                  />
                </div>
              )}
              {deliveryMethod === "in_store_pickup" && (
                <div className="pickup-time">
                  <label>Pickup Time:</label>
                  <input
                    type="datetime-local"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="order-button-container">
              <button className="place-order-button" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCart;
