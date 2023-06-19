const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between 2xl:px-12 xl:px-6 lg:px-4 px-4 py-[22px] border-b border-gray-300">
      <div className="flex flex-row space-x-2 sm:hidden">
        <div className="flex items-center gap-2">
          <img src="/icons/logo.png" alt="logo" className="w-6 h-6" />
          <h1 className="text-xl font-semibold text-dark">Project M.</h1>
        </div>
      </div>
      <div className="flex flex-row gap-4 hidden sm:flex pl-[16.8px] xl:pr-[221.2px] lg:pr-[150px] md:pr-[70px] pr-[10px] py-3 bg-neutral-100 border border-neutral-100 rounded-md">
        <img
          src="icons/search-normal.png"
          alt="search"
          className="w-[22px] h-[22px]"
        />
        <input
          type="text"
          placeholder="Search for anything..."
          className="flex-1 hidden text-sm text-gray-600 bg-transparent outline-none lg:flex font-regular "
        />

        <input
          type="text"
          placeholder="Search"
          className="flex-1 text-sm text-gray-600 bg-transparent outline-none font-regular lg:hidden"
        />
      </div>

      <div className="flex flex-row items-center justify-center gap-[50px]">
        <div className="flex flex-row items-center justify-center hidden gap-6 md:flex">
          <img
            src="/icons/calendar-2.png"
            alt="calendar-icon"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="/icons/message-question.png"
            alt=""
            className="w-6 h-6 cursor-pointer"
          />
          <div class="relative">
            <img
              src="/icons/notification.png"
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
            <div className="absolute top-[2px] right-[3px] flex items-center justify-center w-[6px] h-[6px] rounded-full bg-[#D8727D]"></div>
          </div>
        </div>
        <div className="flex flex-row gap-[22px]">
          <div className="flex flex-col hidden lg:block">
            <div className="text-base text-right font-regular text-dark">
              Anima Agrawal
            </div>
            <div className="text-sm text-right text-gray-600 font-regular">
              U.P, India
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[10px] cursor-pointer">
            <img
              src="icons/avatar.png"
              alt="avatar"
              className="w-[38px] h-[38px]"
            />
            <img
              src="icons/arrow-down.png"
              alt="avatar"
              className="w-[18px] h-[18px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
