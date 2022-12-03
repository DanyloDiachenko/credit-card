import styled from 'styled-components';

const Wrapper = styled.form`
    width: 449px;
    height: 247px;
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

export const Form = (props) => {
    return (
        <Wrapper className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <CardItemTitle>Cardholder name</CardItemTitle>
                    <CardNameInput value={props.inputName} onChange={props.setInputName} />
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <CardItemTitle>Cardholder surname</CardItemTitle>
                    <CardSurNameInput value={props.inputSurname} onChange={props.setInputSurname} />
                </div>
                <div className='col-12 mt-4'>
                    <CardItemTitle>Card number</CardItemTitle>
                    <CardSurNameInput />
                </div>
            </div>
        </Wrapper>
    );
};