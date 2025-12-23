import Student from "../models/Student.js";

export const getMyProfile = async (req, res) => {
  const student = await Student.findOne({ user: req.user.id });
  res.json(student);
};

export const updateProfile = async (req, res) => {
  const updated = await Student.findOneAndUpdate(
    { user: req.user.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};