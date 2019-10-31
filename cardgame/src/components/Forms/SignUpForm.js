import React from 'react'

export default function SignUpForm(props) {
    return (
        <div>
            <h3>Signup</h3>
            <form>
                <input name="name" value={props.name} onChange={props.handleChange} />
                <input name="password" value={props.password} type="password" onChange={props.handleChange} />
                <input type="submit" onClick={props.handleSignupFormSubmit} />
            </form>
        </div>
    )
}
