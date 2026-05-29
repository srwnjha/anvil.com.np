import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSwiper } from "../hooks/useSwiper";
import FsLightbox from "fslightbox-react";
import BlogSidebar from "./BlogSidebar";
import BlogComment from "./BlogComment";
import BlogAuthor from "./BlogAuthor";

const BlogDetailsSec = ({ post }) => {
  const swiperRef = useSwiper();
  const [toggler, setToggler] = useState(false);

  // Fallback if no post is provided
  if (!post) {
    return (
      <section className="ot-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="text-center py-5">
            <h2>Blog post not found</h2>
            <Link to="/blog" className="ot-btn mt-4">
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="ot-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="ot-blog blog-single">
                {post.postType === "normal" && (
                  <div className="blog-img">
                    <img src={post.detailImage} alt={post.title} />
                  </div>
                )}

                {post.postType === "video" && (
                  <div
                    className="blog-img"
                    data-opacity="5"
                    data-overlay="black"
                  >
                    <img src={post.detailImage} alt={post.title} />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setToggler(!toggler);
                      }}
                      className="play-btn"
                    >
                      <i className="fas fa-play"></i>
                    </button>

                    <FsLightbox toggler={toggler} sources={[post.videoUrl]} />
                  </div>
                )}

                {post.postType === "gallery" && (
                  <div className="blog-img">
                    <div
                      ref={swiperRef}
                      className="ot-react-slider"
                      data-slider-options='{"effect":"fade"}'
                    >
                      <div className="swiper-wrapper">
                        {post.detailImage &&
                          post.detailImage.map((img, idx) => (
                            <div key={idx} className="swiper-slide">
                              <img src={img} alt={post.title} />
                            </div>
                          ))}
                      </div>
                      <button className="slider-arrow slider-prev">
                        <i className="far fa-angle-left" />
                      </button>
                      <button className="slider-arrow slider-next">
                        <i className="far fa-angle-right" />
                      </button>
                    </div>
                  </div>
                )}
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="far fa-calendar"></i> {post.date}
                    </Link>
                    <Link className="author" to="/blog">
                      <i className="far fa-user"></i>By {post.author}
                    </Link>
                  </div>

                  <h2 className="blog-title">{post.title}</h2>
                  <p>{post.content.intro}</p>
                  <p>{post.content.mainContent}</p>
                  {post.content.quote && (
                    <blockquote>
                      <i className="fal fa-quote-right icon-btn"></i>
                      <p>{post.content.quote.text}</p>
                      <cite>{post.content.quote.author}</cite>
                      <span className="desig">
                        {post.content.quote.designation}
                      </span>
                    </blockquote>
                  )}
                  <p className="mb-40">{post.content.middleContent}</p>
                  <div className="row mt-15">
                    <div className="col-md-6 mb-35">
                      <img
                        className="w-100 rounded-15"
                        src={post.smallimage}
                        alt="Blog Post"
                      />
                    </div>
                    <div className="col-md-6 mb-35">
                      <img
                        className="w-100 rounded-15"
                        src={post.image}
                        alt="Blog Post"
                      />
                    </div>
                  </div>
                  <p>{post.content.conclusion}</p>
                  <p className="mb-n2">
                    Quickly build covalent data after turnkey content.
                    Distinctively reconceptualize customized growth strategies
                    via prospective potentialities. Professionally pursue
                    cutting-edge web-readiness vis-a-vis just in time
                    infrastructures. Conveniently target client-based systems
                    with turnkey sources.
                  </p>
                  <p className="mb-n2">
                    Collaboratively syndicate focused opportunities for
                    interactive deliverables. Assertively initiate client-based
                    infomediaries through collaborative mindshare create
                    bleeding-edge meta-services
                  </p>
                  <div className="share-links clearfix ">
                    <div className="row justify-content-between">
                      <div className="col-sm-auto">
                        <span className="share-links-title">Tags:</span>
                        <div className="tagcloud">
                          {post.tags.map((tag, index) => (
                            <Link
                              key={index}
                              to={`/blog?tag=${tag
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-sm-auto text-xl-end">
                        <span className="share-links-title">Share:</span>
                        <div className="ot-social style2">
                          <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="https://www.twitter.com/">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="https://www.linkedin.com/">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="https://www.youtube.com/">
                            <i className="fab fa-youtube" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BlogAuthor />
              <BlogComment />
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <BlogSidebar />
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsSec;
