import{ useState } from 'react'

function Condicional (){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    //Função que irá receber o evento e fazer o update do estado.
    function enviarEmail (e) {

        //Prevents the pages from refreshing / reloading 
        e.preventDefault()
       setUserEmail(email)
       console.log (userEmail)
    }
    function limparEmail (e) {

      setUserEmail('')
       
    }

    return(
        <div>
            <h2> Cadastre o seu e-mail:</h2>
            <form>
            <input type ="email" placeholder="Digite seu e-mail aqui!"
            onChange={(e) => setEmail(e.target.value)}/>
                <button type = "submit" onClick={enviarEmail}>
                    Enviar e-mail.
                </button>
                {userEmail &&(
                    <div>
                       <p>O e-mail do usuário é :{userEmail}</p> 
                       <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )

}

export default Condicional












