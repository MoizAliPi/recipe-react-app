import React from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./SearchAppbar.css";

function SearchAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbarColor}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            variant="title"
            color="inherit"
            noWrap
          >
            Recipe List
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Input
              placeholder="Search…"
              disableUnderline
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchAppBar);
