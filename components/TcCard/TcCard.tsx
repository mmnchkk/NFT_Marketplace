import "./TcCard.css"

const TcCard = ({ creator }: any) => {
  return (
    <div className="tc-card">
        <span className="space-mono"><p className="card-number">{creator.number}</p></span>
        <div className="creator-info">
            <img src={creator.img} alt="Фото пользователя" />
            <p>{creator.name}</p>
        </div>
        <div className="creator-general">
            <p>Total Sales: <span className="space-mono">34.53 ETH</span></p>
        </div>
    </div>
  )
}

export default TcCard