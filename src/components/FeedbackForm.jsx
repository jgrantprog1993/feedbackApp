import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback} = useContext(FeedbackContext)

    const handleTextChange = (e) => {
        
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10){
            setMessage('Text Must be at least 10 chars')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10)
        {
            const newFeedback = {
                text,
                rating
            }
            console.log(newFeedback)
            addFeedback(newFeedback)
            setText('')
        }
    }

    return(
        <Card>
           
            <form onSubmit={handleSubmit}>
                <h2> How would you rate us ?</h2>    
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input 
                        onChange={handleTextChange} 
                        type='text' 
                        placeholder="Write a review" 
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div> }
            </form>
        </Card>
    )
}

export default FeedbackForm
