import express from "express";
import deleteStudent from "./routes/DeleteStudent.js";
import getSingleStudent from "./routes/GetSingleStudent.js";
import getStudents from "./routes/GetStudents.js";
import postStudent from "./routes/PostStudent.js";
import putStudent from "./routes/PutStudent.js";


const app = express();
const PORT = 5000;

// middle ware
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});


app.use(getStudents);
app.use(postStudent);
app.use(getSingleStudent);
app.use(putStudent);
app.use(deleteStudent);

// to handle undefined routes
app.use((req, res)=>{
  res.status(404).json({error:"Endpoint not found"})
})
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
