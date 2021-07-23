/* eslint-disable no-unreachable */
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { useHistory } from "react-router-dom";
import QuestionList from "./QuestionList";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
  });

  const { name } = user;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    var apiRes = await axios.post("http://localhost:3003/users", user);
    console.log("apiRes", apiRes);
    setUser(apiRes.data);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Please Enter your Question here
        </DialogTitle>
        <form onSubmit={(e) => onSubmit(e)}>
          <DialogContent>
            <input
              autoFocus
              margin="dense"
              id="name"
              label="Enter Questions"
              type="text"
              fullWidth
              name="name"
              value={name}
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <br />
            <br />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
  // return(
  //   <div>
  //   <QuestionList />

  //   </div>
  // )
}
