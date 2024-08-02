import { useState } from "react"



const Form =()=>{

    const [address, setAddress] = useState({
        street: '',
        city: '',
        postalCode: ''
    })

    const handleChange = (event) =>{
        const { name, value} = event.target;
        setAddress(lastAddress => ({
            ...lastAddress, 
            [name]:value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        if(!address.street || !address.city || !address.postalCode){
            alert('Nenhum campo pode ficar em branco')
        }else{
            alert(`Endereço submetido: \nRua: ${address.street}\nCidade: ${address.city}\nCEP: ${address.postalCode}`);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name="street" value={address.street} onChange={handleChange} />
            </label>
            <br />
            <label>
                Cidade:
                <input type="text" name="city" value={address.city} onChange={handleChange} />
            </label>
            <br />
            <label>
                CEP:
                <input type="text" name="postalCode" value={address.postalCode} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form