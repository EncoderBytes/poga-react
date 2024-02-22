import React from 'react'

const VivaVoice102 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. If you break a magnet into two pieces, what will happen to the magnetic field lines?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> The magnetic field lines will disappear.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> The magnetic field lines will follow the new shape of each piece.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> The magnetic field lines will become stronger.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> The magnetic field lines will rearrange to form two separate magnets.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2.  What is the reason behind the shape of the magnetic field around a bar magnet?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> The magnet’s energy creates a spiral pattern.</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> The magnetic field lines are attracted to the Earth’s magnetic poles.</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> The magnetic field lines represent the flow of magnetic force.</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> The shape is random and doesn’t have a specific explanation.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. If you place a compass near a bar magnet, where will the compass needle points?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Towards the north pole of the magnet.</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Towards the south pole of the magnet.</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Parallel to the length of the magnet.</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> The compass needle will not be affected by the magnet.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. What is the primary reason for using a bar magnet to demonstrate magnetic field lines?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Bar magnets are more powerful than other types of magnets.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Bar magnets have a more predictable and a simple magnetic field pattern.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Bar magnets are easier to handle and manipulate.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Bar magnets can be easily attached to the surfaces for display.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. At what points on the bar magnet are the magnetic field lines the strongest?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> At the ends(poles) of the magnet.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Near the center of the magnet.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Along the sides of the magnet.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> There is no specific pattern for the strength of magnetic field lines.</label></li>
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