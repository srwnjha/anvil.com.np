import React, { useState } from "react";

const BlogComment = ({
  className = "",
  commentCount = "03",
  comments = [
    {
      id: 1,
      name: "Daniel Adam",
      date: "14 Jun, 2023",
      text: "Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.",
      avatar: "assets/img/blog/comment-author-1.jpg",
      replies: [
        {
          id: 2,
          name: "Zenelia Lozhe",
          date: "15 Jun, 2023",
          text: "Collaboratively empower multifunctional e-commerce for prospective application mlessly productivate",
          avatar: "assets/img/blog/comment-author-2.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Jhon Smith",
      date: "16 Jun, 2023",
      text: "Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.",
      avatar: "assets/img/blog/comment-author-3.jpg",
    },
  ],
  showCommentForm = true,
  formTitle = "Leave a Comment",
  formText = "Your email address will not be published. Required fields are marked *",
  buttonText = "Post Comment",
  onReply = (commentId) => {},
  onSubmit = (formData) => {},
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      website: "",
      comment: "",
    });
  };

  const CommentItem = ({ comment, isReply = false }) => (
    <li className={`ot-comment-item ${isReply ? "" : ""}`}>
      <div className="ot-post-comment">
        <div className="comment-avater">
          <img src={comment.avatar} alt={comment.name} />
        </div>
        <div className="comment-content">
          <span className="commented-on">{comment.date}</span>
          <h3 className="name">{comment.name}</h3>
          <p className="text">{comment.text}</p>
          <div className="reply_and_edit">
            <button
              type="button"
              className="reply-btn"
              onClick={(e) => {
                e.preventDefault();
                onReply(comment.id);
              }}
            >
              <i className="far fa-reply"></i>Reply
            </button>
          </div>
        </div>
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <ul className="children">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply={true} />
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <>
      {/* Comments Section */}
      <div className={`ot-comments-wrap ${className}`}>
        <h2 className="blog-inner-title h4">Comments ({commentCount})</h2>
        <ul className="comment-list">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>

      {/* Comment Form Section */}
      {showCommentForm && (
        <div className={`ot-comment-form ${className}`}>
          <div className="form-title">
            <h3 className="blog-inner-title h4 mb-2">{formTitle}</h3>
            <p className="form-text">{formText}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  className="form-control"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <i className="far fa-user"></i>
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  className="form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <i className="far fa-envelope"></i>
              </div>
              <div className="col-12 form-group">
                <input
                  type="url"
                  name="website"
                  placeholder="Website"
                  className="form-control"
                  value={formData.website}
                  onChange={handleInputChange}
                />
                <i className="far fa-globe"></i>
              </div>
              <div className="col-12 form-group">
                <textarea
                  name="comment"
                  placeholder="Write a Comment*"
                  className="form-control"
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <i className="far fa-pencil"></i>
              </div>
              <div className="col-12 form-group mb-0">
                <button type="submit" className="ot-btn">
                  {buttonText}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default BlogComment;
