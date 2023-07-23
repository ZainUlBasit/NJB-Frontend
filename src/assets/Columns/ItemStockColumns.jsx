export const StockColumns = [
  {
    id: "name",
    label: " Name",
    minWidth: 190,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "qty",
    label: "Quantity",
    minWidth: 150,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "desc",
    label: "Description",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "invoice",
    label: "Invoice #",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "truck",
    label: "Truck #",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];
