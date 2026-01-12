interface User {
  name: string;
  age: number;
}

const sumOfAge = (user1: User, user2: User) => {
  return user1.age + user2.age;
};

const age = sumOfAge(
  { name: "Lokendra Nath", age: 20 },
  { name: "Deepak Sahu", age: 21 }
);

console.log(age)
