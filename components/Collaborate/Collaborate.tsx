import classes from './Collaborate.module.css'
import Wrapper from '../common/wrapper/wrapper'
import { BsTelegram } from 'react-icons/bs'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import * as React from 'react';
import Modal from '@mui/material/Modal';
import {RxCross1} from 'react-icons/rx'

export default function Collaborate() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Wrapper>
            <div className={classes.container}>
                <h1>Find & Collaborate</h1>
                <h3>Members can search and contact other YBC members or Businesses owned by members near you.
                    To be available in Q3 2023.</h3>
                <div className={classes.contact}>
                    <div className={classes.content}>
                        <h2>Soar Labs</h2>
                        <div className={classes.info}>
                            <MdLocationPin style={{ fontSize: '2rem', color: 'rgba(126, 143, 154, 1)' }} />
                            <p>UAE</p>
                        </div>
                        <div className={classes.info}>
                            <MdEmail style={{ fontSize: '1.7rem', color: 'rgba(126, 143, 154, 1)' }} />
                            <p>contact@soarlabs.io</p>
                        </div>
                        <div className={classes.info}>
                            <BsTelegram style={{ fontSize: '1.7rem', color: 'rgba(126, 143, 154, 1)' }} />
                            <p>@soarlabs</p>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <h2>Brian</h2>
                        <div className={classes.info}>
                            <MdLocationPin style={{ fontSize: '2rem', color: 'rgba(126, 143, 154, 1)' }} />
                            <p>Singapore</p>
                        </div>
                        <div className={classes.info}>
                            <MdEmail style={{ fontSize: '1.7rem', color: 'rgba(126, 143, 154, 1)' }} />
                            <p>brian@soarlabs.io</p>
                        </div>
                        <div className={classes.info}>
                            <BsTelegram style={{ fontSize: '1.7rem', color: 'rgba(126, 143, 154, 1)' }} />
                            <p>@brianybc</p>
                        </div>
                    </div>
                </div>
                <button className={classes.btn} onClick={handleOpen}>Browse members </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className={classes.popup}>
                        <h2>Stay tuned!</h2>
                        <RxCross1 className={classes.popupClose} onClick={handleClose}/>
                    </div>
                </Modal>
            </div>
        </Wrapper>
    )
}


