import Button from "./eventos/Button"

function Evento() {
    function meuEvento() {
        alert(`Ativando primeiro Evento`)
    } 

    function segundoEvento() {
        alert('Ativando o segundo evento!')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento