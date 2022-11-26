import React from "react";
import styled from "styled-components";
import { Flex } from "../Common/Flex";
import cardContent from "../../assets/CardContent.svg";
import { px2vw } from "../../utils";

const CardContainer = styled(Flex)`
    justify-content: center;

    height: clamp(300px, ${px2vw(350)}, 350px);
    width: clamp(240px, ${px2vw(290)}, 290px);
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
`;

const CardIcon = styled.div<{backgroundColor: string;}>`
    margin-top: -50px;
    position: absolute;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => (props.backgroundColor)};
    backdrop-filter: blur(50px);
`;

const TextBox = styled.div`
    //todo?:
    position: relative;
    box-sizing: border-box;
    background: #14172B;
    border-radius: 17px;

    width: 100%;
    max-width: 242px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: 'Tomorrow';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 31px;
    text-align: center;
    color: #ECF0FF;
    opacity: 0.9;
`;

//  position: relative;
//   box-sizing: border-box;
//
//   background: #000;
//   background-clip: padding-box;
//   border: solid 5px transparent;
//   border-radius: 1em;
//
//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: -1;
//     margin: -5px;
//     border-radius: inherit;
//     background: linear-gradient(to right, red, orange);
//   }

const CardBody = styled.div`
    position: relative;
`;

const CardContent = styled(Flex)`
    height: 100%;
    position: absolute;
    flex-direction: column;
    width: 100%;
    left: 0px;
    top: 0px;
    margin-top: 50px;
    justify-content: flex-end;
    align-items: center;
`;

const CoinName = styled.div`
    font-family: 'Tomorrow';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 31px;
    text-align: center;
    color: #737BAE;
    opacity: 0.9;
`;

const PairsBox = styled(Flex)`
    width: fit-content;
    height: 40px;
    background: #14172B;
    border-radius: 29.5px;
    justify-content: center;
    align-items: center;
    column-gap: 13px;
    padding: 0 15px;
    margin-top: 12px;
`;

const SubtitleText = styled.div`
    font-family: 'Tomorrow';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 31px;
    text-align: center;
    color: #5A5F7D;
    opacity: 0.9;
`;

const PercentageChangeAmount = styled.div<{isChangePositive: boolean;}>`
    position: absolute;
    color: ${(props) => props.isChangePositive ? '#00FFA3' : '#FF4D4D'};
    right: 15px;
    font-weight: 600;
    font-size: 12px;
`;

type CardDetailType = {
    icon: string;
    currencyName: string;
    shortFormName: string;
    price: string;
    percentageChange: string;
    isChangePositive: boolean;
    totalValueLocked: string;
    pairs: {
        name: string;
        icon: string;
    }[];
};

const CardContentBox = ({cardDetails}) => {
    return (
        <CardContainer>
            <CardIcon backgroundColor={cardDetails.background}>
                <img height={'50%'} width={'50%'} src={cardDetails.icon} alt={'currency'}/>
            </CardIcon>
            <CardBody>
                <CardImage src={cardContent} alt={"card"}/>
                <CardContent>
                    <CoinName>{cardDetails.currencyName} ({cardDetails.shortFormName})</CoinName>
                    <TextBox style={{marginTop: '8px'}}>
                        ${cardDetails.price}
                        <PercentageChangeAmount
                            isChangePositive={cardDetails.isChangePositive}
                        >
                            {cardDetails.isChangePositive ? '+' : '-'}
                            {cardDetails.percentageChange}%
                        </PercentageChangeAmount>
                    </TextBox>
                    <SubtitleText>Price</SubtitleText>
                    <TextBox style={{marginTop: '4px'}}>${cardDetails.totalValueLocked}</TextBox>
                    <SubtitleText>TVL</SubtitleText>
                    <PairsBox>
                        {cardDetails.pairs.map((pair) => (
                            <img height={'22px'} width={'22px'} src={pair.icon} alt={pair.name}/>
                        ))}
                    </PairsBox>
                    <SubtitleText style={{marginBottom: 'calc(50px + 11px)'}}>Popular pairs</SubtitleText>
                </CardContent>
            </CardBody>
        </CardContainer>
    );
}

export default CardContentBox;
