import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.text.primary, 
    textDecoration: 'none',
    padding: '10px',
    width: '100%'
  }, 
  menuItem: {
    padding: '0px'
  }
}))

export default function MainMenu() {

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/clientes" className={classes.link}>Listagem de clientes</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/clientes/new" className={classes.link}>Cadastrar novo cliente</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/karangos" className={classes.link}>Listagem de carros</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/karangos/new" className={classes.link}>Cadastrar novo carro</Link>
        </MenuItem>
        {/*10. Crie uma entrada de menu que carregue a rota recém-criada. LIKES*/}
        <MenuItem onClick={handleClose}>
          <Link to="/likes" className={classes.link}>About Me</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}