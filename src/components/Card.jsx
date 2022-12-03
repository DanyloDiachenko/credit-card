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

`;

export const Card = (props) => {
    return (
        <Wrapper>
            <CardFront>
                <div>
                    <img src='images/card-logo.svg' />
                </div>
                <CardNumber>0000 0000 0000 0000</CardNumber>
                <CardDateDate>
                    <CardName>Jane Appleseled</CardName>
                    <CardDate>
                        <CardSince>01</CardSince>/<CardTo>29</CardTo>
                    </CardDate>
                </CardDateDate>
            </CardFront>
            <CardBack></CardBack>
        </Wrapper>
    );
};