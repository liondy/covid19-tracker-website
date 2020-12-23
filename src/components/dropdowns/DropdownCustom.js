import React from "react";
import { Dropdown } from "semantic-ui-react";

function DropdownCustom({ country, data, onChange }) {
  const dataSource = [];
  if (country) {
    dataSource.push({
      key: "GLOB",
      value: "global",
      text: "Global",
    });
    for (let i in data) {
      dataSource.push({
        key: data[i].CountryCode,
        value: data[i].Slug,
        text: data[i].Country,
      });
    }
  } else {
  }
  return (
    <div className="text-center mt-5">
      <Dropdown
        placeholder="Global"
        search
        selection
        options={dataSource}
        onChange={(e, { value }) => {
          onChange({ value }.value);
        }}
      />
    </div>
  );
}

export default DropdownCustom;
