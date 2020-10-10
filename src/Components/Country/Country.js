import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const {name,capital, region, alpha2Code, numericCode} = props.country;
    const history = useHistory(name);
    const handleClick = (countryName) => {
        const url = `/country/${countryName}`
        history.push(url)
        console.log(url);
    }

    return (
        <div className = "country">
            <h1>Country Name: {name}</h1>
            <h3>Capital: {capital}</h3>
            <h4>Region: {region}</h4>
            <h5>Alpha2code: {alpha2Code}</h5>
            <h5>numericCode: {numericCode}</h5>
            <button onClick = {() => handleClick(name)}>
            Click for Details
            </button>
            <br/>
            <br/>
            <Link style = {{textDecoration: "none"}} to={`/country/${name}`}>Click for Details {name}</Link>

        </div>
    );
};

export default Country;