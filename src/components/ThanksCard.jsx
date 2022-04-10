import React from 'react';
import { RatingContext } from '../provider/ratingProvider';
import { Paragraph } from '../styles/styles.js';
import { ThanksImg, ThanksContainer, RatingPhrase } from '../styles/thanksStyle.js';
import imgFeedback from '../images/illustration-thank-you.svg';

const ThanksCard = () => {
  const { rating } = React.useContext(RatingContext);
  const ratingValue = rating.rating
  return (
    <ThanksContainer>
      <ThanksImg src={imgFeedback} alt="feedback"/>
      <RatingPhrase>You selected {ratingValue} out of 5</RatingPhrase>
      <h1>Thank you!</h1>
      <Paragraph>We appreciate you taking the time to give a rating.  If you ever need more support. Don't hesitate to get in touch!</Paragraph>
    </ThanksContainer>
    
  );
};

export default ThanksCard;