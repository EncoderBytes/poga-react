import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Dashmain from './Components/Dashboard/Dashmain.jsx';
import DashboardLayout from './DashLayout.jsx';
import BioPracticals from './Components/Dashboard/BioPracticals/BioPracticals.jsx';
import ChemPracticals from './Components/Dashboard/ChemPracticals/ChemPracticals.jsx';
import PhyPracticals from './Components/Dashboard/PhyPracticals/PhyPracticals.jsx';
import EmfExp12 from './Components/Dashboard/PhyPracticals/Phy12thexplained/EmfExp12.jsx';
import PotentiometerExp12 from "./Components/Dashboard/PhyPracticals/Phy12thexplained/PotentiometerExp12.jsx"
import OhmExp11 from './Components/Dashboard/PhyPracticals/Phy11thexplained/OhmExp11.jsx';
import Procedure from "./Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Procedure.jsx"
import Animation from "./Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Animation.jsx"
import Theory from "./Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Theory.jsx"
import OE12O from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/OhmExp12Outlet.jsx';
import Simulator from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Simulator.jsx';
import Video from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Video.jsx';
import VivaVoice from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/VivaVoice.jsx';
import Resources from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Resources.jsx';
import Feedback from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Feedback.jsx';
// 101
import FLC10Outlet from './Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/FocalLengthConvex10Outlet.jsx';
import TheoryPhy101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/TheoryPhy101.jsx"
import Animation101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Animation101.jsx"
import Procedure101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Procedure101.jsx"
import Simulator101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Simulator101.jsx"
import VivaVoice101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/VivaVoice101.jsx"
import Resources101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Resources101.jsx"
import Feedback101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Feedback101.jsx"
import Video101 from "./Components/Dashboard/PhyPracticals/Phy10thexplained/FocalLengthConvex10/NavPages/Video101.jsx"

// 102
import MF10Outlet from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/MagnetField10Outlet.jsx'
import Theory102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/TheoryPhy102.jsx'
import Animation102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Animation102.jsx'
import Procedure102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Procedure102.jsx'
import Simulator102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Simulator102.jsx'
import VivaVoice102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/VivaVoice102.jsx'
import Resources102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Resources102.jsx'
import Feedback102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Feedback102.jsx'
import Video102 from './Components/Dashboard/PhyPracticals/Phy10thexplained/MagnetField10/NavPages/Video102.jsx'

// 103
import PC10Outlet from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/ParallexCircuit10Outlet.jsx'
import Theory103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/TheoryPhy103.jsx'
import Animation103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Animation103.jsx'
import Procedure103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Procedure103.jsx'
import Simulator103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Simulator103.jsx'
import VivaVoice103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/VivaVoice103.jsx'
import Resources103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Resources103.jsx'
import Feedback103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Feedback103.jsx'
import Video103 from './Components/Dashboard/PhyPracticals/Phy10thexplained/ParallexCircuit10/NavPages/Video103.jsx'

// 104
import RBGS10Outlet from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/RefractionByGlassSlab10Outlet.jsx'
import Theory104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/TheoryPhy104.jsx'
import Animation104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Animation104.jsx'
import Procedure104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Procedure104.jsx'
import Simulator104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Simulator104.jsx'
import VivaVoice104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/VivaVoice104.jsx'
import Resources104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Resources104.jsx'
import Feedback104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Feedback104.jsx'
import Video104 from './Components/Dashboard/PhyPracticals/Phy10thexplained/RefractionByGlassSlab10/NavPages/Video104.jsx'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="Dashmain/*" element={
          <DashboardLayout>
            <Routes>
              <Route index element={<Dashmain />} />
              {/* Add a new route for Practicals */}

              <Route path="phypracticals/*" element={
                <Routes>
                  <Route index element={<PhyPracticals />} />
                  <Route path="OhmExp12/*" element={
                    <OE12O>
                      <Routes>
                        <Route path="theory" element={<Theory />} />
                        <Route path="procedure" element={<Procedure />} />
                        <Route path="animation" element={<Animation />} />
                        <Route path="simulator" element={<Simulator />} />
                        <Route path="simulator" element={<Simulator />} />
                        <Route path="video" element={<Video />} />
                        <Route path="viva" element={<VivaVoice />} />
                        <Route path="resources" element={<Resources />} />
                        <Route path="feedback" element={<Feedback />} />
                      </Routes>
                    </OE12O>
                  }
                  />
                  <Route path="EmfExp12" element={<EmfExp12 />} />
                  <Route path="PotentiometerExp12" element={<PotentiometerExp12 />} />
                  <Route path="OhmExp11" element={<OhmExp11 />} />

                  <Route path="FocalLengthConvex10/*" element={
                    <FLC10Outlet>
                      <Routes>
                        <Route path="theory" element={<TheoryPhy101 />} />
                        <Route path="animation" element={<Animation101 />} />
                        <Route path="procedure" element={<Procedure101 />} />
                        <Route path="simulator" element={<Simulator101 />} />
                        <Route path="video" element={<Video101 />} />
                        <Route path="viva" element={<VivaVoice101 />} />
                        <Route path="resources" element={<Resources101 />} />
                        <Route path="feedback" element={<Feedback101 />} />
                      </Routes>
                    </FLC10Outlet>
                  }
                  />

                  <Route path="MagnetField10/*" element={
                    <MF10Outlet>
                      <Routes>
                        <Route path="theory" element={<Theory102 />} />
                        <Route path="animation" element={<Animation102 />} />
                        <Route path="procedure" element={<Procedure102 />} />
                        <Route path="simulator" element={<Simulator102 />} />
                        <Route path="video" element={<Video102 />} />
                        <Route path="viva" element={<VivaVoice102 />} />
                        <Route path="resources" element={<Resources102 />} />
                        <Route path="feedback" element={<Feedback102 />} />
                      </Routes>
                    </MF10Outlet>
                  }
                  />

                  <Route path="ParallexCircuit10/*" element={
                    <PC10Outlet>
                      <Routes>
                        <Route path="theory" element={<Theory103 />} />
                        <Route path="animation" element={<Animation103 />} />
                        <Route path="procedure" element={<Procedure103 />} />
                        <Route path="simulator" element={<Simulator103 />} />
                        <Route path="video" element={<Video103 />} />
                        <Route path="viva" element={<VivaVoice103 />} />
                        <Route path="resources" element={<Resources103 />} />
                        <Route path="feedback" element={<Feedback103 />} />
                      </Routes>
                    </PC10Outlet>
                  }
                  />

                  <Route path="RefractionByGlassSlab10/*" element={
                    <RBGS10Outlet>
                      <Routes>
                        <Route path="theory" element={<Theory104 />} />
                        <Route path="animation" element={<Animation104 />} />
                        <Route path="procedure" element={<Procedure104 />} />
                        <Route path="simulator" element={<Simulator104 />} />
                        <Route path="video" element={<Video104 />} />
                        <Route path="viva" element={<VivaVoice104 />} />
                        <Route path="resources" element={<Resources104 />} />
                        <Route path="feedback" element={<Feedback104 />} />
                      </Routes>
                    </RBGS10Outlet>
                  }
                  />
                </Routes>
              } />

              {/* BIOLOGY */}
              <Route path="biopracticals" element={<BioPracticals />} />

              {/* CHEMISTRY */}
              <Route path="chempracticals" element={<ChemPracticals />} />
            </Routes>
          </DashboardLayout>
        }
        />
      </Routes>
    </Router >
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





























// *********************************************
// import './index.css'
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import Home from './Components/Home/Home.jsx';
// import Dashmain from './Components/Dashboard/Dashmain.jsx';
// import DashboardLayout from './DashLayout.jsx';
// import Bio from './Components/Dashboard/Subjects/Bio.jsx';
// import BioPracticals from './Components/Dashboard/BioPracticals/BioPracticals.jsx';
// import Chem from './Components/Dashboard/Subjects/Chem.jsx';
// import ChemPracticals from './Components/Dashboard/ChemPracticals/ChemPracticals.jsx';
// import Physics from './Components/Dashboard/Subjects/Physics.jsx';
// import PhyPracticals from './Components/Dashboard/PhyPracticals/PhyPracticals.jsx';
// import Emf from './Components/Dashboard/PhyPracticals/Phy9th/Emf.jsx';
// import EmfExp from './Components/Dashboard/PhyPracticals/Phy9thexplained/EmfExp.jsx';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//         </Route>
//         <Route path="Dashmain/*"
//           element={
//             <DashboardLayout>
//               <Routes>
//                 <Route index element={<Dashmain />} />
//                 {/* Add a new route for Practicals */}
//                 <Route path="physics" element={<Physics />} />
//                 <Route path="phypracticals" element={<PhyPracticals />} />
//                 {/* <Route path="emf" element={<Emf />} /> */}
//                 {/* <Route path="EmfExp" element={<EmfExp />} /> */}
//                 <Route path="bio" element={<Bio />} />
//                 <Route path="biopracticals" element={<BioPracticals />} />
//                 <Route path="chem" element={<Chem />} />
//                 <Route path="chempracticals" element={<ChemPracticals />} />
//               </Routes>
//             </DashboardLayout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );