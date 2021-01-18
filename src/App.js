import Navbarr from './components/Navbarr.js'
import axios from "axios";
import './App.css';
import { useEffect, useState } from 'react';
import NewsContent from './components/NewsCotent/NewsContent.js';
import apikey from './components/data/config';
import Footer from './components/Footer/Footer.js'


function App() {


const [category, setCategory] = useState("General");
const [newsArray, setNewsArray] = useState([]);
const [newsResults, setNewsResults] = useState();
const [loadmore, setLoadMore] = useState(20);


const newsApi = async ()=>{
  try {
    
    const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`);
setNewsArray(news.data.articles);
setNewsResults(news.data.totalResults);

  } catch (error) {
    console.log(error);
  }

};


console.log(newsArray);
useEffect(() =>{
newsApi();
}, [newsResults, category, loadmore]);

  return (
    <div className="App">
      <div className="stickyNav">
        <Navbarr setCategory={setCategory} />
      </div>
     <div className="NewsDiv">
      <NewsContent setLoadmore={setLoadMore} loadmore={loadmore} newsArray = {newsArray} newsResults={newsResults} />
      <Footer/>
     </div>
    </div>
  );
}

export default App;
