import axios from "axios";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import chatbot from "../../assets/images/AI_chatbot.png";
import overview from "../../assets/images/Overview.png";
import quiz from "../../assets/images/Quiz_Generate.png";
import learning from "../../assets/images/adaptive_learning-removebg-preview.png";
import logo from "../../assets/images/logo.png";
import parents from "../../assets/images/parents.png";
import student from "../../assets/images/student.png";
import teacher from "../../assets/images/teacher.png";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LandingPage = () => {
  const token = localStorage.getItem("token");
  const navigateTo = useNavigate();
  const [logShowDropdown, setLogShowDropdown] = useState(false);
  const [signShowDropdown, setSignShowDropdown] = useState(false);
  const toggleLogDropdown = () => {
    setLogShowDropdown(!logShowDropdown);
  };
  const toggleSignDropdown = () => {
    setSignShowDropdown(!signShowDropdown);
  };
  const handleLogout = () => {
    axios
      .get("http://127.0.0.1:8000/api/logout")
      .then((result) => {
        console.log(result);
        localStorage.removeItem("token");
        navigateTo("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <section className="bg-whitesmoke-200">
        <header className="max-w-[90rem] mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div>
              <a
                href=""
                className="text-2xl font-semibold flex items-center space-x-3 no-underline"
              >
                <img
                  src={logo}
                  alt=""
                  className="w-10 inline-block items-center"
                />{" "}
                <span className="text-red no-underline text-3xl">
                  S<span className="text-[#263238]">chool-Sync</span>
                </span>
              </a>
            </div>
            {token ? (
              <>
                <div className="flex justify-end">
                  <span className="mr-2">Hello Buddy!</span>
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm"
                    onClick={handleLogout}
                  >
                    logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex gap-2">
                <div className="relative">
                  <button
                    className="text-black px-3 py-2 rounded-sm cursor-pointer flex gap-5 items-center border"
                    onClick={toggleLogDropdown}
                  >
                    Login
                    {!logShowDropdown ? <FaChevronDown /> : <FaChevronUp />}
                  </button>
                  {logShowDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Student Login
                      </Link>
                      <Link
                        to="/instructor-login"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Teacher Login
                      </Link>
                      <Link
                        to="/admin-login"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Admin Login
                      </Link>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    className="text-black px-3 py-2 rounded-sm cursor-pointer flex gap-5 items-center border"
                    onClick={toggleSignDropdown}
                  >
                    Sign up
                    {!signShowDropdown ? <FaChevronDown /> : <FaChevronUp />}
                  </button>
                  {signShowDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                      <Link
                        to="/signUp"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Student Sign Up
                      </Link>
                      <Link
                        to="/instructor-signUp"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Teacher Sign Up
                      </Link>
                      <Link
                        to="/admin-signUp"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Admin Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </nav>
        </header>
      </section>
      <section className="bg-[#FAFAFA]">
        <div className="col-span-4 text-center text-7xl text-bold italic text-[#FF4800] py-4">
          Overview
        </div>
        <div className="grid grid-cols-2 max-w-[90rem] mx-auto py-10 gap-32">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            transition={{ duration: 2, x: { duration: 1 } }}
            className="flex items-center justify-center text-4xl text-balance text-bold italic"
          >
            A holistic approach to enhance the learning experience by
            Cultivating Collaborative Pedagogy and Comprehensive Evaluation
            Framework
          </motion.div>
          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
          >
            <img src={overview} alt="" />
          </motion.div>
        </div>
      </section>
      <motion.section
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.6, opacity: 0 }}
        transition={{ duration: 1, x: { duration: 1 } }}
        className="grid grid-cols-3 max-w-5xl mx-auto py-10 gap-10 text-center text-xl"
      >
        <div className="col-span-4 text-center text-7xl text-bold italic">
          Our <span className="text-[#FF4800]">Audience</span>
        </div>
        <div className="shadow-xl rounded px-5 py-2 flex flex-col justify-between items-center">
          <div>Focus Learning Goal</div>
          <img src={student} alt="student" width={200} />
          <div className="text-center font-bold italic text-xl">Student</div>
        </div>
        <div className="shadow-2xl rounded px-5 py-2 flex flex-col justify-between items-center">
          <div>Active Online Communication</div>
          <img src={parents} alt="student" width={200} />
          <div className="text-center font-bold italic text-xl">Parents</div>
        </div>
        <div className="shadow-2xl rounded px-5 py-2 flex flex-col justify-between items-center">
          <div>Preparation for Global Society</div>
          <img src={teacher} alt="teacher" width={200} />
          <div className="text-center font-bold italic text-xl">Teacher</div>
        </div>
        {/* <div className="shadow-2xl rounded px-5 py-2 flex flex-col justify-between items-center">
          <div>Holistic Learing Inhancement Tools</div>
          <img src={admin} alt="admin" width={200} />
          <div className="text-center font-bold italic text-xl">Admin</div>
        </div> */}
      </motion.section>
      <section className="bg-slate-200">
        <div className="grid grid-cols-2 max-w-[90rem] mx-auto py-10 gap-x-32 gap-y-10">
          <div className="col-span-2 text-center text-7xl text-bold italic">
            Automatic <span className="text-[#FF4800]">Quiz</span> Generator
          </div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            transition={{ duration: 2, x: { duration: 1 } }}
          >
            <img src={quiz} alt="" />
          </motion.div>
          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
            className="flex items-center justify-center text-3xl text-balance text-bold italic text-gray-700"
          >
            Utilize machine learning algorithms to generate personalized quiz
            questions based on individual learning patterns and knowledge gaps.
          </motion.div>
        </div>
      </section>
      <section className="bg-[#FAFAFA]">
        <div className="grid grid-cols-2 max-w-[90rem] mx-auto py-10 gap-x-40 gap-y-20">
          <div className="col-span-2 text-center text-7xl text-bold italic">
            <span className="text-[#FF4800]">Adaptive</span> Learning Suggestion
          </div>

          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
            className="flex items-center justify-center text-4xl text-balance  text-bold italic "
          >
            Utilize real-time data insights to recommend customized learning
            paths, adjusting content difficulty and pacing to optimize
            individual progress and engagement.
          </motion.div>
          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
          >
            <img src={learning} alt="" width={450} height={450} />
          </motion.div>
        </div>
      </section>
      <section className="bg-slate-200">
        <div className="grid grid-cols-2 max-w-[90rem] mx-auto py-10 gap-x-32 gap-y-10">
          <div className="col-span-2 text-center text-7xl text-balance text-bold italic">
            {" "}
            <span className="text-[#FF4800]"> AI </span>Chatbot
          </div>
          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
          >
            <img src={chatbot} alt="" />
          </motion.div>
          <motion.div
            animate={{ x: -50, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 2, x: { duration: 1 } }}
            className="flex items-center justify-center text-4xl text-balance text-gray-700 text-bold italic"
          >
            AI chatbot interact with students question and provide instant
            answer to enhance students learning effeciency.
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;