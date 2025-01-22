import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function GoodsItem(props) {
  const { id, title, price, description, category, image } = props;

  return (
    <Box style={{ border: "1px solid black" }} key={id}>
      <CardMedia
        sx={{ width: "100%", height: 150 }}
        component="img"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography
          style={{ width: 300, paddingTop: 20 }}
          variant="h5"
          component="div"
        >
          {title}{" "}
        </Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography
            style={{ fontWeight: "bold", fontSize: 20, paddingTop: 9 }}
            gutterBottom
            variant="p"
          >
            Price: {price}
          </Typography>
        </Box>
        <Typography
          style={{ fontWeight: "bold", fontSize: 20 }}
          gutterBottom
          variant="p"
        >
          Category: {category}
        </Typography>
      </CardContent>
    </Box>
  );
}
