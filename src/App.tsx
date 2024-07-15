import "./App.css";
import Test from "./Test";

const x = true;

function App() {
  console.log('cherry pick 2');
  
  return (
    <div>
      <Test current={2}>
        <Test.Item title="item title 1" />
        <span>
          <Test.Item title="item title 11" />
          <Test.Item title="item title 2" />
          <div>
            <Test.Item title="item title 3" />
          </div>
        </span>
        {x ? (
          <>
            <Test.Item title="item title 18" />
            <Test.Item title="item title 28" />
          </>
        ) : <></>}
      </Test>
    </div>
  );
}

export default App;
