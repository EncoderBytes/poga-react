import React from 'react'

const VivaVoice103 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. A voltage across a series resistor circuit is proportional to</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> Sum of the values of the other resistances on the circuit.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> The value of the other resistances and capacitance in the circuit.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> The value of resistance itself.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> None of the above.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. Battery source is generally connected in:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Parallel</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Series</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Neither series nor parallel.</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> None of the above.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. Many resistors connected in series will?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Reduce the power to zero</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Divides the voltage proportionally across all the resistors.</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Divides the current proportionally across all the resistors.</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> None of the above.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. Which physical quantity will remain constant when the resistors are connected in parallel?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Current</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Voltage</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Power</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> EMF</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. What will be the total resistance, when two equal resistors are connected in series?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> 3R</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> 2R</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> R</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> 1/2 R</label></li>
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

export default VivaVoice103