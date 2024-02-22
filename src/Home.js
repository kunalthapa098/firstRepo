import React, { useEffect } from "react";
import HeroSection from "./Component/Herosection";
import { useGlobleContext } from "./context";
// import { useEffect } from "react";
const Home = () => {
	// const data = {
	// 	name: "What is Lorem Ipsum?",
	// 	image: "./images/hero.svg",
	// };
	const { upDateHomePage } = useGlobleContext();

	useEffect(() => upDateHomePage(), []);
	return <HeroSection />;
};

export default Home;
