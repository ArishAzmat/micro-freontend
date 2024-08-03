import React, { Suspense, useState } from "react";
import Chart from "./chart";
const RemoteApp = React.lazy(() => import("app1/Chart1")); //chart from app 1
import { useCount,useUserDetails } from "store/store";
import Login from './Login'
function App() {
  console.log("count");
  const { count } =  useCount()
  const { user,saveUser } =  useUserDetails()

  function handleLogin (name) {
    saveUser({name})
  }
  return (
    // user.isLoggedin ? 
    <div className="container">
      <h2 className="alert alert-success">Count: {count} </h2>
      <div className="row">
        <div className="col-md-6" style={{backgroundColor:'#c15847'}}>
          <h1>App 2</h1>
          <Chart count={count} />
        </div>
        <div className="col-md-6" style={{backgroundColor:'#678ad9'}}>
          <h1>From App 1</h1>
          <Suspense fallback={"loading..."}>
            <RemoteApp title={"Title Recieved From App 2"} />
          </Suspense>
        </div>
      </div>
    </div> 
    // : <Login setLogin={(name)=> handleLogin(name)}/>
  );
}

export default App;
