import { useState } from 'react'
import './style.css'

function App() {
  const [imgSrc, setimgSrc] = useState('');

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
    <>
      <label>
        <>
          {imgSrc=='' ? <div className='upload'>클릭하여 슬라이드 추가</div> : <img src={imgSrc} className='upload' alt='preview-img' />}
        </>
          <input accept='.png, .jepg, .jpg' type='file' style={{ display: 'none' }} onChange={(e) => preview(e.target.files[0])}></input>
      </label>
    </>
  )
}

export default App
