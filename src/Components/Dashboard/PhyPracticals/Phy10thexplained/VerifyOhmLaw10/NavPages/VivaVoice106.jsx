import React from 'react'

const VivaVoice106 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. Ohm’s law is not applicable to.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> DC circuits.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> AC circuits.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Semiconductors</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> Resistors</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. Ohm’s law is not applicable to.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Insulators</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Electrolytes</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Arc Lamps</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> All of the above.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. Ohm’s law gives the relationship between.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Magnetic field and potential difference.</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Electric current and magnetic field.
                </label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Electric current and potential difference.</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> None of the above.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. Conductance is expressed in terms of:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> ohm/m2</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> ohm</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> mho/m.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> mho</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Current-voltage relationship is written as:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> V=IR.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> V=I/R.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> V=I-R.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> V=I+R.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">6. Why is Ohm’s law called universal law?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer6" value="option1" /> It is applicable to ohmic conductors.
                </label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option2" /> It is not applicable to non-ohmic conductors.</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option3" /> It is not applicable to Semiconductors.</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option4" /> All of the above.
                </label></li>
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

export default VivaVoice106