import React, { useState, useEffect } from "react";
import Highlight from "./Highlight";

export interface CountriesListProps {
  countries: Country[];
}

export interface LoadingProp {
  loading: boolean;
}
 
export interface Country {
  name: object;
  flag: string;
}


const AutoComplete = ({ countries } : CountriesListProps) => {
  const [pattern, setPattern] = useState<String>('');
  const [showList, setShowList] = useState<boolean>(false);

  if (countries === undefined) {
    return (
      <p>Getting countries... </p>
    );
  }

  if (countries !== undefined) {
    const filtered = countries.filter( (c: Country) => {
      return c.name.official.toLowerCase().includes(pattern.toLowerCase());
    });

    const handleOnChange = (val: string): void => {
      setShowList(val !== '') 
      setPattern(val)
    }

    const testEvt = (event: any): void => {
      setPattern(event.target.textContent)
      setShowList(false)
      console.log(event.target.textContent);
    }

    return (
      <div className="dropdown">
        <label htmlFor="">Start writting the country name:</label><br />
        <input className="autocomplete" list="countries" name="txtCountry" onChange={ ({ target }) => handleOnChange(target.value) } value={ pattern } />
        { showList &&
          <div className="dropdown-content">
            { filtered.length === 0 &&
              <p>No match found</p>
            }
            { filtered.length > 0 &&
              filtered.map((country: Country, i)=> (
                <Highlight key={ `country-${i}` } tags={ pattern.split(' ') } testEvt={ testEvt }>
                  { country.name.official }
                </Highlight>
            ))}
          </div>
        }
      </div>
    );
  }
};

export default AutoComplete;