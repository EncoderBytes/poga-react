import React from 'react'
import img from '../../../../../../assets/Phy/Theroy5.png'

const TheoryPhy91 = () => {
  return (
    <div className='w-4/5 pl-2'>
      <div className="aim mt-8 mb-3">
        <p className="text-dark font-semibold text-xl mb-3">What is a Vernier Calliper?</p>
        <p className="text-dark50 font-normal text-base pl-1">A calliper is a device used to measure the distance between two opposing sides of an object. It can be as simple as a compass with inward or outward-facing points. First the tips of the caliper are adjusted to fit across the points to be measured and the caliper is then removed and the distance between the tips is measured using a ruler.
          The modern Vernier caliper was invented by Joseph R. Brown in 1851. It was the first practical tool for exact measurements that could be sold at an affordable price to ordinary machinists. The Vernier Caliper consists of a main scale fitted with a jaw at one end. Another jaw, containing the Vernier scale, moves over the main scale. When the two jaws are in contact, the zero of the main scale and the zero of the Vernier scale should coincide. If both the zeros do not coincide, there will be a positive or negative zero error.</p>
      </div>

      <div className="theory mb-3">
        <p className="text-dark font-semibold text-xl mb-3">Parts of a Vernier Calliper:</p>
        <ul className='list-decimal pl-5 pb-3 text-dark50 font-normal text-base'>
          <li className="text-dark font-bold">Main Scale</li>
          <img src={img} alt="" className='w-96 mt-4 mb-2' />
          <p className="text-dark50 font-normal text-base pl-1 pb-3">The main scale consists of a steel metallic strip graduated in centimeters at one edge and in inches at the other edge . It carries the inner and outer measuring jaws. When the two jaws are in contact, the zero of the main scale and the zero of the Vernier scale should coincide. If both the zeros do not coincide, there will be a positive or negative zero error.s</p>
          <li className="text-dark font-bold">Vernier Scale</li>
          <p className="text-dark50 font-normal text-base pl-1 pb-3">A Vernier scale slides on the strip. It can be fixed in any position by the retainer. On the Vernier scale, 0.9 cm is divided into ten equal parts.</p>
          <li className="text-dark font-bold">Outer Measuring Jaws</li>
          <p className="text-dark50 font-normal text-base pl-1 pb-3">The outer measuring jaws helps to take the outer dimension of an object</p>
          <li className="text-dark font-bold">Inner Measuring Jaws</li>
          <p className="text-dark50 font-normal text-base pl-1 pb-3">The inner measuring jaws helps to take the inner dimension of an object.</p>
          <li className="text-dark font-bold">Retainer</li>
          <p className="text-dark50 font-normal text-base pl-1 pb-3">The retainer helps to retain the object within the jaws of the Vernier calipers.</p>
          <li className="text-dark font-bold">Depth Measuring Prong</li>
          <p className="text-dark50 font-normal text-base pl-1 pb-3">The depth measuring prong helps to measure the depth of an object.</p>
        </ul>
        <p className="text-dark font-semibold text-xl mb-3">Least Count:</p>
        <p className="text-dark50 font-normal text-base pl-1">
          The least count or the smallest reading which you can get with the instrument can be calculated as; <br />
          Least count = one main scale (MS) division / one vernier scale (VS) division <br /> <br />
          First calculate the least count and only then place the object between the two jaws. Record the position of zero of the Vernier scale on the main scale.
        </p>
        <p className="text-dark font-semibold text-xl my-3">Calculating the Reading</p>
        <p className="text-dark50 font-normal text-base pl-1">When a body is between the jaws of the Vernier Caliper; If the zero of the vernier scale lies ahead of the Nth division of the main scale, then the main scale reading (MSR) is; MSR = N <br />If nth division of Vernier scale coincides with any division of the main scale, then the Vernier scale reading (VSR) is; <br />
          VSR = n x L.C, (L.C is least count of vernier calliper) <br /> Total Reading: <br /> TR = MSR+VSR = N+(n x L.C)
        </p>
      </div>

      <div className="objectives">
        <p className="text-dark font-semibold text-xl my-3">Finding the Volumes</p>
        <p className="text-dark50 font-normal text-base pl-1">Volume of a Beaker / Calorimeter <br />
          Volume of the beaker / calorimeter = internal area of the cross section x depth</p>

        <p className="text-dark font-semibold text-xl mb-3">Volume of a Rectangular Block</p>
        <p className="text-dark50 font-normal text-base pl-1">V = I x B x H</p>
        <div className="text-dark50 font-normal text-base pl-1">
          <p className="text-dark font-semibold text-xl mb-3">MATERIALS REQUIRED:</p>
          <ol className='list-decimal pl-5 pb-3'>
            <li>Vernier callipers.</li>
            <li>A spherical body ( it can be a pendulum bob)</li>
            <li>A cylinder.</li>
            <li>A small rectangular metallic block of known mass</li>
            <li>A beaker or a calorimeter.</li>
          </ol>
        </div>
      </div>
    </div >
  )
}

export default TheoryPhy91