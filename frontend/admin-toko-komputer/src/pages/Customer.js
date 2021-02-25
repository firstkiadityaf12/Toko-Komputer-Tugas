import React from "react"
import Navbar from "../component/Navbar"
import CustomerList from "../component/CustomerList"
import { base_url, customer_image_url } from "../config"
import $ from "jquery"
import axios from "axios"

class Customer extends React.Component{
    constructor(){
        super()
        this.state = {
            customer: [],
            token: "",
            action: "",
            name: "",
            phone: "",
            address: "",
            image: "",
            username: "",
            password: "",
            uploadFile: true,
            fillPasswors: true,
            customer_id: "",
        }
        if (localStorage.getItem("token")) {
            this.state.token = localStorage.getItem("token")
        } else {
            window.location = "/login"
        }
        this.headerConfig.bind(this)
    }
    // header berupa bearer token
    headerConfig = () => {
        let header = {
            headers: { Authorization: `Bearer ${this.state.token}`}
        }
        return header
    }


    render(){
        return(
            <div>
                <Navbar/>
                <h1>Ini halaman Customer</h1>
            </div>
        )
    }
}
export default Customer;