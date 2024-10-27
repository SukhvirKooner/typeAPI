
    //1. pick api
    interface User0 {
        id: number;
        name: string;
        email: string;
        createdAt: Date;
      }
      
      // For a profile display, only pick `name` and `email`
      type UserProfile = Pick<User0, 'name' | 'email'>;
      
      const displayUserProfile = (user: UserProfile) => {
        console.log(`Name: ${user.name}, Email: ${user.email}`);
      };
      
// 2. partial 
interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps> // parital 

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
// 3 readonly 
type User3={
    name:string,
    readonly age:number
}
const arsh:User3={
    name:"arsh",
    age:20
}
// arsh.age = 21; not possible 
arsh.name = "arshdeep" // possible 
// console.log(arsh);

// record and maps


// old syntacx 
// type user ={
//     name:string,
//     age:number
// }
// type users = {
//     [key:string]:user
// }

// const class12  : users ={
//     "rollno1":{
//         name:'rahul',
//         age:19
//     },
//     "rollno2":{
//         name:"mehul",
//         age:20
//     }
// }
// new syntax 

// type user2 = Record<string,user>; // record only exist in typescript

// const class11 :user2={
//     "rollno1":{
//         name:'rahul',
//         age:19
//     },
//     "rollno2":{
//         name:"mehul",
//         age:20
//     }
// }
// map


// zod in typescript 
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);