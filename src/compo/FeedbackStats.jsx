import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext); 

    // add all ratings in feedback array and divide by the number of ratings.
    // reduce takes accumulator and current value, and we set the initial value to zero. 

    let average = feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, ''); // allows decimals, stops trailing .000

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats
