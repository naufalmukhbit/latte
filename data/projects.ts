import projectSosmedLight from "assets/projectSosmed_light.png";
import projectSosmedDark from "assets/projectSosmed_dark.png";

import onlineShopLogoLight from "assets/onlineShop_light.jpg";
import onlineShopLogoDark from "assets/onlineShop_dark.jpg";

import pokemonLogo from "assets/pokemon.png";

import getMusicLogo from "assets/getMusic.png";

type imageData = {
	src: any;
	altText: string;
	bg?: string;
	darkSrc?: any;
	darkBg?: string;
};

type projectData = {
	title: string;
	content: string;
	logo?: imageData;
	url?: string;
};


const data: projectData[] = [
	{
		title: "Project Sosmed",
		content:
			"I tried to replicate Twitter. Made with React TypeScript, Next.js, and Tailwind CSS.",
		logo: {
			src: projectSosmedLight,
			darkSrc: projectSosmedDark,
			altText: "Project Sosmed Logo",
		},
	},
	{
		title: "OnlineShop",
		content:
			"A simple online shop that I made for my first job interview. Made with ReactJS and Redux.",
		logo: {
			src: onlineShopLogoLight,
			darkSrc: onlineShopLogoDark,
			altText: "OnlineShop Logo",
		},
		url: "https://onlineshop-naufalmukhbit.herokuapp.com",
	},
	{
		title: "Pokémon",
		content:
			"A website to show a list, details, and catch Pokemons. The Pokemon data are gathered from PokeAPI.",
		logo: {
			src: pokemonLogo,
			altText: "Pokémon List Logo",
		},
		url: "http://poke-naufalmukhbit.surge.sh/",
	},
	{
		title: "Get Music!",
		content:
			"Get the top charts of music using GetMusic! Here you can see the list of top artists and tracks. The data are gathered from Last.fm API.",
		logo: {
			src: getMusicLogo,
			altText: "Get Music Logo",
		},
		url: "http://getmusic-naufalmukhbit.surge.sh/",
	},
];

export default data;
