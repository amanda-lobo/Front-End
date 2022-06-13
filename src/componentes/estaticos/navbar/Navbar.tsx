import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

    // const id = useSelctor...

  //Service buscaId(id)

  //const [user, setUser] = useState<User>


  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    navigate("/login");
  }


  // let navbar

  /*
    if(user.tipo === "admin")
      navbar = adm
    else{
      navbar = comum
    }
  */

  return (
    <>
      <AppBar position="static">
        <Toolbar className="fundo" variant="dense">
          <Link to="/home">
            <Box>
              <img
                src="https://i.imgur.com/gCESJH1.png"
                alt="Logo Biocommerce"
                height={80}
                width={80}
              />
            </Box>
          </Link>
          <Link to="/home" className="text-decoration">
            <Box className="cursor">
              <Typography variant="h5" color="inherit">
                Home
              </Typography>
            </Box>
          </Link>

          <Link to="/sobre-nos" className="text-decoration">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Sobre nós
              </Typography>
            </Box>
          </Link>
          <Link to="/produto" className="text-decoration">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Produtos
              </Typography>
            </Box>
          </Link>
          <Link to="/categoria" className="text-decoration">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Categorias
              </Typography>
            </Box>
          </Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box marginLeft={65} className="cursor">
            <Typography variant="h6" color="inherit" onClick={goLogout}>
              Logout
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
