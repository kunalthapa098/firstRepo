import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { useEffect } from "react";
const AppContext = React.createContext();

const intialState = {
	name: "",
	Image: "",
	services: [],
};
const useGlobleContext = () => {
	return useContext(AppContext);
};

const API =
	"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e70c22fcee1142f4bae447cb9b8c8085";

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, intialState);

	const upDateHomePage = () => {
		return dispatch({
			type: "ABOUT_UPDATE",
			payload: {
				name: "Kunal",
				image: "./images/about1.svg",
			},
		});
	};

	const upDateAboutPage = () => {
		return dispatch({
			type: "ABOUT_UPDATE",
			payload: {
				name: "pihu",
				image: "./images/hero.svg",
			},
		});
	};
	// to get the API data
	const getServices = async (url) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			dispatch({ type: "GET_SERVICES", payload: data });
		} catch (error) {
			console.log();
		}
	};

	// to get the API data

	// to call the API

	useEffect(() => {
		getServices(API);
	}, []);

	// to call the API
	return React.createElement(
		AppContext.Provider,
		{ value: { ...state, upDateHomePage, upDateAboutPage } },
		children
	);
};

export { AppContext, AppProvider, useGlobleContext };
