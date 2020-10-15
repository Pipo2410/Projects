import React, { useState, useEffect } from "react";
import Tour from "./Tour/Tour";
import Button from "../../Buttons/Button";

const Tours = (props) => {
  const [tours, setTours] = useState({
    items: [],
  });

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    // fetch("http://www.mocky.io/v2/5e559f4131000010fdeb3951")
    fetch("http://127.0.0.1:8000/tours")
      .then((results) => results.json())
      .then((results) =>
        setTours({
          items: results,
          cols: results.length,
        })
      );
  }

  return (
    <section className="section-tours">
      <div className="u-text-center u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        {tours.items.map((item, index, arr) => {
          let cols = null;
          if (arr.length === 2) {
            cols = "col-1-of-2";
          } else if (arr.length === 3) {
            cols = "col-1-of-3";
          } else if (arr.length === 4) {
            cols = "col-1-of-4";
          }
          return (
            <div className={cols} key={item.id}>
              <Tour
                id={item.id}
                title={item.title}
                description={item.description}
                key={item.id}
                price={item.price}
              ></Tour>
            </div>
          );
        })}
      </div>
      <div className="u-text-center u-margin-top-huge">
        <Button type="green">Discover all tours</Button>
      </div>
    </section>
  );
};

export default Tours;
