import React, { ReactNode } from 'react';
import classes from './wrapper.module.css'

interface Props {
  children?: ReactNode;
  style?: string;
}

const Wrapper = ({ style, children }: Props) => {
  return (
    <div className={`${classes.container} ${style}`}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Wrapper;