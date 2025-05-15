const {z} = require('zod');

 
const signupSchema = z.object({
    username: z
    .string({required_error: "name is required"})
    .trim()
    .min(3,{message: "name must be at least 3 char"})
    .max(25,{message: "name must not more than 25 char "}),

    email:z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"invalid email address"})
    .min(10,{message: "minimum 10 char required"})
    .max(55,{message: "email must not more than 55 char"}),

    


    phone:z
    .string({required_error:"number is  required"})
    .trim()
    .max(20,{message:"phone must not be more than 20 digit "})
    .min(10,{message: "phone must be at least  10 digit "}),

    password: z
    .string({required_error:"password is required"})
    .trim()
    .min(6,{message: "password must be at least 6 char"})
    .max(14,{message: "password must not be more than 14 char "}),
 

},


)

module.exports = signupSchema;