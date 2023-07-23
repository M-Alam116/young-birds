import classes from './Roadmap.module.css'
import Wrapper from '../common/wrapper/wrapper'

export default function Roadmap() {
    return (
        <Wrapper>
            <div className={classes.container} id='roadmap'>
                <h2>Roadmap</h2>
                <p>We will become the world’s biggest networking membership.</p>
                <div className={classes.phasesContainer}>
                    <div className={classes.phases}>
                        <h1>Phase 1</h1>
                        <div className={classes.content}>
                            <li>100%: Young Birds Club: MVP model has been battle-tested in the market</li>
                            <li>100%: Team Building</li>
                            <li>100%: Community Building</li>
                            <li>100%: Private YBC Parties</li>
                            <li>100%: YBC Litepaper Disclosed</li>
                            <li>100%: YBC Proof of Community</li>
                        </div>
                    </div>
                    <div className={classes.phases}>
                        <h1>Phase 2</h1>
                        <div className={classes.content}>
                            <li>Re-launching YBC with upgraded features and more</li>
                            <li>YBC 1st Batch</li>
                            <li>Launch YBC Staking Rewards
                                & Concierge Service</li>
                            <li>$SOAR Listings & Global Event</li>
                            <li>Private YBC Parties</li>
                            <li>Major Partnerships</li>
                        </div>
                    </div>
                    <div className={classes.phases}>
                        <h1>Phase 3</h1>
                        <div className={classes.content}>
                            <li>App Development & Launch</li>
                            <li>M&A</li>
                            <li>Onboarding Membership Businesses</li>
                            <li>
                                NFT Drop Season 2</li>
                            <li>CEX Listings</li>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
