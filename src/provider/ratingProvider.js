import React, { useState } from 'react';
export const RatingContext = React.createContext({}) 

export const RatingProvider = (props) => {
  const [rating, setRating] = useState("");
  const [ thanksCard, setThanksCard] = useState(false);

  return (
    <RatingContext.Provider value= { { rating, setRating, thanksCard, setThanksCard } } >
      {props.children}
    </RatingContext.Provider>
  )
};
