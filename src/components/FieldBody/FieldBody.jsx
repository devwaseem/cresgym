import React, { Component } from 'react';
import './FieldBody.css'
import WAField from '../WAField/WAField';
import {URL} from './../../Server/Server'



class FieldBody extends Component {

    state = {
        firstName:'',
        lastName:'',
        dob:'',
        age:'',
        rrn:'',
        year:'',
        weight:'0',
        height:'0',
        bmi:'0',
        mobileNumber:'',
        email:'',
        medicalHistory:''
    }

    validate() {
        
        const vals = [   this.state.firstName,
            this.state.lastName,
            this.state.dob,
            this.state.age,
            this.state.rrn,
            this.state.year,
            this.state.weight,
            this.state.height,
            this.state.bmi,
            this.state.mobileNumber,
            this.state.email,
            this.state.medicalHistory,
        ]
        for(var i=0;i<vals.length;i++){
            if(this.checkEmpty(vals[i])){
                console.log("val"+ vals[i]);
                alert("Please fill all the fields before proceeding!")
                return 
            }
        }

        this.uploadData()
    }

    checkEmpty(str){
        if(str === ''){
            return true
        }
    }


    calculateBMI(){
        var weight = this.state.weight
        var height = this.state.height
        if(weight === '0' || height === '0'){
            return
        }
        var bmi = ((weight / (height / 100)) / height).toFixed(1)
        this.setState({bmi})
    }


     uploadData(){
         const payload = {
             data:[{
                "RRN ID":this.state.rrn,
                "First Name":this.state.firstName,
                "Last Name":this.state.lastName,
                "DOB":this.state.dob,
                "Age":this.state.age,
                "Gender":this.state.Gender,
                "Weight":this.state.weight,
                "Height":this.state.height,
                "BMI":this.state.bmi,
                "Mobile number":this.state.mobileNumber,
                "Email ID":this.state.email,
                "Medical History":this.state.medicalHistory,
            }]
         }
         
       fetch(URL,
        {
            headers:{
                "Content-Type": "application/json"
            },
            method:'POST',
            body:JSON.stringify(payload)
        })
        .then((response)=> {return response.json()})
        .then((json)=>{
            if(json.created === 1){
                alert("Document registered")
            }
        })
    }

  render() {

    return (
     <div className="FieldBody">
         <div className="fieldHolder">
            <WAField 
                class = "wafield"
                hint="First Name" 
                type="text" 
                value={this.state.firstName} 
                onChange={(e)=>this.setState({firstName:e.target.value})} 
            />
            <div className = "spacing" />
            <WAField 
                class = "wafield"
                hint="Last Name" 
                type="text"
                value={this.state.lastName} 
                onChange={(e)=>this.setState({lastName:e.target.value})} 
             />
         </div>
         <div className="fieldHolder">
            <WAField 
                hint="DOB" 
                type="date"
                value={this.state.dob} 
                onChange={(e)=>this.setState({dob:e.target.value})} 
                />
                <div className = "spacing" />
            <WAField 
                hint="Age" 
                type="number"
                value={this.state.age} 
                onChange={(e)=>this.setState({age:e.target.value})} 
            />
         </div>
         <div className="fieldHolder">
            <WAField 
                hint="RRN ID" 
                type="number"
                value={this.state.rrn} 
                onChange={(e)=>this.setState({rrn:e.target.value})} 
            />
            <div className = "spacing" />
            <WAField 
                hint="Year of study" 
                type="number"
                value={this.state.year} 
                onChange={(e)=>this.setState({year:e.target.value})} 
             />
         </div>
         <div className="fieldHolder">
            <WAField 
                hint="Body Weight (Kgs)" 
                type="number"
                value={this.state.weight} 
                onChange={(e)=>{
                    this.setState({weight:e.target.value})
                    this.calculateBMI()
                }} 
                />
            <div className = "spacing" />
            <WAField 
                hint="Height (cms)" 
                type="number"
                value={this.state.height} 
                onChange={(e)=>{
                    this.setState({height:e.target.value})
                    this.calculateBMI()
                }} 
            />
         </div>
         <div className="bmiValue">
             <p>Your BMI</p>
             <h1>{this.state.bmi}</h1>
         </div>
         <div className="fieldHolder">
            <WAField 
                hint="Mobile Number" 
                type="number"
                value={this.state.mobileNumber} 
                onChange={(e)=>this.setState({mobileNumber:e.target.value})} 
                />
            <div className = "spacing" />
            <WAField 
                hint="Email ID" 
                type="email" 
                value={this.state.email} 
                onChange={(e)=>this.setState({email:e.target.value})} 
            />
         </div>
         <div className = "standaloneField">
            <WAField 
                
                hint="Medical History" 
                type="text"
                value={this.state.medicalHistory} 
                onChange={(e)=>this.setState({medicalHistory:e.target.value})} 
                />
        </div>
         <div className="registerButton" onClick={()=>this.validate()}>
          <h4>Register</h4>
        </div>
     </div>
    );
  }
}

export default FieldBody;
