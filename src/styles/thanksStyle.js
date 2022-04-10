import styled from 'styled-components';

export const ThanksImg = styled.img`
  height: 130px;
  padding-top: 20px;
  width: 100px;
`;

export const ThanksContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');
  background-color: hsl(213, 19%, 15%);
  display: flex;
  flex-direction: column;
  width: 370px;
  border-radius: 16px;
  align-items: center;
  & h1 {
    margin-top: 5px;
    weigth: 700;
    font-family: Overpass;
    text-align: center;
    color: white;
  }
  & p {
    margin-top: 15px;
    margin-bottom: 30px;
    padding-left: 30px;
    padding-right: 20px;
    font-family: Overpass;
    weight: 400;
    text-align: center;
  }
`;

export const RatingPhrase = styled.p`
  font-family: Overpass;
  weight: 400;
  text-align: center;
  color: hsl(25, 97%, 53%);
  background-color: hsl(216, 12%, 20%);
  border-radius: 45px;
  padding: 3px 0 3px 0;
  margin-top: 10px;
`;