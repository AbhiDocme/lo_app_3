import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  BottomNavigation,
  BottomNavigationAction,
  ImageList,
  ImageListItem,
  InputBase,
  Paper,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ImageIcon from "@mui/icons-material/Image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

function CardContentPage() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      cols: 2,
    },
  ];
  return (
    <div>
      <Card sx={{ maxWidth: "100%", marginTop: "1rem" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500], objectFit: "contain" }}
              aria-label="recipe"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/220px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"
            ></Avatar>
          }
          action={
            <IconButton id="moreicon2" aria-label="moreicon">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shah_Rukh_Khan"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <ImageList
          sx={{ width: "fit-content", height: "fit-content" }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <BottomNavigation
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction icon={<CommentIcon fontSize="small" />} />
          <BottomNavigationAction icon={<FavoriteIcon fontSize="small" />} />
          <BottomNavigationAction icon={<ShareIcon fontSize="small" />} />
          <BottomNavigationAction
            icon={<BookmarkBorderIcon fontSize="small" />}
          />
        </BottomNavigation>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <IconButton sx={{ p: "10px" }} id="avatar2" aria-label="avatar">
            <Avatar
              sx={{ bgcolor: "red", objectFit: "contain" }}
              aria-label="recipe"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mamooty.jpg/220px-Mamooty.jpg"
            ></Avatar>
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            id="comment"
            placeholder="Write your comment"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" id="attachfile" aria-label="attachfile">
            <AttachFileIcon fontSize="small" />
          </IconButton>

          <IconButton type="button" id="imogi" aria-label="imogi">
            <SentimentSatisfiedOutlinedIcon fontSize="small" />
          </IconButton>

          <IconButton type="button" id="imageicon" aria-label="imageicon">
            <ImageIcon fontSize="small" />
          </IconButton>
        </Paper>
      </Card>

      <Card sx={{ maxWidth: "100%", marginTop: "1rem" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500], objectFit: "contain" }}
              aria-label="recipe"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Salman_Khan_in_2023_%281%29_%28cropped%29.jpg/220px-Salman_Khan_in_2023_%281%29_%28cropped%29.jpg"
            ></Avatar>
          }
          action={
            <IconButton id="morebutton" aria-label="morebutton">
              <MoreVertIcon />
            </IconButton>
          }
          title="Salman_Khan"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <ImageList
          sx={{ width: "fit-content", height: "fit-content" }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <BottomNavigation
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction icon={<CommentIcon fontSize="small" />} />
          <BottomNavigationAction icon={<FavoriteIcon fontSize="small" />} />
          <BottomNavigationAction icon={<ShareIcon fontSize="small" />} />
          <BottomNavigationAction
            icon={<BookmarkBorderIcon fontSize="small" />}
          />
        </BottomNavigation>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <IconButton sx={{ p: "10px" }} id="avatar" aria-label="avatar">
            <Avatar
              sx={{ bgcolor: "red", objectFit: "contain" }}
              aria-label="recipe"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mamooty.jpg/220px-Mamooty.jpg"
            ></Avatar>
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            id="comment"
            placeholder="Write your comment"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" id="attachfile" aria-label="attachfile">
            <AttachFileIcon fontSize="small" />
          </IconButton>

          <IconButton type="button" id="imogi" aria-label="imogi">
            <SentimentSatisfiedOutlinedIcon fontSize="small" />
          </IconButton>

          <IconButton type="button" id="imageicon" aria-label="imageicon">
            <ImageIcon fontSize="small" />
          </IconButton>
        </Paper>
      </Card>
    </div>
  );
}

export default CardContentPage;
