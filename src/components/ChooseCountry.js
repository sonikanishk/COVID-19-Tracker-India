import React from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'
//import css

export default function ChooseCountry(props){
    const countries = props.data; 
    const pickCountry = props.handleCountryChange;
    return(
        <div className="choose-form">
            <FormControl>
                <NativeSelect defaultValue="" onChange = {(e)=>pickCountry(e.target.value) }>
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
