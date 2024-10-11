import { useState } from "react";
import "./App.css";
import { MultiSearchableSelect } from "./MultiSearchableSelect.tsx";
import { SearchableSelect } from "./SearchableSelect.tsx";
import { top100Films, Options } from "./data.ts";

export default function App() {
  const [selectedValues, setSelectedValues] = useState(
    top100Films.filter((_, index) => index == 2)
  );

  const [selectedValue, setSelectedValue] = useState<Options>(top100Films[5]);
  return (
    <>
      <div style={{marginBottom: "50px"}}>
        <label>Multi-select</label>
        <MultiSearchableSelect
          title="Top 100 Movies"
          placeholder="Create your list"
          optionLabel="title"
          options={top100Films}
          value={selectedValues}
          onChange={(newValue) => {
            setSelectedValues(newValue);
          }}
          onSelected={(items) => {
            console.log(
              "Selected Movies: \n" + items.map((v) => v.title).join(", \n")
            );
          }}
        />
      </div>

      <div>
        <label>Single-select</label>
        <SearchableSelect
          title="Top 100 Movies"
          placeholder="Create your list"
          optionLabel="title"
          options={top100Films}
          value={selectedValue}
          onChange={(newValue) => {
            setSelectedValue(newValue);
          }}
          onSelected={(item) => {
            console.log(`Selected Movies: \n ${item.title} - ${item.year}`);
          }}
        />
      </div>
    </>
  );
}
