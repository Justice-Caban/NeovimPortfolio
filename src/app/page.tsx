import { ModeToggle } from "./components/ModeToggle";

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 min-h-screen m-4 text-center">
      <div className="grid col-span-4 row-start-2">
        ░░░░░██╗██╗░░░██╗░██████╗████████╗██╗░█████╗░███████╗  ░█████╗░░█████╗░██████╗░░█████╗░███╗░░██╗
        ░░░░░██║██║░░░██║██╔════╝╚══██╔══╝██║██╔══██╗██╔════╝  ██╔══██╗██╔══██╗██╔══██╗██╔══██╗████╗░██║
        ░░░░░██║██║░░░██║╚█████╗░░░░██║░░░██║██║░░╚═╝█████╗░░  ██║░░╚═╝███████║██████╦╝███████║██╔██╗██║
        ██╗░░██║██║░░░██║░╚═══██╗░░░██║░░░██║██║░░██╗██╔══╝░░  ██║░░██╗██╔══██║██╔══██╗██╔══██║██║╚████║
        ╚█████╔╝╚██████╔╝██████╔╝░░░██║░░░██║╚█████╔╝███████╗  ╚█████╔╝██║░░██║██████╦╝██║░░██║██║░╚███║
        ░╚════╝░░╚═════╝░╚═════╝░░░░╚═╝░░░╚═╝░╚════╝░╚══════╝  ░╚════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝
      </div>
      <div className="row-start-3 col-span-4 text-center flex flex-col">
        <span>About Me</span>
        <span>
          I do stuff. The stuff is cool. Don't you want to see the stuff?
        </span>
      </div>
      <div className="grid grid-cols-subgrid col-span-4 gap-4 row-start-4">
        <div className="col-start-2">
          <ModeToggle />
          <span className="pl-2">Change theme</span>
        </div>
        <div className="col-start-3 p-2">Projects</div>
      </div>
      <div className="grid grid-cols-subgrid col-span-4 gap-4 row-start-5">
        <div className="col-start-2">
          <div>3</div>
        </div>
      </div>
    </div>
  );
}
