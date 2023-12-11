import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItemButton,
  ListItemText,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import UnfoldMoreSharpIcon from "@mui/icons-material/UnfoldMoreSharp";
import AddIcon from "@mui/icons-material/Add";
import CorCloud from "../../../../Assets/Cor Cloud.png";
import { useState } from "react";
import { newContext } from "../../../../App";
import AssetTableData from "./AssetTableData";

function AssetTypePage() {
const {
AssetType,
setAssetType,
AssetName,
setAssetName,
AssetDis,
setAssetDis
 } = useContext(newContext);

  const isNonMobileScreen = useMediaQuery("(min-width:900px)");

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const HandlecreateAssetType = () => {
    const newData = {
      id: AssetType.length + 1,
      name: AssetName,
      dis: AssetDis,
    };

    setAssetType([...AssetType, newData]);

    setAssetName("");
    setAssetDis("");

    handleClose();
  };
  return (
    <Box
      sx={{
        height: "auto",
        overflow: "auto",
        width: "100%",
        marginTop: "4rem",
        p: 2,
      }}
    >
      <Box display={isNonMobileScreen ? "flex" : "block"}>
        <Box display={"block"}>
          <Box display={"flex"}>
            <Typography>
              Settings{" "}
              <ChevronRightIcon
                fontSize="12"
                sx={{ transform: "translate(0px,3px)" }}
              />
            </Typography>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ transform: "translate(0px,-5px)" }}
            >
              Asset Types
            </Typography>
          </Box>
          <Typography fontSize={11}>
            In the order details section, you can review and manage alll orders
            with their details
          </Typography>
        </Box>
        <br />
        <Box sx={{ display: "flex", marginLeft: "auto" }}>
          <ListItemButton
            sx={
              isNonMobileScreen
                ? {
                    backgroundColor: "#e0e1dd",
                    borderRadius: "10px",
                  }
                : {
                    backgroundColor: "#e0e1dd",
                    borderRadius: "10px",
                    width: "fit-content",
                  }
            }
          >
            <Avatar sx={{ width: 24, height: 24 }} src={CorCloud}></Avatar>
            <ListItemText sx={{ marginLeft: ".5rem" }} />
            {isNonMobileScreen ? (
              <Typography fontSize={13}>Company 1</Typography>
            ) : (
              ""
            )}
            <UnfoldMoreSharpIcon fontSize="15px" />
          </ListItemButton>

          <Button
            onClick={handleOpen}
            size="small"
            sx={{
              ml: 2,
              fontSize: "12px",
              backgroundColor: "#6A4BFC",
              ":hover": {
                backgroundColor: "#6A4BFC",
              },
            }}
            variant="contained"
          >
            <AddIcon fontSize="small" />{" "}
            {isNonMobileScreen ? "Add Asset Types" : ""}
          </Button>
        </Box>
      </Box>

      <Divider sx={{ mt: 3 }} />

      <Box display={"flex"} marginTop={1}>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#6A4BFC",
            ":hover": { backgroundColor: "#6A4BFC" },
          }}
        >
          Asset Types
        </Button>
        <Button variant="text" sx={{ color: "#000" }}>
          Other
        </Button>
      </Box>
      <Divider sx={{ mt: 1 }} />
      <AssetTableData/>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={isNonMobileScreen ? style : style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Designation Here...
          </Typography>
          <Box display={isNonMobileScreen ? "flex" : "block"} sx={{ mt: 4 }}>
            <Typography>Designation : &nbsp;</Typography>
            <TextField
              size="small"
              id="Designation_create"
              autoComplete="off"
              variant="outlined"
              onChange={(e) => {
                setAssetName(e.target.value);
              }}
            />
          </Box>
          <Box display={isNonMobileScreen ? "flex" : "block"} sx={{ mt: 1 }}>
            <Typography>Discription : &nbsp;&nbsp;&nbsp;</Typography>
            <TextField
              size="small"
              id="Discription_create"
              variant="outlined"
              autoComplete="off"
              onChange={(e) => {
                setAssetDis(e.target.value);
              }}
            />
          </Box>
          <Box sx={{ textAlign: "right" }}>
            {" "}
            <Button
              onClick={HandlecreateAssetType}
              variant="contained"
              size="small"
              sx={{
                mt: 1,
                backgroundColor: "#6A4BFC",
                ":hover": { backgroundColor: "#6A4BFC" },
              }}
            >
              <AddIcon fontSize="small" />
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default AssetTypePage;
