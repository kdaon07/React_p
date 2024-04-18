import { React } from 'react';

const CourseInput = ({text, value1, setCourse, Course}) => {
    return (
        <label style={{ marginLeft: "10px" }}><input type='radio' name='course' value={value1} onChange={(e) => {
            setCourse(e.currentTarget.value);
        }} checked={Course == value1} /> {text}
        </label>
    );
}

export default CourseInput;