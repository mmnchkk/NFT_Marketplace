import './Categories.css'
import { categories } from "../../components/Data/CtgData"
import CtgCard from '../../components/CtgCard/CtgCard'

const Categories = () => {
  return (
    <div>
        <main className='main-categories'>
            <div className='categories'>
                <h2 className='subtitle'>Browse Categories</h2>
                <div className='ctg-cards'>
                    {categories.map((category, index) =>
                    (<CtgCard key={index} category={category}/>
                    ))}
                </div>
            </div>
        </main>
    </div>
  )
}

export default Categories