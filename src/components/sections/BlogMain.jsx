import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSwiper } from '../hooks/useSwiper';
import FsLightbox from "fslightbox-react";
import blogPosts from '../data/blog-posts';

const BlogMain = () => {
    const swiperRef = useSwiper();
    const [toggler, setToggler] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;
    const totalPages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirst, indexOfLast);

    return (
    <>
      <section className="ot-blog-wrapper space-top space-extra-bottom" id="blog-sec">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-xl-10">
                {currentPosts.map((post) => (
                <div key={post.id} className="ot-blog blog-single has-post-thumbnail">
                    {post.postType === 'normal' && (
                        <div className="blog-img">
                            <Link to={`/blog/${post.slug}`}>
                                <img src={post.detailImage} alt={post.title} />
                            </Link>
                        </div>
                    )}

                    {post.postType === 'video' && (
                        <div className="blog-img" data-opacity="5" data-overlay="black">
                            <Link to={`/blog/${post.slug}`}>
                                <img src={post.detailImage} alt={post.title} />
                            </Link>
                            <button type="button"
                                onClick={(e) => {
                                e.preventDefault();
                                setToggler(!toggler);
                                }}
                                className="play-btn popup-video"
                            >
                                <i className="fas fa-play"></i>
                            </button>
                            
                            <FsLightbox
                                toggler={toggler}
                                sources={[post.videoUrl]}
                            />
                        </div>
                    )}

                    {post.postType === 'gallery' && (
                        <div ref={swiperRef} className="blog-img ot-react-slider" data-slider-options='{"effect":"fade"}'>
                            <div className="swiper-wrapper">
                                {post.detailImage && post.detailImage.map((img, idx) => (
                                    <div key={idx} className="swiper-slide">
                                        <Link to={`/blog/${post.slug}`}>
                                            <img src={img} alt={post.title} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <button className="slider-arrow slider-prev"><i className="far fa-arrow-left"></i></button>
                            <button className="slider-arrow slider-next"><i className="far fa-arrow-right"></i></button>
                        </div>
                    )}
                     <div className="blog-content">
                        <div className="blog-meta">
                        <Link to="/blog">
                            <i className="far fa-calendar"></i>{post.date}
                        </Link>
                        <Link className="author" to="/blog">
                            <i className="far fa-user"></i>By {post.author}
                        </Link>
                        </div>
                        <h2 className="blog-title">
                        <Link to={`/blog/${post.slug}`}>
                            {post.title}
                        </Link>
                        </h2>
                        <p className="blog-text">{post.excerpt}</p>
                        <Link to={`/blog/${post.slug}`} className="link-btn">
                        Read Details<i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                ))}
                <div className="ot-pagination text-center">
                <ul>
                    <li>
                    <button type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                       
                        aria-label="Previous Page"
                    >
                        <i className="far fa-angle-left" />
                    </button>
                    </li>
                    {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;
                    return (
                        <li key={page}>
                        <button type="button"
                           
                            className={currentPage === page ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(page);
                            }}
                            aria-label={`Page ${page}`}
                        >
                            {page}
                        </button>
                        </li>
                    );
                    })}
                    <li>
                    <button type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                        }}
                       
                        aria-label="Next Page"
                    >
                        <i className="far fa-angle-right" />
                    </button>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </section>

    </>
  );
};

export default BlogMain;