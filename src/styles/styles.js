import styled from 'styled-components';

export const ContainerRatingCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');
  background-color: hsl(213, 19%, 15%);
  display: flex;
  flex-direction: column;
  width: 370px;
  border-radius: 16px;


  & h1 {
    padding-left: 30px;
    weigth: 700;
    font-family: Overpass;
  }
  & p {
    padding-left: 30px;
    padding-right: 20px;
    font-family: Overpass;
    weight: 400;
  }

  @media (min-width: 1400px) {
    width: 650px;
    height: 550px;

    & h1 {
      font-size: 70px;
    }

    & p {
      font-size: 30px;
      padding-botton: 15px;
    }
  }
`;


export const Icon = styled.img`
  width: 30px;
  background-color: hsl(216, 12%, 20%);
  border-radius: 50%;
  margin-left: 30px;
  padding: 8px;
  margin-bottom: 15px;
  margin-top: 15px;
  @media (min-width: 1400px) {
    padding: 8px;
    width: 50px;
  }
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  color: hsl(216, 12%, 54%);
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  margin-top: 30px;
  margin-bottom: 20px;
  @media (min-width: 1400px) {
    margin-bottom: 50px;
    margin-top: 50px;
  }
`;

export const RatingNumb = styled.li`
  input[type=radio] { 
    display: none; 
}
  input[type=radio]:checked + label { 
    background: hsl(217, 12%, 63%);
    color: white;
}
  @media (min-width: 1400px) {
    & label {
      font-size: 28px;
      padding: 0.5em 1em;
    }
    margin-left: 18px;
    margin-right: 18px;
  }
`;

export const CustLabel = styled.label`
  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');
  border-radius: 50%;
  font-family: Overpass;
  font-size: 15px;
  font-weight: bold;
  background-color: hsl(216, 12%, 20%);
  color: hsl(217, 12%, 63%);
  padding: .5em 1em;
  text-align:center;
  @media (min-width: 1400px) {
    font-size: 28px;
    padding: 0.5em 1em;
  }
  &:hover {
    background-color: hsl(25, 97%, 53%);
    color: white;
  }
`;

export const Button = styled.button`
  border-style: none;
  width: 85%;
  align-self: center;
  margin-bottom: 30px;
  background-color: hsl(25, 97%, 53%);
  border-radius: 45px;
  height: 50px;
  color: White;
  text-transform: uppercase;
  letter-spacing: 2px;
  &:hover {
    background-color: #Fff;
    color: hsl(25, 97%, 53%);
  }

  @media (min-width: 1400px) {
    height: 70px;
    border-radius: 45px;
    width: 90%;
    font-size: 25px;
    letter-spacing: 7px;
  }
`;
