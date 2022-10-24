
import React from "react";
import { redirect, Navigate} from "react-router-dom";

class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: false,
      goHome: false
    }
  }
  static getDerivedStateFromError(error){
    return {error: true}
  }
  componentDidCatch(error, errorInfo){

  }

  render(){
    let {goHome, error} = this.state
  
    if(error){
      return (
        <p>
        something went wrong.
          <button onClick={() =>{
            window.location.reload()
            }}
            style={{
              'width':'80px',
              'padding': '5px',
              'border': '1px solid black',
              'display': 'block',
              'margin': '5px'
            }}
          >reload</button>
        </p>       
      );
    }
    return this.props.children
  }
}

export default ErrorBoundary