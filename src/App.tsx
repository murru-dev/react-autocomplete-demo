import './App.css'

import { useGetCountries } from './hooks/useGetCountries'
import AutoComplete from './components/AutoComplete'

function App() {
  // call to the hook
  const { data } = useGetCountries()

  return (
    <div className="App">
      <h1>Autocomplete Component<br/>with React</h1>
      { data.length === 0 &&
        <p>Getting countries...</p>
      }
      { data.length > 0 &&
        <AutoComplete list={ data } />
      }
    </div>
  )
}

export default App
