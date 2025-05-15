import express from "express";
import studentRoute from "./routes/students.js";


const app = express();
const PORT = 5000;

// middle ware
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

// // to handle undefined routes
// app.use((req, res)=>{
//   res.status(404).json({error:"Endpoint not found"})
// })
app.use(studentRoute);
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
