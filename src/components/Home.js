import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navigate from "./Navigate";
const Home = () => {
    const [myData, setMyData] = useState([]);
    const [showHome, setShowHome] = useState(true);
    const [mySummary, setMySummary] = useState("");


    useEffect(() => {
        axios.get(`https://api.tvmaze.com/search/shows?q=all`).then((res) => {
            setMyData(res.data);
        });
    }, []);

    const summary = (id) => {
        if (myData && id) {
            myData.forEach((item) => {
                if (id === item.show.id) {
                    setMySummary(item.show.summary);
                    setShowHome(false);
                    console.warn('image', item.show.image.medium)
                }

            });
        }
    };

    return (
        <div className="home">
            <div className="homeOne">
                <div className="container">
                    {showHome ? (
                        <div className="row">
                            {myData.map((eachData) => {
                                return (
                                    <div className="col-4 mt-5">
                                        <div className="cardOne card" style={{ width: "18rem" }}>
                                            <img
                                                className="card-img-top"
                                                // src="https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"
                                                src={eachData?.show?.image?.medium || ""}
                                                alt=""
                                            ></img>
                                            <div className="card-body">
                                                <h5 className="cardTwo card-title">
                                                    {eachData.show.name}
                                                </h5>
                                                <p className="card-text text-white">
                                                    {eachData.show.language}
                                                </p>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => summary(eachData.show.id)}
                                                >
                                                    Summary
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <Navigate summary={mySummary} setShowHome={setShowHome} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;