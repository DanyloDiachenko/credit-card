import { useState } from 'react';
import styled from 'styled-components';


const LeftColumn = styled.div`
  background-image: url(/images/bg-main-desktop.png);
  height: 100vh;
  background-repeat: no-repeat;
`;

const RightColumn = styled.div`
  
`;

const Wrapper = styled.div`
    width: 400px;
    margin-left: 15%;
`;

const CardFront = styled.div`
    background-image: url(/images/bg-card-front.png);
    width: 449px;
    height: 247px;
    background-repeat: no-repeat;
    padding: 20px 35px;
`;

const CardNumber = styled.div`
    font-size: 30px;
    margin-top: 30px;
    letter-spacing: 2px;
`;

const CardDateDate = styled.div`
    letter-spacing: 1.5px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    margin-top: 63px;
`;

const CardName = styled.span``;

const CardDate = styled.span``;

const CardSince = styled.span``;
const CardTo = styled.span``;


const CardBack = styled.div`
    background-image: url(/images/bg-card-back.png);
    width: 449px;
    height: 247px;
    background-repeat: no-repeat;
    margin: 50px 0 0 20%;
`;

const CardCVC = styled.div`
    padding: 108px 0 0 360px;
    letter-spacing: 1.5px;
`;


const WrapperForm = styled.form`
    width: 449px;
    border: 2px solid red;
    margin-right: 15%;
    color: black;
`;

const CardItemTitle = styled.div`
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 14px;
`;

const CardNameInput = styled.input.attrs({
  placeholder: 'e.g. Jane'
})``;

const CardSurNameInput = styled.input.attrs({
  placeholder: 'e.g. Appleseed',
})``;

const CardNumberInput = styled.input.attrs({
  placeholder: '1234 5678 9012 3456',
})``;

const CardCardDateSinceInput = styled.input.attrs({
  placeholder: 'MM',
})``;

const CardCardDateToInput = styled.input.attrs({
  placeholder: 'YY',
})``;

const Button = styled.button.attrs({
  type: 'submit'
})`
  width: 100%;
  height: 50px;
  background-color: hsl(278, 68%, 11%);
  color: white;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  border-radius: 8px;
  transition: 0.3s;
  border: none;

  &:hover {
    background-color: hsl(279, 6%, 55%)
  };
`;


const App = () => {

  const [inputesState, setInputesState] = useState({
    inputName: '',
    inputSurname: '',
    inputCardNumber: '',
    inputCardDateSince: '',
    inputCardDateTo: '',
    inputCardCVC: '',
  });

  return (
    <div className="container-fluid">
      <div className='row'>
        <LeftColumn className='col-lg-6 col-md-12 d-flex align-items-center p-0 text-white'>
          <Wrapper>
            <CardFront>
              <div>
                <img src='images/card-logo.svg' alt='card-logo' />
              </div>
              <CardNumber>{inputesState.inputCardNumber}</CardNumber>
              <CardDateDate>
                <div>
                  <CardName>{inputesState.inputName} </CardName>
                  <CardName>{inputesState.inputSurname}</CardName>
                </div>
                <CardDate>
                  <CardSince>{inputesState.inputCardDateSince}</CardSince>/<CardTo>{inputesState.inputCardDateTo}</CardTo>
                </CardDate>
              </CardDateDate>
            </CardFront>
            <CardBack>
              <CardCVC>{inputesState.inputCardCVC}</CardCVC>
            </CardBack>
          </Wrapper>
        </LeftColumn>
        <RightColumn className='col-lg-6 col-md-12 d-flex align-items-center p-0'>
          <WrapperForm className='container'>
            <div className='row'>
              <div className='col-lg-6 col-sm-12'>
                <CardItemTitle>Cardholder name</CardItemTitle>
                <CardNameInput value={inputesState.inputName} onChange={(e) => setInputesState({ ...inputesState, inputName: e.target.value })} />
              </div>
              <div className='col-lg-6 col-sm-12'>
                <CardItemTitle>Cardholder surname</CardItemTitle>
                <CardSurNameInput value={inputesState.inputSurname} onChange={(e) => setInputesState({ ...inputesState, inputSurname: e.target.value })} />
              </div>
              <div className='col-12 mt-4'>
                <CardItemTitle>Card number</CardItemTitle>
                <CardNumberInput value={inputesState.inputCardNumber} onChange={(e) => setInputesState({ ...inputesState, inputCardNumber: e.target.value })} />
              </div>
              <div className='col-6 mt-4 row'>
                <CardItemTitle>EXP.DATE (MM/YY)</CardItemTitle>
                <div className='col-6'>
                  <CardCardDateSinceInput value={inputesState.inputCardDateSince} onChange={(e) => setInputesState({ ...inputesState, inputCardDateSince: e.target.value })} />
                </div>
                <div className='col-6'>
                  <CardCardDateToInput value={inputesState.inputCardDateTo} onChange={(e) => setInputesState({ ...inputesState, inputCardDateTo: e.target.value })} />
                </div>
              </div>
              <div className='col-6 mt-4'>
                <CardItemTitle>CVC</CardItemTitle>
                <CardSurNameInput value={inputesState.inputCardCVC} onChange={(e) => setInputesState({ ...inputesState, inputCardCVC: e.target.value })} />
              </div>
              <div className='col-12 mt-5'>
                <Button>Confirm</Button>
              </div>
            </div>
          </WrapperForm>
        </RightColumn>
      </div>
    </div>
  );
}

export default App;
