import React from "react";
import Transport from "../images/transport.jsx";

const OrderSummary = ({
  productName,
  productQuantity,
  price,
  priceTVA,
  warehouse,
}) => {
  return (
    <div className="order-summary flex flex-col">
      <div className="summary-top flex justify-between mb-auto">
        <div className="summary-top-left">
          <p className="text-2xl font-medium">{productName}</p>
          <p className="quality">calitatea I</p>
          <p className="mt-5">{productQuantity} kg</p>
        </div>
        <div className="summary-top-right">
          <p className="mb-5">Fără TVA {price} lei</p>
          <p>
            Cu TVA {""} {priceTVA} lei
          </p>
        </div>
      </div>
      <div className="summary-bottom flex justify-between items-end">
        <div className="flex flex-col">
          <p className="mb-5">Depozit: {warehouse}</p>
          <div className="flex gap-2 items-center">
            <p>200 km distanță</p>
            <Transport className="h-[20px]" />
          </div>
        </div>

        <p>Transport 400 lei</p>
      </div>
    </div>
  );
};

export default OrderSummary;
