import React from 'react'

const ChemVivaVoice93 = () => {
    return (
        <>
            <div className=" mt-5 pl-3">
                <p className="font-semibold text-dark text-xl my-4">1. Naphthalene is used to make:</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer1" value="option1" /> Mothballs</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option2" /> Carbonated Beverages</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option3" /> Cookies</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option4" /> Stainless Steel</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">2. Naphthalene is made from:</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer2" value="option1" /> Sulphuric acid</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option2" /> Coal Tar</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option3" /> Glue</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option4" /> Glass</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">3. Naphthalene (at room temperature) is:</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer3" value="option1" /> A clear liquid</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option2" /> A yellow gas</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option3" /> A white solid</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option4" /> An orange solid</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">4. The melting point of ice is_________?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer4" value="option1" /> 0oC </label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option2" /> 100oC</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option3" /> 4oC </label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option4" /> -4oC</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">5. Which of the following is mixture?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer5" value="option1" /> Water</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option2" /> Air</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option3" /> Common salt</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option4" /> Plaster of Paris</label></li>
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

export default ChemVivaVoice93