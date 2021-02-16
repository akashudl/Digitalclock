import React, { Component } from 'react';

class DateandTime extends Component
{   constructor() {
    super();
    this.state = {currentDateTime: new Date().toLocaleTimeString()}
      this.updatedtime=this.updatedtime.bind();
      }   
    updatedtime=()=>
    {   console.log("Clicked");
        this.state.currentDateTime=new Date().toLocaleTimeString();
        this.setState({currentDateTime:this.state.currentDateTime});

    }
    render()
    {  const diva={
        width:"100%",
        height:"100vh",
        diplay:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    }
        
        
        const buttona=
        {  
            padding:"12px 20px",
            background:"#9b59b6",
            color :"white",
            border :"2px solid #ecf0f1",
            outline:"none",
            borderRadius:"5px",
            textTransform:"uppercase",
            cursor:"pointer", 
            alignItems:"center",
        }
        return(
            <div style={diva}>
                <h1>{this.state.currentDateTime}</h1>
                <button   onClick={this.updatedtime} style={buttona}>Get time</button>
                </div>

        );
    }
}
export default DateandTime;
