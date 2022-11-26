import React from 'react';
import './App.css';
import styled from "styled-components";
import { Flex } from "./Components/Common/Flex";
import CardContentBox from "./Components/CardContentBox";
import activityImg from "./assets/activity.svg";

import binance from "./assets/binance.svg"
import bitcoin from "./assets/bitcoin.svg"
import eth from "./assets/eth.svg"
import shib from "./assets/shib.svg"
import solana from "./assets/solana.svg"

const Layout = styled(Flex)`
    justify-content: center;
    align-items: center;

    flex-direction: column;

    column-gap: 69px;
    flex-wrap: wrap;

    height: 100%;
    width: 100%;
    min-height: 100vh;
    min-width: 100vw;

    position: relative;
    background: #14172B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CardsContainer = styled(Flex)`
    justify-content: space-around;
`;

const StyledText = styled.div`
    font-family: 'Tomorrow';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #ECF0FF;
    opacity: 0.9;
`;

type CardDetailType = {
    icon: string;
    currencyName: string;
    shortFormName: string;
    price: string;
    percentageChange: string;
    isChangePositive: boolean;
    totalValueLocked: string;
    background: string;
    pairs: {
        name: string;
        icon: string;
    }[];
};

const CardDetails: CardDetailType[] = [
    {
        icon: bitcoin,
        currencyName: "Bitcoin",
        shortFormName: "BTC",
        price: '31,812.80',
        percentageChange: '10',
        isChangePositive: true,
        totalValueLocked: '60,000',
        background: 'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)',
        pairs: [
            {
                name: "Solana",
                icon: solana
            },
            {
                name: "Etherium",
                icon: eth
            },
            {
                name: "Binance",
                icon: binance
            }
        ]
    },
    {
        icon: solana,
        currencyName: "Solana",
        shortFormName: "SOL",
        price: '32.83',
        percentageChange: '12.32',
        isChangePositive: false,
        totalValueLocked: '60,000',
        background: 'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)',
        pairs: [
            {
                name: "Bitcoin",
                icon: bitcoin
            },
            {
                name: "Etherium",
                icon: eth
            },
            {
                name: "Binance",
                icon: binance
            }
        ]
    },
    {
        icon: eth,
        currencyName: "Etherium",
        shortFormName: "ETH",
        price: '1,466.45',
        percentageChange: '11.93',
        isChangePositive: false,
        totalValueLocked: '60,000',
        background: 'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(237, 240, 244, 0.1) 100%)',
        pairs: [
            {
                name: "Solana",
                icon: solana
            },
            {
                name: "Bitcoin",
                icon: bitcoin
            },
            {
                name: "Binance",
                icon: binance
            }
        ]
    },
    {
        icon: binance,
        currencyName: "Binance USD",
        shortFormName: "BUSD",
        price: '1.00',
        percentageChange: '0.26',
        isChangePositive: true,
        totalValueLocked: '60,000',
        background: 'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)',
        pairs: [
            {
                name: "Solana",
                icon: solana
            },
            {
                name: "Etherium",
                icon: eth
            },
            {
                name: "Binance",
                icon: binance
            }
        ]
    },
    {
        icon: shib,
        currencyName: "Shiba Inu",
        shortFormName: "SHIB",
        price: '0.00000001948',
        percentageChange: '8.1',
        isChangePositive: false,
        totalValueLocked: '60,000',
        background: 'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(228, 45, 4, 0.1) 100%)',
        pairs: [
            {
                name: "Solana",
                icon: solana
            },
            {
                name: "Etherium",
                icon: eth
            },
            {
                name: "Binance",
                icon: binance
            }
        ]
    }
];

const App = () => {
  return (
    <Layout>
        <Flex align={'center'} colGap={'16px'}>
            <img height={'16'} width={'16'} src={activityImg} alt={"Activity"}/>
            <StyledText>Trending Assets</StyledText>
        </Flex>

        <CardsContainer>
            {CardDetails.map((cardDetail: CardDetailType) => (
                <CardContentBox cardDetails={cardDetail}/>
            ))}
        </CardsContainer>
    </Layout>
  );
}

export default App;
