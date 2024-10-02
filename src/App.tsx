import "./App.css";
import { SearchableSelect } from "./SearchableSelect.tsx";
import { top100Films } from "./data.ts";

export default function App() {
  return (
    <>
      <SearchableSelect
        title="Top 100 Movies"
        placeholder="Create your list"
        optionLabel="title"
        options={top100Films}
        onSelected={(items) => {
          console.log(
            "Selected Movies: \n" + items.map((v) => v.title).join(", \n")
          );
        }}
      />
    </>
  );
}
