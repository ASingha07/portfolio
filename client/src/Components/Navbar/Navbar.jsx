import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMobileMenuOpen(true);
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMobileMenuOpen(false);
  }

  return (
    <div className={`navbar ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <img
        src={logo}
        alt='Atin Singha'
        className='logo'
        onError={(e) => {
          console.log('Logo failed to load, trying fallback');
          e.target.src = '/logo.svg';
        }}
      />
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li onClick={closeMenu} ><AnchorLink className='anchor-link' href='#home' ><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
        <li onClick={closeMenu} ><AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
        <li onClick={closeMenu} ><AnchorLink className='anchor-link' offset={50} href='#education' ><p onClick={() => setMenu("education")}>Education</p></AnchorLink>{menu === "education" ? <img src={underline} alt='' /> : <></>}</li>
        <li onClick={closeMenu} ><AnchorLink className='anchor-link' offset={50} href='#skills' ><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink>{menu === "skills" ? <img src={underline} alt='' /> : <></>}</li>
        <li onClick={closeMenu} ><AnchorLink className='anchor-link' offset={50} href='#projects' ><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink>{menu === "projects" ? <img src={underline} alt='' /> : <></>}</li>
      </ul>
      <AnchorLink className='anchor-link' href='#contact'>
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  )
}

export default Navbar
