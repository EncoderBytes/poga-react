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

// 105
import SC10Outlet from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/SeriesCircuit10Outlet.jsx';
import Theory105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/TheoryPhy105.jsx';
import Animation105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Animation105.jsx';
import Procedure105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Procedure105.jsx';
import Simulator105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Simulator105.jsx';
import VivaVoice105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/VivaVoice105.jsx';
import Resources105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Resources105.jsx';
import Feedback105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Feedback105.jsx';
import Video105 from './Components/Dashboard/PhyPracticals/Phy10thexplained/SeriesCircuit10/NavPages/Video105.jsx';

// 106
import VOL10Outlet from "./Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/VerifyOhmLaw10Outlet.jsx"
import Theory106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/TheoryPhy106.jsx';
import Animation106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Animation106.jsx';
import Procedure106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Procedure106.jsx';
import Simulator106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Simulator106.jsx';
import VivaVoice106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/VivaVoice106.jsx';
import Resources106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Resources106.jsx';
import Feedback106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Feedback106.jsx';
import Video106 from './Components/Dashboard/PhyPracticals/Phy10thexplained/VerifyOhmLaw10/NavPages/Video106.jsx';

// 9th
// 91
import VC9Outlet from "./Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/VernierCaliper9Outlet.jsx"
import Theory91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/TheoryPhy91.jsx'
import Animation91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Animation91.jsx';
import Procedure91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Procedure91.jsx';
import Simulator91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Simulator91.jsx';
import VivaVoice91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/VivaVoice91.jsx';
import Resources91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Resources91.jsx';
import Feedback91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Feedback91.jsx';
import Video91 from './Components/Dashboard/PhyPracticals/Phy9thexplained/VernierCaliper9/NavPages/Video91.jsx';

// 95
import PO9Outlet from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/PendulumOne9Outlet.jsx'
import Theory95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/TheoryPhy95.jsx'
import Animation95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Animation95.jsx';
import Procedure95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Procedure95.jsx';
import Simulator95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Simulator95.jsx';
import VivaVoice95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/VivaVoice95.jsx';
import Resources95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Resources95.jsx';
import Feedback95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Feedback95.jsx';
import Video95 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumOne9/NavPages/Video95.jsx';

// 92
import PT9Outlet from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/PendulumTwo9Outlet.jsx'
import Theory92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/TheoryPhy92.jsx'
import Animation92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Animation92.jsx';
import Procedure92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Procedure92.jsx';
import Simulator92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Simulator92.jsx';
import VivaVoice92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/VivaVoice92.jsx';
import Resources92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Resources92.jsx';
import Feedback92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Feedback92.jsx';
import Video92 from './Components/Dashboard/PhyPracticals/Phy9thexplained/PendulumTwo9/NavPages/Video92.jsx';

// 93
import GS9Outlet from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/GlassSlab9Outlet.jsx'
import Theory93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/TheoryPhy93.jsx'
import Animation93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Animation93.jsx';
import Procedure93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Procedure93.jsx';
import Simulator93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Simulator93.jsx';
import VivaVoice93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/VivaVoice93.jsx';
import Resources93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Resources93.jsx';
import Feedback93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Feedback93.jsx';
import Video93 from './Components/Dashboard/PhyPracticals/Phy9thexplained/GlassSlab9/NavPages/Video93.jsx';

// 94
import MR9Outlet from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/MeterRod9Outlet.jsx'
import Theory94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/TheoryPhy94.jsx'
import Animation94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Animation94.jsx';
import Procedure94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Procedure94.jsx';
import Simulator94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Simulator94.jsx';
import VivaVoice94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/VivaVoice94.jsx';
import Resources94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Resources94.jsx';
import Feedback94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Feedback94.jsx';
import Video94 from './Components/Dashboard/PhyPracticals/Phy9thexplained/MeterRod9/NavPages/Video94.jsx';

// Bio 9 1
import CWA9Outlet from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/CellWallAlovera9Outlet.jsx'
import BioTheory91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioTheory91.jsx'
import BioAnimation91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioAnimation91.jsx';
import BioProcedure91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioProcedure91.jsx';
import BioSimulator91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioSimulator91.jsx';
import BioVivaVoice91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioVivaVoice91.jsx';
import BioResources91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioResources91.jsx';
import BioFeedback91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioFeedback91.jsx';
import BioVideo91 from './Components/Dashboard/BioPracticals/Bio9thexplained/CellWallAlovera9/NavPages/BioVideo91.jsx';

// 9 2
import MSE99Outlet from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/MicroScopicEx9Outlet.jsx'
import BioTheory92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioTheory92.jsx'
import BioAnimation92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioAnimation92.jsx';
import BioProcedure92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioProcedure92.jsx';
import BioSimulator92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioSimulator92.jsx';
import BioVivaVoice92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioVivaVoice92.jsx';
import BioResources92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioResources92.jsx';
import BioFeedback92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioFeedback92.jsx';
import BioVideo92 from './Components/Dashboard/BioPracticals/Bio9thexplained/MicroScopicEx9/NavPages/BioVideo92.jsx';

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
                  {/* 12 */}
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
                  } />
                  <Route path="EmfExp12" element={<EmfExp12 />} />
                  <Route path="PotentiometerExp12" element={<PotentiometerExp12 />} />
                  <Route path="OhmExp11" element={<OhmExp11 />} />

                  {/* 10 */}
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
                  } />

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
                  } />

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
                  } />

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
                  } />

                  <Route path="SeriesCircuit10/*" element={
                    <SC10Outlet>
                      <Routes>
                        <Route path="theory" element={<Theory105 />} />
                        <Route path="animation" element={<Animation105 />} />
                        <Route path="procedure" element={<Procedure105 />} />
                        <Route path="simulator" element={<Simulator105 />} />
                        <Route path="video" element={<Video105 />} />
                        <Route path="viva" element={<VivaVoice105 />} />
                        <Route path="resources" element={<Resources105 />} />
                        <Route path="feedback" element={<Feedback105 />} />
                      </Routes>
                    </SC10Outlet>
                  } />

                  <Route path="VerifyOhmLaw10/*" element={
                    <VOL10Outlet>
                      <Routes>
                        <Route path="theory" element={<Theory106 />} />
                        <Route path="animation" element={<Animation106 />} />
                        <Route path="procedure" element={<Procedure106 />} />
                        <Route path="simulator" element={<Simulator106 />} />
                        <Route path="video" element={<Video106 />} />
                        <Route path="viva" element={<VivaVoice106 />} />
                        <Route path="resources" element={<Resources106 />} />
                        <Route path="feedback" element={<Feedback106 />} />
                      </Routes>
                    </VOL10Outlet>
                  } />

                  {/* 9 */}

                  <Route path="VernierCaliper9/*" element={
                    <VC9Outlet>
                      <Routes>
                        <Route path="theory" element={<Theory91 />} />
                        <Route path="animation" element={<Animation91 />} />
                        <Route path="procedure" element={<Procedure91 />} />
                        <Route path="simulator" element={<Simulator91 />} />
                        <Route path="video" element={<Video91 />} />
                        <Route path="viva" element={<VivaVoice91 />} />
                        <Route path="resources" element={<Resources91 />} />
                        <Route path="feedback" element={<Feedback91 />} />
                      </Routes>
                    </VC9Outlet>
                  } />

                  <Route path="PendulumOne9/*" element={
                    <PO9Outlet>
                      <Routes>
                        <Route path="theory" element={<Theory95 />} />
                        <Route path="animation" element={<Animation95 />} />
                        <Route path="procedure" element={<Procedure95 />} />
                        <Route path="simulator" element={<Simulator95 />} />
                        <Route path="video" element={<Video95 />} />
                        <Route path="viva" element={<VivaVoice95 />} />
                        <Route path="resources" element={<Resources95 />} />
                        <Route path="feedback" element={<Feedback95 />} />
                      </Routes>
                    </PO9Outlet>
                  } />

                  <Route path="PendulumTwo9/*" element={
                    <PT9Outlet>
                      <Routes>
                        <Route path="theory" element={<Theory92 />} />
                        <Route path="animation" element={<Animation92 />} />
                        <Route path="procedure" element={<Procedure92 />} />
                        <Route path="simulator" element={<Simulator92 />} />
                        <Route path="video" element={<Video92 />} />
                        <Route path="viva" element={<VivaVoice92 />} />
                        <Route path="resources" element={<Resources92 />} />
                        <Route path="feedback" element={<Feedback92 />} />
                      </Routes>
                    </PT9Outlet>
                  } />

                  <Route path="GlassSlab9/*" element={
                    <GS9Outlet>
                      <Routes>
                        <Route path="theory" element={<Theory93 />} />
                        <Route path="animation" element={<Animation93 />} />
                        <Route path="procedure" element={<Procedure93 />} />
                        <Route path="simulator" element={<Simulator93 />} />
                        <Route path="video" element={<Video93 />} />
                        <Route path="viva" element={<VivaVoice93 />} />
                        <Route path="resources" element={<Resources93 />} />
                        <Route path="feedback" element={<Feedback93 />} />
                      </Routes>
                    </GS9Outlet>
                  } />

                  <Route path="MeterRod9/*" element={
                    <MR9Outlet>
                      <Routes>
                        <Route path="theory" element={<Theory94 />} />
                        <Route path="animation" element={<Animation94 />} />
                        <Route path="procedure" element={<Procedure94 />} />
                        <Route path="simulator" element={<Simulator94 />} />
                        <Route path="video" element={<Video94 />} />
                        <Route path="viva" element={<VivaVoice94 />} />
                        <Route path="resources" element={<Resources94 />} />
                        <Route path="feedback" element={<Feedback94 />} />
                      </Routes>
                    </MR9Outlet>
                  } />
                </Routes>
              } />

              {/* BIOLOGY */}
              <Route path="biopracticals/*" element={
                <Routes>
                  <Route index element={<BioPracticals />} />

                  <Route path="CellWallAlovera9/*" element={
                    <CWA9Outlet>
                      <Routes>
                        <Route path="theory" element={<BioTheory91 />} />
                        <Route path="animation" element={<BioAnimation91 />} />
                        <Route path="procedure" element={<BioProcedure91 />} />
                        <Route path="simulator" element={<BioSimulator91 />} />
                        <Route path="video" element={<BioVideo91 />} />
                        <Route path="viva" element={<BioVivaVoice91 />} />
                        <Route path="resources" element={<BioResources91 />} />
                        <Route path="feedback" element={<BioFeedback91 />} />
                      </Routes>
                    </CWA9Outlet>
                  } />

                  {/* 9 2 */}
                  <Route path="MicroScopicEx9/*" element={
                    <MSE99Outlet>
                      <Routes>
                        <Route path="theory" element={<BioTheory92 />} />
                        <Route path="animation" element={<BioAnimation92 />} />
                        <Route path="procedure" element={<BioProcedure92 />} />
                        <Route path="simulator" element={<BioSimulator92 />} />
                        <Route path="video" element={<BioVideo92 />} />
                        <Route path="viva" element={<BioVivaVoice92 />} />
                        <Route path="resources" element={<BioResources92 />} />
                        <Route path="feedback" element={<BioFeedback92 />} />
                      </Routes>
                    </MSE99Outlet>
                  } />
                </Routes>
              } />

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
