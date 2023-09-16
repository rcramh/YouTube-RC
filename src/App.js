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

      <div className="w-full h-full p-2 mt-1 flex flex-wrap justify-between ">
        {/* show this content only when we click on 3 lines button */}
        {/* <div>
          <LeftBanner/> 
        </div> */}

        <div className="p-2 " >
          <VideoHeader/>
          <Body/>   
        </div>
      </div>
      
         
    </div>
  );
}

export default App;
