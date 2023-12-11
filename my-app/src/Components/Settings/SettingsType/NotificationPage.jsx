import {
  Box,
  Divider,
  Grid,
  Switch,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

function NotificationPage() {
  const isNonMobleScreen = useMediaQuery("(min-width:992px)");

  return (
    <Box sx={{ height: "auto", overflow: "auto", width: "100%" }}>
      <Box sx={{ p: 3, marginTop: "3.5rem", mb: 2 }}>
        <Box>
          <Typography fontSize={20} fontWeight={600}>
            Notification settings
          </Typography>
          <Typography fontSize={12}>
            Select the kinds of notifications you get from email & push
            notification.
          </Typography>
        </Box>
        <Divider sx={{ mt: 3 }}></Divider>
        <Box mt={3}>
          <Grid
            sx={isNonMobleScreen ? { display: "flex" } : { display: "block" }}
          >
            <Grid item xs>
              <Typography fontSize={15} fontWeight={600}>
                Email Notification
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            <Grid item xs sx={isNonMobleScreen ? "" : { mt: 4 }}>
              <Box display={"flex"}>
                <Switch id="General Updates" defaultChecked />
                <Box fontSize={15} fontWeight={600} pl={2}>
                  General Updates{" "}
                  <Typography fontSize={12}>
                    Receive important company announcements and policy changes
                    via email to stay informed about crucial updates.
                  </Typography>
                </Box>
              </Box>

              <Box display={"flex"} mt={2}>
                <Switch id="Task Reminders" defaultChecked />
                <Box fontSize={15} fontWeight={600} pl={2}>
                  Task Reminders
                  <Typography fontSize={12}>
                    Get timely email reminders for upcoming tasks and project
                    deadlines, ensuring tasks are completed on time.
                  </Typography>
                </Box>
              </Box>

              <Box display={"flex"} mt={2}>
                <Switch id="Meeting Invitations" defaultChecked />
                <Box fontSize={15} fontWeight={600} pl={2}>
                  Meeting Invitations
                  <Typography fontSize={12}>
                    Receive detailed email invitations for scheduled meetings,
                    including agendas and attendee lists.
                  </Typography>
                </Box>
              </Box>

              <Box display={"flex"} mt={2}>
                <Switch id="Employee Requests" defaultChecked />
                <Box fontSize={15} fontWeight={600} pl={2}>
                  Employee Requests
                  <Typography fontSize={12}>
                    Instantly receive email notifications for employee leave
                    requests, permissions, and other HR-related inquiries for
                    quick response.
                  </Typography>
                </Box>
              </Box>

              <Box display={"flex"} mt={2}>
                <Switch id="System Status Alerts" defaultChecked />
                <Box fontSize={15} fontWeight={600} pl={2}>
                  System Status Alerts
                  <Typography fontSize={12}>
                    Get email alerts about the Loyaltri HRMS system status,
                    including maintenance notifications and downtime updates.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mt: 2 }} />

        <Box mt={2}>
          <Grid
            sx={isNonMobleScreen ? { display: "flex" } : { display: "block" }}
          >
            <Grid item xs>
              <Typography fontSize={15} fontWeight={600}>
                Push Notification
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            <Grid item xs sx={isNonMobleScreen ? "" : { mt: 4 }}>
              <Box display={"flex"}>
                <Switch id="Instant Messages" defaultChecked />
                <Box fontSize={15} fontWeight={600} pl={2}>
                  Instant Messages{" "}
                  <Typography fontSize={12}>
                    Receive immediate push notifications for new messages from
                    colleagues, facilitating quick response and efficient
                    communication.
                  </Typography>
                </Box>
              </Box>

              <Box display={"flex"} mt={2}>
                <Switch id="Task Updates " defaultChecked />
                <Box fontSize={15} fontWeight={600} pl={2}>
                  Task Updates
                  <Typography fontSize={12}>
                    Get real-time push notifications for task assignments,
                    deadline changes, and completed tasks to stay updated on
                    project progress.
                  </Typography>
                </Box>
              </Box>

              <Box display={"flex"} mt={2}>
                <Switch id="Meeting Reminders" defaultChecked />
                <Box fontSize={15} fontWeight={600} pl={2}>
                  Meeting Reminders
                  <Typography fontSize={12}>
                    Receive push notifications shortly before meetings start to
                    ensure punctuality and active participation.
                  </Typography>
                </Box>
              </Box>

              <Box display={"flex"} mt={2}>
                <Switch id="Employee_Requests_secound" defaultChecked />
                <Box fontSize={15} fontWeight={600} pl={2}>
                  Employee Requests
                  <Typography fontSize={12}>
                    Instantly receive push notifications for employee leave
                    requests and HR-related inquiries, enabling prompt
                    resolution.
                  </Typography>
                </Box>
              </Box>

              <Box display={"flex"} mt={2}>
                <Switch id="Attendance Updates" defaultChecked />
                <Box fontSize={15} fontWeight={600} pl={2}>
                  Attendance Updates
                  <Typography fontSize={12}>
                    Receive push notifications for employees' punch in or out
                    times, helping maintain accurate attendance records and
                    monitor presence.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default NotificationPage;
