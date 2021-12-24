import React from 'react';
import Card from './shared/Card';
import {FaTimes, FaEdit} from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item}) {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

    return (
        <Card reverse={true}>

            <div className="num-display">{item.rating}</div>

            <button 
                className="close"
                onClick={() => deleteFeedback(item.id)}
            >
            <FaTimes color='pink' />
            </button>

            <button 
                className="edit"
                onClick={() => editFeedback(item)}
            >
                <FaEdit color='pink' />
            </button>

            <div className="text-display">{item.text}</div>

        </Card>
    )
}

export default FeedbackItem




// the divs are apart of "the state" ie: these will be dynamic and change. 
// useState(7); <-- default state goes here, default rating of 7/10
// we are de-structuring an array from what the useState() function returns. 
// [rating, setRating] 1st = the name of the piece of state. 2nd = the function to update that piece of state 
// state in react is immutable, it cant be directly changed, it has to be reset via the set function. and for example if you have an array of data already defined, you have to copy that and add to it. 

// BASIC COUNTER COMPO
// function Counter() {
//     const [count, setCount] = useState(0); 
//     const handleClick = () => {
//         setCount((prev) => {
//             return prev + 1;
//         });
//     }
//     return (
//         <div>
//             <button onClick={handleClick}>+1 counter</button>
//         </div>
//     )
// }

