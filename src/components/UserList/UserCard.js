import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Link from "next/link";

function UserCard({ user }) {
  return (
    <Card
      sx={{
        maxWidth: 245,
        width: 245,
        height: 300,
        m: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: 180,
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            padding: 1,
          }}
          image={
            user.image
              ? `https://react-bank-project.eapi.joincoded.com/${user.image}`
              : "/defaultImg.png"
          }
          alt={user.username}
        />
        <CardContent sx={{ flexGrow: 1, overflow: "hidden" }}>
          <Typography
            gutterBottom
            variant="h8"
            component="div"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "black",
            }}
          >
            {user.username}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "black",
            }}
          >
            <span>Balance: </span>
            {user.balance}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link href={`/profile/${user._id}`}>
          <Button variant="outlined" size="small" color="info">
            Transfer
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default UserCard;
