import React from 'react';

function Nav() {
  return (
    <nav class="bg-white dark:bg-darkblue">
        <div class="flex items-center justify-center relative">
            <a href="https://github.com/williamvdm" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1.5 sm:mx-6">About</a>
            <a href="https://github.com/williamvdm" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1.5 sm:mx-6">Projects</a>
            <a href="https://github.com/williamvdm" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1.5 sm:mx-6">Contact</a>
        </div>
    </nav>
  );
};

export default Nav;
  