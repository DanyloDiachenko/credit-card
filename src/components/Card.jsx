import styled from 'styled-components';

const Wrapper = styled.div`
    width: 400px;
    margin-left: 100px;
`;

const CardFront = styled.div`
    background-image: url(/images/bg-card-front.png);
    object-fit: contain;
    width: 449px;
    height: 247px;
    background-repeat: no-repeat;
    padding: 20px 35px;
    border: 1px solid black;
`;

const CardNumber = styled.div`

`;


const CardBack = styled.div`

`;

export const Card = (props) => {
    return (
        <Wrapper>
            <CardFront>
                <div>
                    <img src='images/card-logo.svg' />
                </div>
                <CardNumber>0000 0000 0000 0000</CardNumber>
            </CardFront>
            <CardBack></CardBack>
        </Wrapper>
    );
};