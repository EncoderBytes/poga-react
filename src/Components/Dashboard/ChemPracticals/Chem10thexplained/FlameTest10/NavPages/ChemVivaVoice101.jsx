import React from 'react'

const ChemVivaVoice101 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. Firstly the Nicrome wire is________________to clean the wire</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> Calcium ion</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> Sodium ion</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Concentrated HCL</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> Burner Flame</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. ____________results in Crimson flame.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Sodium ions</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Lithium ions</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Calcium io</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Potassium ions</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4"> 3. ____________results in yellow flame.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Sodium ions</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Lithium ions</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Calcium io</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> Potassium ions</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4.  ____________results in lilac flame.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Sodium ions</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Lithium ions</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Calcium io</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Potassium ions</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. ____________results in orange red flame.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Sodium ions</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Lithium ions</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Calcium io</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> Potassium ions</label></li>
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

export default ChemVivaVoice101