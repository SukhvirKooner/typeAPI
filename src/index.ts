
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
type user ={
    name:string,
    age:number
}
type users = {
    [key:string]:user
}

const class12  : users ={
    "rollno1":{
        name:'rahul',
        age:19
    },
    "rollno2":{
        name:"mehul",
        age:20
    }
}
// new syntax 

type user2 = Record<string,user>;

const class11 :user2={
    "rollno1":{
        name:'rahul',
        age:19
    },
    "rollno2":{
        name:"mehul",
        age:20
    }
}