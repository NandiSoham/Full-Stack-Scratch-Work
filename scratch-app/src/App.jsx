import { useState } from "react";
import "./App.css";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  const [hasLiked, setHasLiked] = useState();

  return (
    <div className="card-container">
      <Card title="Harry Potter" />
      <Card title="Dune" />
      <Card title="Inception" />
    </div>
  );
};

export default App;
