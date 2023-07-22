import classes from './memberRewards.module.css'
import Wrapper from '../common/wrapper/wrapper'
import Button from '../common/Button/Button'
import Image from 'next/image'
export default function MemberRewards() {
    return (
        <Wrapper>
            <div className={classes.container}>
                <h1>Member Rewards</h1>
                <h3>Get exclusive member rewards</h3>
                <div className={classes.rewardsContainer}>
                    <div className={classes.rewards}>
                        <div className={classes.imageBg}>
                            <Image src='/images/stacking.png' width={40} height={40} alt='stacking' />
                        </div>
                        <h2>YBC Staking Rewards</h2>
                        <p>Put your YBC to work. Stake your YBC(s) and earn daily $SOAR tokens.</p>
                    </div>
                    <div className={classes.rewards}>
                        <div  className={classes.imageBg}>
                            <Image src='/images/membership.png' width={40} height={40} alt='membership' />
                        </div>
                        <h2>Membership Monetization</h2>
                        <p>Get ready for one of our most important and exciting features ever.</p>
                    </div>
                    <div className={classes.rewards}>
                        <div  className={classes.imageBg}>
                            <Image src='/images/rewards.png' width={45} height={45} alt='rewards' />
                        </div>
                        <h2>Platform Rewards</h2>
                        <p>YBC holders will receive 1%
                            of the platform's revenue.</p>
                    </div>
                    <div className={classes.rewards}>
                        <div  className={classes.imageBg}>
                            <Image src='/images/surprise.png' width={40} height={40} alt='surprise' />
                        </div>
                        <h2>Founder’s Surprise</h2>
                        <p>Get excited for the surprise.</p>
                    </div>
                </div>
                <Button text='See Docs for details' style={classes.btn} />
            </div>
        </Wrapper>
    )
}
