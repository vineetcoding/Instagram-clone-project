import React, { Component } from 'react';
import '../components/login.css';
import {CarouselProvider, Slider, Slide, Image} from 'pure-react-carousel';
import Card from '@mui/material/Card';
import backGroundImage from '../Images/bg.png';
import Img1 from "../Images/pic1.png";
import img2 from '../Images/pic2.png';
import img3 from '../Images/pic3.png';
import img4 from '../Images/pic4.png';
import instaLogo from '../Images/insta pic.png'

import 'pure-react-carousel/dist/react-carousel.es.css';
import { Button, CardActions, CardContent, TextField } from '@mui/material';


export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <div className='bg_img' style={{backgroundImage:`url(${backGroundImage})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
            <div className='carousel'>
              <CarouselProvider
                totalSlides={4}
                visibleSlides={1}
                naturalSlideHeight={432}
                naturalSlideWidth={230}
                isPlaying={true}
                interval={2000}
                dragEnabled={false}
                infinite={true}
                // step={3}
                touchEnabled={false}
                >
                  <Slider>
                      <Slide index={0}><Image src={Img1}></Image></Slide>
                      <Slide index={1}><Image src={img2}></Image></Slide>
                      <Slide index={2}><Image src={img3}></Image></Slide>
                      <Slide index={3}><Image src={img4}></Image></Slide>
                  </Slider>
              </CarouselProvider>
            </div>
        </div>
        <div className='login_card'>
            <Card variant="outlined">
              <div className='insta_pic'>
                <img src={instaLogo} alt='logo'/>
              </div>
              <CardContent>
                <TextField className='inputs' label="Email" variant='outlined' fullWidth="true"></TextField>
                <TextField className='inputs' label="Password" variant='outlined' fullWidth="true"></TextField>
              </CardContent>
              <CardActions>
                <Button color="primary" fullWidth={true} variant="contained">Log in</Button>
              </CardActions>
              <div>Forgotten tour password ?</div>
            </Card>
            <Card variant="outlined"> 
              <CardContent>
                <div className='dont_have_account'>Don't have an account? SignUp</div>
              </CardContent>
            </Card>
        </div>
      </div>
    )
  }
}
