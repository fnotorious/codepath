/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const CoinInfo = ({image, name, symbol}) => {
    const [price, setPrice] = useState(null);
    
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`;

    useEffect(() => {
        const getCoinPrice = async() => {
            const response = await fetch(url);
            const data = await response.json();

            setPrice(data);
        }

        getCoinPrice().catch(console.error);
    }, [symbol]);

    return (
        <div>
            {price ? (
                <li className="main-list" key={symbol}>
                    <img
                        className="icons"
                        src={`https://www.cryptocompare.com${image}`}
                        alt={`Small icon for ${name} crypto coin`}
                    />
                    <Link
                        style={{ color: "White" }}
                        to={`/coinDetails/${symbol}`}
                        key={symbol}
                    >
                        {name} <span className="tab"></span> ${price.USD} USD
                    </Link>
                </li>
                ) : null
            }
        </div>
    )
}

export default CoinInfo