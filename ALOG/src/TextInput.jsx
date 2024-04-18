import { React } from 'react';

const TextInput = ({value1, name1, setUser, User}) => {
    return (
        <input type='text' value={value1} spellcheck="false" name={name1} onChange={
            (e) => setUser({
                ...User,
                [name1]: e.target.value,
            })} />
    );
}

export default TextInput;