import React, { useState } from 'react'
import './Header.scss';
import Btn from '../../assets/image/btn.png'
import Btn2 from '../../assets/image/btn2.png'
import Victor from '../../assets/image/victor.png'
import Victor2 from '../../assets/image/victor2.png'
import Facts from '../../assets/image/facts.png'
import Facts2 from '../../assets/image/facts2.png'
import Buttons from '../../assets/image/buttons.png'
import Buttons2 from '../../assets/image/buttons2.png'
import Portfolio from '../../assets/image/portfolio.png'
import Portfolio2 from '../../assets/image/portfolio2.png'
import Footer from '../../assets/image/Footer.png'
import Footer2 from '../../assets/image/Footer2.png'

function Header() {
const [mode, setMode] = useState(true)

 function fnChange(){
    setMode(!mode)
    console.log(mode);
  }
  return (
  <header className={mode ? 'header' : 'header2'}>
    <div className="container">
    <div className='wrapper'>
     <button onClick={fnChange}> <img src={mode ? Btn : Btn2} alt="" /></button>
      <img src={mode ? Victor : Victor2} alt="" />
      <img src={mode ? Facts :Facts2} alt="" />
      <img src={mode ? Buttons : Buttons2} alt="" />
      <img src={mode ? Portfolio : Portfolio2} alt="" />
      <img src={mode ? Footer : Footer2} alt="" />
    </div>
    </div>
  </header>
  )
}

export default Header