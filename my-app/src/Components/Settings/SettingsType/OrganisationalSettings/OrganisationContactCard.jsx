import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";
  import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
  import ContentCopyIcon from "@mui/icons-material/ContentCopy";
  import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
  import LanguageIcon from "@mui/icons-material/Language";
  import MoreVertIcon from "@mui/icons-material/MoreVert";

function OrganisationContactCard() {
  return (
    <Box p={4}>
      <Grid container>
        <Grid item xs>
          <Typography fontWeight={700} fontSize={18}>
            Contact Info
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "flex" }, gap: 2 }}>
            <Card variant="outlined" sx={{ width: "100" }}>
              <CardContent>
                <Box display={"flex"} sx={{ gap: 1 }}>
                  <Avatar sx={{ width: 24, height: 24 }}></Avatar>
                  <Typography fontSize={13} fontWeight={600}>Salma Hisham</Typography>
                  <Typography fontSize={12} color={"gray"}>
                    CTO
                  </Typography>
                  <MoreVertIcon fontSize="15px" />
                </Box>

                <Box display={"flex"} mt={1}>
                  <LocalPhoneIcon sx={{ mr: 1 }} fontSize="12" />
                  <Typography fontSize={12}>+ 971 50521252 </Typography>
                  <ContentCopyIcon sx={{ ml: 1 }} fontSize="12" />
                </Box>

                <Box display={"flex"} mt={1}>
                  <EmailOutlinedIcon sx={{ mr: 1 }} fontSize="12" />
                  <Typography fontSize={12}>khadija@loyaltri.com</Typography>
                  <ContentCopyIcon sx={{ ml: 1 }} fontSize="12" />
                </Box>

                <Box display={"flex"} mt={1}>
                  <LanguageIcon sx={{ mr: 1 }} fontSize="12" />
                  <Typography fontSize={12}>www.mhtrust.com</Typography>
                  <ContentCopyIcon sx={{ ml: 1 }} fontSize="12" />
                </Box>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{ width: "100", mt: { xs: 1, sm: 0 } }}
            >
              <CardContent>
                <Box display={"flex"} sx={{ gap: 1 }}>
                  <Avatar sx={{ width: 24, height: 24 }}></Avatar>
                  <Typography fontSize={13} fontWeight={600}>Hamdan Ali</Typography>
                  <Typography fontSize={12} color={"gray"}>
                    CTO
                  </Typography>
                  <MoreVertIcon fontSize="15px" />
                </Box>

                <Box display={"flex"} mt={1}>
                  <LocalPhoneIcon sx={{ mr: 1 }} fontSize="12" />
                  <Typography fontSize={12}>+ 971 50521252 </Typography>
                  <ContentCopyIcon sx={{ ml: 1 }} fontSize="12" />
                </Box>

                <Box display={"flex"} mt={1}>
                  <EmailOutlinedIcon sx={{ mr: 1 }} fontSize="12" />
                  <Typography fontSize={12}>khadija@loyaltri.com</Typography>
                  <ContentCopyIcon sx={{ ml: 1 }} fontSize="12" />
                </Box>

                <Box display={"flex"} mt={1}>
                  <LanguageIcon sx={{ mr: 1 }} fontSize="12" />
                  <Typography fontSize={12}>www.mhtrust.com</Typography>
                  <ContentCopyIcon sx={{ ml: 1 }} fontSize="12" />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mt: { xs: 1, sm: 0 } }}>
          <Typography fontWeight={700} fontSize={18}>
            Documents
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardContent>
                <Typography sx={{ fontSize: 12 }} fontWeight={600}>EatX LLC</Typography>
                <br />
                <Typography sx={{ fontSize: "12px" }} fontWeight={600}>
                  Tom & Serg LLC
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrganisationContactCard;
