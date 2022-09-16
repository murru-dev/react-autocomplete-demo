import './App.css'

import { TApiResponse, useGetCountries } from './hooks/useGetCountries';
import AutoComplete from './components/AutoComplete';

function App() {
  // call to the hook
  const data: TApiResponse = useGetCountries();

  return (
    <div className="App">
      <h1>Autocomplete Component<br/>with React</h1>
      <AutoComplete countries={ data.data } />
    </div>
  )
}

export default App
