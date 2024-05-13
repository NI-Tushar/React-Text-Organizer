
import Navbar from './components/Navbar';
import Textform from './components/TextForm';

function App() {
  return (
    <>
      <Navbar option1='Dropdown' option2="React" />
      {/* <Navbar /> */}
      <Textform title='Text Organizer' />
    </>
  );
}

export default App;
