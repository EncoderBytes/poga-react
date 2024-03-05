import React from 'react'

const BioVivaVoice93 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. An animal cell is placed in HYPERTONIC solution, what happens to the cell?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> Shrinks from water loss</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> Nothing happens</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Solute moves in and out</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> Cell swells and bursts</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. What term is used to describe when two solutions have reached a balanced state?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Tonicity</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Equilibrium</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Hypotonic</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Hypertonic</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. The external solution that has less concentration than the cell sap is called</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Hypertonic solution</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Isotonic solution</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Hypotonic solution</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> Ultrasonic solution</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. Water loss from the stomata of leaves is known as</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Evaporation</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Guttation</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Exudation</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Transpiration</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. The reverse of plasmolysis is known as</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Endosomosis</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Exosmosis</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Deplasmolysis</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> Plasmolysis</label></li>
            </ol>

            <div className="btn-container mt-10 pl-2 pb-3">
                <button type="submit" className='btn py-5 px-8 rounded-lg text-overviewWhite font-semibold text-base' style={{
                    background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                }}>Submit</button>

                <span className="bg-aliceBlue py-5 px-8 rounded-lg font-semibold text-base ml-5 cursor-pointer" >
                    <button className="btn" type="reset" style={{
                        background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}>Cancel</button>
                </span>
            </div>
        </div>
    )
}

export default BioVivaVoice93