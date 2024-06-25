import './MostPopular.css'

import { Card, SectionWrapper, SectionHeader } from '../../components/index'
import MostPopularItems from '../../Data/MostPopularItems'


const MostPopular=()=>{

    const cards= MostPopularItems.map(card =>{
        return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
    })
    return(<>
    <SectionWrapper>
        
            <SectionHeader>Most Popular</SectionHeader>
       
        <div className='most-popular-items'>
            {cards}
           
        </div>

        </SectionWrapper>

    </>)
}

export default MostPopular