
import Airbnb from "@/public/projects/Airbnb/Airbnb.png";
import AI_chatbot from "@/public/projects/AI_chatbot/ELP.png";
import ReactChatMain from "@/public/projects/main-project/react-chat.png";
import ReactTools from "@/public/projects/main-project/react-tools.png";
import FAS from "@/public/projects/FAS/lptk1.png";
import Travel from "@/public/projects/Travel/ino1.png";
import eCommerce from "@/public/projects/eCommerce/e-com.png";

export const projects = [
	{
		title: "Airbnb Application",
		desc: "This is a web application developed as an Airbnb clone, enabling users to book accommodations and manage listings.",
		year: "2024",
		tech: "React Js, Node Js, Express Js, MongoDB, TailwindCSS, JWT, Cloudinary, Google cloud",
		bg: Airbnb,
		slug: "Airbnb",
		category: 1,
	},
	{
		title: "AI Powered Multi PDF Chatbot",
		desc: "This is a web application developed as an AI-powered chatbot for PDFs, using Streamlit and Google Gemini AI.",
		year: "2025",
		tech: "Streamlit, Google Gemini AI, Python, LangChain, PyPDF2, FAISS, Python dotenv",
		bg: AI_chatbot,
		slug: "AI_chatbot",
		category: 1,
	},
	{
		title: "React Chat Application",
		desc: "This is a web application developed as a Real-Time Chat App, featuring JWT authentication, Socket.io messaging, and Zustand state management.",
		year: "2024",
		tech: "MERN, Socket.io, Zustand, JWT, TailwindCSS, Daisy UI",
		bg: ReactChatMain,
		slug: "react-chat",
		category: 1,
	},
	{
		title: "React Tools",
		desc: "My first React project which contains three main tools: Todo List, Note and Expense Tracker that has daily life utility.",
		year: "2024",
		tech: "Javascript, React Js, TailwindCSS",
		bg: ReactTools,
		slug: "react-tools",
		category: 1,
	},
	{
		title: "Football Match Analysis System",
		desc: "This is a web application developed as a Football Match Analyzer, using YOLO to track players, referees, and the ball.",
		year: "2025",
		tech: "Python, Tensorflow, OpenCV, NumPy, Roboflow, Sickit-learn",
		bg: FAS,
		slug: "FAS",
		category: 1,
	},
	{
		title: "TraviAI - AI Powered Travel Companion",
		desc: "This is a web application developed as an AI-based travel planner, enabling users to efficiently plan trips with personalized recommendations for destinations, accommodations, and activities.",
		year: "2025",
		tech: "React, TailwindCSS, Google Cloud, Gemini AI, Firebase, Auth0, React Hot Toast",
		bg: Travel,
		slug: "Travel",
		category: 1,
	},
	{
		title: "DripiFY - Fashion E-Commerce Platform",
		desc: "This is a fashion e-commerce platform that helps users find trendy clothing with personalized recommendations and a smooth shopping experience.",
		year: "2025",
		tech: "React, NextJS, TailwindCSS",
		bg: eCommerce,
		slug: "eCommerce",
		category: 1,
	}
];
