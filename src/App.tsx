import Text from "./components/text";
function App() {
  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center">
      <Text variant="body-sm-bold" className=" text-green-base">
        Hello, World!
      </Text>

      <Text className="text-4xl font-bold text-pink-base">Hello, World!</Text>

      <Text variant="body-md-bold" className="">
        Hello, World!
      </Text>
    </div>
  );
}

export default App;
