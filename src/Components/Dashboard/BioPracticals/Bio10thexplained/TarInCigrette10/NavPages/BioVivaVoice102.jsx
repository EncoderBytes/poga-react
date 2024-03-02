import React from 'react'

const BioVivaVoice102 = () => {
    return (
        <>
            <div className=" mt-5 pl-3">
                <p className="font-semibold text-dark text-xl my-4">1. Precision of Vernier callipers is</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer1" value="option1" /> 1mm</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option2" /> 0.1mm</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option3" /> 1cm</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option4" /> 0.1cm</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">2. One kilometre is equal to how many miles?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer2" value="option1" /> 0.84</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option2" /> 0.5</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option3" /> 1.6</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option4" /> 0.62</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">3. The number of significant figures in 0.00040 m is</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer3" value="option1" /> 1</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option2" /> 2</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option3" /> 3</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option4" /> 4</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">4. Which of the following measurements is most precise?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer4" value="option1" /> 5.00mm</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option2" /> 5.00cm</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option3" /> 5.00m</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option4" /> 5.00km</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">5. One nanometre is equal to</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer5" value="option1" /> 10 - 5 m</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option2" /> 10 - 6 m</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option3" /> 10 - 8 m</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option4" /> 10 - 9 m</label></li>
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
        </>
    )
}

export default BioVivaVoice102