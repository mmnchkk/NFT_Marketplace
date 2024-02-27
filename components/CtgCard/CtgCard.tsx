import './CtgCard.css'

const CtgCard = ({ category }: any) => {
  return (
    <div className='ctg-card'>
        <div className='ctg-card-img'>
            <img src={category.img} alt="Категория" />
        </div>
        <p>{category.name}</p>
    </div>
  )
}

export default CtgCard