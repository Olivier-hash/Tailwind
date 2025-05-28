import React from 'react'

function Button() {
  return (
    <>
    <div class="mx-auto mt-8 flex max-w-md items-center gap-x-6 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-20 rounded-full " src="/images/pexels.jpg" alt="Block logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat we go</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>

        <button class="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-full hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
            Message
        </button>

  </div>
</div>
    </>
  )
}

export default Button