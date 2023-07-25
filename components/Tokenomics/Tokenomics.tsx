import classes from './Tokenomics.module.css'
import Wrapper from '../common/wrapper/wrapper'
import Button from '../common/Button/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Tokenomics() {
    return (
        <Wrapper>
            <div className={classes.container} id='soar'>
                <h1>$SOAR Tokenomics</h1>
                <p>100,000,000,000 $SOAR</p>
                <div className={classes.chart}>
                    <Image src='/images/soar.png' width={800} height={420} alt='Soar' className={classes.img} />
                    <div className={classes.content}>
                        <div>
                            <h2>Total Supply</h2>
                            <h2>Ticker</h2>
                            <h2>Chain</h2>
                        </div>
                        <div>
                            <h3>100 Billion</h3>
                            <h3>$SOAR</h3>
                            <h3>Ethereum</h3>
                        </div>
                    </div>

                </div>
                <Link href='https://docs.youngbirdsclub.com/ybc/usdsoar-token/or-what-is-usdsoar' target='_'>
                    <Button text='$SOAR Litepaper' style={classes.btn} />
                </Link>
            </div>
        </Wrapper >
    )
}
