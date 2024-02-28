/* eslint-disable no-unused-vars */
import React from 'react'
import "./Blog.css"
import BlogImage from '../../assets/blog/blog.jpg'
const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="blog_wrapper">
            <div className="blog_col">
              <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
              <p>
                At <span>Mikon</span>, we specialize in propelling businesses
                from inception to prosperity. Our tailored solutions are crafted
                for growth, efficiency, and innovation, ensuring your success in
                a dynamic market. Partner with us for a strategic approach to
                lasting business triumph.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="/">
                  Get Started
                </a>
              </div>
            </div>
            <div className="blog_col">
              <div className="blog_image">
                <img src={BlogImage} alt="Blog" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog