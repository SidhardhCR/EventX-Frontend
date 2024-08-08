import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Dropdown({ name }) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-10/12 h-8  md:w-auto justify-between md:justify-center gap-x-2 md:gap-x-20 rounded-md bg-white px-3 py-2 text-[5px] md:text-base text-[#10107B] inter shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {name}
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-full md:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm md:text-base text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Account settings
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm md:text-base text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Support
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm md:text-base text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                License
              </a>
            </MenuItem>
            <form action="#" method="POST">
              <MenuItem>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm md:text-base text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Sign out
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default Dropdown;
