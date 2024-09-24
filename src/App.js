import AdvancedButton from "./components/AdvancedButton";
import CustomButton from "./components/CustomButton";
import MyButton from "./components/MyButton";
import SuperBtn from "./components/SuperBtn";

function App() {
  return (
    <div className="flex items-center justify-center flex-wrap w-5/12 m-auto gap-10">
      <div className="superBtns">
        <h1 className="text-center font-extrabold text-xl mb-5">
          <i className="underline text-amber-800">SuperBtn</i> Component
          Examples
        </h1>
        <SuperBtn
          variant="success"
          size="larger"
          text="SUCCESS"
          onclick={() => alert("SUCCESS button clicked")}
        />
        <SuperBtn
          variant="danger"
          size="normal"
          text="DANGER"
          onclick={() => alert("DANGER button clicked")}
        />
        <SuperBtn
          variant="primary"
          size="small"
          text="PRIMARY"
          onclick={() => alert("PRIMARY button clicked")}
        />
        <SuperBtn disabled/>
      </div>
      <div className="myButtons">
        <h1 className="text-center font-extrabold text-xl mb-5">
          <i className="underline text-amber-800">MyButton</i> Component
          Examples
        </h1>{" "}
        <MyButton
          fontSize="small"
          variant="success"
          text="SUCCESS"
          onclick={() => alert("SUCCESS button clicked")}
        />
        <MyButton
          fontSize="normal"
          variant="danger"
          text="DANGER"
          onclick={() => alert("DANGER button clicked")}
        />
        <MyButton
          fontSize="larger"
          variant="primary"
          text="PRIMARY"
          onclick={() => alert("PRIMARY button clicked")}
        />
      </div>

      <div className="customButtons">
        <h1 className="text-center font-extrabold text-xl mb-5">
          <i className="underline text-amber-800">CustomButton</i> Component
          Examples
        </h1>{" "}
        <CustomButton
          variant="success"
          text="SUCCESS"
          onclick={() => alert("SUCCESS button clicked")}
        />
        <CustomButton
          variant="danger"
          text="DANGER"
          onclick={() => alert("DANGER button clicked")}
        />
        <CustomButton
          variant="cancel"
          text="CANCEL"
          onclick={() => alert("CANCEL button clicked")}
        />
      </div>

      <div className="advancedButtons">
        <h1 className="text-center font-extrabold text-xl mb-5">
          <i className="underline text-amber-800">AdvancedButton</i> Component
          Examples
        </h1>{" "}
        <AdvancedButton
          text="Primary Button"
          onClick={() => alert("Primary Button clicked!")}
          backgroundColor="#007bff"
          hoverBackgroundColor="#0056b3"
        />
        <AdvancedButton
          text="Secondary Button"
          onClick={() => alert("Secondary Button clicked!")}
          backgroundColor="transparent"
          color="#007bff"
          border="2px solid #007bff"
          hoverBackgroundColor="#007bff"
          hoverColor="#fff"
        />
      </div>
    </div>
  );
}

export default App;
