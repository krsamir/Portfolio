import React from "react";
import { Grid } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import wallpaper from "./images/wallpaper.jpg";
import styles from "./App.module.css";
import Profile from "./Profile";
const MyComponent = () => (
  <Grid>
    {/* -----basic config-----*/}
    <Parallax
      blur={10}
      bgImage={wallpaper}
      bgImageAlt="the cat"
      strength={200}
    >
      {/* Put some text content here - even an empty div with fixed dimensions to have a height */}
      <div style={{ height: "100px" }} />
    </Parallax>

    {/* -----dynamic blur-----*/}
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={wallpaper}
      bgImageAlt="the dog"
      strength={200}
    >
      <Grid className={styles.bigbox} >
        <Grid className={styles.glass}>
          <Profile />
        </Grid>
      </Grid>
      <div style={{ height: "80px" }} />
    </Parallax>

    {/* -----custom background element-----*/}
    <Parallax strength={400}>
      {/* <div>Use the background component for custom elements</div> */}
      <Background className="custom-bg">
        <img
          src={wallpaper}
          alt="fill murray"
        />
      </Background>
    </Parallax>

    <Parallax
      blur={10}
      bgImage={wallpaper}
      bgImageAlt="the cat"
      strength={200}
    >
      {/* Put some text content here - even an empty div with fixed dimensions to have a height */}
      <div style={{ height: "100px" }} />
    </Parallax>

    {/* -----renderProp: "renderLayer"-----*/}
    {/* <Parallax
            bgImage={'C://Users//Samir//Desktop//Portfolio//my-portfolio//src//images//wallpaper.jpg'}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p>... Content</p>
        </Parallax> */}
  </Grid>
);

export default MyComponent;

//ref: https://www.npmjs.com/package/react-parallax
