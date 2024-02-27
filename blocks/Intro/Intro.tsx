import "./Intro.css"
import { RocketImg, SpaceBackground, SpaceMen } from "../../img/index"

const Intro = () => {
  return (
    <div>
        <main className='main-intro'>
            <div className='intro'>
                <div className='intro-info'>
                  <div className='intro-text'>
                    <h1>Discover<br/>Digital Art &amp;<br/>Collect NFTs</h1>
                    <p>NFT Marketplace UI Created With Anima For<br/>Figma. Collect, Buy And Sell Art From More<br/> Than 20k NFT Artists.</p>
                    <button><img src={RocketImg} alt={RocketImg} />Get Started</button>
                  </div>
                  <div className='intro-numbers'>
                    <div className='intro-number'>
                      <p><span className='space-mono'>240k+</span></p>
                      <p className='intro-number-text'>Total Sale</p>
                    </div>
                    <div className='intro-number'>
                      <p><span className='space-mono'>100k+</span></p>
                      <p className='intro-number-text'>Auctions</p>
                    </div>
                    <div className='intro-number'>
                      <p><span className='space-mono'>240k+</span></p>
                      <p className='intro-number-text'> Artists</p>
                    </div>
                  </div>
                </div>
                <div className="intro-space">
                  <div className='intro-space-image'>
                    <img src={SpaceBackground } alt="Космос"/>
                  </div>
                  <div className="intro-space-info">
                    <p>Space Walking</p>
                    <div className='intro-space-user'>
                      <img src={SpaceMen} alt="" />
                      <p>Animakid</p>
                    </div>
                  </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Intro