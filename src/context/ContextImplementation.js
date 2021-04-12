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

    setOriginCoordinates = data => {
        this.setState({
            originCoordinates: data
        })
    }

    setDestinationCoordinates = data => {
        this.setState({
            destinationCoordinates: data
        })
    }

    toggleQuoteGenerated = () => {
        this.setState({ quoteGenerated: true })
    }



    state = {
        logisticsData: {
            originCity: '',
            destinationCity: '',
            selectedDate: '',
        },
        vehData: {
            vehYear: '',
            vehMake: '',
            vehModel: ''
        },
        userData: {
            fullName: '',
            email: '',
            phoneNumber: ''
        },
        originCoordinates: {
            lat: 0,
            lng: 0
        },

        destinationCoordinates: {
            lat: 0,
            lng: 0
        },
        quoteGenerated: false,

        toggleQuoteGenerated: this.toggleQuoteGenerated,
        setLogisticsData: this.setLogisticsData,
        setUserData: this.setUserData,
        setVehData: this.setVehData,
        setOriginCoordinates: this.setOriginCoordinates,
        setDestinationCoordinates: this.setDestinationCoordinates

    }




    render() {
        const { children } = this.props;
        return (
            <AAMContext.Provider value={this.state}>{children}</AAMContext.Provider>
        )
    }
}

export default ContextImplementation;