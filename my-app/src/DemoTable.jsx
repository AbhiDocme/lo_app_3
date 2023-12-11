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
  Checkbox,
} from "@mui/material";
import PropTypes from "prop-types";
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

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
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
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function AssetTableData() {
  const isNonMobileScreen = useMediaQuery("(min-width:900px)");

  const [selected, setSelected] = React.useState([]);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const {
    AssetType,
    setAssetType,
    AssetName,
    setAssetName,
    AssetDis,
    setAssetDis,
  } = useContext(newContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setAssetName("");
    setAssetDis("");
  };

  const handleDeleteItem = (id) => {
    const updatedItems = AssetType.filter((item) => item.id !== id);
    setAssetType(updatedItems);
  };

  const HandleEditViewData = (data) => {
    setAssetName(data.AssetName);
    setAssetDis(data.AssetDis);
    handleOpen();
    console.log(data.id);
  };

  const handleEditItem = (id) => {
    setAssetType((prev) => {
      return prev.map((item) => {
        console.log("item", item.id, "id", id);
        if (item.id === id) {
          return {
            ...item,
            name: AssetName,
            dis: AssetDis,
          };
        }
        return item;
      });
    });

    setAssetName("");
    setAssetDis("");

    handleClose();
  };

  return (
    <Box sx={{ mt: 1 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />

          <TableBody>
            {AssetType.map((data, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "600" }}
                >
                  {data.name}
                </TableCell>
                <TableCell align="left">{data.dis}</TableCell>
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
                        value={AssetName}
                        onChange={(e) => {
                          setAssetName(e.target.value);
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
                        value={AssetDis}
                        onChange={(e) => {
                          setAssetDis(e.target.value);
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

export default AssetTableData;
