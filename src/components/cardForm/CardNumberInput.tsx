import React, { useRef } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';
import {
  isNextInputFocusable,
  isInputNumber,
  isOverLength,
} from '../../utils/InputValidate';
import { ERROR_MESSAGE, INPUT, INPUT_MAX_LENGTH } from '../../utils/Constants';
import type { CardItemInfo } from '../../types/Card';

interface CardNumberInputProps {
  cardNumber: CardItemInfo['cardNumber'];
  setCardNumber: (cardNumber: CardItemInfo['cardNumber']) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const CardNumberInput = ({
  cardNumber,
  setCardNumber,
  errorMessage,
  setErrorMessage,
}: CardNumberInputProps) => {
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isOverLength(inputValue, INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH)) return;
      if (isInputNumber(inputValue, INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH)) {
        setErrorMessage(ERROR_MESSAGE.ONLY_NUMBER);
        return;
      }
      if (
        isNextInputFocusable(
          inputValue,
          inputIndex,
          INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH
        )
      )
        refs[inputIndex + 1].current?.focus();

      const newCardNumber = [...cardNumber];
      newCardNumber[inputIndex] = inputValue;

      setCardNumber(newCardNumber);
      setErrorMessage('');
    };

  return (
    <InputGroup labelValue='카드 번호' errorMessage={errorMessage}>
      <InputBox isError={!!errorMessage}>
        {Array.from({ length: INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH }).map(
          (_, index) => (
            <React.Fragment key={index}>
              <Input
                ref={refs[index]}
                value={cardNumber[index]}
                type={
                  index >= INPUT.CARD_NUMBER_VISIBLE_INPUT_ORDER
                    ? 'password'
                    : undefined
                }
                onChange={handleChangeInput(index)}
              />
              {index < INPUT.CARD_NUMBER_LAST_INPUT_ORDER && (
                <InputSeparator
                  isActive={
                    cardNumber[index].length ===
                    INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH
                  }
                >
                  -
                </InputSeparator>
              )}
            </React.Fragment>
          )
        )}
      </InputBox>
    </InputGroup>
  );
};

export default CardNumberInput;
