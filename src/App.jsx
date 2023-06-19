import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
