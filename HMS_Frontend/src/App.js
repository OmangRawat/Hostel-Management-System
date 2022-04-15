// import React from 'react'
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home_page } from './MyComponents/Home_page';
// import { Login } from './MyComponents/Login';

// export const App = () => {
//   return (
//     <div>
//       {/* <Router>
// 			<Routes>
// 				<Route path="/" exact component={() => <Login />} />
// 				<Route path="/Guards" exact component={() => <Home_page />} />
// 			</Routes>
// 			</Router> */}
//       {/* <Home_page /> */}
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" exact component={() => <Login />} />
// 				<Route path="/Guards" exact component={() => <Home_page />} />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login} from './MyComponents/Login';
import {Signup} from './MyComponents/Signup';
// import { Home_page } from './MyComponents/Home_page'
import { Guard_home } from './MyComponents/Guard/Guard_home';
import { Popup } from './MyComponents/Guard/Popup';
import { G_Cln_Req } from './MyComponents/Guard/G_Cln_Req';
import { G_Del_Status } from './MyComponents/Guard/G_Del_Status';
import { CS_Home } from './MyComponents/Cleaning_Staff/CS_Home';
import { W_Home } from './MyComponents/Warden/W_Home';
import { C_Home } from './MyComponents/Caretaker/C_Home';
import { S_Home } from './MyComponents/Student/S_Home';
import { S_Popup } from './MyComponents/Student/S_Popup';
import { G_Profile } from './MyComponents/Guard/G_Profile';
import { Dashboard } from './MyComponents/Dashboard';
import { Navbar } from './MyComponents/Navbar';
import { W_Profile } from './MyComponents/Warden/W_Profile';
import { C_Profile } from './MyComponents/Caretaker/C_Profile';
import { CS_Profile } from './MyComponents/Cleaning_Staff/CS_Profile';
import { C_CS_Home } from './MyComponents/Caretaker/C_CS_Home';
import { CS_Accept } from './MyComponents/Cleaning_Staff/CS_Accept';
import { S_H } from './MyComponents/Student/S_H';
import { W_P } from './MyComponents/Warden/W_P';
import { C_P } from './MyComponents/Caretaker/C_P';
import { CS_P } from './MyComponents/Cleaning_Staff/CS_P';
import { G_P } from './MyComponents/Guard/G_P';
import { G_Spt_Req } from './MyComponents/Guard/G_Spt_Req';
import { G_Spt_Return } from './MyComponents/Guard/G_Spt_Return';

class App extends React.Component {
  	render(){
    return(
        <div className="App">
			<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path="/guards" element={<Guard_home />} />
				<Route path="/guards/roomQueries" element={<Guard_home />} />
				<Route path="/guards/profile" element={<G_P />} />
				<Route path="/guards/cleaningRequest" element={<G_Cln_Req />} />
				<Route path="/guards/deliveryStatus" element={<G_Del_Status />} />
				<Route path="/guards/sportsRequest" element={<G_Spt_Req />} />
				<Route path="/guards/sportsEqpReturn" element={<G_Spt_Return />} />

				<Route path="/cleaningService/cleaningRequest" element={<CS_Home />} />
				<Route path="/cleaningService" element={<CS_Home />} />
				<Route path="/cleaningService/acceptedRequest" element={<CS_Accept />} />
				<Route path="/cleaningService/Profile" element={<CS_P />} />

				<Route path="/warden/students" element={<W_Home />} />
				<Route path="/warden" element={<W_Home />} />
				<Route path="/warden/profile" element={<W_P />} />

				<Route path="/caretaker/guards" element={<C_Home />} />
				<Route path="/caretaker" element={<C_Home />} />
				<Route path="/caretaker/cleaningService" element={<C_CS_Home />} />
				<Route path="/caretaker/profile" element={<C_P />} />

				<Route path="/student" element={<S_H />} />
				<Route path="/student/profile" element={<S_H />} />

				<Route path="/dashboard" element={<Dashboard />} />

				<Route path="/navbar" element={<Navbar />} />

				{/* <Route path="/popup" element={<Popup />} /> */}
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />


				<Route path='/sample' element={<S_H />} />

			</Routes>
			</Router>

    	</div>
    );
  }
}

export default App;
