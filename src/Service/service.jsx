import React, { useState, useEffect } from "react";
import "./service.css";

const Service = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const saveUsers = JSON.stringify(users);
    localStorage.setItem("users", saveUsers);

    async function fetchUsers() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
          signal,
        });

        if (!response.ok) {
          throw new Error("Network response not ok");
        }

        const usersData = await response.json();
        if (!signal.aborted) {
          setUsers(usersData);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(error.message);
          console.error("Fetch error:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="service-container">
      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <div className="content" key={user.name}>
              <img
                className="imageOfcontent"
                src={user.image}
                alt={user.name}
              />
            </div>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default Service;
