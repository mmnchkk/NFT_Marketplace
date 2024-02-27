import "./TopCreators.css"
import { IconRocket } from "../../img/index"
import { creators } from "../../components/Data/TcData"
import TcCard from "../../components/TcCard/TcCard"

const TopCreators = () => {
  return (
    <div>
        <main className="main-top-creators">
            <div className="top-creators">
                <div className='tc-title'>
                    <div className='dm-text'>
                        <h2 className="subtitle">Top creators</h2>
                        <p className="desk">Checkout Top Rated Creators on the NFT Marketplace</p> 
                    </div>
                    <div className='tc-btn'>
                        <button><img src={ IconRocket } alt='' />View Rankings</button>
                    </div>
                </div>
                <div className="tc-cards">
                    {creators.map((creator, index) =>
                    (<TcCard key={index} creator={creator}/>
                    ))}
                </div>
            </div>
        </main>
    </div>
  )
}

export default TopCreators