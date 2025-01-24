const { z } = require("zod");

//LOGIN schema
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),

    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password have At least 6 characters" })
    .max(20, { message: "Maximum 20 characters are allowed" }),
});

// Creating object schema
const signupSchema = loginSchema.extend ({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Name atleast have 3 character" })
    .max(20, { message: "Maximum 20 characters are allowed" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must have 10 digits" })
    .max(15, { message: "Maximum 15 characters are allowed" }),
});

module.exports = {signupSchema , loginSchema};
