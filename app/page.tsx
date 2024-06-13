import About from "./components/About";
import Home from "./components/Home";



export default function Page() {
  return (
   <div className="max-w-[1300px] mx-auto px-9 h-full">
      <Home/>
      <About/>
   </div>
  );
}
