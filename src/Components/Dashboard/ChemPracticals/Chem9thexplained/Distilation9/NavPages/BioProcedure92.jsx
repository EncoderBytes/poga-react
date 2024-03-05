import React from 'react'
import img from "../../../../../../assets/bio/Bio9th/Picture3.jpg"

const BioProcedure92 = () => {
  return (
    <>
      <div className='w-4/5 pl-4 pb-3'>
        <div className="aim mb-3 mt-8">
          <p className="text-dark font-semibold text-2xl mb-1">To Prepare Stained Temporary Mount of Onion Peel</p>
          <p className="text-dark font-semibold text-xl mb-1">Materials Required</p>

          <img src={img} alt="" className='my-5' />

          <p className="text-dark font-semibold text-xl mb-1">Real Lab Procedure</p>
          <ol className="text-dark50 font-normal text-base pl-5 list-decimal">
            <li>Peel off a leaf from half a piece of onion and using the forceps, pull out a piece of transparent onion peel (epidermis) from the leaf.</li>
            <li>Put the epidermis in the Beaker containing distilled water for 1 minute.</li>
            <li>Take a few drops of Methylene Blue in a dropper and pour 2-3 drops at the center of a dry glass slide.</li>
            <li>Using the brush, place the peel onto the slide containing Methylene Blue.</li>
            <li>Take a cover slip and place it gently on the peel with the aid of a needle.</li>
            <li>Remove the extra Methylene Blue using a piece of blotting paper.</li>
            <li>Place this glass side on the stage of the compound microscope and view it.</li>
          </ol>

          <p className="text-dark font-semibold text-xl mb-1">Observations</p>
          <ol className="text-dark50 font-normal text-base pl-5 list-decimal">
            <li>There are a large number of regularly shaped cells lying side by side and each cell has a distinct cell wall.</li>
            <li>A distinct nucleus is present on the periphery of each cell.</li>
            <li>Lightly stained cytoplasm is observed in each cell.</li>
            <li>A large vacuole is present at the centre of each cell, and is surrounded by the cytoplasm.</li>
          </ol>

          <p className="text-dark font-semibold text-xl mb-1">Conclusion</p>
          <p className="text-dark50 font-normal text-base pl-3">As cell walls and large vacuoles are clearly observed in all the cells, the cells placed for observation are plant cells.</p>

          <p className="text-dark font-semibold text-xl mb-1">Precautions</p>
          <ol className="text-dark50 font-normal text-base pl-5 list-decimal">
            <li>Use a brush to transfer the peel from one apparatus to another.</li>
            <li>Staining of peel should neither be too dark, nor too light.</li>
            <li>Extra Methylene Blue stain should be removed using blotting paper.</li>
          </ol>
        </div>
      </div >
    </>
  )
}

export default BioProcedure92