import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Item from './Item'
import Welcome from './Welcome'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>

                <Header />
                <div className='container'>
                    <div className='with'><Welcome /></div>
                    <div className='row mb-5 p-0'>
                        <div className='col-3'><Item /></div>
                        <div className='col-3'><Item /></div>  
                        <div className='col-3'><Item /></div>
                        <div className='col-3'><Item /></div>     

                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
