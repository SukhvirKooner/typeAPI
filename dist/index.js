"use strict";
const displayUserProfile = (user) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
};
displayUserProfile({ name: "sukhvir", email: "sukhvir@gmail.com" });
// 2. partial 
// interface User {
//     id: string;
//     name: string;
//     age: string;
//     email: string;
//     password: string;
// };
// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
// type UpdatePropsOptional = Partial<UpdateProps> // parital 
// function updateUser(updatedProps: UpdatePropsOptional) {
//     // hit the database tp update the user
// }
// updateUser({})
