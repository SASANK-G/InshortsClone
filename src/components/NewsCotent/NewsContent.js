import React from 'react'
import Container from '@material-ui/core/Container';
import "./NewsContent.css"
import NewsCard from '../NewsCard/NewsCard';

function NewsContent({newsArray, newsResults, loadmore, setLoadmore}) {
  return (
    <div>
      <Container maxWidth='md'>
        <div className="content">
          {/* <div className="downloadMessage">
            <span className="downloadText">

            </span>
          </div> */}
                {
                    newsArray.map((newsItem) =>(
                  <NewsCard newsItem={newsItem} key={newsItem.title}/>
                    ))
                }

                {
                    loadmore<=newsResults && (
                      <>
                        <hr />
                        <button className="loadMore" 
                          onClick={() => setLoadmore(loadmore + 20)}>
                          Load More..
                        </button>
                      </>
                    )
                }

        </div>
      </Container>
    </div>
  )
}

export default NewsContent
