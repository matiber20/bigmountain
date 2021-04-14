import React from 'react';
import './Login.css'



export default function Login(props) {

        return (
            <form className="container-form">
                <input onChange={props.change} className="container-form__input" type="text" name="InputEmail" placeholder="Ingresa tu email" autoComplete="true" />
                <input onChange={props.change} className="container-form__input" type="password" name="InputPassword" placeholder="Ingresa tu password" autoComplete="false" />
                <button className="container-form__btn" type="submit">Ingresar</button>
            </form>
        )
}
