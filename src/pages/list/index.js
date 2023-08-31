const List = () => {
    const FootbalPlayer = [
        {
            name: "Cristiano Ronaldo",
            id: 1
        },
        {
            name: "Lionel Mesy",
            id: 2
        },
        {
            name: "Mbida Messy",
            id: 3
        }
    ]
    return(
        <div>
            <h1>List footbal player</h1>
            <ul>
                {FootbalPlayer.map((player) => {
                    return (
                        <li key={player.id}>
                            <h3>{player.name}</h3>
                            <p>{player.id}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}
export default List;