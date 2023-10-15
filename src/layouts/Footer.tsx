import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-black text-white p-20">
      <div className="flex justify-between">
        <div>
          <h1 className="h-10">Bookish</h1>
        </div>
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>Shipping</li>
            <li>How it works</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li>List your gear</li>
            <li>Contact team</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <div className="ml-auto">&#169;Bookish {year}</div>
      </div>
    </div>
  );
}
