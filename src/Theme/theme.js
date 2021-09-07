import { createTheme } from "@material-ui/core/styles";

import { typography } from "./light/typography";
import { palette } from "./light/palette";
import { overrides } from "./light/overrides";

export const theme = createTheme({
  typography,
  palette,
  overrides,
});
