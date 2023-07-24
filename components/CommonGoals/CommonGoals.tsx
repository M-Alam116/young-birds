import classes from './commonGoals.module.css'
import Wrapper from '../common/wrapper/wrapper'
import Image from 'next/image'

export default function CommonGoals() {
    return (
        <Wrapper>
            <div className={classes.container}>
                <h1>Sharing Common Goals</h1>
                <h3>YBC holders are from</h3>
                <div className={classes.location}>
                    <div className={classes.countires}>
                        <span>Countries</span>
                        10
                    </div>
                    <div className={classes.city}>
                        <span>Cities</span>
                        13</div>
                </div>
                <Image src='/images/group.png' width={960} height={570} alt='group' className={classes.image} />
                <p>Investors from 54 countries 244 cities are currently checking out what we do <br></br>
                    (Google Analytics data)</p>
            </div>
        </Wrapper>
    )
}
