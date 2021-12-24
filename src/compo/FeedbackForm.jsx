import React from 'react';
import Card from './shared/Card';
import { useState, useContext, useEffect } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {

    const [text, setText] = useState(''); 
    const [btnDisabled, setBtnDisabled] = useState(true); 
    const [message, setMessage] = useState(''); 
    const [rating, setRating] = useState(0); 

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    // good for HTTP requests. whatever is defined will fire when the compo is loaded.
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,         // could refactor --> text
                rating: rating      // could refactor --> rating 
            }
            
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }
            
            setText("");
        }
    }

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("Review must be at least 10 characters.")
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Tell us how we did! Please feel free to rate out service. Thanks and come again.</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="leave a review"
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button 
                        type="submit"
                        version="primary"
                        isDisabled={btnDisabled}
                    >
                        send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm

