import React, {useState} from "react";
import OrderSummary from "../OrderSummary";
import Input from "../Input";
import Checkbox from "../Checkbox";
import SelectInput from "../SelectInput";

const CaramidaContent = () => {

    const [selectedValue, setSelectedValue] = useState('1');

    const handleSelectChange = (e) => {
      setSelectedValue(e.target.value);
    };
  
  
    const options = [
      { value: "1", label: "Călărași", label2: "200 km"},
      { value: "2", label: "Cluj-Napoca", label2: "300 km"},
      { value: "3", label: "Bucuresti", label2: "100 km"},
    ];
  
  return (
    <div className="order-content">
      <Input label="Adresa" placeholder="Strada ..." />
      <div className="combined-input flex gap-5 justify-between">
        <Input label="Lățime" placeholder="Lățimea lemnului" />
        <Input label="Înălțime" placeholder="Înălțimea lemnului" />
      </div>
      <div className="combined-input flex gap-5 justify-between">
        <Input label="Tip" placeholder="Sepai" />
        <SelectInput
          label="Depozit"
          options={options}
          value={selectedValue}
          onChange={handleSelectChange}
          defaultValue="Please select an option"
        />      </div>
      <div className="combined-input flex gap-5 justify-between">
        <Checkbox label="Am nevoie de meșter" />
        <Checkbox label="Fără transport" />
      </div>
      <OrderSummary
        productName="Caramida"
        productQuantity="100"
        price="100"
        priceTVA="120"
        warehouse="Depozit Central"
      />
    </div>
  );
};

export default CaramidaContent;
