import React, {useState} from 'react';
import { Menu, MenuProps, Row, Col, Button} from 'antd';
import logo from './images/logo.png';
import { IonIcon } from '@ionic/react';
import { gridOutline, close } from 'ionicons/icons';
import '../css styles/Header.css';
import { Route, Routes, useNavigate } from 'react-router-dom';


const items: MenuProps['items'] = [
  {
    label: 'Travelling with us',
    key: 'info'
  },
  {
    label: 'Skymiles',
    key: 'skymiles'
  },
  {
    label: 'Need help?',
    key: 'help'
  }
];


const Head: React.FC = () => {
  const [current, setCurrent] = useState('info');
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(gridOutline);
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
    setCurrent(e.key);
  }

  const signUp = (e) => {
    navigate("register");
  }

  const logIn = (e) => {
    navigate("login");
  }

  const toggle = (e) => {
    setIsOpen(!isOpen);
    !isOpen ? setIcon(close) : setIcon(gridOutline);
  }

  return (
   <div className='head'>
      {/* <Row style = {{height: '10vh'}}>
        <img src={logo} alt='logo' style={{height: 'inherit', maxHeight: '8vh'}}/>

        <Menu className="head-menu"
        onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{height: '10vh', background: 'transparent'}}/>

        <nav className="navbar">
          <Button style={{marginInline: '7pt'}} target='register' onClick={signUp}>Sign up</Button>
          <Button className="login" style={{marginInline: '7pt'}} target='login' onClick={logIn}>Log in</Button>
          <Button style={{marginInline: '7pt'}}>EN</Button>

        </nav>
      </Row> */}
      <div className="navigate">
        <div className="logo">
          <img src={logo} alt='logo'/>
          </div>
        <ul className="links">
          <li><a href="info">Travel with us</a></li>
          <li><a href="skymiles">Skymiles</a></li>
          <li><a href="help">Need help?</a></li>
        </ul>
        <div className="buttons">
          <button onClick={signUp} className="signup">Sign up</button>
          <button onClick={logIn} className="login">Log in</button>
          <button className="language">EN</button>
        </div>
        <div className="toggle_btn" onClick={toggle}>
          <IonIcon icon={icon}/>
        </div>
      </div>
      <div className={isOpen ? "dropdown_menu open": "dropdown_menu"}>
          <li><a href="info">Travel with us</a></li>
          <li><a href="skymiles">Skymiles</a></li>
          <li><a href="help">Need help?</a></li>
          <li><a href="#" className="signup">Sign up</a></li>
          <li><a href="#" className="login">Log in</a></li>
          <li><a href="#" className="language">EN</a></li>
      </div>
    </div>
    );

}

export default Head;
