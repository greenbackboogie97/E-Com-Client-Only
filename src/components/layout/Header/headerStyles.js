import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
    minHeight: "50px",
    marginBottom: "14px",
  },

  buttons: {
    display: "flex",
    alignItems: "center",
  },
});
