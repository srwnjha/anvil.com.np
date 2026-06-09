// import React from "react";

// const Clients = ({ className = "" }) => {
//   const clients = [
//     "assets/img/anvil/clients/1.png",
//     "assets/img/anvil/clients/2.png",
//     "assets/img/anvil/clients/3.png",
//     "assets/img/anvil/clients/4.png",
//     "assets/img/anvil/clients/5.png",
//     "assets/img/anvil/clients/6.png",
//     "assets/img/anvil/clients/7.png",
//     "assets/img/anvil/clients/8.png",
//     "assets/img/anvil/clients/9.png",
//     "assets/img/anvil/clients/10.png",
//     "assets/img/anvil/clients/11.jpeg",
//   ];

//   return (
//     <section className={`clients-section ${className}`}>
//       <div className="">
//         {/* Marquee Slider - Right to Left */}
//         <div className="marquee-wrapper overflow-hidden">
//           <div className="marquee-content">
//             {clients.map((logo, index) => (
//               <div className="marquee-item" key={index}>
//                 <img
//                   src={`${process.env.PUBLIC_URL}/${logo}`}
//                   alt={`Client ${index + 1}`}
//                 />
//               </div>
//             ))}
//             {/* Duplicate for seamless loop */}
//             {clients.map((logo, index) => (
//               <div className="marquee-item" key={`dup-${index}`}>
//                 <img
//                   src={`${process.env.PUBLIC_URL}/${logo}`}
//                   alt={`Client ${index + 1}`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;

import React from "react";

const Clients = ({ className = "" }) => {
  const clients = [
    "assets/img/anvil/clients/1.png",
    "assets/img/anvil/clients/2.png",
    "assets/img/anvil/clients/3.png",
    "assets/img/anvil/clients/4.png",
    "assets/img/anvil/clients/5.png",
    "assets/img/anvil/clients/6.png",
    "assets/img/anvil/clients/7.png",
    "assets/img/anvil/clients/8.png",
    "assets/img/anvil/clients/9a.png",
    "assets/img/anvil/clients/10.png",
    "assets/img/anvil/clients/11.jpeg",
  ];

  const biggerLogos = ["3.png", "4.png", "5.png", "7.png", "7.png"];

  return (
    <section className={`clients-section ${className}`}>
      <div className="">
        {/* Marquee Slider - Right to Left */}
        <div className="marquee-wrapper overflow-hidden position-relative">
          {/* Left Fade */}
          <div className="marquee-fade-left"></div>
          <div className="marquee-content">
            {clients.map((logo, index) => {
              const isBigger = biggerLogos.some((big) => logo.includes(big));
              return (
                <div
                  className="marquee-item"
                  key={index}
                  style={isBigger ? { transform: "scale(1.20)" } : {}}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/${logo}`}
                    alt={`Client ${index + 1}`}
                    style={
                      isBigger ? { maxHeight: "50px" } : { maxHeight: "50px" }
                    }
                  />
                </div>
              );
            })}

            {/* Duplicate for seamless loop */}
            {clients.map((logo, index) => {
              const isBigger = biggerLogos.some((big) => logo.includes(big));
              return (
                <div
                  className="marquee-item"
                  key={`dup-${index}`}
                  style={isBigger ? { transform: "scale(1.20)" } : {}}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/${logo}`}
                    alt={`Client ${index + 1}`}
                    style={
                      isBigger ? { maxHeight: "50px" } : { maxHeight: "50px" }
                    }
                  />
                </div>
              );
            })}
          </div>
          {/* Right Fade */}
          <div className="marquee-fade-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
