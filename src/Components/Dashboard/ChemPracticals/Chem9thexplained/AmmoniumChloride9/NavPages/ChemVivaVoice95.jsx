import React from 'react'

const ChemVivaVoice95 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. Which of the following is known as the reverse of sublimation?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> Desublimation</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> Solidification </label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Both (a) and (b)</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> None of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. Dry ice is an example of a solid that undergoes</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Solidification</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Sublimation</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Both (a) and (b)</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> None of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3: Which of the following state is not formed during sublimation?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Solid</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Liquid</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Gas</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> None of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. Which of the following mixture can be separated by sublimation?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Iodine and Ammonium chloride</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Iodine and sodium chloride</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Magnesium chloride and sodium chloride</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Lead chloride and sodium chloride</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Which of the following undergo sublimation?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Naphthalene balls</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Ammonium chloride</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Carbon dioxide</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> All of the above</label></li>
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

export default ChemVivaVoice95