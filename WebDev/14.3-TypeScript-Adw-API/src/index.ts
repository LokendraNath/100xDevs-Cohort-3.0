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

// Map
const users2 = new Map<string, User>();
users2.set("loki@gdfk", {
  id: 23,
  name: "Loki Thanos",
});

users2.set("Shabi@gaidf", {
  id: 33,
  name: "Shabib Shaik",
});

const user2 = users2.get("loki@gdfk");
