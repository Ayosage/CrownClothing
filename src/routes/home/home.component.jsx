import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

export default function Home(){
    
      return (
        <div className="App">
          <Directory/>
          <Outlet/>
        </div>
      );
}