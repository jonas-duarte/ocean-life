import React, { Component } from "react";

import "./background.css";

class Background extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="sky">
          <div className="layer">
            <div className="sun-rotation-radious">
              <div className="sun"></div>
              <div className="moon">
                <div></div>
              </div>
            </div>
          </div>
          <div className="layer">
            <div className="plane-container">
              <div className="layer">
                <div className="plane"></div>
              </div>
              <div className="layer">
                <div className="plane-billboard">
                  Hello, my name is Jonas and it's my portiofolio :D<br></br>
                  Go deeper to look at my work!!!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ocean">
          <div className="layer">
            <div className="submarine"></div>
            <div className="swimming">
              <div className="jellyfish"></div>
            </div>
            <div className="swimming">
              <div className="fish1"></div>
            </div>
            <div className="fish2"></div>
            <div className="fish1"></div>
            <div className="fish4"></div>
            <div className="fish1"></div>
            <div className="fish2"></div>
            <div className="fish1"></div>
            <div className="fish4"></div>
            <div className="fish3"></div>
            <div className="fish3"></div>
            <div className="fish2"></div>
            <div className="fish4"></div>
            <div className="fish1"></div>
            <div className="fish2"></div>
            <div className="fish1"></div>
            <div className="fish4"></div>
            <div className="fish3"></div>
            <div className="fish2"></div>
            <div className="fish4"></div>
            <div className="whale"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
