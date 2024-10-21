const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design the homepage",
        taskDescription: "Create a responsive homepage for the project.",
        taskDate: "2024-10-18",
        category: "Design",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate the backend API with the frontend.",
        taskDate: "2024-10-19",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Document all REST API endpoints.",
        taskDate: "2024-10-12",
        category: "Documentation",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Fix all the reported bugs from last sprint.",
        taskDate: "2024-10-16",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare a product demo presentation for clients.",
        taskDate: "2024-10-18",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription:
          "Attend meeting with the client to discuss project scope.",
        taskDate: "2024-10-10",
        category: "Meeting",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "UI Design Update",
        taskDescription: "Redesign the profile page UI.",
        taskDate: "2024-10-18",
        category: "Design",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database migration",
        taskDescription: "Migrate the database to the new server.",
        taskDate: "2024-10-19",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the pull requests from the development team.",
        taskDate: "2024-10-14",
        category: "Development",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Marketing campaign",
        taskDescription: "Plan a marketing campaign for the product launch.",
        taskDate: "2024-10-20",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve SEO for the website.",
        taskDate: "2024-10-10",
        category: "Marketing",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "User Testing",
        taskDescription: "Conduct user testing for the latest features.",
        taskDate: "2024-10-18",
        category: "Testing",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Feature Implementation",
        taskDescription: "Develop and implement new features for the product.",
        taskDate: "2024-10-19",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription:
          "Update the project documentation with the latest changes.",
        taskDate: "2024-10-15",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Performance",
        taskDescription: "Optimize the application performance.",
        taskDate: "2024-10-20",
        category: "Development",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees, admin);
    
}
