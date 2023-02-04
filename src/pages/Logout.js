import { logout } from "../actions/auth";
import { useEffect } from "react";

function LogOut(){

    logout()

    return null
}

export default LogOut