import React, { useState, useEffect } from 'react';
import { Title, List, RatingNumb, ContainerRatingCard, Icon, Paragraph, Button } from '../styles/styles.js';
import starIcon from '../images/icon-star.svg';
import { RatingContext } from '../provider/ratingProvider';


const RatingCard = () => {
  const { setThanksCard, setRating, rating, thanksCard } = React.useContext(RatingContext);

  useEffect(() => {
    console.log(rating)
  })

  const handleChange = ({ target }) => {
    const { name , value } = target
    setRating({
      [name]: value
    });
  };

  return (
    <ContainerRatingCard>
      <Icon src={starIcon} alt="star icon"/>
      <Title>How did we do?</Title>
      <Paragraph> Please let us know how we did with your support request. All feedback is appreciated to help 
        us improve our offering!
      </Paragraph>
      <List>
          <RatingNumb>
            <input type="radio" name="rating" id="rating1" onChange={ handleChange } value="1" />
            <label for="rating1" >1</label>
          </RatingNumb>
          <RatingNumb>
            <input type="radio" name="rating" id="rating2" onChange={ handleChange } value="2"/>
            <label for="rating2" >2</label>
          </RatingNumb >
          <RatingNumb >
            <input type="radio" name="rating" id="rating3" onChange={ handleChange } value="3"/>
            <label for="rating3" >3</label>
          </RatingNumb >
          <RatingNumb >
            <input type="radio" name="rating" id="rating4" onChange={ handleChange } value="4"/>
            <label for="rating4" >4</label>
          </RatingNumb >
          <RatingNumb >
            <input type="radio" name="rating" id="rating5" onChange={ handleChange } value="5"/>
            <label for="rating5" >5</label>
          </RatingNumb >
      </List>
      <Button onClick={ () => setThanksCard(true) } >Submit</Button>
    </ContainerRatingCard>
  ) 
}

export default RatingCard;