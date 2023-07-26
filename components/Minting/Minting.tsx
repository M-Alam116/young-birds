import classes from './minting.module.css'
import Wrapper from '../common/wrapper/wrapper'
import Button from '../common/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function Minting() {

    const [count, setCount] = useState(0);

    const countMinus = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
    
      const countPlus = () => {
        if (count < 5) {
          setCount(count + 1);
        }
      };

      const handleMint = () => {
        
      }
      const setWidth = () => {
        const maxWidth = 100; 
        const width = (count / 300) * maxWidth;
        return width;
      };
    

    return (
        <Wrapper>
            <div className={classes.container}>
                <div className={classes.minting}>
                    <div className={classes.heading}>
                        <h1>Young Birds Club</h1>
                        <div>
                            <span>Ethereum</span>
                            <span>ERC 721</span>
                        </div>
                    </div>
                    <p>1 YBC unlocks the YBC universe.<br></br>
                        More YBCs mean more benefits and $SOAR rewards.</p>
                    <Link href='https://docs.youngbirdsclub.com/ybc/' target='_'>
                        <Button text='YBC Litepaper' style={classes.btn} />
                    </Link>
                    <div className={classes.minted}>
                        <div className={classes.mintedDetail}>
                        <h3>{`${setWidth().toFixed(2)}% minted`}</h3>
                            <p>{count} / 300</p>
                        </div>
                        <div className={classes.mintedBar}>
                            <div style={{ width: setWidth()}}></div>
                        </div>
                    </div>

                    <div className={classes.batches}>
                        <h1>YBC 1st Batch</h1>
                        <h2>0.09 ETH</h2>
                        <p>Limit 5 per wallet</p>
                        <div className={classes.batchesControl}>
                            <span><AiOutlineMinus className={classes.icons} onClick={countMinus}/> {count} <AiOutlinePlus className={classes.icons} onClick={countPlus}/> </span>
                            <button  className={classes.mintBtn}>Mint</button>
                        </div>
                    </div>
                </div>
                <div className={classes.heroImage}>
                    <Image src='/images/nft-gray.png' width={460} height={300} alt='nft-gray' className={classes.image} />
                </div>
            </div>
        </Wrapper>
    )
}
