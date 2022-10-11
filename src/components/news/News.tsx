import React from 'react';
import styles from './News.module.css';

type NewTypes = {
  title: string,
  news: Array<any>
  error: string,
}

const News = ({news, title, error}: NewTypes) => {
  console.log('newsNews = ', news)
  return (
    <div>
      {error ? error :
       <>
         <h4>{title}</h4>
         <div className={styles.news}>
           {news?.map((n => (
             <h5 key={n.title}>
               {n.title}
             </h5>
           )))}
         </div>
       </>
    }
    </div>
  );
};

export default News;