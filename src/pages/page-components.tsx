import Text from "../components/text";

export default function PageComponents() {
  return (
    <div className="grid gap-3">
      <div className="min-h-screen flex flex-col gap-2 items-center justify-center bg-white">
        <Text variant="body-sm-bold" className=" text-green-base">
          Hello, World!
        </Text>

        <Text className="text-4xl font-bold text-pink-base">Hello, World!</Text>

        <Text variant="body-md-bold" className="">
          Hello, World!
        </Text>
      </div>

      <div className="flex gap-1 bg-white"></div>
    </div>
  );
}
