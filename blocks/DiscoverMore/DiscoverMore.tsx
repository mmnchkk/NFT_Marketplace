import "./DiscoverMore.css"
import { Distant, Life, AstroFiction, SeeAll ,MoonDancer, NebulaKid, SpaceOne } from "../../img/index"

const DiscoverMore = () => {
  return (
    <div>
        <main className='discover-more'>
            <div className='dm-info'>
                <div className='dm-title'>
                    <div className='dm-text'>
                        <h2 className="subtitle">Discover More NFTs</h2>
                        <p className="desk">Explore new trending NFTs</p> 
                    </div>
                    <div className='dm-btn'>
                        <button><img src={SeeAll} alt={SeeAll} />See All</button>
                    </div>
                </div>
                <div className='dm-cards'>
                    <div className='dm-card'>
                        <img src={Distant} alt={Distant} className="dm-user-img" />
                        <div className='dm-card-info'>
                            <div className="dm-card-user">
                                <h4>Distant Galaxy</h4>
                                <span className="space-mono"><p className="dm-username"><img src={MoonDancer} alt={MoonDancer} />MoonDancer</p></span>
                            </div>
                            <span className="space-mono">
                                <div className='dm-card-pb'>
                                    <div className='dm-card-price'>
                                        <p className="card-grey">Price</p>
                                        <p>1.63 ETH</p>
                                    </div>
                                    <div className='dm-card-bid'>
                                        <p className="card-grey">Highest Bid</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </span>    
                        </div>
                    </div>
                    <div className='dm-card'>
                        <img src={Life} alt={Life} className="dm-user-img" />
                        <div className='dm-card-info'>
                            <div className="dm-card-user">
                                <h4>Life On Edena</h4>
                                <span className="space-mono"><p className="dm-username"><img src={NebulaKid} alt={NebulaKid} />NebulaKid</p></span>
                            </div>
                            <span className="space-mono">
                                <div className='dm-card-pb'>
                                    <div className='dm-card-price'>
                                        <p className="card-grey">Price</p>
                                        <p>1.63 ETH</p>
                                    </div>
                                    <div className='dm-card-bid'>
                                        <p className="card-grey">Highest Bid</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className='dm-card'>
                        <img src={AstroFiction} alt={AstroFiction} className="dm-user-img" />
                        <div className='dm-card-info'>
                            <div className="dm-card-user">
                                <h4>AstroFiction</h4>
                                <span className="space-mono"><p className="dm-username"><img src={SpaceOne} alt={SpaceOne} />Spaceone</p></span>
                            </div>
                            <span className="space-mono">
                                <div className='dm-card-pb'>
                                    <div className='dm-card-price'>
                                        <p className="card-grey">Price</p>
                                        <p>1.63 ETH</p>
                                    </div>
                                    <div className='dm-card-bid'>
                                        <p className="card-grey">Highest Bid</p>
                                        <p>0.33 wETH</p>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default DiscoverMore