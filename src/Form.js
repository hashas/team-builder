import React from 'react';

function Form(props) {

    return (
        <div>
            <form onSubmit={event => {props.handleSubmit(event)}}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={props.data.name}
                        onChange={event => {props.handleChange(event)}}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={props.data.email}
                        onChange={event => {props.handleChange(event)}}
                    />
                </label>
                <label>
                    Role:
                    <input
                        type="text"
                        name="role"
                        value={props.data.role}
                        onChange={event => {props.handleChange(event)}}
                    />
                </label>
                <button>Submit!</button>
            </form>
        </div>
    );

}

export default Form;