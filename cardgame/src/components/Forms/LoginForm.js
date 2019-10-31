import React from 'react'

export default function LoginForm(props) {
    return (
        <div>
            <h3>Login</h3>
            <form>
                <input name="name" value={props.name} onChange={props.handleChange} />
                <input name="password" value={props.password} type="password" onChange={props.handleChange} />
                <input type="submit" onClick={props.handleLoginFormSubmit} />
            </form>
        </div>
    )
}
