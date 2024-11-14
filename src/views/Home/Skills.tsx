
import tailwind from "@/assets/skillicon/tailwind.svg";
import react from "@/assets/skillicon/react.webp";
import expressjs from "@/assets/skillicon/expressjs.webp";

import Image from "next/image";

const Skills = () => {
   return (
      <div>
         <div className="main-container py-16 ">
            <div className="mb-6 flex items-end gap-4">
               <div className=""> <p className="text-[#545454] text-[64px] leading-[76.8px] font-normal">Tools</p>
                  <h2 className="text-[64px] leading-[76.8px] font-normal ">
                     & Skills
                  </h2></div>
               <span className="pb-5"><svg width="135" height="2" viewBox="0 0 135 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H135" stroke="black" />
               </svg>
               </span>
            </div>

            <div className="grid grid-cols-2  overflow-hidden md:grid-cols-4 gap-9 lg:grid-cols-5">

               <div
                  data-aos="fade-right"
                  className="flex flex-col w-full  bg-white py-5 px-3 rounded-md  duration-500 transform cursor-pointer items-center">
                  <div className="mt-auto mb-2">
                     <svg
                        width={50}
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        id="html5">
                        <path
                           fill="#6563ff"
                           d="M3.18249,2,4.78741,20.00071,11.98921,22l7.22171-2.00206L20.81751,2ZM17.32508,7.88728H8.87682L9.07861,10.148h8.04556l-.6059,6.778L12,18.17825v.0004l-.01015.00276L7.46747,16.92607l-.30926-3.46645h2.2162l.15718,1.76075,2.45873.66389.002-.00053v-.00015l2.46231-.6646.25632-2.86324H7.05953L6.46408,5.67957H17.52272Z"></path>
                        <path
                           fill="#d8d8ff"
                           d="M17.32508,7.88728H8.87682L9.07861,10.148h8.04556l-.6059,6.778L12,18.17825v.0004l-.01015.00276L7.46747,16.92607l-.30926-3.46645h2.2162l.15718,1.76075,2.45873.66389.002-.00053v-.00015l2.46231-.6646.25632-2.86324H7.05953L6.46408,5.67957H17.52272Z"></path>
                     </svg>
                  </div>
                  <h1 className="opacity-80 font-medium text-base mt-auto">HTML</h1>
               </div>
               <div
                  data-aos="fade-right"
                  className="flex flex-col  py-5 px-3 rounded-md  duration-500 transform cursor-pointer items-center">
                  <div className="mt-auto mb-2">
                     <svg
                        width={40}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="css">
                        <path
                           fill="#2196F3"
                           d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0z"></path>
                        <path
                           fill="#FAFAFA"
                           d="m12.274 4.709-.161 1.809-.486 5.423L8 12.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132 1.471 1.971.532.001-.001 1.974-.532.269-2.451-6.208.017-.176-1.676 6.533-.077.132-1.794-6.84.019-.115-1.669h8.864z"></path>
                     </svg>
                  </div>
                  <h1 className="opacity-80 font-medium text-base mt-auto">CSS</h1>
               </div>
               <div
                  data-aos="fade-zoom"
                  className="flex flex-col  py-5 px-3 rounded-md  duration-500 transform cursor-pointer items-center">
                  <div className="mt-auto mb-2">
                     <Image
                        src={tailwind}
                        width={50}
                        alt="tailwind"
                     />
                  </div>
                  <h1 className="opacity-80 font-medium text-base mt-auto">Tailwind CSS</h1>
               </div>
               <div
                  data-aos="fade-left"
                  className="flex flex-col  py-5 px-3 rounded-md  duration-500 transform cursor-pointer items-center">
                  <div className="mt-auto mb-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"

                        viewBox="0 0 32 32"
                        id="bootstrap">
                        <path
                           fill="#444"
                           d="M8.171 4.999a4.435 4.435 0 0 0-1.716.675 4.553 4.553 0 0 0-.95.901c-.26.343-.577 1.003-.702 1.456l-.106.377v15.727l.106.377c.124.453.441 1.113.702 1.456a4.305 4.305 0 0 0 2.003 1.426c.626.2.313.192 8.486.192 8.177 0 7.864.008 8.486-.196a4.263 4.263 0 0 0 2.003-1.422c.26-.347.581-1.007.705-1.456l.102-.377V8.408l-.106-.377c-.124-.452-.441-1.113-.701-1.456a4.552 4.552 0 0 0-.95-.901 4.978 4.978 0 0 0-1.305-.596l-.37-.102-7.732-.004c-4.251-.004-7.834.008-7.954.026zm10.538 4.16c1.192.196 2.006.588 2.538 1.222.226.268.49.8.6 1.196.068.26.079.407.083 1.056.004.683-.004.784-.083 1.052-.23.8-.732 1.414-1.543 1.89l-.279.162.2.064c.305.102.815.366 1.075.562.649.49 1.101 1.252 1.282 2.161.087.453.087 1.422-.004 1.837-.358 1.633-1.622 2.768-3.523 3.149-.728.147-.916.155-4.824.155h-3.82v-14.6l3.953.015c3.538.011 3.99.019 4.345.079zm-5.054 4.118v1.72l1.822-.015c1.709-.019 1.837-.023 2.112-.098.86-.234 1.233-.728 1.233-1.633 0-.694-.245-1.143-.777-1.407-.471-.234-.981-.283-2.983-.287h-1.407v1.72zm0 5.899v2.003l1.991-.015c2.237-.015 2.312-.023 2.863-.29.634-.309.916-.815.916-1.641 0-1.063-.422-1.652-1.395-1.946-.275-.087-.328-.087-2.327-.102l-2.048-.011v2.003z"></path>
                     </svg>
                  </div>
                  <h1 className="opacity-80 font-medium text-base mt-auto">Bootstrap</h1>
               </div>
               <div
                  data-aos="fade-left"
                  className="flex flex-col border  py-5 px-3 rounded-md  duration-500 transform cursor-pointer items-center">
                  <div className="mt-auto mb-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="javascript"
                        width={40}>
                        <path
                           fill="#F0D91F"
                           d="M0 0h24v24H0z"></path>
                        <path d="M19.784 18.629c-.255-.961-2.251-1.185-3.616-2.205-1.38-.93-1.709-3.18-.569-4.471.39-.48 1.034-.84 1.71-1.005l.705-.089c1.365-.031 2.204.329 2.834 1.034.182.179.316.36.586.78-.721.449-.721.449-1.755 1.125-.226-.48-.586-.78-.976-.9-.6-.18-1.365.014-1.515.66-.059.195-.045.375.046.705.243.555 1.061.795 1.797 1.14 2.115.858 2.828 1.778 3.003 2.873l-.046-.067c.166.945-.045 1.56-.074 1.65-.781 2.67-5.131 2.76-6.871 1.004-.36-.42-.6-.629-.81-1.109l1.83-1.051c.495.75.944 1.156 1.755 1.336 1.096.135 2.206-.24 1.966-1.41zm-11.651.347c.017 0 .064.091.127.196.233.389.434.659.83.855.386.121 1.236.209 1.566-.48.201-.348.138-1.479.138-2.711 0-1.941.009-3.867.009-5.805h2.248l-.004.056c0 2.07.012 4.125 0 6.179.005 1.276.113 2.416-.397 3.346-.353.72-1.028 1.185-1.811 1.411-1.203.27-2.352.105-3.207-.405-.574-.345-1.019-.887-1.324-1.517l1.825-1.125z"></path>
                     </svg>
                  </div>
                  <h1 className="opacity-80 font-medium text-base mt-auto">JavaScript</h1>
               </div>
               <div
                  data-aos="fade-right"
                  className="flex flex-col  py-5 border px-3 rounded-md  duration-500 transform cursor-pointer items-center">
                  <div className="mt-auto mb-2">
                     <Image
                        src={react}
                        alt=""
                        className="animate-pulse"
                        width={70}
                     />
                  </div>
                  <h1 className="opacity-80 font-medium text-base mt-auto">React JS</h1>
               </div>
               <div
                  data-aos="fade-right"
                  className="flex flex-col  py-5 px-3 rounded-md  duration-500 transform cursor-pointer items-center">
                  <div className="mt-auto mb-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="firebase"
                        width={50}>
                        <path
                           fill="#FFA000"
                           d="m14.714 8.669-2.4 2.235-2.228-4.496 1.151-2.585c.291-.516.767-.522 1.058 0l2.419 4.846z"></path>
                        <path
                           fill="#F57F17"
                           d="m12.314 10.903-8.979 8.351 6.751-12.846 2.228 4.495z"></path>
                        <path
                           fill="#FFCA28"
                           d="M17.346 5.251c.43-.41.873-.271.985.31l2.334 13.58-7.742 4.648c-.272.152-.992.211-.992.211s-.655-.08-.906-.218l-7.689-4.528 14.01-14.003z"></path>
                        <path
                           fill="#FFA000"
                           d="m10.086 6.408-6.75 12.846L6.344.477c.113-.582.443-.641.74-.126l3.002 6.057z"></path>
                     </svg>
                  </div>
                  <h1 className="opacity-80 font-medium text-base mt-auto">Firebase</h1>
               </div>
               <div
                  data-aos="fade-zoom"
                  className="flex flex-col  py-5 px-3 rounded-md  duration-500 transform cursor-pointer items-center">
                  <div className="mt-auto mb-2">
                     <Image
                        src={expressjs}
                        alt=""
                        width={50}
                     />
                  </div>
                  <h1 className="opacity-80 font-medium text-base mt-auto">Express Js</h1>
               </div>
               <div
                  data-aos="fade-left"
                  className="flex flex-col  py-5 px-3 rounded-md  duration-500 transform cursor-pointer items-center">
                  <div className="mt-auto mb-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="mongodb"
                        width={50}>
                        <path
                           fill="#FFF"
                           d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"></path>
                        <path
                           fill="#A6A385"
                           d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"></path>
                        <path
                           fill="#FFF"
                           d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"></path>
                        <path
                           fill="#499D4A"
                           d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"></path>
                        <path
                           fill="#FFF"
                           d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"></path>
                        <path
                           fill="#58AA50"
                           d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"></path>
                     </svg>
                  </div>
                  <h1 className="opacity-80 font-medium text-base mt-auto">MongoDB</h1>
               </div>
               <div
                  data-aos="fade-left"
                  className="flex flex-col  py-5 px-3 rounded-md  duration-500 transform cursor-pointer items-center">
                  <div className="mt-auto mb-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="90"
                        preserveAspectRatio="xMidYMid"
                        viewBox="0 0 256 244"
                        id="redux">
                        <path
                           fill="#764ABC"
                           d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"></path>
                     </svg>
                  </div>
                  <h1 className="opacity-80 font-medium text-base mt-auto">Redux</h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
