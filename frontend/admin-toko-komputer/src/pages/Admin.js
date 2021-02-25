import React from "react"
import Navbar from "../component/Navbar"

class Admin extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Navbar/>
                <h1>Ini Halaman Admin</h1>
            </div>
        )
    }
}
export default Admin;