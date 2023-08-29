export const FeedbackOptions = ({options, onLeaveFeedback}) => {
return <div>
    <h2>Plase leave feedback</h2>
    {options.map(option => {
        return <button key={option} onClick={evt => {
            onLeaveFeedback(evt.target.value)
        }}>{option}</button>
    })}
    </div>
}