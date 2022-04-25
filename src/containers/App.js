import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { AStyle, ContentStyle, ImgStyle, LinkImgStyle, TitleStyle } from '../styles/appStyle';

export default function App() {
  const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
  const NOW = new Date().getTime();
  const dateTimeAfterThreeDays = NOW + SEVEN_DAYS;

  return (
    <ContentStyle>
      <TitleStyle>WE'RE LAUNCHING SOON</TitleStyle>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      <div>
        <ImgStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1650857635/samples/workShop/pattern-hills_pciujo.svg'/>
          <div>
          <AStyle href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              ><LinkImgStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1650857287/samples/workShop/icon-facebook_ud2rnp.svg'/></AStyle>
          <AStyle href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              ><LinkImgStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1650857648/samples/workShop/icon-instagram_hdrpgm.svg'/></AStyle>
          <AStyle href="https://co.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              ><LinkImgStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1650857658/samples/workShop/icon-pinterest_srebln.svg'/></AStyle>
          </div>
      </div>
    </ContentStyle>
  );
}