import React from "react";


const pageCSS = {
    margin: '1rem',
    padding: '1rem'
}

export class FormUnControlled extends React.Component {


    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.state = {
            isLoggedin:true,
            registerForm: {
                firstName: "rrr",
                lastName: "13134",
                emailId: "dbbd",
                password: "svsv"
            }
        }
    }

    handleSubmit = (e) => {
         e.preventDefault();
        this.validateForm();
        console.log("handling FOrm");
    }

    validateForm =() =>{
        const { firstName, lastName, emailId, password} = this.state.registerForm;
        if(!(firstName.trim()!="" && firstName!=null)){
            alert("FirstName is invalid , please enter some value");
            return false;
        }
        if(!(lastName.trim()!="" && lastName!=null)){
            alert("LastName is invalid , please enter some value");
            return false;
        }
         if(!(emailId.trim()!="" && emailId!=null)){
            alert("emailId is invalid , please enter some value");
            return false;
        }
         if(!(password.trim()!="" && password!=null)){
            alert("Password is invalid , please enter some value");
            return false;
        }

        const body = {
            ...this.state.registerForm
        };
        console.log(body);
        return true;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const formState = this.state.registerForm;

        formState[`${name}`] = `${value}`;
        this.setState((prev) => {
            return { ...prev, registerForm:{...formState} }
        })
 // controlled FOrms
    }

    render() {
        return (
            <div style={pageCSS}>
                <form onSubmit={(e)=>{this.handleSubmit(e);}}>
                    <h1>Fill the Login to Register</h1><br />
                    <label htmlFor="firstNameId" >First Name</label><br />
                    <input type="text" onChange={this.handleChange}
                        value={this.state.registerForm.firstName}
                        name="firstName" id="firstNameId" /><br />
                    <label htmlFor="lastNameId" >Last Name</label><br />
                    <input type="text" onChange={this.handleChange}
                        value={this.state.registerForm.lastName} name="lastName" id="lastNameId" /><br />
                    <label htmlFor="emailId" >Email Id</label><br />
                    <input type="text" onChange={this.handleChange} value={this.state.registerForm.emailId} name="emailId" id="emailId" /><br />
                    <label htmlFor="passwordId" >First Name</label><br />
                    <input type="password" onChange={this.handleChange} value={this.state.registerForm.password} name="password" id="passwordId" /><br />
                    <button>Register</button>
                </form>

            </div>
        )
    }
}