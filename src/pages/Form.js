// import React, { Component } from 'react';
// import { Layout, Header, LoginComponent, Signup } from "../components";
// import "../style.css";


// class Form extends Component {
//         state={
//             isLoggin : true,
//         }

//     componentDidMount(){
        
//     }

//     render() {
//         const { isLoggin } = this.state;
//         const current = isLoggin ? "Signup" : "Login";
//         const currentActive = isLoggin ? "Login" : "Signup";
//         return (
//             <Layout>
//             <Header/>
//             <div className="main-child">
//             <div className="row justify-content-center wrapper">
//                 <div className="container" ref={ref => (this.container = ref)}>
//                     {isLoggin && (
//                         <LoginComponent containerRef={ref => (this.current = ref)}/> 
//                     )}
//                     {!isLoggin && (
//                         <Signup containerRef={ref => (this.current = ref)}/> 
//                     )}
//                 </div>
//             </div>
//             </div>
//           </Layout>
//         );
//     }
// }

// export default Form;