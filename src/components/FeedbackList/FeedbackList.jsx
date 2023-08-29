export const FeedbackOptions = ({options, onLeaveFeedback}) => {
return <div>
    {options.map(option => {
        if (option !== 'total' && option !== 'positive') {
            return <button key={option} onClick={() => {
            onLeaveFeedback(option)
        }}>{option}</button>
        }
        return;
    })}
    </div>
}