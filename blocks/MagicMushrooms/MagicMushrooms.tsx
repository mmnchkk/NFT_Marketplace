import './MagicMushrooms.css'
import Eye from '../../img/imgDiscoverMore/Eye.svg'
import { UserMushrooms } from "../../img/index"

const MagicMushrooms = () => {
  return (
    <div>
        <main className='main-magic-mushrooms'>
            <div className='magic-mushrooms'>
                <div className='magic-mushrooms-info'>
                    <div className='magic-mushrooms-user'>
                        <img src={UserMushrooms} alt="" />
                        <p>Shroomie</p>
                    </div>
                    <h2>Magic Mushrooms</h2>
                    <button><img src={Eye} alt="" />See NFT</button>
                </div>
                <div className='mushrooms-timer'>
                    <p className='timer-title'><span className='space-mono'>Auction ends in:</span></p>
                    <div className='timer-info'>
                        <div className='timer-number'>
                            <span className='space-mono'>
                                <h3>59</h3>
                                <p>Hours</p>
                            </span>
                        </div>
                            <p className='sep'>:</p>
                        <div className='timer-number'>
                            <span className='space-mono'>
                                <h3>59</h3>
                                <p>Minutes</p>
                            </span>
                        </div>
                            <p className='sep'>:</p>
                        <div className='timer-number'>
                            <span className='space-mono'>
                                <h3>59</h3>
                                <p>Seconds</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default MagicMushrooms