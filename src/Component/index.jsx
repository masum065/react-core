import React from "react";
import SinglePrice from "./singlePrice";
import PhotoshopIcon from "./pricing-icon/photoshop.svg";
import LightroomIcon from "./pricing-icon/lightroom.svg";
import cloudIcon from "./pricing-icon/creative-cloud.svg";

class Pricing extends React.Component {
  photoshop = {
    icon: PhotoshopIcon,
    appTitle: "Photography (20GB)",
    price: "9.99",
    appDiscp:
      "Lightroom, Photoshop, Lightroom Classic, and 20GB of cloud storage (1TB available).",
  };
  lightroom = {
    icon: LightroomIcon,
    appTitle: "Photography (20GB)",
    price: "9.99",
    appDiscp:
      "Lightroom, Photoshop, Lightroom Classic, and 20GB of cloud storage (1TB available).",
  };
  cloud = {
    icon: cloudIcon,
    appTitle: "All Apps",
    price: "52.99",
    appDiscp:
      "Get all 20+ creative desktop and mobile apps including Photoshop, Illustrator, InDesign, Premiere Pro, and Acrobat.",
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <SinglePrice {...this.photoshop} />
          <SinglePrice {...this.lightroom} />
          <SinglePrice {...this.cloud} />
          <SinglePrice {...this.photoshop} />
        </div>
      </div>
    );
  }
}

export default Pricing;
