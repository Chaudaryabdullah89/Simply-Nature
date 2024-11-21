import React from 'react'
import Button from './Button'

const Banner2 = () => {
return (
    <div>
        <div 
            className='flex h-full px-5 pb-[600px] pt-40 flex-col justify-center items-center text-center mx-auto my-5 md:my-16 lg:my-40 gap-10' 
            style={{ 
                backgroundImage: 'url(https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/07/CTA-bg.jpg)',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className='flex flex-col gap-5'>
                <h2 className='text-2xl md:6xl font-semibold'>
                    Interested? Shop This Plant Collection!
                </h2>
                <p className='text-center justify-center items-center'>
                    Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non <br /> numquam eius modi tempora incidunt.
                </p>
            </div>
            <Button value={'Shop Now'} />
        </div>
    </div>
)
}

export default Banner2