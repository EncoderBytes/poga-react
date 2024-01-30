import React from 'react'
import img1 from '../../../../../../assets/Phy/Theory1.png'
import img2 from '../../../../../../assets/Phy/Theory2.png'
import img3 from '../../../../../../assets/Phy/Theory3.png'
import img4 from '../../../../../../assets/Phy/Theory4.png'

const TheoryPhy104 = () => {
  return (
    <div className='w-4/5 pl-4'>
      <div className="aim mt-8 mb-3">
        <p className="text-dark font-semibold text-xl mb-1"></p>
        <p className="text-dark font-semibold text-xl mb-1 underline pl-1">Objective:</p>
        <p className="text-dark50 font-normal text-base pl-3">To trace the path of a ray of light passing through a rectangular glass slab for different angles of incidence and to measure the angle of incidence, angle of refraction and angle of emergence and interpret the result.</p>
      </div>

      <div className="theory mb-3 pb-3">
        <p className="text-dark font-semibold text-xl mb-1 underline pl-1">Theory:</p>
        <p className="text-dark50 font-normal text-base pl-3 mb-3">
          When light travels from one medium to another medium, it generally bends or refracts. The law of refraction gives us a way of predicting the amount of bend. The law of refraction is also known as Snell's law, named after Willobrord Snell, who discovered the law in 1621. Snell's law gives the relationship between angles of incidence and refraction for a wave impinging on an interface between two media with different indices of refraction.
        </p>

        <img className='pl-5' src={img1} alt="" />

        <p className="text-dark font-semibold text-xl mb-1">Refraction :</p>
        <p className="text-dark50 font-normal text-base pl-3 mb-3">
          When we talk about the speed of light, we're usually talking about the speed of light in a vacuum, which is 3.00 x 108 m/s. When light travels through something else, such as glass, diamond, or plastic, it travels at a different speed. The speed of light in a given material is related to a quantity called the index of refraction, n, which is defined as the ratio of the speed of light in vacuum to the speed of light in the medium: <br />

          <b>index of refraction: n = c / v, where the speed of light in a medium is 'v' and 'c' is the speed of light in vacuum.</b>
        </p>

        <img className='pl-5 pb-3' src={img2} alt="" />

        <p className="text-dark font-semibold text-xl mb-3">Rules Of Refraction:</p>
        <p className="text-dark50 font-normal text-base pl-3"><b>Rule-1:</b> When a light ray travels from a rarer medium to a denser medium, the light ray bends towards the normal.</p>
        <p className="text-dark50 font-normal text-base pl-3 mb-3"><b>Rule-2:</b> When a light ray travels from a denser medium to a rarer medium, the light ray bends away from the normal.</p>

        <img className='pl-5 pb-3' src={img3} alt="" />

        <p className="text-dark font-semibold text-xl mb-1">Example of Refraction</p>
        <p className="text-dark50 font-normal text-base pl-3 mb-3">If you place a pencil in a glass of water, you will see that the pencil appears to be bent. Now, you know for a fact that the pencil is not bent at all, it just appears to be so. This is the effect of refraction of light.</p>

        <img className='pl-5 pb-3' src={img4} alt="" />
      </div>
    </div>
  )
}

export default TheoryPhy104