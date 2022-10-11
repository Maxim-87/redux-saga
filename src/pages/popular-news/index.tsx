import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getLatestNews} from "../../redux/actions/actionCreator";
import News from "../../components/news/News";
import {getPopularNews} from "../../redux/actions/actionCreator";

const PopularNews = () => {
  const popularNews = useSelector((state: any) => state.news.popularNews)
  const {isLoading} = useSelector((state: any) => state?.loader || {})
  const {newsError, popularNewsError} = useSelector((state: any) => state?.errors || {})
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularNews())
  }, [dispatch])

  return (
    <div>
      {isLoading ? <h3> Loading...</h3>
        : <News news={popularNews} error={newsError} title={"Popular News"}/>}
    </div>
  );
};

export default PopularNews;