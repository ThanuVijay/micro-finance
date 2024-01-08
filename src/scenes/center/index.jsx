import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { NavLink } from "react-router-dom";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Calendar } from "@fullcalendar/core";
import Modal from '@mui/material/Modal';
import { useState } from "react";
import TextField from '@mui/material/TextField';


const Center = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "branch",
      headerName: "Branch",
      cellClassName: "name-column--cell",
    },
    {
      field: "Center-Code",
      headerName: "Center-Code",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "center-name ",
      headerName: "Center-Name ",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "center-name ",
      headerName: "Center-Name ",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "collection-day ",
      headerName: "Collection-Day",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "collection-officer",
      headerName: "Collection-Officer",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "center-leader",
      headerName: "Center Leader",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    // {
    //   field: "phone",
    //   headerName: "Phone Number",
    //   flex: 1,
    // },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 1,
    // },
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
            // backgroundColor={
            //   access === "admin"
            //     ? colors.greenAccent[600]
            //     : access === "manager"
            //     ? colors.greenAccent[700]
            //     : colors.greenAccent[700]
            // }
            borderRadius="6px"
          >
            {/* {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography> */}
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

  return (
    <div>
    <Box m="20px">
      <Header title="CENTER" subtitle="Managing the Centers" />
      <Box
       className="mt-5"
       display="flex"
       justifyContent="right"
       >
              <Button variant="contained" color="success" onClick={handleOpen}>
                Create
              </Button>
      </Box>

      <Box m="40px 0 0 0" height="75vh" sx={{}}>
        <DataGrid
          checkboxSelection
          rows={mockDataTeam}
          columns={columns}
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
            CREATE CENTER
          </Typography>
          <br/>
      
          <Box  display="flex" style={{width:"250px", align:"center"}}>
          <div>
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Branch 
          </Typography>
          <br/>
          <TextField
          id="outlined-select-currency"
          select label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          size="small"
          style={{width:"250px"}}
        />
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Center Code 
          </Typography>
          <br/>
          <TextField id="outlined-basic" label="Branch" variant="outlined" size="small" style={{width:"250px"}} />
          <br/>
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Center Name 
          </Typography>
          <br/>
          <TextField id="outlined-basic" label="Branch" variant="outlined" size="small" style={{width:"250px"}}/>
          <br/>
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Collection Day
          </Typography>
          <br/>
          <TextField
          id="outlined-select-currency"
          select label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          size="small"
          style={{width:"250px"}}
        />
         <br/>
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Collection Officer
          </Typography>
          <br/>
          <TextField id="outlined-basic" label="Branch" size="small" variant="outlined" style={{width:"250px"}} />
          <br/>
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Center Leader
          </Typography>
          <br/>
          <TextField id="outlined-basic" label="Branch" size="small" variant="outlined" style={{width:"250px"}} />

          <Button variant="contained" color="success" onClick={handleClose}>
                Save
          </Button>
          </div>
          </Box>
        </Box>
      </Modal>

    </div>
  );
};

export default Center;
