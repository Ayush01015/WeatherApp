
import "./App.css";
import Body from "./Components/Body/Body";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
    <UserContextProvider>
      <Body />
    </UserContextProvider>
    </>
  );
}

export default App;
