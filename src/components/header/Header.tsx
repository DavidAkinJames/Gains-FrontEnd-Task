import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useDrawerContext } from "../../contexts/drawer-context";
import { ReactComponent as Logo} from '../../img/icons/common/github.svg'
import { ReactComponent as Reload} from '../../img/icons/common/reload.svg'
const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
   
  },
  icon: {
    padding: theme.spacing(1),
  },
  title: {
    margin: "auto",
  },
  parent: {
     
  }
}));

const Header = () => {
  const classes = useStyles();
  const { isOpened, toggleIsOpened } = useDrawerContext();
  return (
    <AppBar elevation = {0}
    className={classes.appBar}>
      <Toolbar disableGutters>
      
        <IconButton
          color="inherit"
          onClick={() => toggleIsOpened(!isOpened)}
          className={classes.icon}
        >
          {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
         <div className={classes.parent}>
         <Reload />
         </div>
        <Typography variant="h6" className={classes.title}>
          Header Component
        </Typography> 
      </Toolbar>
    </AppBar>
  );
};

export default Header;
