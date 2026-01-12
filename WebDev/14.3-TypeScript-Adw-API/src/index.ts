type User = {
  id: number;
  name: string;
};

type Users = {
  [key: string]: User;
};

const users: Users = {
  "loki@gdfk": {
    id: 23,
    name: "Loki Thanos",
  },
  "Shabi@gaidf": {
    id: 33,
    name: "Shabib Shaik",
  },
};
