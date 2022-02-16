import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const navigation = [
  // { name: "Home", path: "/", current: true },
  // { name: "Cart", path: "/cart", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { cartTotalQty } = useSelector((state) => state.cart);

  return (
    <div className="h-full">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto sm:px-6 px-4 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Brand */}
                <NavLink to="/" className="flex">
                  <img className="ml-2 h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                  <span className="sm:block hidden self-center text-xl font-semibold whitespace-nowrap text-white ml-2">4ty</span>
                </NavLink>

                <div className="flex">
                  {/* Navigation */}
                  <div className="sm:block hidden">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <NavLink key={item.name} to={item.path} className={classNames(item.current ? "bg-white text-gray-700" : "text-gray-300 hover:bg-white hover:text-gray-700", "block px-3 py-2 rounded-md text-base font-medium")} aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>

                  {/* Cart dropdown */}
                  <div className="flex items-center mx-4">
                    <Menu as="div" className="ml-3 relative">
                      <Menu.Button className="flex items-center p-1 pr-2 ">
                        <ShoppingCartIcon className="h-6 w-6 text-white" />
                        <span className="text-gray-800 bg-white rounded-full px-1.5 text-sm font-bold">{cartTotalQty}</span>
                      </Menu.Button>
                      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        {cartTotalQty > 0 ? (
                          <Menu.Items className="origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white">
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink to="/cart" className={classNames(active ? "bg-gray-200" : "", "block px-4 py-2 text-sm text-gray-700 cursor-pointer")}>
                                  Go to cart
                                </NavLink>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        ) : (
                          <Menu.Items className="origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white">
                            <Menu.Item>{({ active }) => <span className={classNames(active ? "bg-gray-200" : "", "block px-4 py-2 text-sm text-gray-700 cursor-pointer")}>Cart is empty</span>}</Menu.Item>
                          </Menu.Items>
                        )}
                      </Transition>
                    </Menu>
                  </div>

                  {/* Trigger Mobile Button */}
                  <div className="flex hidden">
                    <Disclosure.Button className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">{open ? <XIcon className="block h-7 w-7" /> : <MenuIcon className="block h-7 w-7" />}</Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <Disclosure.Panel className="hidden">
              <div className="pb-3 mt-3 px-2 spacey-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button key={item.name} as={NavLink} to={item.path} className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium")} aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
