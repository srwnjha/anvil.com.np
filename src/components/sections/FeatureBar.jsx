// import React from "react";

// const FeatureBar = () => {
//   const features = [
//     {
//       icon: "fas fa-shield-alt",
//       title: "Secure Systems",
//       desc: "Advanced security for a safer digital future.",
//     },
//     {
//       icon: "fas fa-layer-group",
//       title: "Reliable Infrastructure",
//       desc: "High-performance systems built for reliability.",
//     },
//     {
//       icon: "fas fa-chart-line",
//       title: "Business Growth",
//       desc: "Technology solutions that drive your growth.",
//     },
//     {
//       icon: "fas fa-headset",
//       title: "24/7 Support",
//       desc: "Always available to keep your business running.",
//     },
//   ];

//   return (
//     <div
//       className="feature-bar py-4 bg-white shadow-sm"
//       style={{ position: "absolute" }}
//     >
//       <div className="container">
//         <div className="row g-4 text-left">
//           {features.map((feature, index) => (
//             <div key={index} className="col-lg-3 col-md-6">
//               <div className="feature-item d-flex align-items-start gap-4">
//                 <div className="feature-icon mb-3">
//                   <i className={`${feature.icon} fa-3x text-primary`}></i>
//                 </div>
//                 <div className="text-left">
//                   <h5 className="fw-bold small mb-2">{feature.title}</h5>
//                   <p className="text-muted small mb-0">{feature.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureBar;
// import React from "react";

// const FeatureBar = () => {
//   const features = [
//     {
//       image: "/assets/img/hero/a.jpg",
//       title: "Secure Systems",
//       desc: "Advanced security for a safer digital future.",
//     },
//     {
//       image: "/assets/img/hero/b.jpg",
//       title: "Reliable Infrastructure",
//       desc: "High-performance systems built for reliability.",
//     },
//     {
//       image: "/assets/img/hero/c.jpg",
//       title: "Business Growth",
//       desc: "Technology solutions that drive your growth.",
//     },
//     {
//       image: "/assets/img/hero/d.jpg",
//       title: "24/7 Support",
//       desc: "Always available to keep your business running.",
//     },
//   ];

//   return (
//     <div className="feature-bar">
//       <div className="container">
//         <div className="row g-4">
//           {features.map((feature, index) => (
//             <React.Fragment key={index}>
//               <div key={index} className="col-lg-3 col-md-6">
//                 <div className="feature-item d-flex align-items-start gap-4">
//                   {/* <div className="feature-icon flex-shrink-0">
//                   <i className={`${feature.icon} fa-3x text-primary`}></i>
//                 </div> */}
//                   <div className="feature-icon flex-shrink-0">
//                     <img
//                       src={process.env.PUBLIC_URL + feature.image}
//                       alt={feature.title}
//                       className="feature-img"
//                     />
//                   </div>
//                   <div>
//                     <h5 className="fw-bold small mb-1">{feature.title}</h5>
//                     <p className="small mb-0">{feature.desc}</p>
//                   </div>
//                 </div>
//               </div>
//               {index < features.length - 1 && (
//                 <div className="col-auto d-none d-lg-block">
//                   <div className="feature-divider"></div>
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureBar;
import React from "react";

const FeatureBar = () => {
  const features = [
    {
      image: "/assets/img/hero/a.jpg",
      title: "Secure Systems",
      desc: "Advanced security for a safer digital future.",
    },
    {
      image: "/assets/img/hero/b.jpg",
      title: "Reliable Infrastructure",
      desc: "High-performance systems built for reliability.",
    },
    {
      image: "/assets/img/hero/c.jpg",
      title: "Business Growth",
      desc: "Technology solutions that drive your growth.",
    },
    {
      image: "/assets/img/hero/d.jpg",
      title: "24/7 Support",
      desc: "Always available to keep your business running.",
    },
  ];

  return (
    <div className="feature-bar">
      <div className="container">
        <div className="feature-row d-flex align-items-start justify-content-between">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="feature-item d-flex align-items-start gap-4">
                <div className="feature-icon flex-shrink-0">
                  <img
                    src={process.env.PUBLIC_URL + feature.image}
                    alt={feature.title}
                    className="feature-img"
                  />
                </div>
                <div>
                  <h5 className="fw-bold small mb-1">{feature.title}</h5>
                  <p className="text-muted small mb-0">{feature.desc}</p>
                </div>
              </div>

              {/* Vertical Divider */}
              {index < features.length - 1 && (
                <div className="feature-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
