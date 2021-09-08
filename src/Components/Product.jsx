import React, { useState, useEffect } from "react";
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
  productBar: { backgroundColor: theme.palette.primary.light },
  subheader: {
    width: "70vw",
    margin: "0 auto",
    position: "sticky",
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
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const defaultType = types[selectedSpecies][0];
    const result = types[selectedSpecies].find(
      (type) => type.name === selectedType
    );
    let currentType = defaultType;
    if (result) currentType = result;
    setCurrentImage(currentType.image);
  }, [selectedSpecies, selectedType]);

  return (
    <div>
      <Navigation />
      <AppBar
        position="sticky"
        color="inherit"
        elevation={1}
        classes={classes.productBar}
      >
        <Toolbar className={classes.subheader}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">{selectedSpecies}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">$999,999,999</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" spacing={0}>
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
              src={process.env.PUBLIC_URL + currentImage}
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
            options={species.map((species) => species.name)}
            secondaryOptions={species.map((species) => species.price)}
            clickHandler={setSelectedSpecies}
          />
          <OptionList
            title="Type"
            options={types[selectedSpecies].map((type) => type.name)}
            secondaryOptions={types[selectedSpecies].map((type) => type.name)}
            columns={2}
            clickHandler={setSelectedType}
            direction="column"
          />
          <OptionList
            title="Personality"
            options={personalities[selectedSpecies]}
            columns={2}
            clickHandler={setSelectedPersonality}
            disabled={!selectedType}
            direction="column"
          />
          <Button variant="contained" color="secondary">
            <Typography variant="button">Add to Cart</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
