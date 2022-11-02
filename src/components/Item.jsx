import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (

            <div className="card" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
            </div>


        )
    }
}