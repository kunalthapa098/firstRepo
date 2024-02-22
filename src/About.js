import React, { useEffect } from "react";
import HeroSection from "./Component/Herosection";
import { useGlobleContext } from "./context";

const About = () => {
	// const data = {
	// 	name: "Why do we use it?",
	// 	image: "./images/about1.svg",
	// };
	const { upDateAboutPage } = useGlobleContext();

	useEffect(() => upDateAboutPage(), []);
	return <HeroSection />;
};

export default About;
