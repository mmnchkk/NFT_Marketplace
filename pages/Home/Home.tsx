import "./Home.css"
import { Header, Footer } from "../../components/index"
import { Intro, Trending, TopCreators, Categories, DiscoverMore, MagicMushrooms, HowItWorks,  } from "../../blocks/index";


const Home = () => {
  return (
    <div>
        <Header />
        <Intro />
        <Trending />
        <TopCreators />
        <Categories />
        <DiscoverMore />
        <MagicMushrooms />
        <HowItWorks />
        <Footer />
    </div>
  )
}

export default Home