import Wrapper from '@/components/common/wrapper/wrapper'
import classes from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/common/Button/Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { useState, useEffect } from 'react'

export default function Navbar() {

  const [hamburger, setHamburger] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 950) {
        setHamburger(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  }

  return (
    <Wrapper>
      <div className={classes.navbar}>
        <div >
          <Link href="/">
            <Image src='/images/logo.png' width={116} height={60} alt="logo" className={classes.logo} />
          </Link>
        </div>
        <div className={classes.navbarRight}>
          <div className={hamburger ? classes.links : classes.verticalLinks}>
            <Link href="/" className={classes.singleLink}>Home</Link>
            <Link href="#benefits" className={classes.singleLink}>Benefits & Rewards</Link>
            <Link href="#soar" className={classes.singleLink}>$SOAR</Link>
            <Link href="#roadmap" className={classes.singleLink}>Roadmap</Link>
            <Link href="#contact" className={classes.singleLink}>Contact</Link>
          </div>
          <Button text='Connect Wallet' style={classes.connectBtn} />
        </div>
        {hamburger ? <GiHamburgerMenu onClick={toggleHamburger} className={classes.hamburger} /> :
          <RxCross1 onClick={toggleHamburger} className={classes.hamburger} />}
      </div>
      <hr style={{ border: '1px solid gray' }}></hr>
    </Wrapper>
  )
}
