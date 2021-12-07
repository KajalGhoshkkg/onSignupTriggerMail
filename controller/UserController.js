const sendEmail = require("../email/Email");
const userModel = require("../model/UserModel");

//for sign-up purpose
exports.signUp = async (req, res) => {
  // console.log(req.body);
  const { userName, email, password, confirmPassword } = req.body;
  if (!userName || !email || !password || !confirmPassword) {
    res.status(200).json({
      msg: "all the fields are required",
    });
  }
  if (password.length < 6) {
    res.status(200).json({
      msg: "password must be of atleast 8 charecter or above",
    });
  }
  if (password !== confirmPassword) {
    res.status(200).json({
      msg: "password and confirmPassword mismatch",
    });
  }
  const signupData = await userModel.create({
    userName: userName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });
  await sendEmail({
    email: email,
    subject: "testing email purpose",
    message: `Wellcome "${userName}" to our website.`,
  });
  res.status(200).json({
    msg: "signup data subitted successfully",
    signupData,
  });
};
