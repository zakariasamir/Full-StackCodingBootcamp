import "./App.css";
import { ErrorBoundary } from "./ErrorBoundary";
import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./PostList";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

function Home() {
  return <h2>Home</h2>;
}
function Profile() {
  return <h2>Profile</h2>;
}
function Shop() {
  throw new Error("Shop crashed!");
}

function App() {
  const handleClick = async () => {
    const url = "https://webhook.site/efcf2abd-0cdb-445d-8865-e0b82834652e"; // Replace with your actual unique URL

    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error sending to webhook:", error);
    }
  };

  return (
    <>
      <nav className="nav nav-pills">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
        <NavLink className="nav-link" to="/shop">
          Shop
        </NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <Profile />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <Shop />
            </ErrorBoundary>
          }
        />
      </Routes>
      <button className="btn btn-primary" onClick={handleClick}>
        Send Data to Webhook
      </button>
      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />
    </>
  );
}

export default App;
