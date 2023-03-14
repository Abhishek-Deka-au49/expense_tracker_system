const userModel= require("../models/user");


// login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//Register Callback
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

// const registerController = async (req, res) => {
//     try {
//       ;
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const newUser = new userModel({
//       name: request.body.name,
//       email: request.body.email,
//       password: hashedPassword,
//     });
      
      
//       await newUser.save();
//       res.status(201).json({
//         success: true,
//         newUser,
//       });
//     } catch (error) {
//       res.status(400).json({
//         success: false,
//         error,
//       });
//     }
//   };



// const loginController = async (req, res) => {
//   try {
    
//     const user = await userModel.findOne({ email: request.body.email});
//     if (!user) {
//       return res.status(404).send("User Not Found");
//     }else{
//       const validated = await bcrypt.compare(req.body.password, user.password);
//      if(validated){
//       res.status(201).json({
//         success: true,
//         user,
//       });
//     }else{
//       res.status(400).json("Wrong credentials!");
//     }
//     };
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       error,
//     });
//   }
// };
 
module.exports = { loginController, registerController };