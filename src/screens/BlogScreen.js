import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogScreen = () => {
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
                <section className="home-icon blog-main-section blog-list-outer">
                    <div className="icon-default">
                        <img src="assets/images/scroll-arrow.png" alt="image"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="blog-left-section" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    <div className="blog-left-search blog-common-wide">
                                        <input type="text" name="txt" placeholder="Search"></input>
                                        <input type="submit" name="submit" value="&#xf002;"></input>
                                    </div>
                                    <div className="blog-left-categories blog-common-wide">
                                        <h5 style={{color:"#04e04c"}}>Categories</h5>
                                        <ul className="list">
                                            <li><a to="#">Addipoli Puttu's</a></li>
                                            <li><a to="#">Addipoli Curry</a></li>
                                            <li><a to="#">Addipoli Wrappies</a></li>
                                            <li><a to="#">Addipoli Special</a></li>
                                            {/* <li><a href="#">Kids Corner</a></li>
                                            <li><a href="#">Our Recipes</a></li> */}
                                        </ul>
                                    </div>
                                    <div className="blog-recent-post blog-common-wide">
                                        <h5 style={{color:"#04e04c"}}>Recent Posts</h5>
                                        <div className="recent-blog-list">
                                          <a to="/blogdetail" >                                          
                                            <h6>Addipoli Beetroot Paneer Puttu</h6>                                            
                                            <p><img src="assets/images/gallery/gallery13.jpg" alt="image"/></p>
                                            <p><small>December 13, 2021</small></p>
                                            </a>
                                        </div>
                                        <div className="recent-blog-list">
                                        <a to="/blogdetail" > 
                                        <h6>Addipoli Bracolli Corn Cheese Puttu</h6> 
                                            <p><img src="assets/images/gallery/gallery14.jpg" alt="image"/></p>
                                            <p><small>December 13, 2021</small></p>
                                            </a>
                                        </div>
                                        <div className="recent-blog-list">
                                          <a to="/blogdetail" >                                          
                                            <h6>Addipoli Curryleaves Chicken Puttu</h6>                                            
                                            <p><img src="assets/images/gallery/gallery15.jpg" alt="image"/></p>
                                            <p><small>December 13, 2021</small></p>
                                            </a>
                                        </div>                                        
                                    </div>
                                    <div className="popular-tag blog-common-wide">
                                        <h5 style={{color:"#04e04c"}}>Popular Tags</h5>
                                        <a href="#">Puttu</a> <a href="#">Chicken</a> <a href="#">Parotta</a> <a href="#">Online Order</a> <a href="#">Kadala Curry</a>
                                    </div>
                                    {/* <div className="blog-left-deal blog-common-wide">
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
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="blog-right-section">
                                    <div className="blog-right-listing wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                        <div className="feature-img">
                                            <img src="assets/images/gallery/gallery13.jpg" />
                                            <div className="date-feature">20
                                                <br/> <small>Dec</small></div>
                                        </div>
                                        <div className="feature-info">
                                            <h5>Addipoli Beetroot Paneer Puttu</h5>
                                            <span><i className="icon-user"></i> By Addipoli Puttus</span>
                                            <span><i className="icon-comment"></i> 0 Comments</span>                                            
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus.</p>
                                            <a to="/blogdetail" className="read-arrow">Read More</a>
                                        </div>
                                    </div>
                                    <div className="blog-right-listing wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                        <div className="feature-img">
                                            <img src="assets/images/gallery/gallery19.jpg" alt="image"/>
                                            <div className="date-feature">20
                                                <br/> <small>Dec</small></div>
                                        </div>
                                        <div className="feature-info">
                                            <h5>Addipoli Wrappies</h5>
                                            <span><i className="icon-user"></i> By Addipoli Puttus</span>
                                            <span><i className="icon-comment"></i> 0 Comments</span>                                            
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus.</p>
                                            <a to="/blogdetail" className="read-arrow">Read More</a>
                                        </div>
                                    </div>
                                    <div className="blog-right-listing wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                        <div className="feature-img">
                                            <img src="assets/images/gallery/gallery20.jpg" alt="image"/>
                                            <div className="date-feature">20
                                                <br/> <small>Dec</small></div>
                                        </div>
                                        <div className="feature-info">
                                            <h5>Addipoli Pazham Nirachu</h5>
                                            <span><i className="icon-user"></i> By Addipoli Puttus</span>
                                            <span><i className="icon-comment"></i> 0 Comments</span>                                            
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus.</p>
                                            <a to="/blogdetail" className="read-arrow">Read More</a>
                                        </div>
                                    </div>
                                    <div className="blog-right-listing wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                        <div className="feature-img">
                                            <img src="assets/images/gallery/gallery21.jpg" alt="image"/>
                                            <div className="date-feature">20
                                                <br/> <small>Dec</small></div>
                                        </div>
                                        <div className="feature-info">
                                            <h5>Addipoli Wheat Parotta</h5>
                                            <span><i className="icon-user"></i> By Addipoli Puttus</span>
                                            <span><i className="icon-comment"></i> 0 Comments</span>                                            
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus.</p>
                                            <a to="/blogdetail" className="read-arrow">Read More</a>
                                        </div>
                                    </div>
                                    <div className="gallery-pagination">
                                        <div className="gallery-pagination-inner">
                                            <ul>
                                                <li><a href="#" className="pagination-prev"><i className="icon-left-4"></i> <span>PREV page</span></a></li>
                                                <li className="active"><a href="#"><span>1</span></a></li>
                                                {/* <li><a href="#"><span>2</span></a></li>
                                                <li><a href="#"><span>3</span></a></li> */}
                                                <li><a href="#" className="pagination-next"><span>next page</span> <i className="icon-right-4"></i></a></li>
                                            </ul>
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

export default BlogScreen
