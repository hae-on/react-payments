import styled from 'styled-components';
import Label from './Label';

interface InputGroupProps {
  children: React.ReactNode;
  labelValue: string | React.ReactElement;
  errorMessage?: string;
}

const InputGroup = ({
  children,
  labelValue,
  errorMessage,
}: InputGroupProps) => {
  return (
    <InputGroupContainer>
      <Label>{labelValue}</Label>
      <div>{children}</div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputGroupContainer>
  );
};

const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ErrorMessage = styled.p`
  height: 10px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.085em;
  color: var(--red-color);
`;
export default InputGroup;
