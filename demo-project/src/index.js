import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// -------------using jsx--------------------
// const element = <h1>welcome to React Programming word ......</h1>
// ReactDOM.render(element,document.getElementById('root'));


// ------------- with out jsx -------------------
// const eelement = React.createElement("h1",null,"welcome to React Programming word ")
// ReactDOM.render(eelement,document.getElementById('root'));


//---------------- To display text ----------------
// const element1 = React.createElement("div",{className:"testClass"},
// React.createElement("h1",null,"welcome to React Programming"),
// React.createElement("h1",null,"we are ready to go with React...."));
// ReactDOM.render(element1,document.getElementById('root'));

//---------------- User Define component display using function --------------
// function DisplayEmployeeInfo(employee) {
//   return <div>
//     <p>
//       <label>Employee ID :<b>{employee.Id}</b></label>
//     </p>
//     <p>
//       <label>Employee Name :<b>{employee.Name}</b></label>
//     </p>
//     <p>
//       <label>Employee Location :<b>{employee.Location}</b></label>
//     </p>
//   </div>;
// }

// const element = <DisplayEmployeeInfo Id="101" Name="Mahendra" Location="Botad"></DisplayEmployeeInfo>
// ReactDOM.render(element,document.getElementById('root'));

//---------------- User Define component display using error function --------------
// var DisplayEmployeeInfo=(employee)=> {
//   return <div>
//     <h1>Employee Details .......</h1>
//     <p>
//       <label>Employee ID :<b>{employee.Id}</b></label>
//     </p>
//     <p>
//       <label>Employee Name :<b>{employee.Name}</b></label>
//     </p>
//     <p>
//       <label>Employee Location :<b>{employee.Location}</b></label>
//     </p>
//     <Department deptName={employee.deptName} deptHead={employee.deptHead}></Department>
//   </div>;
// }

// const Department=(depinfo)=>{
//   return <div>
//     <p>Department Name:<b>{depinfo.deptName}</b></p>
//     <p>Department Head:<b>{depinfo.deptHead}</b></p>
//   </div>;
// }

// const element = <DisplayEmployeeInfo Id="101" Name="Mahendra" Location="Botad" deptName="IT" deptHead="rajat"></DisplayEmployeeInfo>
// ReactDOM.render(element,document.getElementById('root'));


//----------------------------- Class base randring ------------------------
// class Employee extends React.Component{
// constructor(props){
//   super(props);
//   console.log(this.props);
// }

//   render(){
//     return <div>
//       <h1>Employee Detail.....</h1>
//       <p><label>Employee Id:<b>{this.props.Id}</b></label></p>
//       <p><label>Employee Location:<b>{this.props.Location}</b></label></p>
//       <p><label>Employee Name:<b>{this.props.Name}</b></label></p>
//       <Department deptName={this.props.deptName} deptHead={this.props.deptHead}></Department>
//     </div>
//   }
// }

// class Department extends React.Component{
//   render(){
//     return<div>
//       <h1>Department Detail...</h1>
//       <p><label>Deaprtment Name:<b>{this.props.deptName}</b></label></p>
//       <p><label>Deaprtment Head:<b>{this.props.deptHead}</b></label></p>
//     </div>
//   }
// }

// const element = <Employee Id="101" Name="Mahendra" Location="Botad" deptHead="Rajat" deptName="IT"></Employee>
// ReactDOM.render(element,document.getElementById('root'));


//------------------------------ introduction to State -------------------
class Employee extends React.Component{
  state={counter:0};
  addemploy=()=>{
    this.setState({counter:this.state.counter+1});
  }
  render(){
    return<div>
      <h1>welcome to employee Class</h1>
      <p>
        <button onClick={this.addemploy}>Add an Employee</button>
      </p>
      <p>Add Employee Button Clicked:<b>{this.state.counter} time</b></p>
    </div>
  }
}

const element = <Employee></Employee>
ReactDOM.render(element,document.getElementById('root'));