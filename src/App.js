import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/Aboutus/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Courses from './pages/CoursePage/Course';
import AddJobPage from './pages/AddJob/AddJob';
import LoginPage from './pages/LoginPage/Login';
import SignupPage from './pages/LoginPage/signup';
import Education from './pages/Education/Education';
import InternshipsPage from './pages/Internships/Internships';
import CompanyDetailsPage from './components/CompanyDetailsPage/CompanyDetailsPage';
import Userdashbord from './Dashboard/Userdeashbord/Userdeashbord';
import AccountPage from './Dashboard/Vendeurdeashbord/AccontPage/AccontPage';
import Vendeurdeashbord from './Dashboard/Vendeurdeashbord/Vendeurdeashbord';

import Admindeashbord from './Dashboard/Admindeashbord/Admindeashbord';
import { userContext } from './Context/UserContext';
import UserProfile from './Dashboard/UserProfile';
import Settings from './Dashboard/Vendeurdeashbord/Setting';
import AddProduct from './Dashboard/Vendeurdeashbord/AddProduct/AddProduct';
import AddCompany from './Dashboard/Admindeashbord/AddCompany/AddCompany';
function App() {
  const {user} = userContext()
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Internships" element={<InternshipsPage />} />
        <Route path="/company/:id" element={<CompanyDetailsPage />} />
        <Route path="/AddJob" element={<AddJobPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />



        <Route path='/Dashboard/' element={
         
          user?.role == 'client' ? <Userdashbord/> :
          user?.role == 'admin' ? <Admindeashbord/> :
          <LoginPage/>
        }>
          <Route index element={<AccountPage />} />
          <Route path='Account' element={<AccountPage/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='AddProduct' element={<AddProduct/>}/>
          <Route path='AddCompany' element={<AddCompany/>}/>

          {/* <Route path='ServiceControl' element={<ServiceControl/>}/>
          <Route path='Myorders' element={<MyOrdersPage/>}/>
          
         
         
          <Route path='orders' element={<OrdersPage/>}/>
          <Route path='products' element={<ProdectList/>}/>
          <Route path="users" element={<Users />} />
          <Route path="Sallers" element={<Sellers />} />
          <Route path="settings" element={<Setting />} />
          <Route path="reports" element={<Reports/>} />
          <Route path="ShoppingCart" element={<ShoppingCart/>} /> */}
        </Route>
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
