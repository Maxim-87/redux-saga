import {useSelector} from "react-redux";
// import News from "./components/news/News";
import Footer from "./components/footer";
import Header from "./components/header";

type AppType = {
  children?: any,
  location?: string,
}

const App = ({children}: AppType) => {
  // const dispatch = useDispatch();
  // const count = useSelector((state: any) => state.counter.count)
  const popularNews = useSelector((state: any) => state.news.popularNews)
  const latestNews = useSelector((state: any) => state.news)
  // const {newsError, popularNewsError} = useSelector((state: any) => state?.errors || {})

  console.log('popularNews', popularNews)
  console.log('latestNews', latestNews)
  // const handleIncrease = () => {
  //   dispatch(increaseCount())
  // }
  //
  // const handleDecrease = () => {
  //   dispatch(decreaseCount())
  // }

  // const handleNews = () => {
  //   console.log('handleNews')
  //   dispatch(getLatestNews());
  // }

  // const handleNews = () => {
  //   console.log('handleNews')
  //   dispatch(getNews());
  // }
  // let a = '';

  return <>
    {/*<div> {count} </div>*/}
    {/*<button onClick={handleNews}> getNews </button>*/}
    {/*<div>*/}
    {/*  <News news={latestNews.news} error={newsError} title={"Latest News"} />*/}
    {/*  <News news={popularNews} error={popularNewsError} title={"Popular News"} />*/}
    {/*</div>*/}
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
  </>
}

export default App;