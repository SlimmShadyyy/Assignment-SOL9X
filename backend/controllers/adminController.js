import Student from "../models/Student.js";

export const getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

export const addStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
};

export const updateStudent = async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
