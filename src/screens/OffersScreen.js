import React from 'react'

const OffersScreen = () => {
    return (
        <div>
            <div className="wrapper">

{/*<!-- Start Main -->*/}
<main>
    <div className="main-part">
        {/*<!-- Start Slider Part -->*/}
        <section className="breadcrumb-part" data-stellar-offset-parent="true" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('assets/images/breadbg1.jpg')"}}>
            <div className="container">
                <div className="breadcrumb-inner">
                    <h2>Best Deals and Offers</h2>
                    <a href="#">Home</a>
                    {/*<!-- <span>Gallery</span> -->*/}
                </div>
            </div>
        </section>
        {/*<!-- End Slider Part -->*/}
        <section id="reach-to" className="welcome-part" style={{padding:"0"}}>
            <div className="icon-default">
                <a href="#reach-to" className="scroll"><img src="assets/images/scroll-arrow.png" alt="scroll"/></a>
            </div>
        </section>
        {/*<!-- Start Instagram -->*/}
        <section className="instagram-main home-icon wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
            {/*<!-- <div className="container">
                <div className="build-title">
                    <h2>#ADDIPOLI</h2>
                    <h6>Enjoyed your stay at La Boom? Share your moments with us. Follow us on Instagram and use</h6>
                </div>
            </div> -->*/}
            <div className="gallery-slider">
            <div className="build-title">
                    <h2>BEST OFFERS</h2>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                </div>
                <div className="owl-carousel owl-theme" data-items="4" data-laptop="4" data-tablet="3" data-mobile="1" data-nav="true" data-dots="false" data-autoplay="true" data-speed="2000" data-autotime="3000">
                    <div className="item">
                        <a href="##" className="magnific-popup">
                            <img src="assets/images/gallery/gallery1.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#" className="magnific-popup">
                            <img src="assets/images/gallery/gallery2.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#" className="magnific-popup">
                            <img src="assets/images/gallery/gallery3.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#" className="magnific-popup">
                            <img src="assets/images/gallery/gallery4.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#" className="magnific-popup">
                            <img src="assets/images/gallery/gallery5.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#" className="magnific-popup">
                            <img src="assets/images/gallery/gallery6.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#" className="magnific-popup">
                            <img src="assets/images/gallery/gallery1.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#" className="magnific-popup">
                            <img src="assets/images/gallery/gallery2.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#" className="magnific-popup">
                            <img src="assets/images/gallery/gallery3.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="##" className="magnific-popup">
                            <img src="assets/images/gallery/gallery4.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="##" className="magnific-popup">
                            <img src="assets/images/gallery/gallery5.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href="###" className="magnific-popup">
                            <img src="assets/images/gallery/gallery6.png" alt="gallery" className="animated"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" data-defaultfilter=".breakfast">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="build-title">
                    <h2>BEST DEALS</h2>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-6 fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product" style={{backgroundImage: "url(assets/images/gallery/gallery1.png)"}}>
                                    </div>
                                    <a href="#">
                                        <h5>Paper Pouch</h5>
                                    </a>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 shop-dish">
                                            <h5><strong>$ 15.00</strong></h5>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 shop-dish">
                                            <a href="#" className="shop-cart-btn">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6 fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product" style={{backgroundImage: "url(assets/images/gallery/gallery5.png)"}}>
                                    </div>
                                    <a href="#">
                                        <h5>Paper Pouch</h5>
                                    </a>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 shop-dish">
                                            <h5><strong>$ 15.00</strong></h5>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 shop-dish">
                                            <button id="sub" className="cart-count">-</button>
                                            <input className="count-nom" type="text" id="qtyBox" readonly="" value="0"></input>
                                            <button id="add" className="cart-count">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6 fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product" style={{backgroundImage: "url(assets/images/gallery/gallery2.png)"}}>
                                    </div>
                                    <a href="#">
                                        <h5>Paper Pouch</h5>
                                    </a>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 shop-dish">
                                            <h5><strong>$ 15.00</strong></h5>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 shop-dish">
                                            <a href="#" className="shop-cart-btn">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6 fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product" style={{backgroundImage: "url(assets/images/gallery/gallery1.png)"}}>
                                    </div>
                                    <a href="#">
                                        <h5>Paper Pouch</h5>
                                    </a>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 shop-dish">
                                            <h5><strong>$ 15.00</strong></h5>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 shop-dish">
                                            <a href="#" className="shop-cart-btn">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6 fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product" style={{backgroundImage: "url(assets/images/gallery/gallery5.png)"}}>
                                    </div>
                                    <a href="#">
                                        <h5>Paper Pouch</h5>
                                    </a>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 shop-dish">
                                            <h5><strong>$ 15.00</strong></h5>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 shop-dish">
                                            <button id="sub" className="cart-count">-</button>
                                            <input className="count-nom" type="text" id="qtyBox" readonly="" value="0"></input>
                                            <button id="add" className="cart-count">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6 fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product" style={{backgroundImage: "url(assets/images/gallery/gallery2.png)"}}>
                                    </div>
                                    <a href="#">
                                        <h5>Paper Pouch</h5>
                                    </a>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 shop-dish">
                                            <h5><strong>$ 15.00</strong></h5>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 shop-dish">
                                            <a href="#" className="shop-cart-btn">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
{/*<!-- End Main -->*/}

</div>
        </div>
    )
}

export default OffersScreen
