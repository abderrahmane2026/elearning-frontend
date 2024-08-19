import './App.css';
import Header from './components/Header/Header';
import {  Routes, Route  } from "react-router-dom";
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

import Admindeashbord from './Dashboard/Admindeashbord/Admindeashbord';
import { userContext } from './Context/UserContext';
import Settings from './Dashboard/Vendeurdeashbord/Setting';
import AddProduct from './Dashboard/Vendeurdeashbord/AddProduct/AddProduct';
import AddCompany from './Dashboard/Admindeashbord/AddCompany/AddCompany';
import JobApplicationsList from './Dashboard/Admindeashbord/jobs/JobApplicationsList';
import Users from './Dashboard/Admindeashbord/UsersPage/Users';
import Reports from './Dashboard/Admindeashbord/Reports/Reports';
import AddPersonToCompany from './Dashboard/Admindeashbord/CompanyManager/AddPersone';
import AllCompanies from './Dashboard/Admindeashbord/CompanyManager/Allcompanies';
import Training from './pages/Training/Training';
import CompaniesList1 from './pages/Training/page1';
import CompaniesList2 from './pages/Training/page2';
import AddCourse from './Dashboard/Admindeashbord/AddCourses/AddCourses';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CourseOrders from './Dashboard/Admindeashbord/CourseOrders/CourseOrders';
import CompanyOrdersTable from './Dashboard/Admindeashbord/CourseOrders/CompanyOrder';
import CreateForm1 from './pages/Training/page3';
import CreateForm2 from './pages/Training/page4';
import RequestStudent from './Dashboard/Admindeashbord/CompanyManager/orderstudent';
import CreateLecturePage from './Dashboard/Admindeashbord/AddLecture/AddLecture';
import LectureDetailsPage from './components/Lectures/LecturesDetailsPage';
import LecturesOrders from './Dashboard/Admindeashbord/LecturesOrder/LecturesOrder';
import Mrdeashbord from './Dashboard/MrDeashbord/MrDeashhbord';
import Mr from './Dashboard/Admindeashbord/Sellers/professor';
import ScrollToTop from './Context/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService/TermsOfService';
import OrdersPage from './Dashboard/Userdeashbord/orders/MyOrders';
import HelpCenterPage from './pages/HelpCenterPage/HelpCenterPage';
import EducationOrder from './pages/Education/Services/EducationOrder';
import RequestsList from './Dashboard/Admindeashbord/educationorderlist/educationorderlist';

function App() {
  const {user} = userContext()
  return (
    <div className="App">
      <Header />
      <ScrollToTop/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} /> //سياسة الخصوصية
        <Route path="/TermsOfService" element={<TermsOfService/>} />//شروط الاستخدام
        <Route path="/HelpCenterPage" element={<HelpCenterPage/>} />// مركز المساعدة
        {/* الدورات التدريبية */}
        <Route path="/Courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
          {/* التربص */}
        <Route path="/Training" element={<Training />} >
        <Route index element={<CompaniesList1 />} />
        <Route path="page1" element={<CompaniesList1 />} />
        <Route path="page2" element={<CompaniesList2 />} />
        <Route path="page3" element={<CreateForm1 />} />
        <Route path="page4" element={<CreateForm2 />} />
        
        </Route>

        {/* تحسين المسنوى */}
        <Route path="/Education" element={<Education />} />
        <Route path="/lectures/:id" element={<LectureDetailsPage/>} />
        <Route path="/EducationOrder" element={<EducationOrder />} />
    
       
                {/* <Route exact path="/companies" component={CompaniesList} />
                <Route path="/companies/:id" component={CompanyDetailsPage} /> Dynamic route for company details */}
                {/* Add other routes as needed */}

    {/* company */}
     
        <Route path="/Internships" element={<InternshipsPage />} />
        <Route path="/companies/:id" element={<CompanyDetailsPage />} />
       
        
        <Route path="/AddJob" element={<AddJobPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />


        <Route path='/Dashboard/' element={
         user?.role === 'Mr' ? <Mrdeashbord/> :
          user?.role === 'client' ? <Userdashbord/> :
          user?.role === 'admin' ? <Admindeashbord/> :
          <LoginPage/>
        }>
          
          <Route index element={<AccountPage />} />
          <Route path='Account' element={<AccountPage/>}/>
          <Route path='AddLecture' element={<CreateLecturePage/>}/>
          <Route path='AddCourse' element={<AddCourse/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='AddProduct' element={<AddProduct/>}/>
          <Route path='AddCompany' element={<AddCompany/>}/>
          <Route path='JobsList' element={<JobApplicationsList/>}/>
          <Route path='CourseOrders' element={<CourseOrders/>}/>
          <Route path='CompanyOrders' element={<CompanyOrdersTable/>}/>
          <Route path='LecturesOrders' element={<LecturesOrders/>}/>
          <Route path='orderstudent' element={<RequestStudent/>}/>
          <Route path="users" element={<Users />} />
          <Route path="reports" element={<Reports/>} />
          <Route path="Mr" element={<Mr />} />
          <Route path='Myorders' element={<OrdersPage/>}/>
          <Route path="AllCompanies" element={<AllCompanies />} />
          <Route path="AllCompanies/add-person/:id" element={<AddPersonToCompany />} /> 
          <Route path="educationlist" element={<RequestsList />} />

          {/* <Route path='ServiceControl' element={<ServiceControl/>}/>
         
          
         
         
          <Route path='orders' element={<OrdersPage/>}/>
          <Route path='products' element={<ProdectList/>}/>
         
          <Route path="Sallers" element={<Sellers />} />
          <Route path="settings" element={<Setting />} />
        
          <Route path="ShoppingCart" element={<ShoppingCart/>} /> */}
        </Route>
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
