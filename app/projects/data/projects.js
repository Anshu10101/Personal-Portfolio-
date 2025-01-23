
import Trivia from "@/public/projects/main-project/trivia.png";
import SakuSenyum from "@/public/projects/main-project/saku-senyum.png";
import ReactChatMain from "@/public/projects/main-project/react-chat.png";
import ReactTools from "@/public/projects/main-project/react-tools.png";
import LPTK from "@/public/projects/lptk/lptk1.png";
import NUINO from "@/public/projects/ino/ino1.png";

export const projects = [
	{
		title: "Airbnb Application",
		desc: "This is a web application developed as an Airbnb clone, enabling users to book accommodations and manage listings.",
		year: "2023",
		tech: "React Js, Node Js, Express Js, MongoDB, TailwindCSS, JWT, Cloudinary, Google cloud",
		bg: Trivia,
		slug: "trivia",
		category: 1,
	},
	{
		title: "E-Learning Platform",
		desc: "This is a web application developed as an E-learning platform for grades 9-12, focusing on JEE and NEET preparation.",
		year: "2020",
		tech: "PHP, Laravel, Bootstrap, MySQL, jQuery, Apache",
		bg: SakuSenyum,
		slug: "saku-senyum",
		category: 1,
	},
	{
		title: "React Chat Application",
		desc: "This is a web application developed as a Real-Time Chat App, featuring JWT authentication, Socket.io messaging, and Zustand state management.",
		year: "2023",
		tech: "MERN, Socket.io, Zustand, JWT, TailwindCSS, Daisy UI",
		bg: ReactChatMain,
		slug: "react-chat",
		category: 1,
	},
	{
		title: "React Tools",
		desc: "My first React project which contains three main tools: Todo List, Note and Expense Tracker that has daily life utility.",
		year: "2023",
		tech: "Javascript, React Js, TailwindCSS",
		bg: ReactTools,
		slug: "react-tools",
		category: 1,
	},
	{
		title: "Football Match Analysis System",
		desc: "This is a web application developed as a Football Match Analyzer, using YOLO to track players, referees, and the ball.",
		year: "2023",
		tech: "Python, Tensorflow, OpenCV, NumPy, Roboflow, Sickit-learn",
		bg: LPTK,
		slug: "lptk-cup-2023",
		category: 1,
	},
	{
		title: "Coming Soon",
		desc: "",
		year: "",
		tech: "",
		bg: NUINO,
		slug: "nu-ino-website",
		category: 1,
	},
];
