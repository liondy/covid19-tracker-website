import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

function DropdownCustom({ country, data, onChange }) {
  const [selected, setSelected] = useState("Dunia");
  const dataSource = [];
  if (country) {
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
  } else {
  }
  return (
    <div className="mt-5">
      <Dropdown
        placeholder="Dunia"
        defaultValue={selected}
        search
        selection
        options={dataSource}
        onChange={(e, { value }) => {
          console.log();
          setSelected(e.target.innerText);
          onChange({ value }.value, e.target.innerText);
        }}
        className="border border-secondary"
      />
    </div>
  );
}

export default DropdownCustom;
