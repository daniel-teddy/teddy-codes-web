import React from "react";

function TopBar() {
    return (
        <div className="TopBar">
            <div className="d-flex flex-column p-5 justify-content-center">
                <div className="d-flex pb-3 justify-content-center">
                    <h1 className="fw-bolder fs-1">Item Details</h1>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <h3  className="pl-3 fs-5 fw-normal">Home </h3>
                    <h3  className="pl-3 fs-5 fw-normal"> / </h3>
                    <h3  className="pl-3 fs-5 fw-normal">Explore </h3>
                    <h3  className="pl-3 fs-5 fw-normal"> / </h3>
                    <h3  className="pl-3 fs-4 fw-semibold">Detail</h3>
                </div>
            </div>
        </div>
    );
}

export default TopBar;