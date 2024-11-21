import React from 'react'
import Testonomialsprofiles from './Testonomialsprofiles'
const Testnomial = () => {
  return (
    <div className='flex flex-col md:flex-row gap-16 justify-center mx-auto my-6  md:my-28 pl-4 ' style={{maxWidth : '1280px'}}>
        <div className='flex flex-col gap-20' >
<div >
    <h2 className='text-3xl font-semibold pb-5 '>
    Testimonials
    </h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
</div>
<div>
    <Testonomialsprofiles img={'https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg'}  des={'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. '} name={'Sarah Jones'} professional={'Interior Designer'} />
    <hr  className='md:hidden my-5' />
</div>
        </div>
        {/* right side */}
        <div className='flex flex-col gap-20'>
<Testonomialsprofiles img={'https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/01/testimonial-2.jpg'} des={'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.'} name={'Jessica Foxx '} professional={'Student'} />
<hr  className='md:hidden my-5' />
<Testonomialsprofiles img={'https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg'} des={'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. '}  name={'Briana Luke'} professional={'Student'} />
<hr  className='md:hidden my-5' />
        </div>
    </div>
  )
}

export default Testnomial