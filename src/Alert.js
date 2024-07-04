import React from 'react';

export default function Alert(props) {
    const capitalize = (letter) =>{
        const word = letter.toLowerCase()
        return word.charAt(0).toUpperCase() + letter.slice(1) 
    }
    return (
        props.alert && (
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>
        )
    );
}
