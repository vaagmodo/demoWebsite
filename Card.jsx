import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold"> {props.title}</h5>
                        <p className="card-text">Hello this is a card of Services and there are manu cards there</p>
                        <NavLink to="/about" className="btn btn-primary">
                            Go Somewhere
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;
