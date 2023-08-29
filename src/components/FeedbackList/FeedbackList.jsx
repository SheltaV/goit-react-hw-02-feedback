export const FeedbackList = ({onChangeGood, onChangeNeutral, onChangeBad, onChangeTotal, onChangePositive}) => {
return <div>
        <h2>Plase leave feedback</h2>
    <button onClick={evt => {
        onChangeGood(evt.target.value)
        onChangeTotal()
    onChangePositive()}}>Good</button>
    <button onClick={evt => {
        onChangeNeutral(evt.target.value)
        onChangeTotal()
    onChangePositive()}}>Neutral</button>
    <button onClick={evt => {
        onChangeBad(evt.target.value)
        onChangeTotal()
    onChangePositive()}}>Bad</button>
    </div>
}