import "./Header.css"
import { Logo, User } from '../../img'
import { Link } from "react-router-dom" 

const Header = () => {
  return (
    <div>
        <header className='header'>
            <div className='header-wrap'>
                <div>
                    <Link to="/" className='header-logo'>
                        <img src={ Logo } alt='Логотип' />
                        <p><span className='space-mono'>NFT Marketplace</span></p>
                    </Link>
                </div>
                <div className='header-menu'>
                    <ul className='header-items'>
                        <li className='header-item'><Link to="/marketplace" className="header-link">Marketplace</Link></li>
                        <li className='header-item'><Link to="/rankings" className="header-link">Rankings</Link></li>
                        <li className='header-item'><Link to="/connect" className="header-link">Connect a wallet</Link></li>  
                    </ul>
                    <Link to="/create" className="header-link"><button className="header-btn"><img src={ User } alt={ User } />Sign Up</button></Link>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header