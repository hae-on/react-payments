import styled from 'styled-components';
import { Card } from '../../types/Card';

interface CardItemProps {
  card: Card;
}

const CardItem = ({ card }: CardItemProps) => {
  const { cardNumber, name, expirationDate } = card;
  return (
    <CardItemContainer>
      <ICChip></ICChip>
      <CardNumberContainer>
        <p>{cardNumber.first}</p>
        <p>{cardNumber.second}</p>
        <p>{cardNumber.third}</p>
        <p>{cardNumber.fourth}</p>
      </CardNumberContainer>
      <CardInfoContainer>
        <CardNameContainer>{name}</CardNameContainer>
        <CardExpirationContainer>{`${expirationDate.month}/${expirationDate.year}`}</CardExpirationContainer>
      </CardInfoContainer>
    </CardItemContainer>
  );
};

const CardItemContainer = styled.div`
  width: 213px;
  height: 133px;

  padding: 14px;

  box-sizing: border-box;

  background: #333333;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  font-size: 12px;
  font-weight: 700;

  color: #ffffff;
`;

const ICChip = styled.div`
  width: 40px;
  height: 26px;

  margin-top: 33px;

  background: #cbba64;
  border-radius: 4px;
`;

const CardNumberContainer = styled.p`
  display: flex;
  justify-content: space-between;

  margin-top: 12px;

  font-size: 14px;
  letter-spacing: 3px;
`;

const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 7px;
`;

const CardNameContainer = styled.p``;

const CardExpirationContainer = styled.p``;

export default CardItem;
