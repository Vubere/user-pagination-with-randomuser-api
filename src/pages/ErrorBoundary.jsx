
import React from "react";
import { redirect, Navigate} from "react-router-dom";

class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: false,
    }
  }
  static getDerivedStateFromError(error){
    return {error: true}
  }
  componentDidCatch(error, errorInfo){

  }

  render(){
    let {error} = this.state
  
    if(error){
      return (
        <article className="error">
        <p>something went wrong.</p>
          <button onClick={() =>{
            window.location.replace(window.location.origin)
            }}
            style={{
              'width':'80px',
              'padding': '5px',
              'border': '1px solid black',
              'display': 'block',
              'margin': '5px',
              'cursor': 'pointer'
            }}
          >Home</button>
        </article>       
      );
    }
    return this.props.children
  }
}

export default ErrorBoundary