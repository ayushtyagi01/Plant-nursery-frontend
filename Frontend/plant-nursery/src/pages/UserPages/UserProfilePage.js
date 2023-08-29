import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import "../../UserProfilePage.css";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("profile");
  const [orders, setOrders] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(
          `http://localhost:8080/customer/getOrders/${userData.id}`
        );
        if (response.ok) {
          const ordersData = await response.json();
          setOrders(ordersData);
        } else {
          console.error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    if (userData) {
      fetchOrders();
    }
  }, [userData]);

  const renderProfileContent = () => {
    return (
      <div className="profile-container">
        <div>
          <h1
            style={{
              fontSize: "1.8em",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Profile
          </h1>
          <div className="profile-table">
            <div className="helo-profile">
              <img
                src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/cdn_shopify_com-profile-pic.png"
                width={60}
                alt="Profile Avatar"
                className="profile-avatar"
              />

              <p>Hello {userData.userName} !</p>
            </div>
            <div className="profile-details">
              <div className="details-container">
                <p>Name</p>
                <h2>{userData.userName}</h2>
              </div>
              <div className="details-container">
                <p>Email</p>
                <h2>{userData.email}</h2>
              </div>
              <div className="details-container">
                <p>Role</p>
                <h2>You are a {userData.role}.</h2>
              </div>
            </div>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  };

  const renderOrdersContent = () => {
    return (
      <div>
        <h1
          style={{
            fontSize: "1.8em",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Your Orders
        </h1>
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-image">
                <img src={order.product.imageUrl} alt="Product" />
              </div>
              <div className="order-details">
                <p className="order-product-name">
                  {order.product.productName}
                </p>
                <div style={{ display: "flex", gap: "60px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap:'5px' }}>
                    <p className="order-label">Price: </p>
                    <span className="order-value">₹{order.product.price}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap:'5px' }}>
                    <p className="order-label">Quantity: </p>
                    <span className="order-value">{order.quantity}</span>
                  </div>
                </div>
                <p className="order-label">Type of Delivery: </p>
                <span className="order-value">{order.type}</span>
                <p className="order-label">Order Status: </p>
                <span className="order-value">{order.orderStatus} . . .</span>
                {order.address && (
                  <>
                    <p className="order-label">Address: </p>
                    <span className="order-value">{order.address}</span>
                  </>
                )}
                {order.dateAndTime && (
                  <>
                    <p className="order-label">Date and Time: </p>
                    <span className="order-value">{order.dateAndTime}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderQueriesContent = () => {
    return (
      <div className="queries-container">
        <h1
          style={{
            fontSize: "1.8em",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Your Queries
        </h1>
      </div>
    );
  };

  return (
    <div>
      <div className="page-container">
        <div className="side-navbar">
          <table>
            <tbody>
              <tr>
                <td
                  className={selectedTab === "profile" ? "selected" : ""}
                  onClick={() => setSelectedTab("profile")}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2105/2105556.png"
                      style={{ width: "40px" }}
                    />
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      Profile
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  className={selectedTab === "orders" ? "selected" : ""}
                  onClick={() => setSelectedTab("orders")}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/9280/9280764.png"
                      style={{ width: "40px" }}
                    />
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      Your Orders
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  className={selectedTab === "queries" ? "selected" : ""}
                  onClick={() => setSelectedTab("queries")}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/8090/8090725.png"
                      style={{ width: "40px" }}
                    />
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      Your Queries
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          {selectedTab === "profile" ? renderProfileContent() : null}
          {selectedTab === "orders" ? renderOrdersContent() : null}
          {selectedTab === "queries" ? renderQueriesContent() : null}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
