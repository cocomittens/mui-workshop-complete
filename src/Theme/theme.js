import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "helvetica",
  },
  palette: {
    primary: { main: "#111" },
  },
  overrides: {
    MuiAppBar: {
      root: {
        margin: 0,
      },
      colorPrimary: {},
    },
    MuiIconButton: {
      root: {
        color: "#fff",
      },
    },
  },
});
