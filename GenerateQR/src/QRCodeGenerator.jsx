import React, {useState} from 'react'
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
      setInputValue(e.target.value)
    }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generate</h1>
      <input type="text"  value={inputValue} onChange={handleInputChange} placeholder='enter your code' style={{ padding: '10px', width: '300px', marginBottom: '20px' }}/>
      <div>
        <QRCode value={inputValue} size={256} />
      </div>
    </div>
  )
}

export default QRCodeGenerator
