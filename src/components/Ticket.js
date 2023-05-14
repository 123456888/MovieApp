import React from 'react'

const Ticket = () => {
    return (
        <div className="ticket d-flex">
            <div className="container">
                <div className="cardSix card mt-5 text-center" style={{ width: "60rem" }}>
                    <div className="card-body">
                        <h2 className="card-title cardFour mb-5 mt-4">Movie: SALLAR</h2>
                        <p className="card-text cardThree">Salaar is an upcoming Indian Telugu-language action thriller film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under Hombale Films. It stars Prabhas[4] as the titular character, along with Prithviraj Sukumaran, Shruti Haasan, and Jagapathi Babu.</p>
                    </div>
                </div>
                <form>
                    <div className="row mt-5">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="form-group row mt-4">
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control mt-4" id="inputAddress" placeholder="Address" />
                    </div>
                    <div className="form-row mt-4">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="inputCity" placeholder="City" />
                        </div>
                        <div className="form-group col-md-2 mt-4">
                            <input type="text" className="form-control" id="inputZip" placeholder="Zip" />
                        </div>
                    </div>
                </form>
                <button className="btn btn-danger fw-bold mt-4">Book</button>
            </div>
        </div>
    )
}

export default Ticket