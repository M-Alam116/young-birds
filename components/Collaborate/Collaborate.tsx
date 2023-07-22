import classes from './Collaborate.module.css'
import Button from '../common/Button/Button'
import Wrapper from '../common/wrapper/wrapper'
import { BsTelegram } from 'react-icons/bs'
import { MdEmail, MdLocationPin } from 'react-icons/md'

export default function Collaborate() {
    return (
        <Wrapper>
            <div className={classes.container}>
                <h1>Find & Collaborate</h1>
                <h3>Members can search and contact other YBC members or Businesses owned by members near you.
                    To be available in Q3 2023.</h3>
                <div className={classes.contact}>
                    <div className={classes.content}>
                        <h2>Soar Labs</h2>
                        <div className={classes.info}>
                            <MdLocationPin style={{fontSize: '2rem', color: 'rgba(126, 143, 154, 1)'}}/>
                            <p>UAE</p>
                        </div>
                        <div className={classes.info}>
                            <MdEmail style={{fontSize: '1.7rem', color: 'rgba(126, 143, 154, 1)'}}/>
                            <p>contact@soarlabs.io</p>
                        </div>
                        <div className={classes.info}>
                            <BsTelegram style={{fontSize: '1.7rem', color: 'rgba(126, 143, 154, 1)'}}/>
                            <p>@soarlabs</p>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <h2>Brian</h2>
                        <div className={classes.info}>
                            <MdLocationPin style={{fontSize: '2rem', color: 'rgba(126, 143, 154, 1)'}}/>
                            <p>Singapore</p>
                        </div>
                        <div className={classes.info}>
                            <MdEmail style={{fontSize: '1.7rem', color: 'rgba(126, 143, 154, 1)'}}/>
                            <p>brian@soarlabs.io</p>
                        </div>
                        <div className={classes.info}>
                            <BsTelegram style={{fontSize: '1.7rem', color: 'rgba(126, 143, 154, 1)'}}/>
                            <p>@brianybc</p>
                        </div>
                    </div>
                </div>
                <Button text='Browse members' style={classes.btn} />
            </div>
        </Wrapper>
    )
}
