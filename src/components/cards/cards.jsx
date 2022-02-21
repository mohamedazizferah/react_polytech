import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./cards.css";

function Cards({ cardStuff }) {
  return (
    <div className="grid">
      {cardStuff.map((el) => (
        <>
          <Card sx={{ minWidth: 200, maxWidth: 200 }}>
            <CardMedia
              component="img"
              height="140"
              image={el.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </>
      ))}
    </div>
  );
}
export default Cards;
