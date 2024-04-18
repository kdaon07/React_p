import { useState } from 'react';

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

export default Pic;