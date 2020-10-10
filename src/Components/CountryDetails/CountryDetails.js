import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css'

const CountryDetails = () => {
    let {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [])
    const {name, capital, region, alpha2Code, numericCode,topLevelDomain,callingCodes, subregion,
        population, latlng, demonym, area, gini, timezones, borders, nativeName
    } = country;
    return (
        <div className = "countryDetails">
            <h1 className = "detailsName">Details information of this country {countryName}</h1>
            <h1>Name:  { name}</h1>
            <h2>Capital: { capital}</h2>
            <h3>Region: { region}</h3>
            <h3>Subregion: {subregion}</h3>
            <h3>NumericCode: { numericCode}</h3>
            <h3>Alpha2Code: { alpha2Code}</h3>
            <h3>TopLevelDomain: {topLevelDomain}</h3>
            <h3>CallingCodes: {callingCodes}</h3>
            <h3>Population: {population}</h3>
            <h3>Latlng: {latlng}</h3>
            <h3>Demonym:{demonym}</h3>
            <h3>Area: {area}</h3>
            <h3>Gini: {gini}</h3>
            <h3>Timezones: {timezones}</h3>
            <h3>Borders: {borders}</h3>
            <h3>NativeName: {nativeName}</h3>
        </div>
    );
};

export default CountryDetails;