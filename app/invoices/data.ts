import { Invoice } from "./columns";

export const data: Invoice[] = [
  {
    invoice_number: "2023-ABC-123456",
    date: "2023-11-03",
    due_date: "2023-11-17",
    bill_to: {
      company_name: "Tech Solutions Inc.",
      address: "123 Tech Street",
      city: "Innovate City",
      state: "Techsylvania",
      zip: "12345",
      country: "USA",
    },
    ship_to: {
      company_name: "Tech Solutions Inc.",
      address: "456 Solution Ave",
      city: "Progress Town",
      state: "Techsylvania",
      zip: "67890",
      country: "USA",
    },
    items: [
      {
        item_id: "CPU001",
        description: "Quad-core CPU 3.6 GHz",
        unit_price: 250.0,
        quantity: 2,
        subtotal: 500.0,
      },
      {
        item_id: "RAM002",
        description: "16GB DDR4 RAM",
        unit_price: 90.0,
        quantity: 4,
        subtotal: 360.0,
      },
      {
        item_id: "HDD003",
        description: "1TB SSD Hard Drive",
        unit_price: 150.0,
        quantity: 1,
        subtotal: 150.0,
      },
      {
        item_id: "GPU004",
        description: "Gaming Graphics Card",
        unit_price: 400.0,
        quantity: 1,
        subtotal: 400.0,
      },
      {
        item_id: "PSU005",
        description: "750W Power Supply Unit",
        unit_price: 80.0,
        quantity: 1,
        subtotal: 80.0,
      },
      {
        item_id: "CASE006",
        description: "Mid Tower Computer Case",
        unit_price: 120.0,
        quantity: 1,
        subtotal: 120.0,
      },
    ],
    subtotals: {
      items_total: 1610.0,
      tax_rate: 0.07,
      tax_amount: 112.7,
      shipping_fee: 25.0,
      discount: 0.0,
    },
    total_due: 1747.7,
    notes: "Thank you for your business!",
  },
];
