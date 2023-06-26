import Counter from './Components/Counter/Counter';
import {Provider} from "react-redux"
import Store from './Components/Store/Store';

function App() {
  return (
    <>
      <Provider store={Store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
