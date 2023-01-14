import React from "react";
//import image
import ImageDesc from '../assets/desc.jpg';
//style funstion
const sizeStyle = {
    height: "auto",
    width: "28rem",
};

function DetailedItem() {
  return (
    <div className="DetailedItem">
        <div className="d-flex flex-wrap justify-content-around p-4">
            <div className="">
                <img src={ImageDesc} alt="" style={ sizeStyle } className="rounded" />
            </div>
            <div className="">
                <div className="fw-bolder fs-1 p-3">" Item Name "</div>
                <div className="p-3">
                    <p>
                    Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos delectus id blanditiis vel rem animi, optio, iusto fuga voluptate iure consequuntur porro vitae quis.
                    </p>
                </div>
                <div className="p-3 flex justify-content-center ">
                    <div>

                    <button className="d-flex flex-row border border-3 rounded p-3 justify-content-between fs-3 fw-semibold transition">
                    <i class="ri-download-cloud-2-line"></i>
                        <h2 className="pl-2">Download</h2>
                    </button>
                    </div>
                </div>
                <div className="p-3">
                    <div>
                    <div class="table-wrapper-scroll-y my-custom-scrollbar">

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DetailedItem;