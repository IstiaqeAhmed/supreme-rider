import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function PlaceBook() {
  const classes = useStyles();
  const { placeName, placeDetails } = useParams();
  const history = useHistory();
  const handleRoomVisit = () => {
    history.push(`/rooms/${placeName}`);
  };

  return (
    <div className="background">
      <Header></Header>

      {/* Description of the selected place */}

      <div className="row">
        <div
          className="col-md-6"
          style={{ color: "White", textAlign: "center", padding: "50px" }}
        >
          <h1>{placeName}</h1>
          <p>{placeDetails}</p>
        </div>

        {/* Ride book and date set up */}

        <div className="col-md-6">
          <div
            style={{
              background: "white",
              height: "400px",
              width: "500px",
              padding: "50px",
              margin: "10px",
              radius: "40px",
            }}
          >
            <h6 style={{ color: "grey", margin: "10px" }}>Pick From</h6>
            <input
              type="text"
              required
              className="text"
              placeholder="Mirpur-1"
              style={{ margin: "10px", width: "400px", height: "40px" }}
            />
            <h6 style={{ color: "grey", margin: "10px" }}>Pick To</h6>
            <input
              type="text"
              required
              className="text"
              placeholder="Dhanmondi"
              style={{ margin: "10px", width: "400px", height: "40px" }}
            />
            <h6 style={{ color: "grey", margin: "10px" }}>Travel Mode</h6>
            <input
              type="text"
              className="text"
              disabled
              placeholder={placeName}
              style={{ margin: "10px", width: "400px", height: "40px" }}
            />{" "}
            <br />
            <div style={{ display: "flex" }}>
              <form className={classes.container} noValidate>
                <TextField
                  id="time"
                  label="From"
                  type="time"
                  defaultValue=" "
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              <form className={classes.container} noValidate>
                <TextField
                  id="time"
                  label="To"
                  type="time"
                  defaultValue=" "
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>
            <br />
            <Button
              onClick={handleRoomVisit}
              variant="success"
              style={{ textAlign: "center", width: "400px", height: "40px" }}
            >
              Start Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
