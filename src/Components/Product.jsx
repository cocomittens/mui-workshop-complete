import React, { useState, useEffect } from "react";
import Image from "material-ui-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
import Avatar from "@material-ui/core/Avatar";

import ShopIcon from "@material-ui/icons/Shop";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({}));

const Product = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [cart, setCart] = useState([]);

  const [currentImage, setCurrentImage] = useState("");

  const resetSelections = () => {
    setSelectedType(null);
    setSelectedPersonality(null);
  };

  const handleClick = () => {
    const name = [selectedPersonality, selectedType, selectedSpecies].join(" ");
    if (!cart.includes(name)) setCart([...cart, generateCartItem()]);
    resetSelections();
  };

  useEffect(() => {
    const defaultType = types[selectedSpecies || "cat"][0];
    const result = types[selectedSpecies || "cat"].find(
      (type) => type.name === selectedType
    );
    let currentType = defaultType;
    if (result) currentType = result;
    setCurrentImage(currentType.image);
  }, [selectedSpecies, selectedType]);

  const generateCartItem = () => {
    const name = [selectedPersonality, selectedType, selectedSpecies].join(" ");
    return (
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar src={currentImage} variant="square" />
        </Grid>
        <Grid item>
          <Typography variant="body1">{name}</Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      <Navigation cart={cart} />
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">
                {[selectedPersonality, selectedType, selectedSpecies].join(" ")}
                {!selectedSpecies && "Pet"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                {selectedSpecies ? "$999,999,999" : "From $999,999,999"}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" spacing={0}>
        <Grid container item xs={5} justifyContent="center">
          <Grid item>
            <Image
              src={process.env.PUBLIC_URL + currentImage}
              color="transparent"
              cover
            />
          </Grid>
        </Grid>
        <Grid container item xs={4} justifyContent="center">
          <Typography variant="body1" color="secondary">
            Sale
          </Typography>
          <Typography variant="h2" gutterBottom>
            Buy{" "}
            {selectedSpecies
              ? `${selectedSpecies
                  .substring(0, 1)
                  .toUpperCase()}${selectedSpecies.substring(1)} `
              : "Pet"}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Cool fun animal
          </Typography>

          <OptionList
            title="Species"
            options={species.map((species) => species.name)}
            secondaryOptions={species.map((species) => species.price)}
            clickHandler={setSelectedSpecies}
            selected={selectedSpecies}
          />
          <OptionList
            title="Type"
            options={types[selectedSpecies || "cat"].map((type) => (
              <FiberManualRecordIcon
                fontSize="large"
                style={{
                  color: type.color,
                  stroke: theme.palette.primary.main,
                  strokeWidth: "1px",
                }}
              />
            ))}
            secondaryOptions={types[selectedSpecies || "cat"].map(
              (type) => type.name
            )}
            optionValues={types[selectedSpecies || "cat"].map(
              (type) => type.name
            )}
            columns={2}
            clickHandler={setSelectedType}
            direction="column"
            selected={selectedType}
            disabled={!selectedSpecies}
          />
          <OptionList
            title="Personality"
            options={personalities[selectedSpecies || "cat"]}
            columns={2}
            clickHandler={setSelectedPersonality}
            disabled={!selectedType}
            direction="column"
            selected={selectedPersonality}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClick}
            disabled={!selectedPersonality}
            startIcon={<ShopIcon />}
            size="large"
          >
            <Typography variant="button">Add to Cart</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
