import { useState } from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${senha}`)
    }

    const [name, setName] = useState()
    const [senha, setSenha] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text"
                    name="name" 
                    id="name" 
                    placeholde="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor="isenha">Senha: </label>
                    <input 
                    type="password" 
                    name="senha" 
                    id="senha" 
                    placeholde="Digite sua senha"
                    onChange={(e) => setSenha(e.target.value)}>
                    </input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form