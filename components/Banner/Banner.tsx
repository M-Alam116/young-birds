import classes from './Banner.module.css'
import Image from 'next/image'
import Wrapper from '../common/wrapper/wrapper'

export default function Banner() {
    return (
        <Wrapper>
            <div className={classes.container}>
                <div className={classes.banner}>
                    <p>YBCs earn $SOAR, the token that every bird wants to get their wings on.</p>
                    <Image src='/images/bannerImg.png' width={300} height={248} alt='image' className={classes.image} />
                </div>
            </div>
        </Wrapper>
    )
}
