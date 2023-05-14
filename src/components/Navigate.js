import React from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navigate = (props) => {

    useEffect(() => {

    }, [props])

    return (
        <div className="navigateThree">
            <div className="navigateOne">
                <div className="navigateTwo">
                    <div className="cardFive card mt-5 text-center" style={{ width: "60rem" }}>
                        <img className="card-img-top" src="" alt=""></img>
                        <div className="card-body">
                            <h2 className="card-title cardFour">Summary</h2>
                            <p className="card-text cardThree">{props.summary}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to="/home" style={{ textDecoration: "none" }}><button className="btn btn-primary mb-4">Back</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/ticket" style={{ textDecoration: "none" }}><button className="btn btn-primary mb-4">Book Ticket</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigate

