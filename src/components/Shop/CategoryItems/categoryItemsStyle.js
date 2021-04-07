import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  card: {
    cursor: "pointer",
    transition: ".13s ease-in",
    "&:hover": {
      boxShadow: "2px 4px 20px grey",
      transform: "scale(1.05, 1.05)",
    },
    "&:active": {
      transform: "translate3d(0, -10px, 100px)",
    },
  },
});
