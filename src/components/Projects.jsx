import Board from './Board';

const Projects = () => {
  return (
    <div className="xl:px-6 lg:px-4 px-4 pt-[41px]">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-5">
          <div className="font-semibold lg:text-[46px] text-3xl text-dark">
            Mobile App
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <img
              src="icons/arrow-square-up.png"
              alt=""
              className="w-[30px] h-[30px]"
            />
            <img src="icons/link.png" alt="" className="w-[30px] h-[30px]" />
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex flex-row items-center justify-center gap-[7px] cursor-pointer">
            <img
              src="icons/add-square-purple.png"
              alt=""
              className="w-[18px] h-[18px] cursor-pointer"
            />
            <div className="text-base font-medium text-dark-blue">Invite</div>
          </div>
          <div className="flex flex-row items-center justify-end hidden md:flex">
            <div className="flex items-center -space-x-1">
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full"
              >
                <img src="avatars/user1.png" alt="avatars" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full"
              >
                <img src="avatars/user2.png" alt="avatars" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full"
              >
                <img src="avatars/user3.png" alt="avatars" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full"
              >
                <img src="avatars/user4.png" alt="avatars" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 text-sm ring-1 ring-white font-medium text-[#D25B68] bg-[#F4D7DA] rounded-full"
              >
                +2
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-10 mb-[42px]">
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-3">
          <button className="pt-[8px] pb-[7px] border rounded-md border-gray-600 pl-[12px] pr-[16px] sm:pt-[11px] sm:pb-[10px] sm:pl-[15px] sm:pr-[20px] flex flex-row items-center justify-center">
            <img
              src="icons/filter.png"
              alt=""
              className="w-3 h-3 sm:h-4 sm:w-4"
            />
            <div className="text-sm font-medium text-gray-600 pl-[4px] sm:text-base sm:pl-[6px] pr-[2px] sm:pr-[10px]">
              Filter
            </div>
            <img
              src="icons/arrow-down.png"
              alt="arrow-down"
              className="w-3 h-3 sm:h-4 sm:w-4"
            />
          </button>
          <button className="pt-[8px] pb-[7px] border rounded-md border-gray-600 pl-[12px] md:pr-[10px] pr-[10px] sm:pt-[11px] sm:pb-[10px] sm:pl-[15px] sm:pr-[12px] flex flex-row items-center justify-center">
            <img
              src="icons/calendar.png"
              alt="calendar-icon"
              className="w-3 h-3 sm:h-4 sm:w-4"
            />
            <div className="text-sm font-medium text-gray-600 pl-[4px] lg:pr-[8px] pr-[2px] sm:text-base sm:pl-[6px]">
              Today
            </div>
            <img
              src="icons/arrow-down.png"
              alt="arrow-down-icon"
              className="w-3 h-3 sm:h-4 sm:w-4"
            />
          </button>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-2 md:gap-5">
          <button className="flex flex-row items-center justify-center pt-[8px] pb-[7px] border border-gray-600 rounded-md px-[12px] sm:pt-[11px] sm:pb-[10px] sm:px-[15px]">
            <img
              src="icons/profile-2user.png"
              alt="profile-icon"
              className="w-3 h-3 sm:h-4 sm:w-4"
            />
            <div className="text-sm font-medium text-gray-600 pl-[4px] sm:text-base">
              Share
            </div>
          </button>
          <div className="h-[24px] border border-gray-600 hidden md:block"></div>
          <button className="p-[8px] bg-dark-blue rounded-md hidden md:block">
            <img src="icons/pause.png" alt="list-icon" className="w-4 h-4" />
          </button>
          <button>
            <img
              src="icons/tiles.png"
              alt="tiles-icon"
              className="hidden w-4 h-4 md:block"
            />
          </button>
        </div>
      </div>

      <Board />
    </div>
  );
};

export default Projects;
