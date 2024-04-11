import { useRef, useState } from 'react'
import './style.css'

const Upload = ({ slide, onRemove }) => {
    const [imgSrc, setimgSrc] = useState('');
    const { num } = slide;
    const preview = (file) => {
        const read = new FileReader();
        read.readAsDataURL(file);
        return new Promise((resolve) => {
            read.onload = () => {
                setimgSrc(read.result);
                resolve();
            };
        });
    };

    return (
        <div key={num} className='container'>
            <div style={{ display: 'block', height: '40px' }}>
                <b style={{ fontSize: 'large', float: 'left' }}>
                    {slide.num}번째
                </b>
                <button className='del' onClick={() => onRemove(num)}>삭제</button>
            </div>
            <label style={{ display: 'block' }}>
                <>
                    {imgSrc == '' ? <div className='upload'>클릭 또는 드래그 하여 파일 업로드</div> : <img src={imgSrc} className='upload' alt='preview-img' />}
                </>
                <input accept='.png, .jepg, .jpg' type='file' style={{ display: 'none' }} onChange={(e) => preview(e.target.files[0])}></input>
            </label>
            <table>
                <tr>
                    <td>제목</td>
                    <td><input type="text" name="name" /></td>
                </tr>
                <tr>
                    <td>설명(최대 256자)</td>
                    <td><textarea cols="50" rows="5" maxlength="100"></textarea></td>
                </tr>
                <tr>
                    <td>URL</td>
                    <td><input type="text" name="name" /></td>
                </tr>
            </table>
        </div>
    )
}

export default function Slide() {
    const [slide, setslide] = useState([{
        num: 1,
    },]);
    const nextnum = useRef(2);
    const onAdd = () => {
        const slide1 = {
            num: nextnum.current,
        };
        setslide([...slide, slide1])
        nextnum.current += 1;
    }

    const onRemove = (num) => {
        console.log(num)
        const rm = slide.filter((slide) => slide.num !== num)
        setslide(rm);
    }

    return (
        <div>
            {
                slide.map((slide) => { return <Upload key={slide.num} slide={slide} onRemove={onRemove} /> })
            }
            <div>
                <button onClick={onAdd} className='slideAdd'>클릭하여 슬라이드 추가</button>
            </div>
        </div>

    );
}
