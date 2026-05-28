import express from "express";

const app = express();
app.use(express.json());

// In-memory user store
let users = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Lee", email: "charlie.lee@example.com" },
  { id: 4, name: "Diana Prince", email: "diana.prince@example.com" },
  { id: 5, name: "Ethan Brown", email: "ethan.brown@example.com" },
  { id: 6, name: "Fiona Garcia", email: "fiona.garcia@example.com" },
  { id: 7, name: "George King", email: "george.king@example.com" },
  { id: 8, name: "Hannah White", email: "hannah.white@example.com" },
  { id: 9, name: "Ian Black", email: "ian.black@example.com" },
  { id: 10, name: "Jane Miller", email: "jane.miller@example.com" },
  { id: 11, name: "Kyle Green", email: "kyle.green@example.com" },
  { id: 12, name: "Laura Adams", email: "laura.adams@example.com" },
  { id: 13, name: "Mike Davis", email: "mike.davis@example.com" },
  { id: 14, name: "Nina Torres", email: "nina.torres@example.com" },
  { id: 15, name: "Oscar Young", email: "oscar.young@example.com" },
  { id: 16, name: "Paula Scott", email: "paula.scott@example.com" },
  { id: 17, name: "Quentin Wright", email: "quentin.wright@example.com" },
  { id: 18, name: "Rachel Hall", email: "rachel.hall@example.com" },
  { id: 19, name: "Steve Baker", email: "steve.baker@example.com" },
  { id: 20, name: "Tina Morgan", email: "tina.morgan@example.com" },
];

function logger(req, res, next) {
  let time = new Date();
  let isotime = time.toISOString();
  console.log(`${isotime} ${req.method} ${req.url}`);
  next();
}

app.use(logger);


app.get('/users', (req, res) => {
  res.send(users);
})

app.get('/users/:id',(req,res)=>{
  const id = req.params.id;
  let result = users.filter((entry)=>entry.id == id);
  if(result.length === 0){
    return res.sendStatus(404);
  }
  res.json(result);
})

app.post('/users/',(req,res)=>{
  const {name,email} = req.body;
  if(!name || !email){
    return res.sendStatus(400).send("please provide name and email.")
  }
  let new_id = users.length + 1;
  users.push({id : new_id,name : name,email:email});
  res.sendStatus(201);
})


app.put('/users/:id',(req,res)=>{
    const id = req.params.id;
    const {name,email} = req.body;

    const index = users.findIndex((entry)=>entry.id == id);
    if (index === -1){
      return res.sendStatus(404);
    }

    users[index].name = name;
    users[index].email = email;
    res.sendStatus(200);
})

app.delete('/users/:id',(req,res)=>{
  const id = req.params.id;
  let index= users.findIndex((entry)=>entry.id == id);
  if (index === -1){
    return res.sendStatus(404);
  }
  users.splice(index,index+1)
  res.sendStatus(204);
})


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
