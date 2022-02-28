import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TodoList = () => {
  const [todo, settodo] = useState([]);
  const [Query, setQuery] = useState("");

  const Newtodo = (e) => {
    e.preventDefault();
    settodo((todo) => [...todo, "a"]);
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleAddTask = () => {
    const task = { title: Query };
    settodo((todo) => [...todo, task]);
  };
  console.log(todo);
  return (
    <>
      <TextField onChange={handleChange} value={Query} />
      <Button type="button" onClick={handleAddTask}>
        add task
      </Button>
      {todo.map((x) => (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {x.title}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      ))}
    </>
  );
};
export default TodoList;
