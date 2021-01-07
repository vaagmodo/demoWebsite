import React from 'react';

const ContactCommon = (props) => {
    return (
        <>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                    {props.title}
                </label>
                <input
                    type={props.type}
                    class="form-control"
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    // onChange={props.InputEvent}
                    placeholder={props.placeholder}
                    autoComplete="off"
                />
            </div>
        </>
    );
};

export default ContactCommon;
