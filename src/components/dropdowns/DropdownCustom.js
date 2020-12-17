import React from "react";
import { Dropdown } from "semantic-ui-react";

function DropdownCustom({ data, changeCountry }) {
  const dataSource = [];
  for (let i in data) {
    dataSource.push({
      key: data[i].IS02,
      value: data[i].Slug,
      text: data[i].Country,
    });
  }
  return (
    <div className="text-center mt-5">
      <Dropdown
        placeholder="----- Pilih Negaramu -----"
        search
        selection
        options={dataSource}
        onChange={(e, { value }) => {
          changeCountry({ value }.value);
        }}
      />
    </div>
  );
}

export default DropdownCustom;
