import React from 'react'


export default function PersonForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onchange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value

        change(name, valueToUse)
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form submit">
                <h2>Add a Person</h2>

                <button disabled={disabled}>submit</button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>

            </div>
        </form>
    )



}