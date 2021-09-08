import React, { useState } from "react";
import Image from "material-ui-image";
import { makeStyles } from "@material-ui/core/styles";

// constants
import { species, types, personalities } from "../constants";

// components
import Navigation from "./Navigation";
import OptionList from "./OptionList";

// mui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  subheader: {
    width: "70vw",
    margin: "0 auto",
  },
  content: {
    padding: theme.spacing(4),
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    borderRadius: "5vw",
    maxHeight: "60vh",
  },
}));

const Product = () => {
  const classes = useStyles();

  const [selectedSpecies, setSelectedSpecies] = useState("cat");
  const [selectedType, setSelectedType] = useState("gray");
  const [selectedPersonality, setSelectedPersonality] = useState(null);

  return (
    <Grid container justifyContent="center" spacing={0}>
      <Grid item xs={12}>
        <Navigation />
      </Grid>
      <Grid item xs={12}>
        <AppBar position="static" color="transparent" elevation={1}>
          <Toolbar className={classes.subheader}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">{selectedSpecies}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">$999</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid
        className={classes.content}
        container
        item
        xs={5}
        justifyContent="center"
      >
        <Grid item className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={
              process.env.PUBLIC_URL +
              types[selectedSpecies].find((type) => type.name === selectedType)
                .image
            }
            color="transparent"
            cover
          />
        </Grid>
      </Grid>
      <Grid
        className={classes.content}
        container
        item
        xs={4}
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignContent="flex-start"
          width="100%"
        >
          <Typography variant="h2" gutterBottom>
            Buy Pet
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Cool fun animal
          </Typography>
        </Box>
        <OptionList
          title="Species"
          options={species}
          clickHandler={setSelectedSpecies}
        />
        <OptionList
          title="Type"
          options={types[selectedSpecies].map((type) => type.name)}
          columns={2}
          clickHandler={setSelectedType}
        />
        <OptionList
          title="Personality"
          options={personalities[selectedSpecies]}
          columns={2}
          clickHandler={setSelectedPersonality}
        />
        <Button variant="contained">
          <Typography variant="button">Add to Cart</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Product;
