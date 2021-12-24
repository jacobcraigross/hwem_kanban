import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

// for compos to get access to state/context, gotta create a provider, which will wrap the compos, similar to the router. 

// {children} here are compos that need access to state/context.

export const FeedbackProvider = ({children}) => {

    // you can create reducers, but here will KISS and useState. (later will reduce!)
    const [feedback, setFeedback] = useState([
        {
            id: 1, 
            text: "this mock hardcoded feedback 1",
            rating: 9
        },
        {
            id: 2, 
            text: "this mock hardcoded feedback 2",
            rating: 2
        },
        {
            id: 3, 
            text: "this mock hardcoded feedback 3",
            rating: 5
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}, 
        edit: false
    });

    // moved these from app.js --> now getting passed in with feedback below.
    const deleteFeedback = (id) => {
        if (window.confirm("are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item, 
            edit: true
        });
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedItem} : item));
    }

    return (
        <FeedbackContext.Provider value={{
            feedback, 
            deleteFeedback, 
            addFeedback, 
            editFeedback, // --> function that gets called 
            feedbackEdit, // --> piece of state that holds item / boolean
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}  

export default FeedbackContext;

