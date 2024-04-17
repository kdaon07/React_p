import { React, useState } from 'react';
import './style2.css';
import styled from "styled-components";

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

    const { name, date, target, language, price1, price2, sh_ex, l_ex } = User;

    return (
        <Container>
            <div className="item">
                <table>
                    <tr>
                        <td>코스</td>
                        <td>
                            <label style={{ marginLeft: "10px" }}><input type='radio' name='course' value={"정규"} onChange={(e) => {
                                setCourse(e.currentTarget.value);
                            }} checked={Course == "정규"} /> 정규 과정 </label>
                            <label><input type='radio' name='course' value={"특별"} onChange={(e) => {
                                setCourse(e.currentTarget.value);
                            }} checked={Course == "특별"} /> 특별 과정 </label>
                            <label><input type='radio' name='course' value={"자격증"} onChange={(e) => {
                                setCourse(e.currentTarget.value);
                            }} checked={Course == "자격증"} /> 자격증 과정 </label>
                            <label><input type='radio' name='course' value={"온라인"} onChange={(e) => {
                                setCourse(e.currentTarget.value);
                            }} checked={Course == "온라인"} /> 온라인 과정 </label>
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
                            <input type='text' value={date} spellcheck="false" name='date' onChange={
                                (e) => setUser({
                                    ...User,
                                    date: e.target.value,
                                })} />
                        </td>
                    </tr>
                    <tr>
                        <td>추천 대상</td>
                        <td>
                            <input type='text' value={target} spellcheck="false" name='target' onChange={
                                (e) => setUser({
                                    ...User,
                                    target: e.target.value,
                                })} />
                        </td>
                    </tr>
                    <tr>
                        <td>사용 언어</td>
                        <td>
                            <input type='text' value={language} spellcheck="false" name='language' onChange={
                                (e) => setUser({
                                    ...User,
                                    language: e.target.value,
                                })} />
                        </td>
                    </tr>
                    <tr>
                        <td>가격<small>(주말/평일)</small></td>
                        <td>
                            <span className='input-grid'>
                                <div><input type='text' value={price1} spellcheck="false" name='price1' onChange={
                                    (e) => setUser({
                                        ...User,
                                        price1: e.target.value,
                                    })} /></div>
                                <div><input type='text' value={price2} spellcheck="false" name='price2' onChange={
                                    (e) => setUser({
                                        ...User,
                                        price2: e.target.value,
                                    })} /></div>
                            </span>
                            <div className='text'><b>단위 : ₩</b></div>
                        </td>
                    </tr>
                    <tr>
                        <td>짧은 설명<small>(80자 이내)</small></td>
                        <td>
                            <textarea cols="20" rows="5" maxlength="80" value={sh_ex} spellcheck="false" name='sh_ex' onChange={
                                (e) => setUser({
                                    ...User,
                                    sh_ex: e.target.value,
                                })}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>긴 설명<small>(200자 이내)</small></td>
                        <td>
                            <textarea cols="50" rows="10" maxlength="200" value={l_ex} spellcheck="false" name='l_ex' onChange={
                                (e) => setUser({
                                    ...User,
                                    l_ex: e.target.value,
                                })}></textarea>
                        </td>
                    </tr>
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
                                    <p style={{ alignItems: 'center', float: 'left' }}>
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
                                <h3>
                                    {date}
                                </h3>
                            </span>
                            <span style={{ lineHeight: '10px', float: 'left', marginLeft: '20px' }}>
                                <div>
                                    추천 학생
                                </div>
                                <h3>
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
