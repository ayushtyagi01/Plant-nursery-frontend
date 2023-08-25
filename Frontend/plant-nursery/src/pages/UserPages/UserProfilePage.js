import React, { useState } from "react";
import UserNavbar from "./UserNavbar";
import "../../UserProfilePage.css";

const UserProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("profile");

  const renderProfileContent = () => {
    // Your logic to fetch and display user profile details in a table format
    return (
      <div>
        <h2>User Profile</h2>
        {/* Add your user profile details table here */}
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
                    <p
                      style={{ fontWeight: "bold", fontSize: "16px" }}
                      
                    >
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
