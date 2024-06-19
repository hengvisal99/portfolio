import About from "./components/About";

import Skills from "./components/Skills";
import Home from "./components/home";



export default function Page() {
  return (
   <div className="max-w-[1300px] mx-auto px-9 pb-6 lg:pb-9 h-full">
      <Home/>
      <About/>
      <Skills/>
   </div>
  );
}
