import React from 'react'
import '../components/section2.css'

const section2 = () => {
  return (
   <div>
    <h3>products and services</h3>
    <div>
        <div className='card'>  
             <img src="https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png" alt="" />
             <h6>One-stop business access</h6>
             <p>The efficiency of payment, settlement and accounting access products quadruples</p>

        </div>
        <div className='card'>
            <img src="https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png" alt="" />
            <h6>One-stop risk monitoring during events</h6>
            <p> Prior risk control and quality control capabilities in all demand configuration links</p>

        </div>
        <div className='card'>
            <img src="https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png" alt="" />
            <h6>One-stop data operation</h6>
            <p>Precipitate product access efficiency and operation waiter work efficiency data</p>
        </div>
    </div>
   </div>
  )
}

export default section2