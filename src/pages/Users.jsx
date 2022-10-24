import { useState, useEffect , createContext, useCentext, useContext} from "react";

import Filter from "../components/Filter";
import Pagination from "../components/UsersComponents/Pagination";

import Loading from "../components/loading";
import { Outlet, useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

export const usersContext = createContext()

export default function Users() {
  const [count, setCount] = useState([]);
  const [page, setPage] = useState(0);
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [{requestAmount,  gender, nationality}, setSearchParams] = useState({
      requestAmount: "50",
      gender: "",
      nationality: "",
    });

  useEffect(() => {

      (async () => {
        try{
          const res = await fetch(`https://randomuser.me/api/?results=${requestAmount}&nat=${nationality}&gender=${gender}&exc=login,registered,id`);
          const data = await res.json();
          setCount(data?.results);
          navigate('/users/1')
          setPage(0)
        }catch(error){
          setError('something went wrong')
        }
      })();
    
    return ()=>setCount([])
  }, [requestAmount, gender, nationality]);
  return (
    error==''?
    <section className="users">
      {count.length ? (
        <>
          <Filter setSearchParams={setSearchParams}/>
          {
            <usersContext.Provider value={count}>
              <Outlet/>
            </usersContext.Provider>
          }
          <Pagination length={count.length} setPage={setPage} currentPage={page}/>
        </>
      ) : (
        <Loading/>
      )}
    </section>:
    <p className="somethingWrong">Something went wrong. <br/>Go back to home page.<button onClick={()=>navigate('/')}>Home</button></p>
  );
}
