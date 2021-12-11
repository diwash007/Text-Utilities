import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Link,
//   Outlet,
//   useParams,
//   NavLink,
// } from 'react-router-dom';

ReactDOM.render(
  <App />,
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/myapps" element={<Navigate replace to="/learn"/>} />
//       <Route path="/learn" element={<Learn/>}>
//         <Route path="courses" element={<Courses/>} >
//           <Route path=":courseid" element={<CourseId/>} />
//         </Route>
//         <Route path="bundles" element={<Bundles/>} />
//       </Route>
//     </Routes>
//   </Router>,
  document.getElementById('root')
);

// function Home() {
//   return(
//     <div>
//       <h1>Home ROuter</h1>
//     </div>
//   )
// }

// function Learn() {
//   return(
//     <div>
//       <h4>All COurses are listed here:</h4>
//       <Link to="/learn/courses">Courses</Link>
//       <Link to="/learn/bundles">Bundle</Link>
//       <Outlet />
//     </div>
//   )
// }

// function Courses() {
//   const courseList = ["React", "Angular", "Bootstrap", "Django"];
//   const randomCourse = courseList[Math.floor(Math.random()*courseList.length)];
//   return(
//     <div>
//       <h1>Courses ROuter</h1>

//       <p>More test</p>
//       <NavLink style={ ({isActive}) => {
//         return {
//           backgroundColor: isActive ? 'yellow' : "green"
//         }
//       }} to={`/learn/courses/${randomCourse}`}>{randomCourse}</NavLink>
//       <NavLink to={"/learn/courses/hii"}>hello</NavLink>
//       <Outlet></Outlet>
//     </div>
//   )
// }

// function Bundles() {
//   return(
//     <div>
//       <h1>Bundle ROuter</h1>
//     </div>
//   )
// }

// function CourseId() {
//   const {courseid} = useParams();
//   return(
//     <div>
//       <h1>{courseid}</h1>
//     </div>
//   )
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
