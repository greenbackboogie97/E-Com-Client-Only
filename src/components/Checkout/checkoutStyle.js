import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    width: "92vw",
    padding: "14px",
    background: "white",
    outline: "unset",
    borderRadius: "10px",
  },

  headline: {
    textAlign: "center",
    marginBottom: "14px",
    height: "calc (5vh - 42px)",
  },

  gridItemHeader: {
    textAlign: "center",
  },

  gridItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  productName: {
    flex: "1",
    textAlign: "center",
    wordBreak: "break-word",
  },

  bottomContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(15vh - 28px)",
    paddingTop: "14px",
  },
});
