import React, { Component } from 'react'
import style from './RenderList.module.css'
const arrProduct = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

export default class RenderList extends Component {

    state = {
        id: -1
    }

    renderProduct = () => {
        let arrTr = arrProduct.map((prod, index) => {
            return <div className='col-2 mt-2' key={index}>
                <div onClick={() => {
                    this.setState({
                        id: prod.id - 1
                    })
                }}>
                    <img src={prod.url} alt="" width={120} height={50} />
                </div>

            </div>
        });
        return arrTr;
    }

    wearglasses = () => {


        if (this.state.id >= 0) {
            let product = arrProduct[this.state.id];
            return <div >
                <div className={style['wearGlass2']}>
                    <img src={product.url} alt="" width={120} height={50} />
                </div>
                <div className={style['wearGlass']}>
                    <h3 >{product.name}</h3>
                    <p className='text-light'>{product.desc}</p>
                </div>

            </div>
        }

    }

    render() {
        return (
            <div className={`${style['bgImg']}  container-fluid`}>
                <div className={`${style['header']} fixed-top text-center fs-1 `}>TRY GLASSES APP ONLINE</div>
                <div className='container '>
                    <div className=' d-flex justify-content-between mx-5 '>
                        <div className='position-relative my-5'>
                            <img className={`${style['pic']} mt-5`} src="./glassesImage/model.jpg" alt="" />
                            {this.wearglasses()}
                        </div>
                        <div className='my-5'>
                            <img className={`${style['pic']} mt-5`} src="./glassesImage/model.jpg" alt="" />
                        </div>

                    </div>



                </div>
                <div className={`row container ${style['glassList']} my-5`}>
                    {this.renderProduct()}
                </div>

            </div>
        )
    }
}
