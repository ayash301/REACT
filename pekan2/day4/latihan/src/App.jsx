import AxiosDataComponent from "./components/AxiosDataComponent";
import Fetch from "./components/fetch";
import AbortFetchComponent from "./components/AbortFetchComponent";
import UserListManipulated from "./components/UserListManipulated";
function App() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Latihan</h1>
      <Fetch />
      <AxiosDataComponent />
      <AbortFetchComponent />
      <UserListManipulated />

    </div>
  )
}

export default App