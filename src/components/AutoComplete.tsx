import React, { useState } from 'react'
import { Country} from '../type'
import Highlight from './Highlight'

interface ListProp {
  list: Array<Country>
}

const AutoComplete = ({ list }: ListProp) => {

  // State values
  const [inputValue, setInputValue] = useState<string>('') // Handles input value
  const [showList, setShowList] = useState<boolean>(false) // Toggles dropdown rendering

  // List to render filtered elements
  const filteredList = list.filter( (country: Country) => {
    return country.name.toLowerCase().includes(inputValue.toLowerCase())
  })

  // Handle change everytime a user writes in the input
  const handleInputChange = (newInputValue: string) => {
    setInputValue(newInputValue)
    if (newInputValue !== '') {
      setShowList(true)
    } else {
      setShowList(false)
    }
  }

  // Handles the selection of the country in the list
  const selectOption = (event: React.MouseEvent<HTMLParagraphElement>) => {
    setInputValue(event.currentTarget.textContent!)
    setShowList(false)
  }

  return (
    <div className="dropdown">
      <label htmlFor="autocomplete">Start writting the country name:</label><br />
      <input
        className="autocomplete"
        name="txtCountry"
        onChange={ (event) => handleInputChange(event.target.value) }
        value={ inputValue }
      />
      { showList &&
        <div className="dropdown-content">
          { filteredList.length === 0 &&
            <p>No match found</p>
          }
          { filteredList.length > 0 &&
            filteredList.map(
              (country: Country, i: number) => (
                <Highlight
                  key={`country-${i}`}
                  country={country.name}
                  tags={ inputValue.split(' ') }
                  selectOption={ (event: React.MouseEvent<HTMLParagraphElement>) => selectOption(event) } />
              )
            )
          }
        </div>
      }
    </div>
  )
}

export default AutoComplete