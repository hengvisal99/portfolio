import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Home from "./components/home";
import ScrollTopButton from "./components/ui/ScrollTopButton";

export default function Page() {
  return (
   <div className="max-w-[1300px] mx-auto px-7 md:px-9 pb-6 lg:pb-9 h-full">
      <Home/>
      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <ScrollTopButton/>
   </div>
  );
}
