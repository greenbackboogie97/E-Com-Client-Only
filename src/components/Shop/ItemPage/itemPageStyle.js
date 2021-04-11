import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "fit-content",
    padding: "14px",
    flexWrap: "wrap",
  },

  contentContainer: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 28px)",
    minWidth: "fit-content",
  },

  contentBottom: {
    display: "flex",
    padding: "14px",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  img: {
    width: "30%",
    minWidth: "220px",
  },
});
