import React from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import '../App.css';

export default function ChooseCountry(props){
    const countries = props.data; 
    const pickCountry = props.handleCountryChange;
    return(
        <div className="choose-form Loader">
            <FormControl>
                Pick a Country
                <NativeSelect  defaultValue="" onChange = {(e)=>pickCountry(e.target.value) }>
                    <option value="global">Global</option>
                    {countries.map((country,i)=>{
                        var cont = country.Country;
                        return(
                        <option value={cont}>{cont}</option>
                        )
                    })}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
