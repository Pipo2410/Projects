import React from "react";
import Button from "../../Buttons/Button";

const About = props => {

  return (
    <section className="section-about">
        <div className="u-text-center u-margin-bottom-big">
            <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-tertiary">You're going to fall in love with the nature</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde vitae reiciendis vel velit animi impedit! Iure, velit vel harum labore in voluptatibus veritatis amet quaerat mollitia. Ab, perspiciatis expedita?</p>
                <h3 className="heading-tertiary">Live adventures like you have never before</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde vitae reiciendis vel velit animi impedit!</p>
                <Button type="text" />
            </div>
            <div className="col-1-of-2">
                <div className="composition">
                    <img src={require('../../../img/nat-1-large.jpg')} alt="halo" className="composition__photo composition__photo--p1" />
                    <img src={require('../../../img/nat-2-large.jpg')} alt="halo" className="composition__photo composition__photo--p2" />
                    <img src={require('../../../img/nat-3-large.jpg')} alt="halo" className="composition__photo composition__photo--p3" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
