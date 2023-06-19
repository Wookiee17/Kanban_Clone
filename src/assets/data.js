import { v4 as uuidv4 } from 'uuid';
export const columns = {
  todo: 'To Do',
  progress: 'In Progress',
  completed: 'Done',
};

export const data = [
  {
    id: uuidv4(),
    priority: 0,
    title: 'Brainstorming',
    column: 'todo',
    description:
      "Brainstorming brings team members' diverse experience into play.",
    comments: 12,
    files: 0,
    completed: false,
    assignees: [
      {
        avatars: 'avatars/user1.png',
      },
      {
        avatars: 'avatars/user4.png',
      },
    ],
  },
  {
    id: uuidv4(),
    priority: 2,
    title: 'Research',
    column: 'todo',
    description:
      'User research helps you to create an optimal product for users.',
    comments: 12,
    files: 3,
    assignees: [
      {
        avatars: 'avatars/user2.png',
      },
      {
        avatars: 'avatars/user5.png',
      },
    ],
  },
  {
    id: uuidv4(),
    priority: 2,
    title: 'Wireframes',
    column: 'todo',
    description:
      'Low fidelity wireframes include the most basic content and visuals.',
    comments: 10,
    files: 3,
    assignees: [
      {
        avatars: 'avatars/user1.png',
      },
      {
        avatars: 'avatars/user4.png',
      },
      {
        avatars: 'avatars/user3.png',
      },
    ],
  },
  {
    id: uuidv4(),
    priority: 0,
    title: 'Onboarding Illustrations',
    column: 'progress',
    images: [
      {
        image: 'images/1.png',
      },
    ],
    comments: 14,
    files: 15,
    assignees: [
      {
        avatars: 'avatars/user3.png',
      },
      {
        avatars: 'avatars/user4.png',
      },
      {
        avatars: 'avatars/user1.png',
      },
    ],
  },

  {
    id: uuidv4(),
    priority: 0,
    title: 'Moodboard',
    column: 'progress',
    images: [
      {
        image: 'images/2.png',
      },
      {
        image: 'images/3.png',
      },
    ],
    comments: 9,
    files: 10,
    assignees: [
      {
        avatars: 'avatars/user3.png',
      },
    ],
  },
  {
    id: uuidv4(),
    priority: 0,
    title: 'Mobile App Design',
    column: 'completed',
    images: [
      {
        image: 'images/4.png',
      },
    ],
    comments: 12,
    files: 15,
    assignees: [
      {
        avatars: 'avatars/user5.png',
      },
      {
        avatars: 'avatars/user2.png',
      },
    ],
  },

  {
    id: uuidv4(),
    priority: 2,
    title: 'Design System',
    column: 'completed',
    description: 'It just needs to adapt the UI from what you did before',
    comments: 12,
    files: 15,
    assignees: [
      {
        avatars: 'avatars/user1.png',
      },
      {
        avatars: 'avatars/user3.png',
      },
      {
        avatars: 'avatars/user4.png',
      },
    ],
  },
];
