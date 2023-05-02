import { Button } from "@mui/material"
import { Link } from "react-router-dom"


const NavButton = ({ variant, buttonText, href }) => {

    return (
        <Link to={href}>
            <Button variant={variant}>{buttonText}</Button>
        </Link>
    )
}

export default NavButton