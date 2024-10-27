
    //1. pick api
    interface User {
        id: number;
        name: string;
        email: string;
        createdAt: Date;
      }
      
      // For a profile display, only pick `name` and `email`
      type UserProfile = Pick<User, 'name' | 'email'>;
      
      const displayUserProfile = (user: UserProfile) => {
        console.log(`Name: ${user.name}, Email: ${user.email}`);
      };
      displayUserProfile({name:"sukhvir",email:"sukhvir@gmail.com"})
      
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
