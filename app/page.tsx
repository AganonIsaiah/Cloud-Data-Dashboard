import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 flex flex-col">
      <p>Cloud Data Dashboard</p>
      <p>28/09/25</p>
      <p>Coming soon...</p>
      <a href="https://github.com/AganonIsaiah/Cloud-Data-Dashboard"
      className="underline cursor-pointer text-blue-500 hover:text-blue-600"
      >Repo</a>
    </div>
  );
}