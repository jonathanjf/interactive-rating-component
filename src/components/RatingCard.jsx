import React, { useEffect } from 'react';
import { Title, List, RatingNumb, ContainerRatingCard, Icon, Paragraph, Button, custLabel } from '../styles/styles.js';
import starIcon from '../images/icon-star.svg';
import { RatingContext } from '../provider/ratingProvider';


const RatingCard = () => {
  const { setThanksCard, setRating, rating } = React.useContext(RatingContext);

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
            <custLabel for="rating1" >1</custLabel>
          </RatingNumb>
          <RatingNumb>
            <input type="radio" name="rating" id="rating2" onChange={ handleChange } value="2"/>
            <custLabel for="rating2" >2</custLabel>
          </RatingNumb >
          <RatingNumb >
            <input type="radio" name="rating" id="rating3" onChange={ handleChange } value="3"/>
            <custLabel for="rating3" >3</custLabel>
          </RatingNumb >
          <RatingNumb >
            <input type="radio" name="rating" id="rating4" onChange={ handleChange } value="4"/>
            <custLabel for="rating4" >4</custLabel>
          </RatingNumb >
          <RatingNumb >
            <input type="radio" name="rating" id="rating5" onChange={ handleChange } value="5"/>
            <custLabel for="rating5" >5</custLabel>
          </RatingNumb >
      </List>
      <Button onClick={ () => setThanksCard(true) } >Submit</Button>
    </ContainerRatingCard>
  ) 
}

export default RatingCard;