import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Button,
  useMediaQuery,
  Typography,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { newContext } from "../../../../App";
import { useContext } from "react";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "40%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "80%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

function TableData() {
  const isNonMobileScreen = useMediaQuery("(min-width:900px)");

  const {
    designation,
    setDesignation,
    discription,
    setDiscription,
    EmployeeDesignation,
    setEmployeeDesignation,
   } = useContext(newContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDesignation("");
    setDiscription("");
  };

  const handleDeleteItem = (id) => {
    const updatedItems = EmployeeDesignation.filter((item) => item.id !== id);
    setEmployeeDesignation(updatedItems);
  };

  const HandleEditViewData = (data) => {
    setDesignation(data.Designation);
    setDiscription(data.Discription);
    handleOpen();
    console.log(data.id)
  };

  const handleEditItem = (id) => {
    setEmployeeDesignation((prev) => {
      return prev.map((item) => {
        console.log('item', item.id, 'id', id);
        if (item.id === id) {
          return {
            ...item,
            Designation: designation,
            Discription: discription,
          };
        }
        return item;
      });
    });
  
    setDesignation("");
    setDiscription("");
  
    handleClose();
  };
  
  

  return (
    <Box sx={{ mt: 1 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "600" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="left">
                Discrption
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="right" colSpan={2}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {EmployeeDesignation.map((data, index) => (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "600" }}
                >
                  {data.Designation}
                </TableCell>
                <TableCell align="left">{data.Discription}</TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={() => {
                      HandleEditViewData(data);
                    }}
                    sx={{ color: "#6A4BFC" }}
                    fontSize="12"
                  />
                </TableCell>
                <TableCell align="right">
                  <DeleteOutlinedIcon
                    onClick={() => {
                      handleDeleteItem(data.id);
                    }}
                    sx={{ color: "red" }}
                    fontSize="12"
                  />
                </TableCell>

                <Modal open={open} onClose={handleClose}>
                  <Box sx={isNonMobileScreen ? style : style2}>
                    <Typography variant="h6" component="h2">
                      Edit Designation Here...
                    </Typography>
                    <Box
                      display={isNonMobileScreen ? "flex" : "block"}
                      sx={{ mt: 4 }}
                    >
                      <Typography>Designation : &nbsp;</Typography>
                      <TextField
                        size="small"
                        id={`Edit_des${data.id}`}
                        autoComplete="off"
                        variant="outlined"
                        value={designation}
                        onChange={(e) => {
                          setDesignation(e.target.value);
                        }}
                      />
                    </Box>
                    <Box
                      display={isNonMobileScreen ? "flex" : "block"}
                      sx={{ mt: 1 }}
                    >
                      <Typography>Discription : &nbsp;&nbsp;&nbsp;</Typography>
                      <TextField
                        size="large"
                        id={`Edit_dis${data.id}`}
                        variant="outlined"
                        autoComplete="off"
                        value={discription}
                        onChange={(e) => {
                          setDiscription(e.target.value);
                        }}
                      />
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      {" "}
                      <Button
                        onClick={() => {
                          handleEditItem(data.id);
                          
                        }}
                        variant="contained"
                        size="small"
                        sx={{
                          mt: 1,
                          backgroundColor: "#6A4BFC",
                          ":hover": { backgroundColor: "#6A4BFC" },
                        }}
                      >
                        <EditIcon fontSize="small" />
                        &nbsp; Edit
                      </Button>
                    </Box>
                  </Box>
                </Modal>
              </TableRow>
            ))}
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={3} sx={{ fontWeight: "600" }}>
                Page 1 of 10
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TableData;
