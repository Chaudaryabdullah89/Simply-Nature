import React, { useState } from 'react'
import DualRangeSlider from '../components/Dualslider'
const PlantStore = () => {
    const [ price, setPrice ] = useState(0)
    
return (
    <div className='text-[#5d6167] max-w-[1280px] mx-auto'>
        <div className='flex flex-col sm:flex-row gap-5'>
            <div>
                <div className='bg-white p-8 px-16 rounded shadow'>
              
                   <DualRangeSlider />
                    <p className='mt-2'>Selected Price: ${price}</p>
                </div>
                
            </div>
            <div>
                {/* Additional content can go here */}
            </div>
        </div>
    </div>
)
}

export default PlantStore