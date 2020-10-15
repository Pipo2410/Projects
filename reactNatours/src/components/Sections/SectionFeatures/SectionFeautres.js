import React, { useState, useEffect } from "react";
import Feature from "./Feature/Feature";

const Features = (props) => {
  const [features, setFeatures] = useState({
    items: [],
  });

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    // fetch("http://www.mocky.io/v2/5e5592c431000010fdeb392f")
    fetch("http://127.0.0.1:8000/features")
      .then((results) => results.json())
      .then((results) =>
        setFeatures({
          items: results,
        })
      );
  }

  return (
    <section className="section-features">
      <div className="row">
        {features.items.map((item, index, arr) => {
          let cols = null;

          if (arr.length === 4) {
            cols = "col-1-of-4";
          } else if (arr.length === 3) {
            cols = "col-1-of-3";
          } else if (arr.length === 2) {
            cols = "col-1-of-2";
          }
          return (
            <div className={cols} key={item.id}>
              <Feature
                title={item.title}
                description={item.description}
                clicked={getItems}
                key={item.id}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
