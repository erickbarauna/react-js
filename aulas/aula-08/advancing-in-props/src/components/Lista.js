import Item from "./Item"

function Lista() {
    return (
        <>
            <h1>Minha Lista:</h1>
            <ul>
                <Item marca={"Ferrari"} ano_lancamento={1955} />
                <Item marca={"Mercedes-benz"} ano_lancamento={1940} />
                <Item marca={"Tesla"} ano_lancamento={2010} />
            </ul>
        </>
    )
}

export default Lista