import { HeaderRow,Cell20Percent,Cell30Percent } from "./Table.styles";

export const TableHeader = () => {
  return (
    <HeaderRow>
      <Cell20Percent>DATE</Cell20Percent>
      <Cell30Percent>CAMPAIGN</Cell30Percent>
      <Cell20Percent>VIEW</Cell20Percent>
      <Cell30Percent>ACTIONS</Cell30Percent>
    </HeaderRow>
  );
};
