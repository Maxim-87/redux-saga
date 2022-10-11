import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import News from "../../components/news/News";
import {getLatestNews} from "../../redux/actions/actionCreator";

const LatestNews = () => {
  const latestNews = useSelector((state: any) => state.news.news)
  const isLoading = useSelector((state: any) => state?.loader || {})
  const {newsError, popularNewsError} = useSelector((state: any) => state?.errors || {})
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestNews())
  }, [dispatch])

  console.log('isLoading = ', isLoading)

  return (
    <div>
      {isLoading.isLoading ? <h3> Loading...</h3>
        : <News news={latestNews} error={newsError} title={"Latest News"}/>}
    </div>
  );
};

export default LatestNews;