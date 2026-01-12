type User = {
  id: number;
  name: string;
};

type Users = Record<string, User>;

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
