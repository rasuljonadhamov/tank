// import { useState } from "react";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import Button from "./Button";

// const Header = () => {
//   const navigation = [
//     { href: "/", label: "HOME" },
//     { href: "/headphones", label: "HEADPHONES" },
//     { href: "/speakers", label: "SPEAKERS" },
//     { href: "/earphones", label: "EARPHONES" },
//   ];

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className=" bg-black">
//       <div className="lg:container mx-auto px-4 py-6 border-b border-opacity-20">
//         <div className="flex items-center justify-between">
//           <div className="flex-shrink-0 gap-2">
//             <Link href="/" className="cursor-pointer flex gap-9">
//               <div className="lg:hidden ">
//                 <button
//                   onClick={toggleMenu}
//                   className="text-white focus:outline-none"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <path
//                       d="M4 6H20M4 12H20M4 18H20"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <img
//                 src={"/svg/logo.svg"}
//                 alt="Your Logo"
//                 width={54}
//                 height={69}
//               />
//             </Link>
//           </div>
//           <nav className="hidden lg:flex space-x-9 text-white text-sm hover:text-whiteSecondary">
//             {navigation.map((navItem) => (
//               <Link
//                 key={navItem.href}
//                 href={navItem.href}
//                 className="text-white text-sm hover:text-whiteSecondary"
//               >
//                 {navItem.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="relative">
//             <Link className="text-gray-700 hover:text-gray-900" href="/cart">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="20"
//                 viewBox="0 0 24 20"
//                 fill="none"
//               >
//                 <path
//                   d="M8.01883 13.1946H8.01776C7.64161 13.1955 7.33595 13.491 7.33595 13.8542C7.33595 14.2179 7.64268 14.5139 8.01954 14.5139H20.4154C20.793 14.5139 21.099 14.8092 21.099 15.1736C21.099 15.538 20.793 15.8333 20.4154 15.8333H19.25H9.25H8.01954C6.88876 15.8333 5.96876 14.9455 5.96876 13.8542C5.96876 13.0421 6.47843 12.343 7.20493 12.0382L4.73686 1.31944H1.18359C0.806016 1.31944 0.5 1.02412 0.5 0.659722C0.5 0.295329 0.806016 0 1.18359 0H5.28516C5.6056 0 5.88295 0.214753 5.95256 0.516611L6.44122 2.63889H23.1498C23.3643 2.63889 23.5663 2.73613 23.6956 2.9014C23.8246 3.06668 23.8659 3.28074 23.807 3.47986L21.0726 12.716C20.9888 12.9991 20.7205 13.1944 20.4154 13.1944H8.0215L8.01883 13.1946ZM9.25 15.8333C10.3987 15.8333 11.3333 16.7679 11.3333 17.9167C11.3333 19.0654 10.3987 20 9.25 20C8.10127 20 7.16667 19.0654 7.16667 17.9167C7.16667 16.7679 8.10127 15.8333 9.25 15.8333ZM19.25 15.8333C20.3987 15.8333 21.3333 16.7679 21.3333 17.9167C21.3333 19.0654 20.3987 20 19.25 20C18.1013 20 17.1667 19.0654 17.1667 17.9167C17.1667 16.7679 18.1013 15.8333 19.25 15.8333ZM19.8997 11.875L22.2435 3.95833H6.74492L8.56784 11.875H19.8997ZM9.94444 17.9167C9.94444 17.5338 9.63285 17.2222 9.25 17.2222C8.86715 17.2222 8.55556 17.5338 8.55556 17.9167C8.55556 18.2995 8.86715 18.6111 9.25 18.6111C9.63285 18.6111 9.94444 18.2995 9.94444 17.9167ZM19.25 17.2222C19.6328 17.2222 19.9444 17.5338 19.9444 17.9167C19.9444 18.2995 19.6328 18.6111 19.25 18.6111C18.8672 18.6111 18.5556 18.2995 18.5556 17.9167C18.5556 17.5338 18.8672 17.2222 19.25 17.2222Z"
//                   fill="white"
//                 />
//               </svg>
//             </Link>
//             {/* <div className="text-white absolute bg-primary rounded-full px-[3px] -right-2 -top-4">
//               {addedProducts.length}
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <nav className="bg-black text-white p-4 ">
      <div className="text-xl font-bold flex gap-8">
        <img src={"/svg/logo.svg"} alt="Your Logo" width={54} height={69} />
        <div className="w-full">
          <div className="flex justify-between">
            <p className="text-gray">
              Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
            </p>
            <div className="left flex gap-10">
              <p className="flex gap-2 font-medium">
                <img src="/public/svg/settings.svg" alt="" /> Записаться на
                сервис
              </p>
              <p className="flex gap-2 font-medium">
                <img src="/public/svg/speed.svg" alt="" /> Тест-драйв
              </p>
            </div>
          </div>
          <div className="text-bold py-3 justify-between flex gap-3">
            <div className="flex gap-5">
              <h1>АВТОРУСЬ TANK</h1>
              <hr className="h-7 rotate-90 w-7" />
              <span className=" pl-4 ">Официальный дилер</span>
            </div>
            <div className="flex gap-10">
              <div className="wrapper">
                <span className="block text-xl font-medium">
                  +7 (999) 999-99-99
                </span>
                <span className="text-gray text-sm flex float-end gap-2">
                  <img src="/public/svg/dot.svg" alt="" /> Мы на связи
                </span>
              </div>
              <Button text={"Заказать звонок"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
