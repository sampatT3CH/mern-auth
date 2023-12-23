import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        const hashedPassword = bcryptjs.hashSync(password,10)
        const newUser = new User({username:name,email,password:hashedPassword});
        await newUser.save();
     
        res.status(200).json({
         message:"user created successfully",
         newUser
        })

    } catch(err) {
      res.status(500).json(
        err.message
      )
    }
  
}