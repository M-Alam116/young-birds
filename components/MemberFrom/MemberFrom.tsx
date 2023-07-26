import Wrapper from '../common/wrapper/wrapper'
import classes from './MemberFrom.module.css'
import Image from 'next/image'

export default function MemberFrom() {
    return (
        <Wrapper>
            <div className={classes.container}>
                <h1>Our Members Are from</h1>
                <h3>Start making money with other members and 10X your business.</h3>
                <div className={classes.detailsContainer}>
                    <div className={classes.details}>
                        <Image src='/images/gradient.png' width={380} height={320} alt='gradient' className={classes.gradientImg} />
                        <h1>130+</h1>
                        <p>Companies & Organizations</p>
                    </div>
                    <div className={classes.details}>
                        <Image src='/images/gradient2.png' width={380} height={320} alt='gradient' className={classes.gradientImg} />
                        <h1>15+</h1>
                        <p>Multinational Companies</p>
                    </div>
                    <div className={classes.details}>
                        <Image src='/images/gradient3.png' width={380} height={320} alt='gradient' className={classes.gradientImg} />
                        <h1>8+</h1>
                        <p>Blockchain Unicorns</p>
                    </div>
                    <div className={classes.details}>
                        <Image src='/images/gradient4.png' width={380} height={320} alt='gradient' className={classes.gradientImg} />
                        <h1>4+</h1>
                        <p>Web3 VCs & Hedge Funds</p>
                    </div>
                </div>
                <p className={classes.para}>Our members are the founders and executives of renowned
                    companies, driving influence and innovation in their respective fields.
                    They have a cumulative experience of advising and working with over 130 companies,
                    including Blizzard, TikTok, Warner Music Group, BCG, PWC, BAYC, Azuki, DeGods, Doodles,
                    Huobi and many more Web3 companies.</p>
            </div>
        </Wrapper>
    )
}
