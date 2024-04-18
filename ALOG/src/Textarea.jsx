import { React } from 'react';

const Textarea = ({title, s, cols, rows, len, value1, name1, setUser, User}) => {
    return (
        <tr>
            <td>{title}<small>({s})</small></td>
            <td>
                <textarea cols={cols} rows={rows} maxlength={len} value={value1} spellcheck="false" name={name1} onChange={
                    (e) => setUser({
                        ...User,
                        [name1]: e.target.value,
                    })}></textarea>
            </td>
        </tr>
    );
}

export default Textarea;