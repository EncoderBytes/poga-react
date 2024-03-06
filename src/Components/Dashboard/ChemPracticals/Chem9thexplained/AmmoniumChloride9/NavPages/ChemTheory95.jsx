import React from 'react'
import img from "../../../../../../assets/chem/theory2.png"
import img2 from "../../../../../../assets/chem/theory3.png"

const ChemTheory95 = () => {
  return (
    <div className='w-4/5 pl-4 pb-14 pt-5'>
      <p className="text-dark font-semibold text-xl mb-1">What is Sublimation?</p>
      <p className="text-dark50 font-normal text-base pl-3 mb-4">If you fill the ice trays with water; place them in the freezer, the next day you will observe that the ice had formed cubes as it froze. If you drop those cubes on the floor, they will quickly turn into a puddle of ice. Freezing and melting are two common phase transitions or changes in the state of a substance from a solid to liquid, gas, plasma, or vice versa.</p>

      <img src={img} alt="" className='mb-5' />

      <p className="text-dark font-semibold text-xl mb-1">Sublimation?</p>
      <p className="text-dark50 font-normal text-base pl-3 mb-4">Sublimation is one such phase transition. Except that in sublimation, we have a solid that converts directly to gas. When a material sublimes from a solid to a gas, it never goes into a liquid state. Sublimation is just one way of how water or some other substance can switch between its potential phases.</p>

      <p className="text-dark50 font-normal text-base pl-3 mb-4">For example, some sublimation compounds are iodine, ammonium chloride, naphthalene, camphor, etc.</p>

      <p className="text-dark font-semibold text-xl mb-1">Examples of Sublimation</p>
      <ol className="text-dark50 font-normal text-base pl-5 list-decimal pb-10">
        <li>One of the best examples of sublimation is dry ice, a frozen form of carbon dioxide. Dry ice has a direct solid to gaseous phase transition when dry ice is exposed to air, it can be seen as fog. The gaseous state of frozen carbon dioxide is more stable than the solid-state.</li>
        <li>The organic compound naphthalene is also an example of sublimation. It is found in pesticides. The presence of polar molecules sublimates this organic compound, supported by intermolecular van Der Waals forces. It dehydrogenates at low temperatures and forms needle-like crystals.</li>
        <li>Sublimation is the transformation between the solid and gas state of a substance without an intermediate liquid phase. In the water cycle, sublimation is often used to describe how ice and snow turn into water vapor in the air but do not dissolve in water at first.</li>
        <li>Frozen burns are the result of the sublimation of ice into steam.</li>
        <li>At the right temperature, the elements iodine and arsenic change from a solid to a gaseous state</li>
        <li>Water ice sublimes, although more slowly than dry ice. The effect can be seen in snowy fields when the sun rises, but the temperature is low or cold.</li>
      </ol>

      <img src={img2} alt="" className='mb-5' />


      <p className="text-dark font-semibold text-xl mb-1">Applications of Sublimation</p>
      <ol className="text-dark50 font-normal text-base pl-5 list-decimal pb-10">
        <li>Naphthalene balls undergo sublimation to keep the moths and insects away.</li>
        <li>Camphor sublimes to release a pleasant fragrance.</li>
        <li>In the textile industry, sublimation is used for the T-shirt printing process.</li>
        <li>In the food industry, freeze-drying of food items for preservation for a longer duration is due to the process of sublimation.</li>
        <li>Dye sublimation printers are now widely used for the printing process.</li>
      </ol>
    </div>
  )
}

export default ChemTheory95