import React from 'react'
import img1 from "../../../../../../assets/Phy/proce1.png"
import img2 from "../../../../../../assets/Phy/proce2.png"

const BioProcedure101 = () => {
  return (
    <>
      <div className='w-4/5 pl-4'>
        <div className="aim mb-3 mt-8">
          <p className="text-dark font-semibold text-xl mb-1">Apparatus</p>
          <p className="text-dark50 font-normal text-base pl-3">A drawing board, rectangular glass slab, office pins, sheet of white paper, a protractor and sharply pointed pencil.</p>
          <ol className="text-dark50 font-normal text-base pl-5 list-decimal">
            <li>Fix a sheet of white paper on a drawing board with drawing pins. Place the given glass slab nearly in the middle of the sheet.</li>
            <li>Mark the boundary of the glass slab with a sharp pencil and label it as PQRS after removing the slab from its position.
            </li>
            <li>On the line PQ mark a point E and draw a normal N1EN2 at it. Draw a line AE making angle AEN1 with the normal.The angle should neither too small nor too large (say about 40 degree).</li>
            <li>Now place the glass slab again on its boundary PQRS and fix two pins A and B vertically about 10 cm apart on the line AE (say points A and B).</li>
            <li>Look through the glass slab along the plane of the paper from the side SR and move your head until the images of the two pins A and B are seen clearly. Closing your one eye ,adjust the position of your head in such a way that the images of the pins A and B lie in the same straight line.
            </li>
            <li>Fix two other pins C and D vertically in such a way that the images of the pins A and B and pins C and D, all these four, lie in the same straight line. Ensure that the feet of the pins ( not their heads ) lie in the same straight line.
            </li>
            <li>Remove the slab and also the pins from the board and encircle the pin-pricks on the paper,with a sharp pencil.</li>
            <li>Join the points D and C and produce the line DC towards the slab so that it meets the boundary line RS at the point F. Join the points e and F. Thus for the incident ray represented by line AE, the refracted ray and the emergant ray are represented by EF and FD respectively.</li>
            <li>On the line RS draw a normal N1'FN2' at point F. Now, with a protractor, measure angle AEN1, angle FEN2 and angle DFN2' labelled as angle i, angle r and angle e respectively.</li>
            <li>Now place the glass slab at some other position on the sheet of paper fixed on the board and repeat all the above steps again taking another angle of incidence.</li>
            <li>Measure the angle of incidence i.e angle of refraction, angle of emergence, again.</li>
            <li>Make a record of your observations in the observation table as shown below.</li>
          </ol>
          <img src={img1} alt="" />
        </div>

        <div className="theory mb-8 pb-10">
          <p className="text-dark font-semibold text-xl mb-1">Obsevation Table</p>
          <img src={img2} alt="" />
        </div>
      </div >
    </>
  )
}

export default BioProcedure101