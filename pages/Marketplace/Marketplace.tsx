import "./Marketplace.css"
import { Header, Footer } from "../../components/index"
import { characters } from "../../components/Data/MpData" 
import MpCard from "../../components/MpCard/MpCard"
import { MagnifyingGlass } from "../../img/index"
 
const Marketplace = () => {
  return (
    <div>
      <Header/>
      <main className="main-marketplace">
        <div className="marketplace">
          <div className="mp-title">
            <h2 className="pages-title">Browse Marketplace</h2>
            <p className="pages-desc">Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <input type="text" placeholder="Search your favourite NFTs" />
            <button><img src={MagnifyingGlass} alt="" /></button>
          </div>
          <div className="characters-info">
              <div className="nfts">
                <h5>NFTs <span className="space-mono"><p>302</p></span></h5>
              </div>
              <div className="collections">
                <h5>Collections <span className="space-mono"><p>67</p></span> </h5>
              </div>
            </div>
          <div className="characters">
            <div className="characters-cards">
              {characters.map((character, index) =>
              (<MpCard key={index} character={character}/>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Marketplace