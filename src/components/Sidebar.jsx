import React, { useState } from 'react';

const Sidebar = () => {
  const menus = [
    {
      id: 1,
      name: 'Home',
      icon: 'icons/category.png',
    },
    {
      id: 2,
      name: 'Messages',
      icon: 'icons/message.png',
    },
    {
      id: 3,
      name: 'Tasks',
      icon: 'icons/task-square.png',
    },
    {
      id: 4,
      name: 'Members',
      icon: 'icons/profile-2user.png',
    },
    {
      id: 5,
      name: 'Settings',
      icon: 'icons/setting-2.png',
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'Mobile App',
      icon: 'icons/dot.png',
      color: 'bg-green',
    },
    {
      id: 2,
      name: 'Website Redesign',
      icon: 'icons/dot.png',
      color: 'bg-orange',
    },
    {
      id: 3,
      name: 'Design System',
      icon: 'icons/dot.png',
      color: 'bg-light-pink',
    },
    {
      id: 4,
      name: 'Wireframes',
      icon: 'icons/dot.png',
      color: 'bg-light-blue',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0].id);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  return (
    <div className="2xl:w-[250.5px] xl:w-[225px] lg:w-[225px] w-[200px] hidden sm:block">
      <div className="px-5 border-b border-r border-gray-300">
        <div className="flex flex-row py-8 space-x-2 2xl:space-x-[46px] xl:space-x-7 lg:space-x-8 md:space-x-2">
          <div className="flex items-center gap-2">
            <img src="/icons/logo.png" alt="logo" className="w-6 h-6" />
            <h1 className="text-xl font-semibold text-dark">Project M.</h1>
          </div>
          <div className="flex items-center">
            <img src="icons/arrow.png" alt="arrow" className="h-5" />
          </div>
        </div>
      </div>
      <div className="px-5 border-r border-gray-300 py-[30px] px-[12px] text-base font-medium text-gray-600">
        <div className="flex flex-col gap-[25px] px-[10px]">
          {/* Category elements */}
          {menus.map((menu) => (
            <div
              className="flex flex-row gap-[14px] cursor-pointer"
              key={menu.id}
            >
              <img src={menu.icon} alt={menu.name} className="w-6 h-6" />
              <div>{menu.name}</div>
            </div>
          ))}
        </div>

        <hr className="my-[30.5px] border-gray-300 text-base font-medium text-gray-600" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between px-[10px]">
            <div className="text-xs font-bold text-gray-600">MY PROJECTS</div>
            <img src="icons/add-square.png" alt="add" className="w-4 h-4" />
          </div>

          <div className="space-y-[20px]">
            {projects.map((project) => (
              <div
                className={`flex flex-row justify-between py-[10px] text-base px-[10px] bg-opacity-[.08] ${
                  selectedProject === project.id
                    ? 'bg-dark-blue rounded-md font-semibold text-black'
                    : 'font-medium text-gray-600'
                }`}
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="flex flex-row items-center gap-4">
                  <div
                    className={`w-2 h-2 rounded-full ${project.color}`}
                  ></div>
                  {project.name}
                </div>
                {selectedProject === project.id && (
                  <img src={project.icon} alt="" className="w-4 my-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-[25px] border-r border-gray-300">
        <div className="relative">
          <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
            <div className="h-[66px] w-[66px] rounded-full bg-neutral-100 flex items-center justify-center">
              <div className="bg-yellow-500 bg-opacity-70 blur-lg rounded-full w-[33px] h-[33px] items-center justify-center"></div>
              <img
                src="icons/lamp-on.png"
                alt="lamp"
                className="absolute w-6 h-6 inset-5"
              />
            </div>
          </div>
          <div className="mt-8 mb-2 xl:px-[16px] px-[12px]">
            <div className="flex flex-col items-center justify-between px-3 rounded-2xl border-neutral-100 bg-neutral-100">
              <div className="text-sm font-medium text-black mb-[12px] pt-[37px]">
                Thoughts Time
              </div>
              <div className="text-xs font-normal text-center text-gray-600">
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </div>
              <div className="px-3 py-3 mt-[14px] mb-5 text-xs font-medium text-black bg-white rounded xl:text-sm xl:px-5">
                <input
                  type="text"
                  placeholder="Write a message"
                  className="w-full text-center outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
