import React, { Component } from 'react';
import AAMContext from './AAMContext';



class ContextImplementation extends Component {




    setLogisticsData = data => {
        this.setState({ logisticsData: data })
    }

    setUserData = data => {
        this.setState({ userData: data })
    }

    setVehData = data => {
        this.setState({ vehData: data })
    }

    clearLogisticsData() {
        this.setState({
            logisticsData: {
                originZip: '',
                destinationZip: '',
                selectedDate: '',
            }
        })
    }

    clearVehData() {
        this.setState({
            vehData: {
                year: '',
                make: '',
                model: ''
            }
        })
    }

    clearUserData() {
        this.setState({
            userData: {
                fullName: '',
                email: '',
                phoneNumber: ''
            }
        })
    }
    // find zipcode api for verification
    state = {
        logisticsData: {
            originZip: '',
            destinationZip: '',
            pickupDate: '',
        },
        vehData: {
            vehYear: '',
            vehMake: '',
            vehModel: ''
        },
        userData: {
            firstName: '',
            lastName: '',
            phoneNumber: ''
        },

        setLogisticsData: this.setLogisticsData,
        setUserData: this.setUserData,
        setVehData: this.setVehData
    }




    render() {
        const { children } = this.props;
        console.log(this.state.logisticsData, 'logistics data')
        console.log(this.state.vehData, 'veh data')

        console.log(this.state.userData, 'user data')


        return (
            <AAMContext.Provider value={this.state}>{children}</AAMContext.Provider>
        )
    }
}

export default ContextImplementation;