import './MpCard.css'

const MpCard = ({ character }:any) => {
  return (
    <div className='mp-card'>
        <img src={character.image} alt='' className="mp-character" />
            <div className='mp-character-info'>
                <div className="mp-character-user">
                    <h4>{character.name}</h4>
                    <span className="space-mono">
                        <p className="mp-character-username"><img src={character.userimg} alt='' />{character.nickname}</p></span>
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
  )
}

export default MpCard