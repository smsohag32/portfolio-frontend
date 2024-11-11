import React from 'react';

const AboutSection = () => {
   return (
      <div>
         <div className="default-container my-16 overflow-hidden flex flex-col md:flex-row gap-9">
            <div className=" w-full flex flex-col gap-2">
               <p className="text-[16px]  leading-7">
                  My name is Sohag Sheik, and I am from Gopalgonj, Dhaka, Bangladesh. I am a
                  passionate and dedicated full-stack developer with expertise in various
                  technologies, especially ReactJS, Express.js, MongoDB, Node.js, Firebase, and
                  JavaScript. I have acquired a comprehensive understanding of these technologies
                  through my completion of the web development course. <br />
                  <br />I have completed various projects, including building many dynamic
                  full-stack web applications. These projects have not only honed my technical
                  skills but also underscored the importance of problem-solving, creativity. <br />
                  <br />I thrive in environments where innovation and continuous learning are
                  encouraged, and I am always eager to explore new technologies and frameworks. My
                  commitment to staying at the forefront of industry trends drives me to actively
                  follow industry blogs, read the latest technology documentation, and participate
                  in professional communities. This proactive approach ensures that I remain
                  well-informed about emerging technologies and best practices, enabling me to
                  deliver cutting-edge solutions to complex challenges.
               </p>
            </div>
            <div className="w-full  flex items-center overflow-x-hidden justify-center">
               <div
                  data-aos="fade-left"
                  className="p-2 ring-4 flex shadow-lg items-center justify-center ring-violet-800 rounded-full overflow-x-hidden">
                  <div></div>
               </div>
            </div>
         </div>
         <div className="default-container  text-[16px] font-[500]">
            <p>
               {" "}
               In addition to my technical expertise, I bring a strong sense of dedication and a
               proactive attitude to every project I undertake. I believe that the key to success in
               any field lies in a combination of passion, persistence, and a willingness to embrace
               new ideas. <br />
               <br />
               Outside of my professional pursuits, I have a zest for adventure and enjoy exploring
               new places and experiences. This adventurous spirit translates into my work, where I
               am always ready to tackle new challenges and push the boundaries of what is possible.{" "}
               <br />
               <br />
               With a solid foundation in web development and a continuous hunger for knowledge, I
               am poised to contribute effectively to any team and drive impactful projects. I look
               forward to the opportunities and challenges that lie ahead, and I am excited to be a
               part of the ever-evolving tech landscape.
            </p>

         </div>
      </div>
   );
};

export default AboutSection;
