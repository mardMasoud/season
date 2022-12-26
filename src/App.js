
import { SeasonDisplay } from "./SeasonDisplay";

function App() {
 
  
 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
}

function showPosition(position) {
console.log("Latitude: " + position.coords.latitude + 
  "\nLongitude: " + position.coords.longitude);
}
  
getLocation() 
  return (
    <div>
     season app
<SeasonDisplay/>
    </div>
  );
}

export default App;
