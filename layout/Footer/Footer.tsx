import Wrapper from '@/components/common/wrapper/wrapper'
import classes from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitterSquare } from 'react-icons/fa'
import { BsTelegram, BsDiscord } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'

export default function Footer() {
  return (
    <Wrapper>
      <div className={classes.footer}>
        <div className={classes.footerTop}>
          <div>
            <Image src='/images/logo.png' width={191} height={100} alt='logo' className={classes.logo} />
          </div>

          <div className={classes.content}>
            <p>Did we miss anything?<br></br>
              Please ask us on any of our official channels.</p>
            <div className={classes.icons}>
              <FaTwitterSquare style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }} />
              <BsTelegram style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }} />
              <BsDiscord style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }} />
              <HiDocumentText style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }} />
            </div>
          </div>

          <div className={classes.links}>
            <Link href="/" className={classes.singleLink}>Home</Link>
            <Link href="/" className={classes.singleLink}>Benefits & Rewards</Link>
            <Link href="/" className={classes.singleLink}>$SOAR</Link>
            <Link href="/" className={classes.singleLink}>Roadmap</Link>
            <Link href="/" className={classes.singleLink}>Contact</Link>
          </div>
        </div>

        <p className={classes.copyright}>© {new Date().getFullYear()} YoungBirdsClub</p>
      </div>
    </Wrapper>
  )
}
