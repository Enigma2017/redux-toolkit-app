export const Card = ({item}) => {
    return (
        <div className="card">
            <h1>{item.title}</h1>
            <div>{item.text}</div>
        </div>
    )
}