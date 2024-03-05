import React from 'react'

const BioVivaVoice95 = () => {
    return (
        <>
            <div className=" mt-5 pl-3">
                <p className="font-semibold text-dark text-xl my-4">1. What are bacteria?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer1" value="option1" /> Multi-celled microorganisms
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option2" /> Single-celled microorganisms
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option3" /> Single-celled microorganisms
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option4" /> Plant-like organisms</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">2. How does Amoeba move?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer2" value="option1" /> Using flagella</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option2" /> Using cilia
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option3" /> Using pseudopodia
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option4" /> Using tentacles
                    </label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">3. What is the locomotion method of Paramecium?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer3" value="option1" /> Using flagella
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option2" /> Using cilia
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option3" /> Using pseudopodia
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option4" /> Using tentacles
                    </label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">4. How does Volvox move?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer4" value="option1" /> Using flagella
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option2" /> Using cilia
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option3" /> Using pseudopodia
                    </label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option4" /> Using tentacles
                    </label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">5. What is the main difference between bacteria and Amoeba in terms of cell structure?
                </p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer5" value="option1" /> Bacteria have a nucleus, while Amoeba does not.</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option2" /> Bacteria have membrane-bound organelles, while Amoeba does not.</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option3" /> Bacteria have cell walls, while Amoeba does not.</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option4" /> Bacteria have chloroplasts, while Amoeba does not.</label></li>
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

export default BioVivaVoice95