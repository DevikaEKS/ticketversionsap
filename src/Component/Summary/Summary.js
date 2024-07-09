import React from 'react'
import "./Summary.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';

function TicketSummary() {
    return (
        <div className='container-fluid backgroundshade'>
            <h2 className='text-center my-4'>Ticket Summary</h2>                                                                                                                     
            <div className='row pt-4'>
                <div className='col-sm-12 col-md-6 col-lg-2'>
                    <div className='card text-center crdsummary text-light m-1 card-equal-height'>
                        <h4>Open <FontAwesomeIcon icon={faTicket} className='text-light px-1' /></h4>
                        <h4>0</h4>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-2'>
                    <div className='card text-center crdsummary text-light m-1 card-equal-height'>
                        <h4>InProgress<FontAwesomeIcon icon={faTicket} className='text-light px-1 '/></h4>
                        <h4>4</h4>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-2'>
                    <div className='card text-center text-light m-1 crdsummary card-equal-height'>
                        <h4>Answered<FontAwesomeIcon icon={faTicket} className='text-light px-1'/></h4>
                        <h4>7</h4>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-2'>
                    <div className='card text-center text-light m-1 crdsummary card-equal-height'>
                        <h4 >On Hold<FontAwesomeIcon icon={faTicket} className=' text-light px-1' /></h4>
                        <h4 >3</h4>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-2'>
                    <div className='card text-center text-light m-1 crdsummary card-equal-height'>
                        <h4>Closed<FontAwesomeIcon icon={faTicket} className='text-light px-1' /></h4>
                        <h4>23</h4>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-2'>
                    <div className='card text-center cardforstatus text-light m-1 crdsummary card-equal-height'>
                        <h4>Total<FontAwesomeIcon icon={faTicket} className='text-light px-1' /></h4>
                        <h4>90</h4>
                    </div>
                </div>
            </div>
            <div className='card  text-dark mt-5 crdtable'>
                <table className='text-center rounded-4'>
                    <thead className='p-4'>
                        <tr className='headingrow text-center'>
                            <th>Subject</th>
                            <th>Department</th>
                            <th>Service</th>
                            <th>Status</th>
                            <th>Contact</th>
                            <th>Priority</th>
                            <th>Last Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='my-4'>
                            <td>Billing Issue</td>
                            <td>23</td>
                            <td>2</td>
                            <td>In Progress</td>
                            <td>4</td>
                            <td>High</td>
                            <td>33</td>
                        </tr>
                        <tr>
                            <td>Billing Issue</td>
                            <td>23</td>
                            <td>2</td>
                            <td>33</td>
                            <td>4</td>
                            <td>Low</td>
                            <td>45566</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TicketSummary
