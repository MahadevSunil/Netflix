import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action,orginals,comedy,horror,romance} from './url'

function App() {
  
  return(
    <div className="App">
     <NavBar/>
     <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />


  </div>
    
    
  );
}
export default App;


