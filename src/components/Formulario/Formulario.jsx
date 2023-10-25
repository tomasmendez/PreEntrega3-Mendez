import { useState } from "react";
import { Button } from "react-bootstrap";
import './Formulario.css';


function Formulario(props) {
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [observaciones, setObservaciones] = useState("")
    const enviarFormulario = () => {
        props.enviar({ nombre, telefono, email, observaciones })
    }
    return (

        <form className="form">
            <h2>Ingrese sus datos</h2>
            <p><input class="input" type="text" name="nombre" value={nombre} placeholder="Ingresar Nombre" onChange={(e) => setNombre(e.target.value)} />*</p>
            <p><input class="input" type="tel" name="telefono" value={telefono} placeholder="Ingresar Telefono" onChange={(e) => setTelefono(e.target.value)} />*</p>
            <p><input class="input" type="email" name="email" value={email} placeholder="Ingresar Mail" onChange={(e) => setEmail(e.target.value)} />*</p>
            <textarea class="input" name="observaciones" cols="25" rows="5" value={observaciones} placeholder="Ingresar Observaciones" onChange={(e) => setObservaciones(e.target.value)} />
            <p class='actionWrapper'><Button class='button' onClick={enviarFormulario} disabled={!nombre || !telefono || !email}>Enviar</Button></p>
            <p>* Nombre Email y Telefono son requeridos para generar la orden de compra</p>
        </form>


    )
}
export default Formulario;