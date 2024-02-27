import "./Trending.css"
import { DSGNImg, DSGNImgTwo, DSGNImgThree, ImgAny, IconOne, IconTwo, IconThree, MagicImg, MagicImgTwo, MagicImgThree, DiscoImg, DiscoImgTwo, DiscoImgThree } from "../../img/index"



const Trending = () => {
  return (
    <div>
        <main className='trend'>
            <div className='trend-info'>
                <div className='trend-title'>
                    <h2 className="subtitle">Trending Collection</h2>
                    <p className="desk">Checkout Our Weekly Updated Trending Collection.</p>
                </div>
                <div className='trend-cards'>
                    <div className='trend-card'>
                        <img className='trend-img-big' src={DSGNImg} alt={DSGNImg} />
                        <div className='trend-img-small'>
                            <img src={DSGNImgTwo} alt={DSGNImgTwo} />
                            <img src={DSGNImgThree} alt={DSGNImgThree} />
                            <img src={ImgAny} alt={ImgAny} />
                        </div>
                        <div className='trend-account'>
                        <h4>DSGN Animals</h4>
                        <div className='trend-account-p'>
                            <img src={IconOne} alt={IconOne} /><p>MrFox</p> 
                        </div>
                        </div>
                    </div>
                    <div className='trend-card'>
                        <img className='trend-img-big' src={MagicImg} alt={MagicImg} />
                        <div className='trend-img-small'>
                            <img src={MagicImgTwo} alt={MagicImgTwo} />
                            <img src={MagicImgThree} alt={MagicImgThree} />
                            <img src={ImgAny} alt={ImgAny} />
                        </div>
                        <div className='trend-account'>
                        <h4>Magic Mushrooms</h4>
                        <div className='trend-account-p'>
                            <img src={IconTwo} alt={IconTwo} /><p>Shroomie</p>
                        </div>
                        </div>
                    </div>
                    <div className='trend-card'>
                        <img className='trend-img-big' src={DiscoImg} alt={DiscoImg} />
                        <div className='trend-img-small'>
                            <img src={DiscoImgTwo} alt={DiscoImgTwo} />
                            <img src={DiscoImgThree} alt={DiscoImgThree} />
                            <img src={ImgAny} alt={ImgAny} />
                        </div>    
                        <div className='trend-account'>
                        <h4>Disco Machines</h4>
                        <div className='trend-account-p'>
                            <img src={IconThree} alt={IconThree} /><p>BeKind2Robots</p> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Trending