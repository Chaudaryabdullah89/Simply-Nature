import React from 'react'

const Support = () => {
  return (
    <div>
       
        {/* <i aria-hidden="true" class="fas fa-box"></i> */}
        {/* <i aria-hidden="true" class="fas fa-sync"></i> */}
        <div className='flex flex-col lg:flex-row  gap-16 lg:gap-40 mx-auto justify-center  mt-16 mb-20'>
         <div className='flex flex-col lg:flex-row gap-5 items-center text-center lg:text-start justify-center'>

        <i aria-hidden="true" className="fas fa-spa text-green-500 text-3xl "></i>
             <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>
                    Plants Collection</p>
                    <p>Any plants for your space</p>
             </div>
         </div>
         <div className='flex flex-col lg:flex-row gap-5 items-center text-center lg:text-start justify-center'>

        <i aria-hidden="true" className="fas fa-box text-green-500 text-3xl "></i>
             <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>
                    
Free Shipping</p>
                    <p>Free shipping on order</p>
             </div>
         </div>
         <div className='flex flex-col lg:flex-row gap-5 items-center text-center lg:text-start justify-center'>

        <i aria-hidden="true" className="fas fa-sync text-green-500 text-3xl "></i>
             <div className='flex flex-col'>
                    <p className='font-semibold text-lg'>
                    
100% Money Back</p>
                    <p>If the item didn't suit you

</p>
             </div>
         </div>
        </div>
    </div>
  )
}

export default Support