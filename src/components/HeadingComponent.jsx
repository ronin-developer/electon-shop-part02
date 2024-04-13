import React from "react";
// icons
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";

function HeadingComponent() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between h-24 gap-5">
      <h3 className="text-textBlack">Need help? Call us: (+98) 0234 456 789</h3>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <CiLocationOn color="textBlack" size={25} />
          <span className="text-textBlack">Our store</span>
        </div>
        <div className="flex items-center gap-1">
          <CiDeliveryTruck color="textBlack" size={25} />
          <span className="text-textBlack">Track your order</span>
        </div>
      </div>
    </div>
  );
}

export default HeadingComponent;
