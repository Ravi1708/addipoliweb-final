import React from 'react'

const BlogdetailScreen = () => {
    return (
        <div>
            <div className="wrapper">
        {/*<!-- Start Main -->*/}
        <main>
            <div className="main-part">
                {/*<!-- Start Breadcrumb Part -->*/}
                <section className="breadcrumb-part" data-stellar-offset-parent="true" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('assets/images/breadbg1.jpg')"}}>
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <h2>BLOG</h2>
                            <a href="#">Home</a>
                            <span>Blog</span>
                        </div>
                    </div>
                </section>
                {/*<!-- End Breadcrumb Part -->*/}
                <section className="home-icon blog-main-section blog-single">
                    <div className="icon-default">
                        <img src="assets/images/scroll-arrow.png" alt="image"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="blog-left-section">
                                    <div className="blog-left-search blog-common-wide">
                                        <input type="text" name="txt" placeholder="Search"></input>
                                        <input type="submit" name="submit" value="&#xf002;"></input>
                                    </div>
                                    <div className="blog-left-categories blog-common-wide">
                                        <h5>Categories</h5>
                                        <ul className="list">
                                            <li><a href="#">Catering</a></li>
                                            <li><a href="#">Community</a></li>
                                            <li><a href="#">Employment</a></li>
                                            <li><a href="#">Franchise</a></li>
                                            <li><a href="#">Kids Corner</a></li>
                                            <li><a href="#">Our Recipes</a></li>
                                        </ul>
                                    </div>
                                    <div className="blog-recent-post blog-common-wide">
                                        <h5>Recent Posts</h5>
                                        <div className="recent-blog-list">
                                            <p><img src="assets/images/img41.png" alt="image"/></p>
                                            <p><small>October 13, 2017</small></p>
                                            <h6>Disclosue - Real food here</h6>
                                        </div>
                                        <div className="recent-blog-list">
                                            <p><img src="assets/images/img42.png" alt="image"/></p>
                                            <p><small>October 13, 2017</small></p>
                                            <h6>Disclosue - Real food here</h6>
                                        </div>
                                    </div>
                                    <div className="popular-tag blog-common-wide">
                                        <h5>Popular Tags</h5>
                                        <a href="#">Audio</a> <a href="#">Service</a> <a href="#">Cupcake</a> <a href="#">Online Order</a> <a href="#">Contact</a>
                                    </div>
                                    <div className="blog-left-deal blog-common-wide">
                                        <h5>Best Deals</h5>
                                        <div className="best-deal-blog">
                                            <div className="best-deal-left">
                                                <img src="assets/images/img43.png" alt="image"/>
                                            </div>
                                            <div className="best-deal-right">
                                                <p>Lasal Cheese</p>
                                                <p><strong>$ 15</strong></p>
                                            </div>
                                        </div>
                                        <div className="best-deal-blog">
                                            <div className="best-deal-left">
                                                <img src="assets/images/img44.png" alt="image"/>
                                            </div>
                                            <div className="best-deal-right">
                                                <p>Lasal Cheese</p>
                                                <p><strong>$ 15</strong></p>
                                            </div>
                                        </div>
                                        <div className="best-deal-blog">
                                            <div className="best-deal-left">
                                                <img src="assets/images/img45.png" alt="image"/>
                                            </div>
                                            <div className="best-deal-right">
                                                <p>Lasal Cheese</p>
                                                <p><strong>$ 15</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="blog-right-section">
                                    <div className="blog-right-listing wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                        <div className="feature-img">
                                            <img src="assets/images/img54.png" alt="image"/>
                                            <div className="date-feature">27
                                                <br/> <small>may</small></div>
                                        </div>
                                        <div className="feature-info">
                                            <span><i className="icon-user-1"></i> By Ali TUFAN</span>
                                            <span><i className="icon-comment-5"></i> 5 Comments</span>
                                            <h5>How Do You Like Your Sausage?</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus mollis et.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</p>
                                            <p>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat.</p>
                                            <blockquote>
                                                <span className="quote">“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus mollis et.
                                            </blockquote>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iure dolor in reprehenderit sed do eiusmod tempor incididunt minim veniam, quis nostrud.</p>
                                            <ul className="ul-list">
                                                <li>Onsum dolor sit amet, consectetur adipisicing elit.</li>
                                                <li>Quis nostrud exercitation ullamco nisi ut aliquip.</li>
                                                <li>Reprehenderit sed do eiusmod tempor inci.</li>
                                            </ul>
                                            <div className="share-tag">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <div className="social-wrap">
                                                            <h5>SHARE</h5>
                                                            <ul className="social">
                                                                <li className="social-facebook"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                                <li className="social-tweeter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                                <li className="social-instagram"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                                <li className="social-dribble"><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                                                <li className="social-google"><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <div className="tag-wrap">
                                                            <h5>TAGS</h5>
                                                            <a href="#" className="tag-btn">Audio</a>
                                                            <a href="#" className="tag-btn">Service</a>
                                                            <a href="#" className="tag-btn">Cupcake</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p><a href="#" className="plain-btn"><i className="icon-left-4"></i>Music for Dinner – Audio Player</a></p>
                                        </div>
                                        <div className="comment-blog">
                                            <h3>2 Comment</h3>
                                            <div className="comment-inner-list">
                                                <div className="comment-img">
                                                    <img src="assets/images/img55.png" alt="image"/>
                                                </div>
                                                <div className="comment-info">
                                                    <h5>Anna Taylor</h5>
                                                    <span className="comment-date">AUGUST 9, 2016 10:57 AM</span>
                                                    <p>Aqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                            <div className="comment-inner-list">
                                                <div className="comment-img">
                                                    <img src="assets/images/img55.png" alt="image"/>
                                                </div>
                                                <div className="comment-info">
                                                    <h5>Anna Taylor</h5>
                                                    <span className="comment-date">AUGUST 9, 2016 10:57 AM</span>
                                                    <p>Aqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                            <h3>Leave a Reply</h3>
                                            <form className="form" method="post" name="form">
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                                        <textarea placeholder="Comment"></textarea>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <input type="text" name="txt" placeholder="Name"></input>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <input type="email" name="email" placeholder="Email"></input>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                                        <input type="text" name="txt" placeholder="Web site"></input>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                                        <input type="submit" name="submit" value="POST COMMENT" className="btn-black"></input>
                                                    </div>
                                                </div>
                                            </form>
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

export default BlogdetailScreen
