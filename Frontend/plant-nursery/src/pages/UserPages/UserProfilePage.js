import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import "../../UserProfilePage.css";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("profile");

  const userData = JSON.parse(localStorage.getItem("userData"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/");
    
  };

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
          <button className="logout-button"  onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  };

  const renderOrdersContent = () => {
    // Your logic to fetch and display order details in a table format
    return (
      <div>
        <h2>Your Orders</h2>
        {/* Add your order details table here */}
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
            </tbody>
          </table>
        </div>
        <div className="content">
          {selectedTab === "profile" ? renderProfileContent() : null}
          {selectedTab === "orders" ? renderOrdersContent() : null}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
