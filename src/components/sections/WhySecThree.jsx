// import { useState } from "react";
// import FsLightbox from "fslightbox-react";

// const WhySecThree = ({ className = "" }) => {
//   const [toggler, setToggler] = useState(false);
//   return (
//     <div
//       className={`overflow-hidden ${className}`}
//       // data-bg-src="assets/img/bg/A.jpg"
//       style={{
//         backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg/A.jpg)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         position: "relative",
//         padding: "100px 0",
//       }}
//     >
//       {/* Dark Overlay - Reduced opacity for brighter image */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "rgba(0, 0, 0, 0.3)", // Reduced from 0.6 → 0.45
//           zIndex: 1,
//         }}
//       />
//       <div className="container pb-xxl-5">
//         <div className="row align-items-center">
//           <div className="col-lg-6 text-center text-lg-start">
//             <div className="pe-xxl-4">
//               <div className="title-area mb-37">
//                 <span className="sub-title text-white icon-white">
//                   <span className="text">Why Work With Us</span>
//                 </span>
//                 <h2 className="sec-title text-white">
//                   World's No.1 Technology Solution Provider.
//                 </h2>
//                 <p className="sec-text text-white">
//                   The goal of IT services is to provide efficient and effective
//                   technology solutions that help businesses achieve their
//                   objectives.
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 className="watch-btn popup-video"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setToggler(!toggler);
//                 }}
//               >
//                 <span className="play-btn style2">
//                   <i className="fas fa-play"></i>
//                 </span>
//                 <span className="text text-white">Video Showcase</span>
//               </button>

//               <FsLightbox
//                 toggler={toggler}
//                 sources={["https://www.youtube.com/watch?v=U6fC4Ij608A"]}
//               />
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="img-box5">
//               <img
//                 src="assets/img/anvil/whywork.png"
//                 alt="vector"
//                 style={{ width: "600px", height: "auto" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhySecThree;
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const WhySecThree = ({ className = "" }) => {
  const [toggler, setToggler] = useState(false);

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg/A.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "100px 0",
      }}
    >
      {/* Dark Overlay - Only for background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.35)",
          zIndex: 1,
        }}
      />

      <div
        className="container pb-xxl-5"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="pe-xxl-4">
              <div className="title-area mb-37">
                <span className="sub-title text-white icon-white">
                  <span className="text">Why Work With Us</span>
                </span>
                <h2 className="sec-title text-white">
                  World's No.1 Technology Solution Provider.
                </h2>
                <p className="sec-text text-white">
                  The goal of IT services is to provide efficient and effective
                  technology solutions that help businesses achieve their
                  objectives.
                </p>
              </div>

              <button
                type="button"
                className="watch-btn popup-video"
                onClick={(e) => {
                  e.preventDefault();
                  setToggler(!toggler);
                }}
              >
                <span className="play-btn style2">
                  <i className="fas fa-play"></i>
                </span>
                <span className="text text-white">Video Showcase</span>
              </button>

              <FsLightbox
                toggler={toggler}
                sources={["https://www.youtube.com/watch?v=U6fC4Ij608A"]}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="img-box5"
              style={{ position: "relative", zIndex: 3 }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/anvil/whywork.png`}
                alt="vector"
                style={{
                  width: "530px", // You can adjust size
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySecThree;
