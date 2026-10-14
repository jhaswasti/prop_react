import React from "react";
import "./App.css";


const cardsData = Array.from({ length: 21 }, (_, index) => ({
  id: index + 1,
  title: `Card ${index + 1}`,
  description: `This is card ${index + 1} description`,
  image: `https://picsum.photos/seed/card${index + 1}/300/200`,
}));


function Card({ title, description, image }) {
  return (
    <div className="gradient-border-card">
      <div className="card-content">
        <div className="card-image-wrapper">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Reusable Card Component with Gradient Borders</h1>
      <div className="cards-grid">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;