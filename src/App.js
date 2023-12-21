import React from "react";
import "./App.css";
import Course from "./Course";
import cardsData from "./Data";

function App() {
  return (
    <div className="flex gap-3 justify-center py-3">
      {cardsData.map((item) => (
        <Course
          key={item.id}
          picture={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;
