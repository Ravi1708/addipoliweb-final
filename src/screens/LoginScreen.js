import React from 'react'

const LoginScreen = () => {
    return (
        <div>
            {/* <!-- cart popup --> */}
            <div className="cart-popup">
                <div className="cart-wrap">
                    <div className="cart-blog">
                        <div className="close">
                            <h3 className="close1">X</h3>
                        </div>
                        <div className="cart-item">
                            <div className="cart-item-left">
                                <img src="assets/images/img59.png" alt="" />
                            </div>
                            <div className="cart-item-right">
                                <h6>Caramel Chesse Cake</h6>
                                <span>$ 14.00</span>
                            </div>
                            <span className="delete-icon"></span>
                        </div>
                        <div className="cart-item">
                            <div className="cart-item-left">
                                <img src="assets/images/img60.png" alt="" />
                            </div>
                            <div className="cart-item-right">
                                <h6>Caramel Chesse Cake</h6>
                                <span>$ 14.00</span>
                            </div>
                            <span className="delete-icon"></span>
                        </div>
                        <div className="subtotal">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <h6>Subtotal :</h6>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <span>$ 140.00</span>
                            </div>
                        </div>
                        <div className="cart-btn">
                            <a href="checkout.php" className="btn-main checkout">CHECK OUT</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- login popup --> */}

            <div className="login-popup">
                <div className="container" id="container">
                    <div className="close">
                        <h3 className="close2">X</h3>
                    </div>
                    <div>
                        <form action="">
                        <h1>Sign In</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="social"><i className="fa fa-google"></i></a>
                                <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <a href="#">Forgot Your Password</a>

                            <button>Sign In</button>
                            <p>Don't have an account? <a href="#" id="signup" >Sign Up</a></p>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- signup popup --> */}

            <div className="signup-popup">
                <div className="container" id="container">
                    <div className="close">
                        <h3 className="close3">X</h3>
                    </div>
                    <div>
                        <form action="">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fa fa-facebook" ></i></a>
                                <a href="#" className="social"><i className="fa fa-google" ></i></a>
                                <a href="#" className="social"><i className="fa fa-linkedin" ></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <button>SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
