import React from 'react'

function Header() {
  return (
    <>
    <div class="mx-auto flex max-w-sm items-center gap-x-6 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-20 rounded-full " src="/images/pexels.jpg" alt="Block logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>
    </>
  )
}

export default Header