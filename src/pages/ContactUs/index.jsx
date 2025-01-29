import React, { useState } from "react";
import { useNav } from "../../hooks/useNav";
import Reveal from "../../components/Reveal";
import { MdSend } from "react-icons/md";
import CommonHeader from "../../components/CommonHeader";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const contactRef = useNav("Contact");

  const [loading, setLoading] = useState(false);
  const socialsData = [
    {
      title: "Call me",
      link: "tel:+1647-865-9267",
      linkText: "+1 (647) 865-9267",
      icon: <IoIosCall size={22} />,
    },
    {
      title: "Email me",
      link: "mailto:vkushal28.ca@gmail.com",
      linkText: "vkushal28.ca@gmail.com",
      icon: <FaEnvelope size={22} />,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/kushal-vala/",
      linkText: "linkedin.com/in/kushal-vala/",
      icon: <FaLinkedin size={22} />,
    },
    {
      title: "Github",
      link: "https://github.com/vkushal-28",
      linkText: "github.com/vkushal-28",
      icon: <FaGithub size={22} />,
    },
  ];

  const SocialsComponent = ({ data }) => {
    return (
      <div className="flex gap-4 items-center mb-5">
        <div className="p-[2px] w-12 h-12  bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow group  ">
          <div className="w-[44px] h-[44px]  rounded-full overflow-hidden shadow-md flex justify-center items-center bg-indigo-950/80 ">
            <div className="p-0"> {data.icon}</div>
          </div>
        </div>
        <div>
          <p className=" font-medium text-white ">{data.title}</p>
          <a
            href={data.link && data.link}
            target="_blank"
            className="text-gray-400 hover:text-gray-300">
            {data.linkText}
          </a>
        </div>
      </div>
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setLoading(true);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((res) => res.json())
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.success("Something went wrong, please try again later!");
      });

    if (res.success) {
      toast.success(res.message);
      setLoading(false);
    }
  };

  return (
    <div
      className=" min-h-[100vh]  bg-blLight"
      style={{ height: "fit-content" }}
      ref={contactRef}
      id="contactSection">
      <Toaster />
      <div className="  bg-indigo-400 rounded-tl-[5%]  md:rounded-tl-[9%] rounded-br-[10%] md:rounded-br-[10%]">
        <div className="min-h-[100vh]  bg-pink-500 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9.9%] md:rounded-br-[9%] ">
          <div className="min-h-[100vh]   bg-bl py-20 md:py-32 text-center rounded-tl-[5%]  md:rounded-tl-[10%] rounded-br-[9%] md:rounded-br-[10%] flex items-center">
            <div className="container mx-auto  ">
              <CommonHeader
                title1={"Get in "}
                title2={"Touch!"}
                description={
                  "I’m always open to discussing exciting projects, potential collaborations, or even just sharing ideas. Whether you have a technical challenge that needs solving, are looking for a developer to bring your vision to life, or want to talk about the latest in web development trends—I'd love to hear from you!"
                }
              />
              <Reveal direction="up" delay={0.2} className="w-full h-full ">
                <div className="container mx-auto max-lg:flex-col-reverse flex">
                  {/* Left Section */}
                  <div className="lg:w-1/2 flex flex-col justify-between text-left py-6 max-md:pt-0">
                    <>
                      {socialsData.map((social, i) => (
                        <SocialsComponent data={social} key={i} />
                      ))}

                      {/* <a
                      href="https://www.linkedin.com/in/your-linkedin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center mb-4 text-white ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 016 6v8h-4v-8a2 2 0 00-4 0v8h-4v-8a6 6 0 016-6zM2 9h4v12H2zM4 0C2.4 0 1 1.4 1 3s1.4 3 3 3 3-1.4 3-3S5.6 0 4 0z" />
                      </svg>
                      LinkedIn
                    </a> */}
                    </>
                  </div>

                  {/* Right Section */}
                  <div className="lg:w-1/2 py-0 max-md:pt-0 max-md:pb-5">
                    <form className="space-y-6" onSubmit={onSubmit}>
                      <input
                        type="hidden"
                        name="subject"
                        value="✅ Greetings Kushal!, You have a new inquiry on your portfolio"
                      />
                      <input
                        type="hidden"
                        name="from_name"
                        value="Portfolio Notification!"
                      />

                      <input
                        type="text"
                        name="fullname"
                        required
                        className="mt-1 block w-full px-4 py-2 bg-blLight border border-indigo-500  shadow-md focus:shadow-indigo-500 rounded-lg transition-all duration-300 ease-in-out outline-none"
                        placeholder="Your full name"
                      />

                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 block w-full px-4 py-2 bg-blLight border border-indigo-500  shadow-md focus:shadow-indigo-500 rounded-lg transition-all duration-300 ease-in-out outline-none"
                        placeholder="Your email address"
                      />

                      <textarea
                        name="message"
                        rows="5"
                        required
                        className="mt-1 block w-full px-4 py-2 bg-blLight border border-indigo-500  shadow-md focus:shadow-indigo-500 rounded-lg transition-all duration-300 ease-in-out outline-none"
                        placeholder="Your message"
                      />

                      <button
                        type="submit"
                        className={`relative inline-flex  w-full items-center justify-center mt-4 py-2 mb-1 me-1 overflow-hidden text-sm  text-white rounded-lg   bg-gradient-to-r   from-indigo-600 via-purple-600 to-pink-600 ${
                          !loading && "gap-2"
                        }`}>
                        {loading ? (
                          <>
                            <svg
                              aria-hidden="true"
                              role="status"
                              class="inline w-4 h-4 me-3 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                            Please wait...
                          </>
                        ) : (
                          <>
                            Send <MdSend />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
