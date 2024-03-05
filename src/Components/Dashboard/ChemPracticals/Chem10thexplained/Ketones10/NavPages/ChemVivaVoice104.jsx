import React from 'react'

const ChemVivaVoice104 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1: What is the purpose of observing binary fission in Amoeba?
            </p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> To study the process of reproduction in unicellular organisms</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> To understand the mechanism of cell division in Amoeba</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> To observe the growth and multiplication of Amoeba colonies</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> All of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2: How does Amoeba reproduce through binary fission?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> By producing spores that divide into new individuals</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> By forming daughter cells through a process of cell division</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> By undergoing sexual reproduction with another Amoeba</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> By releasing gametes that fuse to form new individuals</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3: What are the steps involved in binary fission of Amoeba?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Budding, maturation, and release of daughter cells</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Fertilization, embryonic development, and birth of offspring</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> DNA replication, elongation, and division of the cell</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> DNA replication, elongation, and division of the cell</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. What is the significance of using slides, photomicrographs, and charts in observing binary fission in Amoeba?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> To visualize and document the different stages of binary fission</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> To compare the process of binary fission in Amoeba with other organisms</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> To analyze the time duration and frequency of binary fission</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> To study the genetic variations in Amoeba during reproduction</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. How can photomicrographs assist in the observation of binary fission in Amoeba?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> By providing high-resolution images of the cellular structures involved</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" />  By measuring the size and shape of the Amoeba cells</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> By identifying the specific stage of binary fission in each image</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> By showing the movement and behavior of Amoeba during division</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">6. What information can be obtained from charts depicting the stages of binary fission in Amoeba?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer6" value="option1" /> The average duration of each stage in the process</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option2" /> The number of daughter cells produced in each division</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option3" /> The genetic variations observed during binary fission</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option4" /> The environmental factors influencing the rate of division</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">7. What are the possible challenges in observing binary fission in Amoeba?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer7" value="option1" /> Difficulty in capturing live Amoeba cells for observation</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option2" /> The fast and rapid nature of the division process</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option3" /> Contamination or interference from other microorganisms</label></li>
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

export default ChemVivaVoice104