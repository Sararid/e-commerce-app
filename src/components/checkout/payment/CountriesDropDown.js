import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import './Payment.scss'

const CountriesDropDown = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        api().then((data) => {
            setData(data);
        });
    }, []);
    const nameCountry = data.map((item, i) => {
        return <option key={i}>{item.name}</option>;
    });
    return (
        <>
            <select
                name="country"
                class="form-control"
                id="country"
                className="input_country"
            >
                <option value="">Select a Country</option> {nameCountry}
            </select>
        </>
    );
};

export default CountriesDropDown;
