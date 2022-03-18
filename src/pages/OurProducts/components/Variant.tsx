import styled from "styled-components";

export enum StockStatus {
  OutOfStock = "OutOfStock",
  InStock = "InStock",
}

const stockStatusToLabel = {
  [StockStatus.InStock]: "Skladem",
  [StockStatus.OutOfStock]: "Vyprodáno",
};

export type Variant = {
  text: string;
  stockStatus?: StockStatus;
};

export const Variant = ({ text, stockStatus }: Variant) => {
  const stockLabel = stockStatus ? stockStatusToLabel[stockStatus] : undefined;

  return (
    <Wrapper>
      <Text>{text}</Text>
      {stockLabel && (
        <StockAvailability stockStatus={stockStatus}>
          {stockLabel}
        </StockAvailability>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 0.25rem;
  align-items: baseline;
  justify-content: flex-start;
`;

const Text = styled.div`
  font-family: "barlow";
  font-size: 2rem;
  margin-right: 1rem;
`;

const StockAvailability = styled.div<{ stockStatus?: StockStatus }>`
  color: ${(props) =>
    props.stockStatus === StockStatus.InStock
      ? props.theme?.colors.green
      : props.stockStatus === StockStatus.OutOfStock
      ? props.theme.colors.redLight
      : undefined};
`;
