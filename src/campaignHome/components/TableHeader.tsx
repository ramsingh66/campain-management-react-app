import {
  HeaderRow,
  Cell20Percent,
  Cell25Percent,
  Cell35Percent,
} from "./Table.styles";

export const TableHeader = () => {
  return (
    <HeaderRow>
      <Cell20Percent>DATE</Cell20Percent>
      <Cell25Percent>CAMPAIGN</Cell25Percent>
      <Cell20Percent>VIEW</Cell20Percent>
      <Cell35Percent>ACTIONS</Cell35Percent>
    </HeaderRow>
  );
};
