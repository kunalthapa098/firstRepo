// import React, { useContext } from "react";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useGlobleContext } from "../context";

const HeroSection = (props) => {
	const { name, image } = useGlobleContext();
	return (
		<Wrapper>
			<div className="container grid grid-two-column">
				<div className="Section-hero-data">
					<p className="hero-top-data">this is me</p>
					<h1 className="hero-heading">{props.name}</h1>
					<p className="hero-para">
						{name}
						is simply dummy text of the printing and typesetting industry. Lorem
						Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled
						it to make a type specimen book.
					</p>
					<Button className="btn hireme-btn">
						<NavLink to="/contact">Hire Me</NavLink>
					</Button>
				</div>

				{/* {for Image} */}
				<div className="Section-hero-image">
					<picture>
						<img src={image} alt="" srcSet="" className="hero-img" />
					</picture>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 3rem 0;
	.Section-hero-data {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.btn {
		max-width: 16rem;
	}

	.hero-top-data {
		text-transform: uppercase;
		font-size: 3.4rem;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.helper};
	}
	.hero-heading {
		text-transform: uppercase;
		font-size: 4rem;
	}
	.hero-para {
		margin-top: 1rem;
		margin-bottom: 3.4rem;
		max-width: 60rem;
	}
	.Section-hero-image {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	picture {
		align-items: center;
	}
	.hero-img {
		max-width: 80%;
	}
`;

export default HeroSection;
