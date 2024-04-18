import { React, useState } from 'react';
import './style2.css';
import styled from "styled-components";

const Pic = ({ prop, ImageChange }) => {
    const [imgSrc, setimgSrc] = useState('');
    const { number, text1, text2 } = prop;
    const preview = (file) => {
        const read = new FileReader();
        read.readAsDataURL(file);

        read.onload = () => {
            setimgSrc(read.result);
            ImageChange(number, read.result);
        };
    };

    return (
        <div>
            <h3><b>사진 {number}</b></h3>
            <label>
                {imgSrc == '' ? (
                    <div className='upload'>
                        <h2>{text1}</h2><h3>{text2}</h3>
                    </div>
                ) : (
                    <img src={imgSrc} className='upload' alt='preview-img' />
                )}
                <input accept='.png, .jepg, .jpg' type='file' style={{ display: 'none' }} onChange={(e) => preview(e.target.files[0])}></input>
            </label>
        </div>
    );
}

const CourseInput = (props) => {
    const { text, value1, setCourse, Course } = props;
    return (
        <label style={{ marginLeft: "10px" }}><input type='radio' name='course' value={value1} onChange={(e) => {
            setCourse(e.currentTarget.value);
        }} checked={Course == value1} /> {text}
        </label>
    );
}

const TextInput = (props) => {
    const { value1, name1, setUser, User } = props;
    return (
        <input type='text' value={value1} spellcheck="false" name={name1} onChange={
            (e) => setUser({
                ...User,
                [name1]: e.target.value,
            })} />
    );
}

const Textarea = (props) => {
    const { title, s, cols, rows, len, value1, name1, setUser, User } = props;
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

export default function UseAdd() {
    const [User, setUser] = useState([{
        date: '',
        target: '',
        language: '',
        price1: '',
        price2: '',
        sh_ex: '',
        l_ex: '',
    },]);

    const [Course, setCourse] = useState('정규');
    const [Name, setName] = useState('루키 과정');
    const [Image1, setImage1] = useState('');
    const [Image2, setImage2] = useState('');
    const [Image3, setImage3] = useState('');

    const ImageChange = (num, src) => {
        if (num === 1) {
            setImage1(src);
        } else if (num === 2) {
            setImage2(src);
        } else if (num === 3) {
            setImage3(src);
        }

    }

    const { date, target, language, price1, price2, sh_ex, l_ex } = User;

    return (
        <Container>
            <div className="item">
                <table>
                    <tr>
                        <td>코스</td>
                        <td>
                            <CourseInput text="정규 과정" value1="정규" setCourse={setCourse} Course={Course} />
                            <CourseInput text="특별 과정" value1="특별" setCourse={setCourse} Course={Course} />
                            <CourseInput text="자격증 과정" value1="자격증" setCourse={setCourse} Course={Course} />
                            <CourseInput text="온라인 과정" value1="온라인" setCourse={setCourse} Course={Course} />
                        </td>
                    </tr>
                    <tr>
                        <td>과정명</td>
                        <td>
                            <select value={Name} name='Name' onChange={
                                (e) => setName(e.currentTarget.value)}>
                                <option value={"루키 과정"}>루키 과정</option>
                                <option value={"스톤 과정"}>스톤 과정</option>
                                <option value={"브론즈 과정"}>브론즈 과정</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>수강 기간</td>
                        <td>
                            <TextInput value1={date} name1="date" setUser={setUser} User={User} />
                        </td>
                    </tr>
                    <tr>
                        <td>추천 대상</td>
                        <td>
                            <TextInput value1={target} name1="target" setUser={setUser} User={User} />
                        </td>
                    </tr>
                    <tr>
                        <td>사용 언어</td>
                        <td>
                            <TextInput value1={language} name1="language" setUser={setUser} User={User} />
                        </td>
                    </tr>
                    <tr>
                        <td>가격<small>(주말/평일)</small></td>
                        <td>
                            <span className='input-grid'>
                                <div>
                                    <TextInput value1={price1} name1="price1" setUser={setUser} User={User} /></div>
                                <div>
                                    <TextInput value1={price2} name1="price2" setUser={setUser} User={User} /></div>
                            </span>
                            <div className='text'><b>단위 : ₩</b></div>
                        </td>
                    </tr>
                        <Textarea title="짧은 설명" s="80자 이내" cols="20" rows="5" len="80" value1={sh_ex} name1="sh_ex" setUser={setUser} User={User} />
                        <Textarea title="긴 설명" s="200자 이내" cols="50" rows="10" len="200" value1={l_ex} name1="l_ex" setUser={setUser} User={User} />
                </table>
            </div>
            <div className="item">
                <Pic prop={{ number: 1, text1: "메인 사진", text2: "(상관 없음)" }} ImageChange={ImageChange} />
                <Pic prop={{ number: 2, text1: "디테일 박스 사진", text2: "(4X3)" }} ImageChange={ImageChange} />
                <Pic prop={{ number: 3, text1: "뱃지 사진", text2: "(1X1)" }} ImageChange={ImageChange} />
                <div className='banner1'>
                    <div className='circle'>
                        <div style={{ position: "relative" }}>
                            <img src={Image1} alt="mainImg" className='mainImg' />
                        </div>
                    </div>
                    <div style={{ margin: "30px", lineHeight: "30px", width: "150px", height: "150px" }}>
                        <div style={{ color: "gray" }}>
                            <div>📅 {Course} 코스</div>
                            <div>⌚ {date}</div>
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <img src={Image3} alt="badge" className='badge' />
                        </div>
                    </div>
                    <div style={{ marginLeft: "30px", marginTop: "-15px", lineHeight: "8px", width: "250px", height: "100px" }}>
                        <h2><b>{Name}</b></h2>
                        <div style={{ fontSize: "22px" }}>{language}</div>
                        <p style={{ color: "gray", width: "220px", lineHeight: "14px" }}>{sh_ex}</p>
                    </div>
                    <div style={{ float: "right", marginRight: "30px", marginTop: "-30px", display: "block" }}>
                        {price1 ? Number(price1).toLocaleString() : 0} ₩
                    </div>
                </div>
            </div>

            <div className="item">
                <div className='banner2'>
                    <div className='bbox'>
                        <div style={{ float: 'left' }}>
                            <img src={Image2} alt='detailUrl' className='detailUrl' />
                        </div>
                        <div style={{ float: 'left', marginLeft: '20px', width: '65%' }}>
                            <div style={{ float: 'left' }}>
                                <div style={{ marginTop: "5px" }}>
                                    <img src={Image3} alt="badge" className='badge' style={{ float: 'left' }} />
                                    <h2 style={{ float: 'left', marginLeft: '20px' }}>{Name}</h2><br />
                                    <p style={{ display: 'block', float: 'left', marginTop: '20px', width: '500px' }}>
                                        {l_ex}
                                    </p>
                                </div>
                            </div>
                            <div style={{ float: 'right', marginRight: '0px', marginTop: '25px' }}>
                                <div style={{ color: "gray" }}>
                                    <div>📅 {Course} 코스</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ bottom: '20px', position: 'absolute', left: '395px' }}>
                            <span style={{ lineHeight: '10px', float: 'left' }}>
                                <div>
                                    교육 기간
                                </div>
                                <h3 style={{ display: 'block', height: '10px' }}>
                                    {date}
                                </h3>
                            </span>
                            <span style={{ lineHeight: '10px', float: 'left', marginLeft: '20px' }}>
                                <div>
                                    추천 학생
                                </div>
                                <h3 style={{ display: 'block', height: '10px' }}>
                                    {target}
                                </h3>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Addbtn className='addbtn' onClick={(e) => alert("추가 성공!")}>
                추가하기
            </Addbtn>
        </Container>
    );
}

const Addbtn = styled.button`
background-color: rgba(127, 190, 37, 1);
border: none;
border-radius: 6px;
font-size: large;
font-weight: 600;
color: white;
cursor: pointer;
width: 250px;
height: 50px;
margin-left: 65%;
`;

const Container = styled.div`
top: 0px;
position: relative;
width: 100%;
height: 1350px;
display: grid;
grid-template-columns: 6fr 3fr;
grid-template-rows: 10fr 4fr;
`;