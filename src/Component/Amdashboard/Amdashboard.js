import React, { useState } from "react";
import Amsidebar from "../Amsidebar/Amsidebar";
import TicketSummary from "../Summary/Summary";
import ClientRegister from "../Clientregistration/Clientregistration";


export function Amdashboard() {  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
     <Amsidebar/>
          </div>
          <div className="col-lg-10">
      <TicketSummary/>
          </div>
        </div>
      </div>
    </>
  );
}

export function Amdashboardregister() {  
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
       <Amsidebar/>
            </div>
            <div className="col-lg-10">
       <ClientRegister/>
            </div>
          </div>
        </div>
      </>
    );
  }





