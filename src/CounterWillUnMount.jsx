import React from "react";



export class CounterWIllUnMountExample extends React.Component{


    constructor(){
        super();
        this.state ={ counter : 0 , timer:null}
    } // mouunting 

    // componentDidMount =()=>{
    //     this.state.timer = setInterval(()=>{
    //         this.setState((prev)=>{
    //             return {...prev, counter: this.state.counter+1}
    //         });
    //     },1000)
    // } // moiunting 


    componentWillUnmount =()=>{
        clearInterval(this.state.timer);
    } // unmounting -> avoid memoery leaks
    // garbage collections will fre up meomry when you close apps in ram





    render(){
        return(
            <div>
                <p>Tinmer :{this.state.counter}</p>
            </div>
        )
    } // mounting
}