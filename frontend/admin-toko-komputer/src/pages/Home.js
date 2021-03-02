import React from "react"
import Navbar from "../component/Navbar"
// import axios
import axios from "axios"
import { base_url } from "../config.js"

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            token: "",
            adminName: null,
            productsCount: 0,
            customersCount: 0,
            transactionsCount: 0,
            adminsCount: 0
        }
        if (localStorage.getItem("token")) {
            this.state.token = localStorage.getItem("token")
        } else {
            window.location = "/login";
        }
    }
    // arrow function
    headerConfig = () => {
        let header = {
            headers: {Authorization: `Bearer ${this.state.token}`}
        }
        return header
    }

    // fungsi update barang produk pada databases (productCount)
    getProduct = () => {
        let url = base_url + "/product"
        axios.get(url, this.headerConfig())
        //checklist lolos
        .then(response => {
            this.setState({productsCount: response.data.length})
        })
        //error catch 
        .catch(error => {
            if (error.message) {
                if (error.response) {
                    window.alert(error.response.data.message)
                    this.props.history.push("/login")
                }
            } else {
                console.log(error)
            }
        })
    }

    //fungsi update customerCount pada databases
    getCustomer = () => {
        let url = base_url + "/customer"
        axios.get(url, this.headerConfig())
        .then(response => {
            this.setState({customersCount: response.data.length})
        })
        .catch(error => {
            if (error.message) {
                if (error.response) {
                    window.alert(error.response.data.message)
                    this.props.history.push("/login")
                }
            } else {
                console.log(error);
            }
        })
    }

    //fungsi update state transaction sesuai dengan jumlah data pada databases
    getTransaction = () => {
        let url = base_url + "/transaksi"
        axios.get(url, this.headerConfig())
        .then(response => {
            this.setState({transactionsCount: response.data.length})
        })
        .catch(error => {
            if (error.message) {
                if (error.response) {
                    window.alert(error.response.data.message)
                    this.props.history.push("/login")
                }
            } else {
                console.log(error)
            }
        })
    }

    getAdmins = () => {
        let url = base_url + "/admin"
        axios.get(url, {headers: {
            Authorization: "Bearer " + this.state.token 
        }})
        .then(response => {
            this.setState({ adminsCount: response.data.length })
        })
        .catch(error => {
            if(error.response){
                if(error.response.status){
                    window.alert(error.response.data.message + " getAdmins")
                    this.props.history.push("/login")
                }
            }else{
                console.log(error)
            }

        })
    }

    // get nama admin melalui localstorage => fungsi untuk mengupdate state adminName
    // getAdmin = () => {
    //     let admin = JSON.parse(localStorage.getItem('admin'))
    //     this.setState({adminName: admin.name})
    // }
    
    // sebelum halama home di render program harus mendapatkan data adminName, ...., oleh karena itu kita harus memanggil fungsi2 trsebut di dalam componentdidmount
    componentDidMount(){
        this.getCustomer()
        this.getAdmins()
        this.getProduct()
        this.getTransaction()
        //this.getAdmin()
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className="container mt-2">
                    <h3 className="my-2">
                        <strong>Welcome back, {this.state.adminName}</strong>
                    </h3>
                    <div className="row">
                        {/** product count */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                            <div className="card">
                                <div className="card-body bg-success">
                                    <h4 className="text-dark">
                                        <strong>Product Count</strong>
                                    </h4>
                                    <h1 className="text-white">
                                        <strong>{this.state.productsCount}</strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/** customer count */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                            <div className="card">
                                <div className="card-body bg-success">
                                    <h4 className="text-dark">
                                        <strong>Customer Count</strong>
                                    </h4>
                                    <h1 className="text-white">
                                        <strong>{this.state.customersCount}</strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/** transaction count */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                            <div className="card">
                                <div className="card-body bg-success">
                                    <h4 className="text-dark">
                                        <strong>Transaction Count</strong>
                                    </h4>
                                    <h1 className="text-white">
                                        <strong>{this.state.transactionsCount}</strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/** admins count */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                            <div className="card">
                                <div className="card-body bg-success">
                                    <h4 className="text-dark">
                                        <strong>Admins Count</strong>
                                    </h4>
                                    <h1 className="text-white">
                                        <strong>{this.state.adminsCount}</strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;