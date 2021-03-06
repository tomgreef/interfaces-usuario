import { AppBar, Box, Button, Theme, Toolbar, useMediaQuery } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as React from "react";

interface NavBarProps {
    hideLinks?: boolean
}

const NavBar: FC<NavBarProps> = ({ hideLinks }) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
    const [user, setUser] = useState<string | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        setUser(localStorage.getItem('activeUser'))
    })

    const signOut = () => {
        localStorage.removeItem("activeUser")
        setUser(null)
        navigate("/?success=Sesión+cerrada")
    }

    function nuevaSubasta() {
        navigate("/crearProducto")
    }

    function misSubastas() {
        navigate("/misSubastas")
    }

    function misPujas() {
        navigate("/misPujas")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "background.default" }} elevation={0}>
                <Toolbar sx={{ flexGrow: 1, padding: 2, justifyContent: "space-between" }}>
                    <Link to={"/"}>
                        <img src="./img/logo.jpg" alt="Logo Egauy" height={60} width={200} />
                    </Link>
                    {hideLinks ? null : user ?
                        <Box >
                            <Button variant="outlined" onClick={nuevaSubasta} style={{ marginRight: 8 }}>Nueva Subasta<AddCircleOutlineIcon style={{ marginLeft: 4 }} /></Button>
                            <Button variant="contained" onClick={misSubastas} style={{ marginRight: 8 }}>Mis Subastas</Button>
                            <Button variant="contained" onClick={misPujas} style={{ marginRight: 8 }}>Mis Pujas</Button>
                            <Button onClick={() => signOut()}>Cerrar Sesión</Button>
                        </Box>
                        :
                        <Box>
                            <Link to="/iniciarSesion" style={{ textDecoration: "none", marginRight: 4 }}><Button color="secondary">Iniciar Sesión</Button></Link>
                            <Link to="/registrar" style={{ textDecoration: "none" }}><Button color='secondary' >Registrarse</Button></Link>
                        </Box>}
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default NavBar