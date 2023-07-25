import Wrapper from '../common/wrapper/wrapper'
import classes from './memberBenefits.module.css'
import Image from 'next/image'
export default function MemberBenefits() {
    return (
        <Wrapper>
            <div className={classes.container} id='benefits'>
                <h1>Member Benefits</h1>
                <h3>Incomparable benefits to 10X your dreams</h3>
                <div className={classes.benefits}>
                    <div className={classes.serviceContainer}>
                        <div className={classes.service1}>
                            <div className={classes.top}>
                                <div style={{ border: '2px solid rgba(36, 118, 255, 1)', borderRadius: '6px', padding: '1rem' }}>
                                    <Image src='/images/networking.png' width={60} height={60} alt="networking" />
                                </div>
                                <h2>Networking via YBC Concierge Service</h2>
                            </div>
                            <p>
                                Meet like-minded entrepreneurs, investors, and industry experts from all around the world. On average, 70% of YBC members received help from the YBC network.
                            </p>
                        </div>
                        <div className={classes.service2}>
                            <div className={classes.bottom}>
                                <div style={{ border: '2px solid rgba(36, 118, 255, 1)', borderRadius: '6px', padding: '1rem' }}>
                                    <Image src='/images/event.png' width={60} height={60} alt="event" />
                                </div>
                                <h2 className={classes.text}>Access to Exclusive Events</h2>
                            </div>
                            <p>
                                Attend YBC parties, side events at major
                                Web3 conferences and more.
                            </p>
                        </div>
                    </div>

                    <div className={classes.serviceContainer}>
                        <div className={classes.service1}>
                            <div className={classes.top}>
                                <div style={{ border: '2px solid rgba(36, 118, 255, 1)', borderRadius: '6px', padding: '1rem' }}>
                                    <Image src='/images/groupchat.png' width={60} height={60} alt="group chat" />
                                </div>
                                <h2>Access to Private
                                    Telegram Groupchat</h2>
                            </div>
                            <p>
                                Join the private YBC Telegram group chat
                                for verified members.
                            </p>
                        </div>
                        <div className={classes.service2}>
                            <div className={classes.bottom}>
                                <div style={{ border: '2px solid rgba(36, 118, 255, 1)', borderRadius: '6px', padding: '0.6rem 1rem' }}>
                                    <Image src='/images/recognition.png' width={60} height={75} alt="recognition" />
                                </div>
                                <h2>Business & Individual Recognition</h2>
                            </div>
                            <p>
                                Seize opportunities to promote your business and yourself to YBC members and networks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
