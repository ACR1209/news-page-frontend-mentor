import { useState } from "react";
import MainNew from "./components/MainNew";
import { NewsArticle } from "./utils/types";
import web3 from './assets/image-web-3-desktop.jpg'
import retroPc from './assets/image-retro-pcs.jpg'
import keyboard from './assets/image-top-laptops.jpg'
import gamepad from './assets/image-gaming-growth.jpg'
import Navbar from "./components/Navbar";
import RecentNews from "./components/RecentNews";
import ListArticles from "./components/ListArticles";
  

const news: NewsArticle[] = [
  {
    image: {
      src: web3,
      alt: "This is a random image"
    }  
    ,
    title: "The Bright future of Web 3.0?",
    content:
      "We dive into the next of the web that claims to put the power of the platforms back into the hands of the people. But is it really fullfilling its promise?",
  },
  {
    title: "Hydrogen VS Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?"
  },
  {
    title: "The Downsides of AI Artistry",
    content: "What are the possible adverse effects of on-demand AI image generation?"
  },
  {
    title: "Is VC Funding Drying Up?",
    content: "Private funding by VC firms is down 50% YOY. We take a loot at what that means."
  },
  {
    image: {
      src: retroPc,
      alt: "retro pc"
    },
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?"
  },
  {
    image: {
      src: keyboard,
      alt: "rgb keyboard"
    },
    title: "Top 10 Laptops of 2022",
    content: "Our best picks for various need and budgets."
  },
  {
    image: {
      src: gamepad,
      alt: "game controller"
    },
    title: "The Growth of Gaming",
    content: "How the pandemic has sparked fresh opportunities."
  }
];

function App() {
  return (
    <div className="px-5 lg:px-60 pb-24 lg:py-14">
      <Navbar/>
      <section className="block w-100 lg:flex">
        <MainNew article={news[0]}/>
        <RecentNews articles={news.slice(1, 4)} />
      </section>
      <section>
        <ListArticles articles={news.slice(4)}/>
      </section>
    </div>
  );
}

export default App;
