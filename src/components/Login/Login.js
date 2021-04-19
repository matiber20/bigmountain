import React from 'react';
import './Login.css'
import Input from '../Input/Input'



export default function Login(props) {

        return (
            <form className="container-form" onSubmit={props.submit}>
                <Input onChange={props.change} className="container-form__input" type="text" name="InputEmail" placeholder="Ingresa tu email" autoComplete="true" />
                <Input onChange={props.change} className="container-form__input" type="password" name="InputPassword" placeholder="Ingresa tu password" autoComplete="false" />
                <button className="container-form__btn" type="submit">Ingresar</button>
            </form>
        )
}
