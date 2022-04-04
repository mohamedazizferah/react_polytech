import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { display } from "@mui/system";

const TodoList = () => {
  const [todo, settodo] = useState([]);
  const [Query, setQuery] = useState("");

  // const Newtodo = (e) => {
  //   e.preventDefault();
  //   settodo((todo) => [...todo, "a"]);
  // };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleAddTask = () => {
    const task = { title: Query, Style: "none" };
    settodo((todo) => [...todo, task]);
  };
  const handleDeleteTask = (e) => {
    const title = e.target.getAttribute("title");
    settodo(todo.filter((todo) => todo.title !== title));
  };

  const handleCrossTask = (e) => {
    const title = e.target.getAttribute("title");
    settodo((todo) =>
      todo.map((todo) => {
        if (todo.title === title) return { ...todo, Style: "line-through" };
        return todo;
      })
    );
  };

  const handleUncrossTask = (e) => {
    const title = e.target.getAttribute("title");
    settodo((todo) =>
      todo.map((todo) => {
        if (todo.title === title) return { ...todo, Style: "none" };
        return todo;
      })
    );
  };

  console.log(todo);
  return (
    <>
      <TextField
        onChange={handleChange}
        value={Query}
        style={{
          marginBottom: "2rem",
        }}
      />
      <Button type="button" onClick={handleAddTask}>
        add task
      </Button>
      {todo.map((x, i) => (
        <Card
          style={{
            width: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "2rem",
          }}
        >
          <div className="todo">
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ textDecoration: x.Style }}
              >
                {x.title}
              </Typography>
            </CardContent>
            <CardActions
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Button title={x.title} onClick={handleDeleteTask}>
                delete
              </Button>
              <Button title={x.title} onClick={handleCrossTask}>
                wfet
              </Button>
              <Button title={x.title} onClick={handleUncrossTask}>
                raj3et
              </Button>
            </CardActions>
          </div>
        </Card>
      ))}
    </>
  );
};
export default TodoList;
