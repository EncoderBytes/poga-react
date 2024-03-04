import React from 'react'

const BioVivaVoice103 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. What is the purpose of examining the structure of the kidney?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> To understand the anatomy and function of the kidney</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> To identify abnormalities or diseases in the kidney</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> To study the filtration and excretion processes in the kidney</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> All of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. What is the main function of the kidney?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Regulation of body temperature</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Production of red blood cells</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Filtration of waste products from the blood</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Secretion of digestive enzymes</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. Which part of the kidney is responsible for the filtration of blood?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Renal cortex</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Renal medulla</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Renal pelvis</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> Renal artery</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. What is the functional unit of the kidney?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Nephron</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Glomerulus</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Ureter</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Collecting duct</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Which structure of the kidney is responsible for collecting urine from the nephrons?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Glomerulus</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Ureter</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Renal pelvis</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> Renal tubule</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">6. What is the role of the glomerulus in the kidney?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer6" value="option1" /> Filtration of blood</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option2" /> Reabsorption of water and nutrients</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option3" /> Secretion of waste products</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option4" /> Storage of urine</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">7. What are some common kidney disorders?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer7" value="option1" /> Kidney stones</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option2" /> Urinary tract infections</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option3" /> Chronic kidney disease</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option4" /> All of the above</label></li>
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

export default BioVivaVoice103