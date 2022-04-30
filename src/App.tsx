import "./App.css";

function App() {
  return (
    <>
      <button onClick={() => window.navigator.clipboard.writeText("hoge")}>
        copy hoge
      </button>
      {/* <button onClick={() => copyImage()}>copy hoge</button> */}
    </>
  );
}

export default App;

const copyImage = async () => {
  const res = await fetch(
    "https://w7.pngwing.com/pngs/107/759/png-transparent-circle-white-circle-white-monochrome-black-thumbnail.png"
  );
  const blob = await res.blob();
  const item = new ClipboardItem({
    "image/png": blob,
  });
  await navigator.clipboard.write([item]);
  window.navigator.clipboard
    .readText()
    .then(
      (value) => console.log("ok", value),
      (reason) => console.log("ng", reason)
    )
    .catch((reason) => console.log("error", reason));
};
