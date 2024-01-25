import React from 'react'

const TheoryPhy101 = () => {
  return (
    <div className='w-4/5 pl-2'>
      <div className="aim mt-8 mb-3">
        <p className="text-dark font-semibold text-xl mb-3">Theory</p>
        <p className="text-dark50 font-normal text-base pl-1">The parallax method is a common technique used to find the focal length of a convex lens. It involves observing the apparent shift in the position of an object when viewed through the lens from two different angles. The theory behind this method relies on the basic principles of optics and the behavior of light rays passing through a convex lens using the parallax method.</p>
      </div>

      <div className="theory mb-3">
        <p className="text-dark font-semibold text-xl mb-3">Principle of convex lens:</p>
        <p className="text-dark50 font-normal text-base pl-1 mb-3">
          A convex lens is a transparent optical element that converges light rays that pass through it. Light rays that are parallel to the principal axis of the lens converge at a point known as the focal point(F). The distance between the lens and the focal point is called the focal length (f) of the lens. The focal length can be calculated using the formula: 1/f=1/p+1/q <br />Where,<br />
          f= focal length of the lens <br />
          p=Distance between the lens and the object. <br />
          q=Distance between the lens and the image, <br />
        </p>
        <p className="text-dark font-semibold text-xl mb-3">Note:</p>
        <p className="text-dark50 font-normal text-base pl-1">
          According to sign-convention, p has a negative value and q has a positive value for the convex lens. Hence, f comes positive.
        </p>
        <p className="text-dark font-semibold text-xl my-3">EXPERIMENTAL ARRANGEMENT:</p>
        <p className="text-dark font-semibold text-xl my-3">FOCAL LENGTH OF A CONVEX LENS:</p>
      </div>

      <div className="objectives">
        <p className="text-dark font-semibold text-xl mb-3">MATERIALS REQUIRED:</p>
        <div className="text-dark50 font-normal text-base pl-1">
          <ol className='list-disc pl-3 pb-3'>
            <li>Convex lens installed in a lens holder with base.</li>
            <li>Two needles upright.</li>
            <li>Optical bench</li>
            <li>Piece of paper(object).</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default TheoryPhy101