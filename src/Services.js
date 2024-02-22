import React from "react";
import { useGlobleContext } from "./context";
import styled from "styled-components";
const Services = () => {
	const services = useGlobleContext();
	console.log(services);
	return (
		<Wrapper className="section">
			<h2 className="common-heading">OUR ARTICLE</h2>
			<div className="container grid grid-three-column">
				{/* {services.Map((curElement) => {
					const { id, name } = curElement;
					return (
						<div key={id} className="card">
							<figure>{name}</figure>
						</div>
					); 
				})} */}

				<div>
					{console.log(services.status, "hello")}
					{services.articles ? (
						services.articles.map((article, index) => {
							return (
								<div key={index} className="card">
									<h2>{article.title}</h2>
									<p>{article.description}</p>
									{/* Add other properties like url if needed */}
								</div>
							);
						})
					) : (
						<div>hii</div>
					)}
				</div>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.nav`
	color: black;
`;

export default Services;
