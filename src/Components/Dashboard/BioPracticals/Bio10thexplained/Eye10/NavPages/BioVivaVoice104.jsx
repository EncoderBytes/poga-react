import React from 'react'

const BioVivaVoice104 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. State the principle of moments as applied to a lever:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> Force, F1×Moment arm, d1= Force, F2×Moment arm, d2</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> Force, F1= Force, F2</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Moment arm, d1= Moment arm, d2</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> Force, F1× Moment arm, d2 = Force, F2× Moment arm, d1</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. The moment of a force of 10N about a fixed point O is 5N m. Calculate the distance of the point O from the line of action of the force.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> 0.5m</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> 0m</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> 0.005m</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> 5m</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. A 10 N force is applied at a distance of 1 m from the hinge of door such that the line of action of force is parallel to the plane of the door. The moment of force produced on the door is</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> 100Nm</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> 0Nm</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> 0.1Nm</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> 10Nm</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. When is the moment of forces positive?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> When the forces rotate the body in clockwise direction.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> When the forces rotate the body downward.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> When the forces rotate the body upward.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> When the forces rotate the body in anticlockwise direction.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. The moment of a force about a given axis depends:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Only on the magnitude of force.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Only on the perpendicular distance from the axis.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" />
                    Neither the force nor on the perpendicular distance from the axis.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> Both on the force and the perpendicular distance from the axis.</label></li>
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

export default BioVivaVoice104