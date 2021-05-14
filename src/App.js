import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";

export default function App() {
  return (
    <div>
        <header><h1>CV Generator</h1></header>
        <General />
        <Education />
        <Work />
    </div>
  );
}
