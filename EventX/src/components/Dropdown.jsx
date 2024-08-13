import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Dropdown({ name, options, onChange }) {
  const [selectedOption, setSelectedOption] = useState(name);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-10/12 h-8 md:w-auto justify-between md:justify-center gap-x-2 md:gap-x-20 rounded-md bg-white px-3 py-2 text-[5px] md:text-base text-[#10107B] inter shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {selectedOption}
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-full md:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            {options.map((option, index) => (
              <MenuItem key={index}>
                {({ active }) => (
                  <button
                    onClick={() => handleSelect(option)}
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } block w-full text-left px-4 py-2 text-sm md:text-base`}
                  >
                    {option}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default Dropdown;
