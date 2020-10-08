import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



// -------------using jsx--------------------
// const element = <h1>welcome to React Programming word ......</h1>
// ReactDOM.render(element,document.getElementById('root'));


// ------------- with out jsx -------------------
// const eelement = React.createElement("h1",{className:'testClass'},"welcome to React Programming word ")
// ReactDOM.render(eelement,document.getElementById('root'));


//---------------- To display text ----------------
// const element1 = React.createElement("div", { className: "testClass" },
//     React.createElement("h1", null, "welcome to React Programming"),
//     React.createElement("h1", null, "we are ready to go with React...."));
// ReactDOM.render(element1, document.getElementById('root'));


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
// class Employee extends React.Component{
//   state={counter:0};
//   addemploy=()=>{
//     this.setState({counter:this.state.counter+1});
//   }
//   render(){
//     return<div>
//       <h1>welcome to employee Class ......</h1>
//       <p>
//         <button onClick={this.addemploy}>Add an Employee</button>
//       </p>
//       <p>Add Employee Button Clicked:<b>{this.state.counter} time</b></p>
//     </div>
//   }
// }

// const element = <Employee></Employee>
// ReactDOM.render(element,document.getElementById('root'));


//---------------------------- Intraction Between React Components -----------------------
// class Employee extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             updatedSalary: null
//         };
//     }

//     getUpdatedSalary = (salary) => {
//         this.setState({ updatedSalary: salary });
//     }

//     render() {
//         return <div>
//             <h1>Employee Component.....</h1>
//             <p>
//                 <label>Employee Id:<b>{this.props.Id}</b></label>
//             </p>
//             <p>
//                 <label>Employee Name:<b>{this.props.Name}</b></label>
//             </p>
//             <p>
//                 <label>Employee Location:<b>{this.props.Location}</b></label>
//             </p>
//             <p>
//                 <label>Total Salary:<b>{this.props.Salary}</b></label>
//             </p>
//             <p>
//                 <label>Updated Salary :<b>{this.state.updatedSalary}</b></label>
//             </p>
//             <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>
//         </div>
//     }
// }

// class Salary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             basic: this.props.BasicSalary,
//             hra: this.props.HRA,
//             sa: this.props.SpecialAllowance
//         };
//     }

//     updateSalary = () => {
//         let salary = parseInt(this.refs.basic.value) + parseInt(this.refs.hra.value) +
//             parseInt(this.refs.sa.value);
//         this.props.onSalaryChanged(salary);
//     }

//     render() {
//         return <div>
//             <h1>Salary Component.....</h1>
//             <p>
//                 <label>Basic Salaty :<input type="text" ref="basic" defaultValue={this.state.basic}></input></label>
//             </p>
//             <p>
//                 <label>HRA :<input type="text" ref="hra" defaultValue={this.state.hra}></input></label>
//             </p>
//             <p>
//                 <label>Specila Allowance :<input type="text" ref="sa" defaultValue={this.state.sa}></input></label>
//             </p>
//             <button onClick={this.updateSalary}>Update</button>
//         </div>
//     }
// }

// const element = <Employee Id="101" Name="Mahendra" Location="Botad" Salary="25000" BasicSalary="10000" HRA="10000" SpecialAllowance="5000"></Employee>
// ReactDOM.render(element, document.getElementById('root'));

//--------------------------- Form input Types ------------------------------------
// class EmployeeComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             employee:{
//                 Id:'',
//                 Name:'',
//                 Location:'',
//                 Salary:''
//             }
//         };
//     }

//     changeHandler=e=>{
//         const name=e.target.name;
//         const value=e.target.value;

//         this.setState({employee:{
//             ...this.state.employee,
//             [name]:value
//         }});
//     }

//     onCreateEmployee=()=>{
//         console.log(this.state.employee);
//     }

//     render(){
//         return (<div>
//             <h2>New Employee Form...</h2>
//             <form>
//                 <p>
//                     <label>Employee Id : <input type="text" name="Id" value={this.state.employee.Id} onChange={this.changeHandler}></input></label>
//                 </p>
//                 <p>
//                     <label>Employee Name : <input type="text" name="Name" value={this.state.employee.Name} onChange={this.changeHandler}></input></label>
//                 </p>
//                 <p>
//                     <label>Employee Location : <input type="text" name="Location" value={this.state.employee.Location} onChange={this.changeHandler}></input></label>
//                 </p>
//                 <p>
//                     <label>Employee Salary : <input type="text" name="Salary" value={this.state.employee.Salary} onChange={this.changeHandler}></input></label>
//                 </p>
//             </form>
//             <button onClick={this.onCreateEmployee}>Create</button>
//         </div>
//         )
//     }
// }

// const element=<EmployeeComponent></EmployeeComponent>
// ReactDOM.render(element,document.getElementById("root"));


//--------------------------- form velidation using formik -------------------------------

// const validateEmployee = empData => {
//     const errors = {};

//     if (!empData.Name) {
//         errors.Name = "Please Enter Employee Name";
//     } else if (empData.Name.length > 20) {
//         errors.Name = "Employee Name should not execeed 20 chaeacters";
//     }

//     if (!empData.Location) {
//         errors.Location = "Please Enter Employee Location";
//     }

//     if (!empData.EmailId) {
//         errors.EmailId = "Please Enter Employee EmailId";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
//         errors.EmailId = "Invelid email address";
//     }

//     return errors;
// }


const EmployeeComponent = () => {
    const formik = useFormik({
        initialValues: {
            Id: '',
            Name: '',
            Location: '',
            Salary: '',
            EmailId: ''
        },

        // validate: validateEmployee,           //using formik

        validationSchema:yup.object({
            Name:yup.string().max(20,"Name should not exceed 20 characters").required("please enter the Employee Name"),
            EmailId:yup.string().email("Invelid email address").required("Please Enter Email Id"),
            Location:yup.string().required("Please Enter A Location")
        }),

        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <div>
            <h2>New Employee Form...</h2>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label htmlFor="Id">Employee ID : </label>
                    <input type="text" name="Id" id="Id" value={formik.values.Id}
                        onChange={formik.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="Name">Employee Name : </label>
                    <input type="text" name="Name" id="Name" value={formik.values.Name}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.Name && formik.errors.Name ? <span style={{ color: 'red' }}>{formik.errors.Name}</span> : null}
                </p>
                <p>
                    <label htmlFor="Location">Employee Location : </label>
                    <input type="text" name="Location" id="Location" value={formik.values.Location}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.Location && formik.errors.Location ? <span style={{ color: 'red' }}>{formik.errors.Location}</span> : null}
                </p>
                <p>
                    <label htmlFor="Salary">Employee Salary : </label>
                    <input type="text" name="Salary" id="Salary" value={formik.values.Salary}
                        onChange={formik.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="EmailId">Employee EmailId : </label>
                    <input type="text" name="EmailId" id="EmailId" value={formik.values.EmailId}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.EmailId && formik.errors.EmailId ? <span style={{ color: 'red' }}>{formik.errors.EmailId}</span> : null}
                </p>
                <button type="submit">Create</button>
                {/* <Button variant="primary">Primary</Button>{' '} */}
            </form>
        </div>
    )
}

const element = <EmployeeComponent></EmployeeComponent>
ReactDOM.render(element, document.getElementById("root"));