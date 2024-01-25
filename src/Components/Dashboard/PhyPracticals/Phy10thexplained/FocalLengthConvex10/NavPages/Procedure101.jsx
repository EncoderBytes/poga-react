import React from 'react'

const Procedure101 = () => {
  return (
    <>
      <div className='w-4/5 pl-2'>
        <div className="aim my-8">
          <p className="text-dark font-semibold text-xl mb-3">PROCEDURE</p>
          <ol className="text-dark50 font-normal text-base pl-5 list-disc">
            <li>Get an image of a distant object through the given convex lens on the opposite walls of the laboratory
              Measure the distance between the lens and the image, which is the approximate focal length.</li>
            <li>Find the index correction between the lens and the object needle.</li>
            <li> Place the lens upright in the holder of the optical bench in such a way that one needle upright should be on the left side of the lens and the other on the right side of the lens.</li>
            <li> Place a piece of paper on one side of the needle upright. This upright will be considered as the objective needle O and the other will be image I.</li>
            <li> The distance between two needles upright should be greater than four times the approximate focal length of the given lens.</li>
            <li>   Now, remove the parallax between the image of the object and the image needle.</li>
            <li> Note down the position of the object needle, lens, and image needle in a table.</li>
            <li> For more reading move the object needle slightly and again remove the parallax between the image of the object needle and the image needle keeping the lens position fixed and note down the positions of the object needle, image needle, and lens
              In this way take at least five readings.</li>
          </ol>
        </div>

        <div className="theory mb-8">
          <p className="text-dark font-semibold text-xl mb-3">PRECAUTIONS</p>
          <ul className="text-dark50 font-normal text-base pl-5 list-disc pb-4">
            <li>Ensure that the lens is clean and free from any defects.</li>
            <li>Set up the apparatus on a stable surface to avoid any vibrations or accidental movements.</li>
            <li>If using a lamp as a light source, ensure that it does not generate excessive heat that could affect the lens or the image formed.</li>
            <li>Ensure that the lens is centered in its mount or stand. Any displacement from the central position could lead to incorrect focal length measurements.</li>
            <li>Parallax should be removed from tip to tip by keeping an eye at a distance at least 30 cm. away from the needle</li>
            <li>The object needle should be placed at such a distance that only real, inverted image of it</li>
          </ul>
        </div>
      </div >
    </>
  )
}

export default Procedure101