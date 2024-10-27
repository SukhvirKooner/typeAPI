"use strict";
const displayUserProfile = (user) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
};
;
function updateUser(updatedProps) {
    // hit the database tp update the user
}
const arsh = {
    name: "arsh",
    age: 20
};
// arsh.age = 21; not possible 
arsh.name = "arshdeep"; // possible 
console.log(arsh);
