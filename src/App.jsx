import React ,{useState} from 'react'
import DataContext from "./DataContext"
import Button from "./components/Button"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [change, setChange] = useState(0);
  return (
    <DataContext.Provider value={{change,setChange}}>
      <Button/> 
    </DataContext.Provider>
  )
}

export default App