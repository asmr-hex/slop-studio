import React from 'react';
import './App.css';
import WebAudioContextProvider from './WebAudioContextProvider'
import AudioNodesContextProvider from './AudioNodesContextProvider'
import Scene from './Scene'
import AudioEngine from './AudioEngine'
import Visualizer from './Visualizer'
import Workbench from './Workbench'
import Toolbar from './Toolbar'

// import {StateContext, defaultState} from './StateContext'
// import Workbench from './workbench'
// import Visualizer from './Visualizer'


const App = () => {
  return (
    <div className="App">
      <WebAudioContextProvider>
        <AudioNodesContextProvider>
          <AudioEngine/>
          <Scene className="Visualizer" controller={Visualizer}/>
          <Scene className="workbench" controller={Workbench}/>
          <Toolbar/>
        </AudioNodesContextProvider>
      </WebAudioContextProvider>
    </div>
  )
}







// class App extends Component {

  
//   render() {
//     return (
//       <div className="App">
//         <StateContext.Provider value={this.state}>
//           <AudioEngine/>
//           <div>header</div>
//           <Visualizer/>
//           <Workbench/>
//           <div>
//             {
//               WEBGL.isWebGLAvailable() ? "all good" : "Oops, webGL isn't available in your browser."
//             }
//           </div>
//         </StateContext.Provider>
//       </div>
//     ) 
//   }
// }

export default App;
