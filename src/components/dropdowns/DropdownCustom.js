import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

function DropdownCustom({ placeholder, data, onChange }) {
  const [selected, setSelected] = useState(placeholder);
  const dataSource = [];
  if (placeholder === "Dunia") {
    dataSource.push({
      key: "WL",
      value: "world",
      text: "Dunia",
    });
    for (let i in data) {
      dataSource.push({
        key: data[i].CountryCode,
        value: data[i].Slug,
        text: data[i].Country,
      });
    }
  } else if (placeholder === "Indonesia") {
    for (let i in data) {
      dataSource.push({
        key: data[i].Kode_Provi,
        value: data[i].Provinsi,
        text: data[i].Provinsi,
      });
    }
  } else {
    console.log("dropdown error");
  }
  return (
    <div className="mt-5">
      <Dropdown
        placeholder={placeholder}
        defaultValue={selected}
        search
        selection
        options={dataSource}
        onChange={(e, { value }) => {
          let selectedCountry;
          dataSource.some(function (element) {
            selectedCountry = element.text;
            return element.value === { value }.value;
          });
          setSelected(selectedCountry);
          onChange({ value }.value, selectedCountry);
        }}
        className="border border-secondary"
      />
    </div>
  );
}

export default DropdownCustom;
