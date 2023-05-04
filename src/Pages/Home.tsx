import NavBar from "../components/NavBar";
<link
  rel="stylesheet"
  href="https://unpkg.com/blocks.css/dist/blocks.min.css"
/>;
import mangoImage from "./images/shardar-tarikul-islam-2vq33LK8bZA-unsplash.jpg";
import mangoImage2 from "./images/sam-hojati-lw8GflbJwLc-unsplash.jpg";
import mangoImage3 from "./images/heather-gill-ICVexvZjuC0-unsplash.jpg";
import ColorGradientBackground from "../components/ColorGradientBackground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Color from "../components/ColorScreen";
import { red } from "@nextui-org/react";

export default function Home() {
  document.body.style.background = "#30352B";

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <h2 className="centerText mangoText"> About us: </h2>
      </div>
      <div>
        <p className="mangoText">
          Introducing Mango – the ultimate app for mango lovers! Discover a
          world of delicious and healthy mango recipes, from sweet treats to
          savory dishes and refreshing drinks. With easy-to-follow recipes and
          fresh ingredients, Mango makes healthy eating enjoyable and fun.
          Download now and start exploring the amazing world of mango recipes!
        </p>
      </div>

      <div className="d-flex flex-row justify-content-between">
        <div className="col-lg-3">
          <div className="card text-white bg-dark mb-3">
            <img
              className="img-responsive"
              src={mangoImage}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-dark mb-3">
            <img
              className="card-img-top"
              src={mangoImage2}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-dark mb-3">
            <img
              className="card-img-top"
              src={mangoImage3}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
