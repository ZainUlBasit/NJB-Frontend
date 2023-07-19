export const ItemStockColumns = [
  {
    id: "itemname",
    label: "Item Name",
    minWidth: 190,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "itemqty",
    label: "Quantity",
    minWidth: 150,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "itemdesc",
    label: "Description",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "iteminvoice",
    label: "Invoice #",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "itemtruck",
    label: "Truck #",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "itemdate",
    label: "Date",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];
