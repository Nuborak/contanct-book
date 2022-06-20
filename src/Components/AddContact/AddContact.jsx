import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddContact = ({ AddContact }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  function handleSave() {
    if (!name || !LastName || !number) {
      alert("заполните поля!");
    } else {
      let newContact = {
        name,
        LastName,
        number,
      };
      AddContact(newContact);
      navigate("/");
    }
  }
  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}>
        <TextField
          value={name}
          label="name"
          variant="outlined"
          onChange={e => setName(e.target.value)}
        />
        <TextField
          value={LastName}
          label="LastName"
          variant="outlined"
          onChange={e => setLastName(e.target.value)}
        />
        <TextField
          value={number}
          label="number"
          variant="outlined"
          onChange={e => setNumber(e.target.value)}
        />
        <Button onClick={() => handleSave()} sx={{ m: 1 }} variant="contained">
          Save
        </Button>
      </Box>
    </div>
  );
};

export default AddContact;
