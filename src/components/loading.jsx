import { useEffect, useState } from "react"



export default function Loading(){
  const [tookTooLong, setTookToolong] = useState(false)
  

  useEffect(()=>{
    if(!tookTooLong){
      setTimeout(()=>{
        setTookToolong(true)
      }, 6000)
    }
  },[])
  return (
    <>
      {!tookTooLong ? (
        <div className="loadingComponent">
          <img src="../../public/loading.svg" alt="" />
        </div>
      ) : (
        <div className="loadingTookTooLong">
          Loading took too long, check your internet and try again
          <button onClick={() => window.location.reload()}>try again</button>
        </div>
      )}
    </>
  );
}