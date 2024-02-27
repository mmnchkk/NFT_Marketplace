import './RankCard.css'

const RankCard = ({ user }: any) => {
  return (
    <div className='rank-card'>
        <div className='card-data'>
            <span className='space-mono'><p>{user.num}</p></span>
            <img src={user.img} alt="Фото пользователя" />
            <h5>{user.name}</h5>
        </div>
        <div className='card-general'>
            <span className='space-mono'>
                <p className='green'>+1.41%</p>
                <p>602</p>
                <p>12.4 ETH</p>  
            </span>
        </div>
    </div>
  )
}

export default RankCard