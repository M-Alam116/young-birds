import Wrapper from '../common/wrapper/wrapper'
import classes from './MemberFrom.module.css'

export default function MemberFrom() {
    return (
        <Wrapper>
            <div className={classes.container}>
                <h1>Our Members Are from</h1>
                <h3>Start making money with other members and 10X your business.</h3>
                <div className={classes.detailsContainer}>
                    <div className={classes.details}>
                        <h1>130+</h1>
                        <p>Companies & Organizations</p>
                    </div>
                    <div className={classes.details}>
                        <h1>15+</h1>
                        <p>Multinational Companies</p>
                    </div>
                    <div className={classes.details}>
                        <h1>8+</h1>
                        <p>Blockchain Unicorns</p>
                    </div>
                    <div className={classes.details}>
                        <h1>4+</h1>
                        <p>Web3 VCs & Hedge Funds</p>
                    </div>
                </div>
                <p>Our members are the founders and executives of renowned
                    companies, driving influence and innovation in their respective fields.
                    They have a cumulative experience of advising and working with over 130 companies,
                    including Blizzard, TikTok, Warner Music Group, BCG, PWC, BAYC, Azuki, DeGods, Doodles,
                    Huobi and many more Web3 companies.</p>
            </div>
        </Wrapper>
    )
}
