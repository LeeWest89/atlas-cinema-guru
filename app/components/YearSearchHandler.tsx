import YearButtons from "./Year";

interface YearSearchHandlerProps {
  onSearch: (minYear: string, maxYear: string) => void;
}

export default function YearSearchHandler({ onSearch }: YearSearchHandlerProps) {
  return (
    <YearButtons onSearch={onSearch} />
  );
}
