import React from 'react'
import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid , GridToolbar } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import Modal from '@mui/material/Modal';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import groups from "../groups";

function Groups() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 100,
        p: 4,
      };
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "branch",
          headerName: "Branch",
          cellClassName: "name-column--cell",
        },
        {
          field: "centername",
          headerName: "Center-Name",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "CenterCode",
          headerName: "Center-Code",
          type: "text",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "GroupName",
          headerName: "Group-Name",
          type: "text",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "accessLevel",
          headerName: "Access Level",
          headerAlign: "center",
          flex: 0.5,
          renderCell: ({ row: { access } }) => {
            return (
              <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                borderRadius="6px"
              >
              <Button variant="contained" color="success"  style={{color:"white", backgroundColor:"blue"}}>
                    Update
              </Button>
    
              <Button variant="contained" color="success" style={{color:"white", backgroundColor:"red"}}>
                    Delete
              </Button>
    
              </Box>
            );
          },
        },
      ];

  
  return (
    <div>
    <Box m="20px">
      <Header title="GROUPS" subtitle="Managing the Group" />
      <Box
       className="mt-5"
       display="flex"
       justifyContent="right"
       >
              <Button variant="contained" color="secondary" onClick={handleOpen}>
                Create Group
              </Button>
      </Box>
    <NavLink to="/center" style={{color:"blue"}}>back</NavLink>

      <Box m="40px 0 0 0" height="75vh" sx={{}}>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>


    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
           Create group
          </Typography>
          <br/>
          <Typography id="modal-modal-title" variant="h5" component="h5">
                Branch
              </Typography>
              <br />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="EUR"
                helperText="Please select your currency"
                size="small"
                style={{ width: "250px" }}
              />

            <Typography id="modal-modal-title" variant="h5" component="h5">
                Center Name 
              </Typography>
              <br />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="EUR"
                helperText="Please select your currency"
                size="small"
                style={{ width: "250px" }}
              />
              <Typography id="modal-modal-title" variant="h5" component="h5">
                Center Code
              </Typography>
              <br />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="EUR"
                helperText="Please select your currency"
                size="small"
                style={{ width: "250px" }}
              />
      
          <Box  display="flex" style={{width:"250px", align:"center"}}>
          <div>
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Group Name 
          </Typography>
          <br/>
          <TextField id="outlined-basic" label="Branch" variant="outlined" size="small" style={{width:"250px"}}/>
          <br/>
          <Button variant="contained" color="success" onClick={handleClose}>
                Save
          </Button>
          </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Groups;