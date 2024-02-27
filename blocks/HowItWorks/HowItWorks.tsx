import "./HowItWorks.css"
import { Wallet, Collection, StartEarning, Astronaut } from "../../img/index"
import { Button } from "../../components"

const HowItWorks = () => {
  return (
    <div>
        <main className='main-how-it-works'>
            <div className='how-it-works'>
                <div className='hw-title'>
                    <h2 className="subtitle">How it works</h2>
                    <p className="desk">Find out how to get started</p> 
                </div>
                <div className='hw-cards'>
                    <div className='hw-card'>
                        <img src={Wallet} alt="" />
                        <div className="hw-card-info">
                            <p className="hw-subtitle">Setup Your wallet</p>
                            <p className="hw-desk">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
                        </div>
                    </div>
                    <div className='hw-card'>
                        <img src={Collection} alt="" />
                        <div className="hw-card-info">
                            <p className="hw-subtitle">Create Collection</p>
                            <p className="hw-desk">Upload your work and setup your collection. Add a description, social links and floor price.</p>
                        </div>
                    </div>
                    <div className='hw-card'>
                        <img src={StartEarning} alt="" />
                        <div className="hw-card-info">
                            <p className="hw-subtitle">Start Earning</p>
                            <p className="hw-desk">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
                        </div>
                    </div>
                </div>
                <div className="join-our">
                    <div className="join-our-img">
                        <img src={Astronaut} alt="Космонавт" />
                    </div>
                    <div className="join-our-info">
                        <h3>Join Our Weekly<br/>Digest</h3>
                        <p>Get exclusive promotions &amp; updates<br/>straight to your inbox.</p>
                        <Button/>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default HowItWorks