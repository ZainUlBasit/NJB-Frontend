export const ItemInfoColumns = [
  {
    id: "name",
    label: "Name",
    minWidth: 190,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "company",
    label: "Company",
    minWidth: 150,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "purchase",
    label: "Purchase",
    minWidth: 110,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "sale",
    label: "Sale",
    minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "qty",
    label: "Quantity",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "addeddate",
    label: "Added Date",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];
