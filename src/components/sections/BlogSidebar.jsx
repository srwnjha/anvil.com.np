import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FsLightbox from "fslightbox-react";
import blogPosts from '../data/blog-posts';

const galleryImages = [1, 2, 3, 4, 5, 6].map(
    (n) => `assets/img/widget/gallery_1_${n}.jpg`
);

const BlogSidebar = () => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });

    const openLightbox = (index) => {
        setLightboxController({ toggler: !lightboxController.toggler, slide: index + 1 });
    };

    return (
        <aside className="sidebar-area">
            <div className="widget widget_search">
                <form className="search-form">
                    <input type="text" placeholder="Enter Keyword" />
                    <button type="submit">
                        <i className="far fa-search" />
                    </button>
                </form>
            </div>

            <div className="widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                    {blogPosts.slice(0, 3).map((post) => (
                        <div className="recent-post" key={post.id}>
                            <div className="media-img">
                                <Link to={`/blog/${post.slug}`}>
                                    <img src={post.smallimage} alt={post.title} />
                                </Link>
                            </div>
                            <div className="media-body">
                                <h4 className="post-title">
                                    <Link className="text-inherit" to={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h4>
                                <div className="recent-post-meta">
                                    <Link to="/blog">{post.date}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget_title">Categories</h3>
                <ul>
                    <li><Link to="/blog">IT Solution</Link></li>
                    <li><Link to="/blog">SEO Marketing</Link></li>
                    <li><Link to="/blog">Website Development</Link></li>
                    <li><Link to="/blog">Cloud Solution</Link></li>
                    <li><Link to="/blog">Network Marketing</Link></li>
                </ul>
            </div>

            <div className="widget">
                <h3 className="widget_title">Project Gallery</h3>
                <div className="sidebar-gallery">
                    {galleryImages.map((src, index) => (
                        <div className="gallery-thumb" key={index}>
                            <img src={src} alt="Gallery" />
                            <button
                                className="gallery-btn"
                                onClick={() => openLightbox(index)}
                                aria-label="Open image"
                            >
                                <i className="fab fa-instagram" />
                            </button>
                        </div>
                    ))}
                </div>
                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={galleryImages}
                    slide={lightboxController.slide}
                />
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Popular Tags</h3>
                <div className="tagcloud">
                    <Link to="/blog?tag=advice">Advice</Link>
                    <Link to="/blog?tag=author">Author</Link>
                    <Link to="/blog?tag=consulting">Consulting</Link>
                    <Link to="/blog?tag=tronix">Tronix</Link>
                    <Link to="/blog?tag=family">Family</Link>
                    <Link to="/blog?tag=health">Health</Link>
                    <Link to="/blog?tag=judge">Judge</Link>
                    <Link to="/blog?tag=solution">Solution</Link>
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;