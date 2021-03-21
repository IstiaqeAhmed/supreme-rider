import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import person from "../../images/peopleicon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
export default function RideDetails(props) {
  const { image, passenger, star, rating, rent, total } = props.ride;
  const classes = useStyles();
  return (
    <div
      style={{
        border: "500px solid blue green yellow",
      }}
    >
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    <strong>
                      Passenger:
                      <img src={person} alt="" /> {passenger}{" "}
                    </strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <img
                      style={{
                        height: "12px",
                        width: "12px",
                        border: "1px solid blue",
                      }}
                      src={star}
                      alt=""
                    />{" "}
                    <strong>{rating} </strong> <br /> total: {total}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <br />
                <Typography variant="subtitle1">
                  {" "}
                  <strong>Rent: {rent}</strong>{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
