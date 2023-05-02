import React from "react";
import bgImg1 from "../images/background/bg-1.jpg";
// import bgImg2 from "../images/background/bg-3.jpg";
// import bgImg3 from "../images/background/bg-4.jpg";
import TradingText from "../../TradingText";
import movingImage from "../images/common/img1.jpg"; // Change this line

const dataSlider = [
  {
    id: 1,
    title: "Slider 1",
    desc: "Description for slider 1",
    bgImg: bgImg1,
    img: movingImage, // Make sure this line is present
    classAction: "your-class-action-1",
  },
  // {
  //   id: 2,
  //   title: "CYbox nft collectionS for everyone",
  //   desc: "Nulla ornare sagittis placerat nunc sit tempus enim. Accumsan pellentesque ipsum felis tristique at proin vel turpis.",
  //   bgImg: bgImg2,
  //   classAction: "two",
  // },
  // {
  //   id: 3,
  //   title: "CYbox nft collectionS for everyone",
  //   desc: "Nulla ornare sagittis placerat nunc sit tempus enim. Accumsan pellentesque ipsum felis tristique at proin vel turpis.",
  //   bgImg: bgImg3,
  //   classAction: "three",
  // },
  // {
  //   id: 4,
  //   title: "CYbox nft collectionS for everyone",
  //   desc: "Nulla ornare sagittis placerat nunc sit tempus enim. Accumsan pellentesque ipsum felis tristique at proin vel turpis.",
  //   bgImg: bgImg1,
  //   img: img1,
  // },
  // {
  //   id: 5,
  //   title: "CYbox nft collectionS for everyone",
  //   desc: "Nulla ornare sagittis placerat nunc sit tempus enim. Accumsan pellentesque ipsum felis tristique at proin vel turpis.",
  //   bgImg: bgImg2,
  //   classAction: "two",
  // },
];

export default dataSlider;
