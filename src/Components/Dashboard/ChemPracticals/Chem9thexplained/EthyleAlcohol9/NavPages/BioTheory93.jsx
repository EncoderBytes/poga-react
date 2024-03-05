import React from 'react'

const BioTheory93 = () => {
  return (
    <div className='w-4/5 pl-4'>
      <div className="aim mt-8 mb-3">
        <p className="text-dark font-semibold text-xl mb-1">Osmosis - Definition, Types, Tonicity & Examples</p>
        <p className="text-dark50 font-normal text-base pl-3">Osmosis is defined as the transfer of a solvent from a higher concentration zone to a lower concentration region over a semipermeable membrane until equilibrium is attained. In layman's terms, it is the flow of water or a solvent from a dilute solution to a concentrated solution in order to overcome a concentration difference. The solvent molecules are allowed to flow through a semi-permeable membrane filter. Only some solutes can pass through a semipermeable membrane.</p>
        <p className="text-dark font-semibold text-xl mb-1 pl-1 mt-2">Tonicity of Solution</p>

        <p className="text-dark50 font-normal text-base pl-1 my-3">To understand the different types of osmosis, first learn about the three different types of osmosis solutions based on their concentration or tonicity. Tonicity of solution is the concentration of a solution in comparison to normal cell sap. Cell sap is the solvent (solution) found within the cell's vacuole and cytoplasm.</p>

        <ul className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li>Isotonic solution: This is a solution in which the concentrations of cell sap and outside solution are equal. There is no movement of water molecules within or outside the cell when a cell is retained inside it due to equal concentration or water potential in both. As an example, consider 0.9% saline water.</li>
          <li>Hypotonic solution: This is a solution that has a higher concentration of cell sap than the outer solution. When a cell is kept inside it, water molecules from the outside solution move inside the cell. Endosmosis occurs as a result. Examples include food packaging and dehydration solutions.</li>
          <li>Hypertonic solution: This is a solution that has a low concentration of cell sap and a high concentration of outer solution. When a cell is retained in it, water molecules flow from the cell to the surrounding solution. Exosmosis occurs as a result. Examples include 0.45% saline solution, 5% dextrose solution, and so on.</li>
        </ul>
      </div>

      <div className="theory mb-3 pb-3">
        <p className="text-dark font-semibold text-xl mb-1 underline pl-1">Types of Osmosis</p>
        <p className="">There are 2 types of Osmosis</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li>Exosmosis</li>
          <li>Endosmosis</li>
        </ul>


        <p className="text-dark font-semibold text-xl mb-1">Exosmosis</p>
        <p className="text-dark50 font-normal text-base pl-3">Water molecules leave the cells in this type (exo=out). When a plant or animal cell is immersed in a hypertonic solution (or under high osmotic pressure), water molecules leak from the cell. This occurs as a result of the flow of water from the cell to the outside solution in which it is stored. To exhibit exosmosis in a cell, it should be kept in a hypertonic solution. Exosmosis is the occurrence of outward flow of water from the cell when it is held in a hypertonic solution.</p>

        <p className="text-dark font-semibold text-xl mb-1">Endosmosis</p>
        <p className="text-dark50 font-normal text-base pl-3">(Endo=inside) water molecules enter the cell. Water molecules enter a plant or animal cell when it is immersed in a hypotonic solution (or under low osmotic pressure). This occurs as a result of water moving from the hypotonic solution to the cell. To demonstrate endosmosis in a cell, keep it in hypotonic solution so that the concentration of sap inside the cell is greater than the concentration of solution outside the cell. Exosmosis is the phenomena of inward flow of water inside the cell when kept in hypotonic solution.</p>

        <p className="text-dark font-semibold text-xl mb-1">Examples of Osmosis</p>
        <p className="text-dark50 font-normal text-base pl-3"> <strong> In Animals:</strong> Brusting and death of bacteria inside prickles as a result of exosmosis, vomiting blood by leeches after spraying salt on its body surface, swelling of legs and fingers during rainy season owing to frequent contact with water, effect of erythrocytes in different types of solutions: Inside isotoic-it remains normal, inside hypertonic-it shrinks owing to exosmosis, and inside hypotonic-it swells due to endosmosis.</p>
        <p className="text-dark50 font-normal text-base pl-3 pb-10"> <strong>In Plants: </strong>stomata protect cells open and close, roots receive water from the soil, seeds germinate by absorbing water, and water equilibrium is maintained within cells and tissues.</p>
      </div>
    </div>
  )
}

export default BioTheory93