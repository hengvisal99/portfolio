import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";



export default function Page() {
  return (
   <div className="max-w-[1300px] mx-auto px-9 h-full">
      <Home/>
      <About/>
      <Skills/>
   </div>
  );
}
