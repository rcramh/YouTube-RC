import Body from "./components/Body";
import Header from "./components/Header";
import LeftBanner from "./components/LeftBanner";
import VideoHeader from "./components/VideoHeader";


function App() {
  return (
    <div >
      <div>
        <Header/>
      </div>

      <div className="w-full h-full p-2 mt-1 flex flex-wrap justify-between border-2 border-zinc-800">
        <div>
          <LeftBanner/> 
        </div>

        <div className="p-2 border-2 border-zinc-800" >
          <VideoHeader/>
          <Body/>   
        </div>
      </div>
      
         
    </div>
  );
}

export default App;
