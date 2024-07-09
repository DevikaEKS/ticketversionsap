import React, { useState } from "react";
import Login from "./Login";
import Sidebar from "../Sidebar/Sidebarnew";
import Sidebarnew from "../Sidebar/Sidebarnew";
import TicketBooking from "../Ticketbooking/Ticketbooking";
import TicketSummary from "../Summary/Summary";

export function Clientdashboard() {  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
       
          </div>
          <div className="col-lg-10">
       <TicketBooking/>
          </div>
        </div>
      </div>
    </>
  );
}



export function Studentprofile() {
  return (
    <>
      <div className="container-fluid sideback">
        <div className="row sideback">
          <div className="col-lg-2 sideback">
         <Sidebarnew/>
          </div>
          <div className="col-lg-10 background sideback">
      <TicketSummary/>
          </div>
        </div>
      </div>
    </>
  );
}

