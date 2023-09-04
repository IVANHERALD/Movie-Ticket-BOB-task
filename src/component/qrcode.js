import React from 'react'
import QRCode from 'qrcode.react';

function qrcodegenerate({data}) {
  return (
    <div>
        <QRCode value={data}/>
    </div>
  )
}

export default qrcodegenerate;