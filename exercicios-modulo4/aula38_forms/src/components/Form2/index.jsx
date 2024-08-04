import { useState } from "react"
import './Form2.css'


const Form2 =()=>{

    const [user, setUser] = useState({
        name: '',
        email:'',
        password:'',
        confirmPassword:''
    })

    function showError(key, message){
        const inpt = document.getElementById(`${key}`);
        const errorMessage = inpt.parentElement.querySelector(`.erro-${inpt.id}`);
        errorMessage.textContent= message;
        errorMessage.style.display = 'block';
        
    }

    function hideError(key) {
        const inpt = document.getElementById(`${key}`);
        const errorMessage = inpt.parentElement.querySelector(`.erro-${inpt.id}`);
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
    }

    function isBlank(input_value){
        const inpt = document.getElementById(`${input_value}`);
        const errorMessage = inpt.parentElement.querySelector(`.erro-${inpt.id}`);
        errorMessage.textContent=` O Campo ${inpt.className} não pode ser branco`;
        errorMessage.style.display = 'block';
    }

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setUser(prevState =>({
            ...prevState,
            [name]:value
        }))

        hideError(name)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        let message = ''
        let isValid =true

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        Object.keys(user).forEach(key => {
            if (user[key].trim() === '') {
                isBlank(key);
                isValid = false
            } else if (key == 'password' && user[key].length< 8){
                message= 'O campo senha precisa ter no mínimo 8 caracteres'
                showError(key, message)
                isValid = false
            } else if( key == 'confirmPassword' && user['password'] !== user[key]){
                message = 'O campo confirmar a senha e o campo senha precisam ser iguais'
                isValid = false
            } else if(key == 'email' && !emailRegex.test(user[key])){
                message = 'Formato incorreto. Siga o padrão: teste@email.com'
                showError(key, message)
                isValid = false
            }
        });

        if(isValid){
            const sucesso = document.getElementById('valid')
            sucesso.style.display = 'block'
        }
        
    }
    

    return(
        <>
            <h2>Registre-se:</h2>
            <br />
            <form onSubmit={handleSubmit}>
            <label>
                Nome Completo:
                <input id="name" className="nome" type="text" name="name" value={user.name} onChange={handleChange}/>
                <span className="erro erro-name"></span>
            </label>

            <br /><br />
            <label>
                Email:
                <input id="email" className="email" type="text" name="email" value={user.email} onChange={handleChange}/>
                <span className="erro erro-email"></span>
            </label>
            <br /><br />
            <label>
                Senha:
                <input id="password" className="senha" type="password" name="password" value={user.password} onChange={handleChange}/>
                <span className="erro erro-password"></span>
            </label>
            <br /><br />
            <label>
                Confirme a Senha:
                <input id="confirmPassword" className="confirmar_Senha" type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
                <span className="erro erro-confirmPassword"></span>
            </label>
            <br />
            <br />
            <button type="submit">Enviar</button>
        </form>
        <h3 id="valid">Parabéns! Seu  formulário foi cadastrado com sucesso</h3>
        </>
    )
}

export default Form2