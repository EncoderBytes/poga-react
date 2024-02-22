import React from 'react'

const VivaVoice102 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. In series circuit, the total resistance is equal to:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> The sum of individual resistances.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> The product of individual resistances.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> The average of individual resistances.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> The difference of individual resistances.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. When resistors are connected in series, the current passing through each resistor is:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> The same.</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Different for each resistor.</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Inversely proportional to its resistance.</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Directly proportional to its resistance.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. If three resistors of 10Ω, 20Ω, and 30Ω are connected in series, the total resistance would be</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> 60Ω</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> 40Ω</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> 10Ω</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> 5Ω</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. The total voltage drop across each resistors in a series circuit is:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> The same.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Different for each resistor.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Proportional to its resistance.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Proportional to its current.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. What is the purpose of using multiple resistors in a series circuit?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> To increase the total current.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> To decrease the total voltage.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> The reduce the risk of overheating.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> To increase the total resistance.</label></li>
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

export default VivaVoice102