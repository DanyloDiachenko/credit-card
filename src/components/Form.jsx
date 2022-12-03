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
`;

const CardNameLabel = styled.input`

`;

export const Form = (props) => {
    return (
        <Wrapper className='container'>
            <div className='row'>
                <CardItemTitle>Cardholder name</CardItemTitle>
            </div>
        </Wrapper>
    );
};