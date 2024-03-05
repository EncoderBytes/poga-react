import React from 'react'

const BioVivaVoice92 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1: The term cell was given by
            </p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> Robert Hooke</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> Tatum</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Schwann</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> De Bary</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2: The cell is not applied for</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Algae</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Bacteria</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Virus</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Fungi</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3: The membrane around the vacuole is known as</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Tonoplast</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Elaioplast</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Cytoplast</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> Amyloplast</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. Microfilaments are composed of a protein called</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Tubulin</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Actin</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Myosin</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Chitin</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. A plant cell wall is mainly composed of</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Protein</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Cellulose</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Lipid</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> Starch</label></li>
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

export default BioVivaVoice92