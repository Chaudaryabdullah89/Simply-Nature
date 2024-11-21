import React from 'react'

const Testonomialsprofiles = ({des,name,professional,img}) => {
  return (
    <div>
        <div className='flex flex-col md:flex-row gap-10'>
            <div>
<img src={img} className='w-60 border-global-img' alt="" />
            </div>
            <div className='flex flex-col gap-10 md:w-1/2 justify-center  '>
                <div>
             <p className=' text-gray-600 text-lg'>
                  {/* Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.  */}
                {des}
                </p> 
                </div>
                <div>
<p className='text-lg font-bold'>
{/* Sarah Jones */}
{name}
</p>
<p className='text-xs text-gray-500'>
{/* Interior Designer */}
{professional}
</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testonomialsprofiles