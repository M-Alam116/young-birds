import classes from './Tokenomics.module.css'
import Wrapper from '../common/wrapper/wrapper'
import Button from '../common/Button/Button'

export default function Tokenomics() {
    return (
        <Wrapper>
            <div className={classes.container} id='soar'>
                <h1>$SOAR Tokenomics</h1>
                <p>100,000,000,000 $SOAR</p>
                <div className={classes.chart}>
                    Chart....
                </div>
                <Button text='$SOAR Litepaper' style={classes.btn}/>
            </div>
        </Wrapper>
    )
}
