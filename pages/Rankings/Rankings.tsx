import "./Rankings.css"
import { Header, Footer } from "../../components/index"
import { users } from "../../components/Data/RankData" 
import RankCard from "../../components/RankCard/RankCard"

const Rankings = () => {
  return (
    <div>
      <Header/>
      <main className="main-rankings">
        <div className="rankings">
          <div className="r-title">
            <h2 className="pages-title">Top Creators</h2>
            <p className="pages-desc">Check out top ranking NFT artists on the NFT Marketplace.</p>
          </div>
          <div className="r-users">
            <div className="options">
              <h5 className="active">Today</h5>
              <h5 className="noactive">This Week</h5>
              <h5 className="noactive">This Month</h5>
              <h5 className="noactive">All Time</h5>
            </div>
            <div className="rank-prmtrs">
              <span className="space-mono">
                <div className="prmtr">
                  <p># Artist</p>
                </div>
                <div className="prmtrs">
                  <p>Change</p>
                  <p>NFTs Sold</p>
                  <p>Volume</p>
                </div>
              </span>
            </div>
            <div className="users-cards">
              <div className="users">
                {users.map((user, index) =>
                (<RankCard key={index} user={user}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Rankings