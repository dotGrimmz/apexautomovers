import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import styles from "../../assets/components/customDropdownStyle";

const useStyles = makeStyles(styles);


const CustomDropdown = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const { handleClick } = props;
  const handleClose = (event) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };

  const handleCloseMenu = (param) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    dropPlacement,
    rtlActive,
    noLiPadding,
    innerDropDown,
    navDropdown,
    name,
  } = props;

  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretDropup]: dropup && !anchorEl,
    [classes.caretActive]: Boolean(anchorEl) && !dropup,
    [classes.caretRTL]: rtlActive,
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive,
  });

  const dropDownMenu = (
    <MenuList role="menu" className={classes.menuList}>
      {dropdownHeader !== undefined ? (
        <MenuItem
          onClick={() => handleCloseMenu(dropdownHeader)}
          className={classes.dropdownHeader}
        >
          {dropdownHeader}
        </MenuItem>
      ) : null}
      {dropdownList.map((prop, key) => {
        if (prop.divider) {
          return (
            <Divider
              key={key}
              onClick={() => handleCloseMenu("divider")}
              className={classes.dropdownDividerItem}
            />
          );
        } else if (
          prop.props !== undefined &&
          prop.props["data-ref"] === "multi"
        ) {
          return (
            <MenuItem
              key={key}
              name={name}
              className={dropdownItem}
              style={{ overflow: "visible", padding: 0 }}
            >
              {prop}
            </MenuItem>
          );
        }
        return (
          <MenuItem
            key={key}
            name={name}
            onClick={() => handleCloseMenu(prop)}
            className={dropdownItem}
          >
            {prop}
          </MenuItem>
        );
      })}
    </MenuList>
  );
  return (
    <div
      name={name}
      className={innerDropDown ? classes.innerManager : classes.manager}
    >
      <div
        name={name}
        className={buttonText !== undefined ? "" : classes.target}
      >
        <Button
          aria-label="Notifications"
          name={name}
          aria-owns={anchorEl ? "menu-list" : null}
          aria-haspopup="true"
          {...buttonProps}
          onClick={() => handleClick()}
        >
          {buttonIcon !== undefined ? (
            <props.buttonIcon name={name} className={classes.buttonIcon} />
          ) : null}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b name={name} className={caretClasses} /> : null}
        </Button>
      </div>
      <Popper
        name={name}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={dropPlacement}
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.pooperResponsive]: true,
          [classes.pooperNav]: Boolean(anchorEl) && navDropdown,
        })}
      >
        {() => (
          <Grow
            name={name}
            in={Boolean(anchorEl)}
            id="menu-list"
            style={
              dropup
                ? { transformOrigin: "0 100% 0" }
                : { transformOrigin: "0 0 0" }
            }
          >
            <Paper className={classes.dropdown}>
              {innerDropDown ? (
                dropDownMenu
              ) : (
                  <ClickAwayListener onClickAway={handleClose}>
                    {dropDownMenu}
                  </ClickAwayListener>
                )}
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default CustomDropdown;
