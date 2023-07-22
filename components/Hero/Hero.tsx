import classes from './Hero.module.css'
import Wrapper from '../common/wrapper/wrapper'
import Button from '../common/Button/Button'
import Image from 'next/image'

export default function Hero() {
    return (
        <Wrapper>
            <div className={classes.container}>
                <div className={classes.content}>
                    {/* <Image src='/images/logo.png' width={1350} height={800} alt='hero backround' className={classes.heroBg} /> */}
                    <h1>Young Birds Club 10X Your Dreams</h1>
                    <p>Your real life networking NFT membership that will 10X your dreams</p>
                    <Button text='JOIN THE CONVERSATION' style={classes.joinBtn} />
                </div>
                <div className={classes.heroImage}>
                    <Image src='/images/hero-illustration.png' width={400} height={250} alt='hero-illustration' className={classes.image} />
                </div>
            </div>
        </Wrapper>
    )
}
