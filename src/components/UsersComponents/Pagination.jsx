import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Pagination({ length, setPage, currentPage }) {
  const [pageNumbers, setPageNumbers] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    setPageNumbers(setPaginationNumbers(currentPage, length));
  }, [currentPage]);

  return (
    <>
      <section className="pagination">
          <button
          type="button"
          tabIndex={1000}
            aria-label="first user"
            onClick={() => {
              if (!(currentPage - 1 < 0)) {
                setPage(currentPage - 1);
                navigate(`/users/${currentPage}`);
              }
            }}
            disabled={currentPage+1==1}
            >
            {"<"}
          </button>
        {pageNumbers.map((num) => {
          return (
              <button
                type="button"
                tabIndex={`${num*1000}`}
                key={num + `${Math.random()}`}
                aria-label={`user number ${num}`}
                onClick={() => {
                  if (Number(num)) {
                    setPage(num - 1);
                    navigate(`/users/${num}`);
                  }
                }}
                disabled={num==currentPage+1||num=='...'}
              >
                {num}
              </button>
          );
        })}
          <button
            aria-label="last user"
            type="button"
            tabIndex={(length+1)*1000}
            onClick={() => {
              if (currentPage + 1 != length) {
                setPage(currentPage + 1);
                navigate(`/users/${currentPage + 2}`);
              }
            }}
            disabled={currentPage+1==length}
            >
            {">"}
          </button>
        
      </section>
    </>
  );
}

//function to change pagination numbers

function setPaginationNumbers(currentPage, length) {
  if(length<8){
    let arr = []
    for(let i = 0; i<length;i++){
      arr[i] = i+1
    }
    return arr
  }
  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5, "...", length];
  } else if (currentPage > 3 && currentPage < length-4) {
    return [
      1,
      "...",
      currentPage,
      currentPage + 1,
      currentPage + 2,
      "...",
      length,
    ];
  } else {
    return [1, "...", length-4, length-3, length-2, length-1, length];
  }
}
