import React, { useState } from "react";

import TicketBooking from "../Ticketbooking/Ticketbooking";

import AdminSidebar from "../Adminsidebar/Adminsidebar";

export function Admindashboard() {  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
      <AdminSidebar/>
          </div>
          <div className="col-lg-10">
       <TicketBooking/>
          </div>
        </div>
      </div>
    </>
  );
}





