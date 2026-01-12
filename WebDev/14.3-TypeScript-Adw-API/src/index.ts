interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;

function updateUser(updatedProps: UpdateProps) {
  // hit the database tp update the user
}
