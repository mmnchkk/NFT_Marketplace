import "./ConnectAWallet.css"
import { Header, Footer } from "../../components/index"
import { Cosmo, Metamask, WalletConnect, Coinbase } from "../../img/index"

const ConnectAWallet = () => {
  return (
    <div>
      <Header/>
      <main className="main-connect">
        <div className="connect">
          <div className="connect-img">
            <img src={Cosmo} alt="Космос" />
          </div>
          <div className="connect-info">
            <h2 className="pages-title">Connect wallet</h2>
            <p className="pages-desc">Choose a wallet you want to connect.</p>
            <p className="pages-desc">There are several wallet providers.</p>
            <div className="connect-buttons">
              <button><img src={Metamask} alt="" />Metamask</button>
              <button><img src={WalletConnect} alt="" />Wallet Connect</button>
              <button><img src={Coinbase} alt="" />Coinbase</button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default ConnectAWallet