type User = {
  name: string;
  age: number;
};

const user: Readonly<User> = {
  name: "John",
  age: 21,
};

user.age = "Rockey";
