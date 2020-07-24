import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Avatar} from '@material-ui/core';
import samir from './images/samir.jpg'
import styles from './Profile.module.css'
import cx from  'classnames';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));
export default function ImageAvatars() {
  const classes = useStyles();
    return (
      <div>
      <Grid className={styles.Avtar}>
        <Avatar alt="Samir Kumar" src={samir} className={classes.large} />
      </Grid> 
          <h2 className={cx(styles.line,styles.anim_typewriter)}>My name is Samir Kumar.</h2> 
      </div>
    );
  }