import {useSelector} from 'react-redux';

import Footer from './components/footer';
import Header from './components/header';
type AppType = {
  children?: any,
  location?: string,
}

const App = ({children}: AppType) => {
  const popularNews = useSelector((state: any) => state.news.popularNews);
  const latestNews = useSelector((state: any) => state.news);
  // const {newsError, popularNewsError} = useSelector((state: any) => state?.errors || {})

  console.log('popularNews', popularNews);
  console.log('latestNews', latestNews);
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

  return <>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
  </>;
};

export default App;