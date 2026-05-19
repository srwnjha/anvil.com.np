import React from "react";

const FaqSecThree = ({ className }) => {
    const faqData = [
        {
            question: "Why do I need cybertronixity services?",
            answer: "We specialize in a wide range of software development services, including custom software development.",
        },
        {
            question: "How does Tronix's cybertronixity services work?",
            answer: "We specialize in a wide range of software development services, including custom software development.",
        },
        {
            question: "What is tronixity consulting and compliance?",
            answer: "We specialize in a wide range of software development services, including custom software development.",
        },
        {
            question: "How does incident response work?",
            answer: "We specialize in a wide range of software development services, including custom software development.",
        },
        {
            question: "What is threat detection and response?",
            answer: "We specialize in a wide range of software development services, including custom software development.",
        },
    ];

    return (
        <div className={className} data-bg-src="assets/img/hero/hero-bg1-1.png">
            <div
                className="shape-mockup bg-gradient-shape1 faq-bg-gradient1"
                data-top="20%"
                data-right="-3%"
                data-left="auto"
            />
            <div className="container">
                <div className="row gx-60 gy-40 justify-content-center align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="title-area">
                            <span className="sub-title">
                                Frequently Asked Questions
                            </span>
                            <h2 className="sec-title">
                                Quick Answers to Your Cyber Tronixity Concerns
                            </h2>
                        </div>
                        <div className="faq-thumb1">
                            <img src="assets/img/normal/faq1-1.jpg" alt="FAQ" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion" id="faqAccordion">
                            {faqData.map((faq, index) => {
                                const isFirst = index === 0;
                                const collapseClass = isFirst ? "" : "collapsed";
                                const showClass = isFirst ? "show" : "";
                                const ariaExpanded = isFirst ? "true" : "false";

                                return (
                                    <div
                                        className="accordion-card style2"
                                       
                                        key={index}
                                    >
                                        <div
                                            className="accordion-header"
                                            id={`collapse-item-${index + 1}`}
                                        >
                                            <button
                                                className={`accordion-button ${collapseClass}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse-${index + 1}`}
                                                aria-expanded={ariaExpanded}
                                                aria-controls={`collapse-${index + 1}`}
                                            >
                                                {faq.question}
                                            </button>
                                        </div>
                                        <div
                                            id={`collapse-${index + 1}`}
                                            className={`accordion-collapse collapse ${showClass}`}
                                            aria-labelledby={`collapse-item-${index + 1}`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                <p className="faq-text">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSecThree;
