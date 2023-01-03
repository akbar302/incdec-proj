import React from "react";

const Main = ({number,minus,plus}) => {



  return (
    <>
      <div className="w-full h-screen bg-white flex items-center justify-evenly">
        <div className="w-64 h-80 bg-blue-200 flex flex-col items-center ">
          <span className="w-full h-2/3 bg-slate-400 ">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1550505393-2c5dbec5de87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </span>
          <h1 className="text-2xl ">Smart-items</h1>
          <span  className="w-full h-10 flex items-center justify-center">
          <i onClick={plus} className="fa-solid fa-square-plus text-4xl text-blue-500 p-2"></i>
          <i onClick={minus} class="fa-solid fa-square-minus text-4xl text-blue-500 p-2"></i>
          </span>
         
        </div>
        <div className="w-64 h-80 bg-blue-200 flex flex-col items-center">
          <span className="w-full h-2/3 bg-slate-400">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1612547036242-77002603e5aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGhpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </span>
          <h1 className="text-2xl ">digital-cams</h1>
          <span  className="w-full h-10 flex items-center justify-center">
          <i onClick={plus} className="fa-solid fa-square-plus text-4xl text-blue-500 p-2"></i>
          <i onClick={minus} class="fa-solid fa-square-minus text-4xl text-blue-500 p-2"></i>
          </span>
        </div>

        <div className="w-64 h-80 bg-blue-200 flex flex-col items-center">
          <span className="w-full h-2/3 bg-slate-400 ">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRoaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </span>
          <h1 className="text-2xl ">Watch-items</h1>

          <span  className="w-full h-10 flex items-center justify-center">
          <i onClick={plus} className="fa-solid fa-square-plus text-4xl text-blue-500 p-2"></i>
          <i onClick={minus} class="fa-solid fa-square-minus text-4xl text-blue-500 p-2"></i>
          </span>
        </div>
        <div className="w-64 h-80 bg-blue-200 flex flex-col items-center">
          <span className="w-full h-2/3 bg-slate-400 ">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1585218356057-dc0e8d3558bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </span>
          <h1 className="text-2xl">cemeras</h1>
          <span  className="w-full h-10 flex items-center justify-center">
          <i onClick={plus} className="fa-solid fa-square-plus text-4xl text-blue-500 p-2"></i>
          <i onClick={minus} class="fa-solid fa-square-minus text-4xl text-blue-500 p-2"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Main;
