import { Menu, Transition } from "@headlessui/react";
import { RiLoginCircleFill } from "react-icons/ri";
import { ImUserPlus } from "react-icons/im";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Dropdown = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="bg-flowral w-8 h-8 rounded-full text-white flex items-center justify-center">
        <FaUserCircle className="w-full h-full" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bg-white rounded-md shadow-lg top-11 right-0 w-[200px] p-1 z-50">
          <Menu.Item className="py-2 px-3 rounded-md mb-1">
            {({ active }) => (
              <Link
                to="/login"
                className={`flex gap-2 items-end text-gray-600 ${
                  active ? "bg-flowral text-white" : ""
                }`}
              >
                <RiLoginCircleFill size={20} />
                Login
              </Link>
            )}
          </Menu.Item>
          <Menu.Item className="px-3 py-2 rounded-md">
            {({ active }) => (
              <Link
                to="/register"
                className={`flex gap-2 items-end text-gray-600 ${
                  active ? "bg-flowral text-white" : ""
                }`}
              >
                <ImUserPlus size={20} /> Sign up
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
