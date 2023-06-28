import './App.css';
import AuthProtected from './auth/authProtected';
function App() {

  return (
    <h1 className="text-3xl font-bold underline">
      <AuthProtected></AuthProtected>    
    </h1>
  );
}

export default App;
