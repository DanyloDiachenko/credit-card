import styled from 'styled-components';

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

export const Card = (props) => {
    return (
        <Wrapper>
            <CardFront>
                <div>
                    <img src='images/card-logo.svg' alt='card-logo' />
                </div>
                <CardNumber>0000 0000 0000 0000</CardNumber>
                <CardDateDate>
                    <CardName>Jane Appleseled</CardName>
                    <CardDate>
                        <CardSince>01</CardSince>/<CardTo>29</CardTo>
                    </CardDate>
                </CardDateDate>
            </CardFront>
            <CardBack>
                <CardCVC>000</CardCVC>
            </CardBack>
        </Wrapper>
    );
};