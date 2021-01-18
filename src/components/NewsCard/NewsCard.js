import React from 'react';
import './NewsCard.css';
function NewsCard({newsItem}) {

 

const fulldate = new Date(newsItem.publishedAt);

var date= fulldate.toString().split(" ");
const hour = parseInt(date[4].substring(0,2));
const time = hour>12? true:false;


  return (
    <div className="coverr">
    <div className="newsCard">
      <img alt={newsItem.title} src={newsItem.urlToImage?newsItem.urlToImage:""}
      className='newsImage'
      />
     <a href={newsItem.url} target='blank' >   
      <div className='newsText'>
          <div className="upperNews">
            <span className='title'>
                  {newsItem.title}
              <br/> {""}
            </span>
            <span className='author' >
                <a href={newsItem.url} target='blank' >
                <b>Short </b>
                </a>
              <span className="muted">
                  By - {newsItem.author ?newsItem.author:"unkown" }/ 

                  {" "}{time? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
              </span>

            </span>
          </div>
        <div className="lowerNewsText">
          <div className="description">
            {newsItem.description}
          </div>
          <span className="readmore">
                Read more...
                {/* <b>{newsItem.source.name}</b> */}
                
          </span>
        </div>

      </div>
     </a>  
  </div>
  </div>
  )
};

export default NewsCard
