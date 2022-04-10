import React from 'react';
import RatingCard from './components/RatingCard';
import { Container } from './styles/app.module';
import { RatingContext } from './provider/ratingProvider';
import ThanksCard from './components/ThanksCard';


function App() {
  const { thanksCard } = React.useContext(RatingContext)
  return (
    <Container>
      { thanksCard ? <ThanksCard /> : <RatingCard />}
    </Container>
  )
}

export default App;
