// import React from "react";

// const Header = () => {
//   return (
//     <div className="header-main h-[830px] bg-[#EDE9DF] flex relative">
//       <div className="header-leaft h-[100%] w-[50%] flex items-center">
//         <div className="inner-header-second h-[50%] w-[12%] mb-20  ">
//           <img src="src/assets/black-jamun 1.png" alt="" />
//         </div>
//         <div className="iiner-header-left-first h-[70%] w-[80%] ml-14 ">
//           <h1 className="text-6xl">
//             EAT <br />
//             HEALTHY <br />
//             BE HEALTHY
//           </h1>
//           <p className="text-base mt-20">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
//             magnam magni commodi cumque sint aut sapiente nulla explicabo quidem
//             eaque ex, quaerat veritatis animi! Natus, doloribus rem. Sunt, id
//             ratione?
//           </p>
//           <button className="h-[41px] w-[201] bg-[#F47820] p-7  rounded-lg flex justify-center items-center mt-14">Order now</button>
//         </div>
//       </div>
//       <div className="header-right h-[100%] w-[50%]  flex justify-center items-center ">
//         <div className="h-[250px] w-[250px]  absolute top-12 left-[760px]">
//           <img className="h-[350px] w-[350px]" src="src/assets/banner-bg-3 1.png" alt=""  />
//         </div>
//         <div className="h-[80%] w-[100%]  ">
//           <img src="src/assets/home1-img 1.png" alt="logo"  className="h-[700px] mr-80"/>
//         </div>
//         <div className="h-[100px] w-[100px]   absolute bottom-[130px] right-[130px]">
//           <img className="h-[100%] w-[100%]" src="src/assets/tamato 1.png" alt=""  />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-left">
        <div className="inner-header-second">
          <img src="src/assets/black-jamun 1.png" alt="" />
        </div>
        <div className="inner-header-left-first">
          <h1 className="header-title">
            EAT <br />
            HEALTHY <br />
            BE HEALTHY
          </h1>
          <p className="header-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            magnam magni commodi cumque sint aut sapiente nulla explicabo quidem
            eaque ex, quaerat veritatis animi! Natus, doloribus rem. Sunt, id
            ratione?
          </p>
          <div className="Hanmadeextra">
          <h1>Hanmade ,whith <br />an Extra pinch Of <br /> <span>LOVE</span> </h1>
        </div>
          <button className="order-button">Order now</button>
        </div>
      </div>
      <div className="header-right">
        <div className="background-image">
          <img src="src/assets/banner-bg-3 1.png" alt="" />
        </div>
        <div className="main-image">
          <img src="src/assets/home1-img 1.png" alt="logo" />
        </div>
        <div className="tomato-image">
          <img src="src/assets/tamato 1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
