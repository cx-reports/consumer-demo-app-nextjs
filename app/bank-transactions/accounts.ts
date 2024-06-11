export interface AccountModel {
  accountNumber: string;
  customerName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export const accounts: AccountModel[] = [
  {
    accountNumber: "123456789",
    customerName: "John Doe",
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zipCode: "62704",
      country: "USA",
    },
  },
  {
    accountNumber: "987654321",
    customerName: "Jane Smith",
    address: {
      street: "456 Elm St",
      city: "Austin",
      state: "TX",
      zipCode: "73301",
      country: "USA",
    },
  },
  {
    accountNumber: "123123123",
    customerName: "Alice Johnson",
    address: {
      street: "789 Maple Ave",
      city: "Seattle",
      state: "WA",
      zipCode: "98101",
      country: "USA",
    },
  },
  {
    accountNumber: "321321321",
    customerName: "Bob Brown",
    address: {
      street: "101 Oak St",
      city: "Denver",
      state: "CO",
      zipCode: "80201",
      country: "USA",
    },
  },
  {
    accountNumber: "456456456",
    customerName: "Carol White",
    address: {
      street: "202 Pine St",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      country: "USA",
    },
  },
];
