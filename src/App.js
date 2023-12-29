import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import OTPVerification from './components/Otp_verify/Otpverify';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Coming from './components/ComingSoon/Comingsson';
import Home from './components/Layouts/Home';
import PrivateRoutes from './components/PrivateRoute/PrivateRoute';



function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route  element={<PrivateRoutes />}>
    <Route exact path="/" element={<Coming />}></Route>
    <Route exact path="/home" element={<Home />}></Route>
    </Route>
     
      
      
      


      <Route exact path="/otp/verify" element={<OTPVerification />}></Route>
      <Route exact path="/signin" element={<SignIn />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
    </Routes>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </BrowserRouter>
  );
}

export default App;
