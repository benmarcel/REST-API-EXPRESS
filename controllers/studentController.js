
import { v4 as uuidv4 } from "uuid";
const ID = uuidv4();
let students = [];

export const getAllStudent = (req, res) => {
  try {
    if (students && students.length > 0) {
      return res.status(200).json(students);
    } else {
      res.status(404).json("Sorry there is no registered student");
    }
  } catch (error) {
    if (error) {
      res.status(500).json("Internal server error");
      console.error(error.stack);
    }
  }
};

export const getOneStudent = (req, res) => {
  try {
    const { id } = req.params;
    const student = students.find((student) => student.id === id);
    if (student) {
      return res.status(200).json(student);
    } else {
      res
        .status(404)
        .json({ error: `the student with the id: ${id} does not exists` });
    }
  } catch (error) {
    if (error) {
      res.status(500).json("Internal server error");
      console.error(error.stack);
    }
  }
};

export const addNewStudent = (req, res) => {
  try {
    // this to ensure student email are unique
    const { email } = req.body;
    const emailExist = students.some((student) => student.email === email);
    if (emailExist) {
      return res.status(400).json({ error: "student email already exists" });
    }
    const newStudent = req.body;
    if (newStudent) {
      students.push({ ...newStudent, id: ID });
      res.status(200).json({
        msg: `Student with the id: ${ID} has been added.`,
        details: newStudent,
      });
    }
  } catch (error) {
    if (error) {
      res.status(500).json("Internal server error");
      console.error(error.stack);
    }
  }
};

export const deleteStudent = (req, res) => {
  try {
    const { id } = req.params;

    const initialLength = students.length;

    students = students.filter((student) => student.id !== id);
    if (students.length === initialLength) {
      return res.status(404).json({ error: `No student with the id: ${id}` });
    }
    res.status(200).json(`Student with the id: ${id} has been deleted.`);
  } catch (error) {
    if (error) {
      res.status(500).json("Internal server error");
      console.error(error.stack);
    }
  }
};

export const updateStudentDetails = (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, age, gender, email, department, level } =
      req.body;
    const index = students.findIndex((student) => student.id === id);
    const emailExist = students.some((student) => student.email === email);

    // ensures student email is unique
    if (emailExist) {
      return res.status(400).json({ error: "student email already exists" });
    } else if (index !== -1) {
      if (first_name) students[index].first_name = first_name;
      if (last_name) students[index].last_name = last_name;
      if (age) students[index].age = age;
      if (gender) students[index].gender = gender;
      if (email) students[index].email = email;
      if (department) students[index].department = department;
      if (level) students[index].level = level;

      return res.status(200).json(`Student detail has been update.`);
    } else {
      console.log(index);

      res.status(404).json(`sorry there is no student with the id: ${id}`);
    }
  } catch (error) {
    if (error) {
      res.status(500).json("Internal server error");
      console.error(error.stack);
    }
  }
};
