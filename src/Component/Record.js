//for card show hide
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Record = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  const [data, setdata] = useState([]);
  const handleSave = (e) => {
    e.preventDefault();
    const item = state;
    data.push(item);
    setdata(data);
    setstate({ ...state, item });
    handleOpen();
  };
  const handleEdit=(id)=>{
    const isedit=data[id]
    console.log("FFf",isedit)
    setstate({
        // ...state,
        email:isedit.email,
        password:isedit.password
    })

    handleClose();
  }
  return (
    <div>
        {
            open===true ?
            <Card sx={{ width: "20% " }} open={open} onClose={handleClose}>
            {data.map((x, id) => {
              return (
                <CardContent key={id}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Word of the Day
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {x.email}
                  </Typography>
                  {/* <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography> */}
                  <CardActions>
                 <Button size="small" onClick={()=>handleEdit(id)}>SetEdit</Button>
               </CardActions>
                </CardContent>
                 
              );
            })}
           
          </Card>
          :
          <form >
          <input  type="email" id="email" name="email"
            value={state.email}
            onChange={(e) => setstate({ ...state, email: e.target.value })}
          />
          <br></br>
          <input
            type="text"
            value={state.password}
            onChange={(e) => setstate({ ...state, password: e.target.value })}
          />
          <br />
          <button type="submit" onClick={(e) => handleSave(e)}>
            Save
          </button>
          <br />
        </form>

        }
    
     
    </div>
  );
};

export default Record;
