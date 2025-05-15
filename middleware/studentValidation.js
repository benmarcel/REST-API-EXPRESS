const validateStudentData = (req, res, next) => {
  const { first_name, last_name, age, gender, email, department, level } =
    req.body;
  const error = [];
  if (!first_name) error.push("first name is required");
  if (!last_name) error.push("last_name is required");
  if (!age) error.push("age is required");
  if (!gender) error.push("gender is required");
  if (!email) error.push("email is required");
  if (!department) error.push("department is required");
  if (!level) error.push("level is required");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) error.push("Invalid email format")

    if (error.length > 0) {
        return res.status(400).json({error:"student validation failed",
            details: error
        })
    }
    next()
};

export default validateStudentData;