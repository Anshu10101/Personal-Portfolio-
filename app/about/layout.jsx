import Footer from "@/components/Footer";

export const metadata = {
	title: "Anshul | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
