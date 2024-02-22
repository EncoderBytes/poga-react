import React from 'react'

const TheoryPhy102 = () => {
  return (
    <div className='w-4/5 pl-4'>
      <div className="aim mt-8 mb-3">
        <p className="text-dark font-semibold text-xl mb-1">Theory</p>
        <p className="text-dark font-semibold text-xl mb-1 underline pl-1">Magnetic Field:</p>
        <p className="text-dark50 font-normal text-base pl-3">Magnetic Field is the region around a magnetic material or a moving electric charge within which the force of magnetism acts. <br />
          In household electric distribution, Parallel circuit connections are applied. The reason why a parallel circuit is preferred is to avoid short circuits and to monitor the flow of current for different devices. Below is an experiment to determine the equivalent resistance when the resistors are connected in parallel.</p>
      </div>

      <div className="theory mb-3 pb-3">
        <p className="text-dark font-semibold text-xl mb-1 underline pl-1">Magnetic Field Lines:</p>
        <p className="text-dark50 font-normal text-base pl-3 mb-3">
          Field lines are an alternative way to represent the information contained within a magnetic vector field. Magnetic field lines are imaginary lines. Magnetic field lines are a visual tool used to represent magnetic fields. They describe the direction of the magnetic force on a north monopole at any given position The density of the lines indicates the magnitude of the field. Taking an instance, the magnetic field is stronger and crowded near the poles(north pole and south) of a magnet. As we move away from the poles, it is weak, and the lines become less dense.
        </p>
        <p className="text-dark font-semibold text-xl mb-1">Properties of magnetic field:</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-disc">
          <li>Magnetic field lines never cross each other</li>
          <li>The density of the field lines indicates the strength of the field</li>
          <li>Magnetic field lines always make closed loops</li>
          <li>Magnetic field lines always emerge or start from the north pole and terminate at the south pole.</li>
        </ul>
      </div>
    </div>
  )
}

export default TheoryPhy102