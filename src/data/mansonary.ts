

type Member = {
    id: number;
    name: string;
  };
  
  export type Task = {
    projectName: string;
    priorityTaskTitle: string;
    description: string;
    deadline: string;
    numberOfMembers: number;
    members: Member[];
    taskCategory: string;
    priority:'High'| 'Low' |'Medium'
  };
  export const taskList: Task[] = [
    {
      projectName: "UI Spectrum",
      priorityTaskTitle: "Design Simple UI Components",
      description:
        "Create reusable, responsive, and accessible simple UI components. Ensure they align with modern design standards.",
      deadline: "2024-11-25",
      numberOfMembers: 3,
      priority: "High",
      members: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ],
      taskCategory: "Design",
    },
    {
      projectName: "Interface Lab",
      priorityTaskTitle: "Complex Form Validation",
      description:
        "Implement advanced form validation for nested forms. Focus on robust error handling and usability.",
      deadline: "2024-12-01",
      numberOfMembers: 2,
      priority: "Low",
      members: [
        { id: 4, name: "Diana" },
        { id: 5, name: "Ethan" },
      ],
      taskCategory: "Development",
    },
    {
      projectName: "Dynamic UI",
      priorityTaskTitle: "Dynamic Theme Switching",
      description:
        "Add support for light and dark themes with custom colors. Ensure smooth transitions between themes.",
      deadline: "2024-12-05",
      numberOfMembers: 4,
      priority: "High",
      members: [
        { id: 6, name: "Fiona" },
        { id: 7, name: "George" },
        { id: 8, name: "Hannah" },
        { id: 9, name: "Ian" },
      ],
      taskCategory: "Feature Implementation",
    },
    {
      projectName: "UXplore",
      priorityTaskTitle: "User Testing Framework",
      description:
        "Set up a testing framework to collect feedback from users. Include tools for usability analysis and surveys.",
      deadline: "2024-11-30",
      numberOfMembers: 2,
      members: [
        { id: 10, name: "Jack" },
        { id: 11, name: "Kelly" },
      ],
      taskCategory: "Research",
      priority: "Medium",
    },
    {
      projectName: "Polished Pixels",
      priorityTaskTitle: "Pixel-Perfect Landing Page",
      description:
        "Design a responsive landing page with pixel-perfect accuracy. Prioritize cross-browser compatibility.",
      deadline: "2024-12-03",
      numberOfMembers: 3,
      priority: "Low",
      members: [
        { id: 12, name: "Laura" },
        { id: 13, name: "Michael" },
        { id: 14, name: "Nina" },
      ],
      taskCategory: "Design",
    },
    {
      projectName: "EdgeUI",
      priorityTaskTitle: "Performance Optimization",
      description:
        "Improve the loading time and rendering efficiency of complex UIs. Use profiling tools to identify bottlenecks.",
      deadline: "2024-12-10",
      numberOfMembers: 5,
      priority: "Medium",
      members: [
        { id: 15, name: "Oscar" },
        { id: 16, name: "Paul" },
        { id: 17, name: "Quincy" },
        { id: 18, name: "Rachel" },
        { id: 19, name: "Steve" },
      ],
      taskCategory: "Optimization",
    },
    {
      projectName: "UXplore",
      priorityTaskTitle: "User Testing Framework",
      description:
        "Set up a testing framework to collect feedback from users. Include tools for usability analysis and surveys. Include tools for usability analysis and surveys.",
      deadline: "2024-11-30",
      numberOfMembers: 2,
      members: [
        { id: 10, name: "Jack" },
        { id: 11, name: "Kelly" },
      ],
      taskCategory: "Research",
      priority: "Medium",
    },
    {
      projectName: "Polished Pixels",
      priorityTaskTitle: "Pixel-Perfect Landing Page",
      description:
        "Design a responsive landing page with pixel-perfect accuracy. Prioritize cross-browser compatibility. Prioritize cross-browser compatibility.",
      deadline: "2024-12-03",
      numberOfMembers: 3,
      priority: "Low",
      members: [
        { id: 12, name: "Laura" },
        { id: 13, name: "Michael" },
        { id: 14, name: "Nina" },
      ],
      taskCategory: "Design",
    },
    {
      projectName: "EdgeUI",
      priorityTaskTitle: "Performance Optimization",
      description:
        "Improve the loading time and rendering efficiency of complex UIs. Use profiling tools to identify bottlenecks.",
      deadline: "2024-12-10",
      numberOfMembers: 5,
      priority: "Medium",
      members: [
        { id: 15, name: "Oscar" },
        { id: 16, name: "Paul" },
        { id: 17, name: "Quincy" },
        { id: 18, name: "Rachel" },
        { id: 19, name: "Steve" },
      ],
      taskCategory: "Optimization",
    },
    {
      projectName: "EdgeUI",
      priorityTaskTitle: "Performance Optimization",
      description:
        "Improve the loading time and rendering efficiency of complex UIs. Use profiling tools to identify bottlenecks.Use profiling tools to identify bottlenecks.Use profiling tools to identify bottlenecks.",
      deadline: "2024-12-10",
      numberOfMembers: 5,
      priority: "Medium",
      members: [
        { id: 15, name: "Oscar" },
        { id: 16, name: "Paul" },
        { id: 17, name: "Quincy" },
        { id: 18, name: "Rachel" },
        { id: 19, name: "Steve" },
      ],
      taskCategory: "Optimization",
    },
    {
      projectName: "EdgeUI",
      priorityTaskTitle: "Performance Optimization",
      description:
        "Improve the loading time and rendering efficiency of complex UIs. Use profiling tools to identify bottlenecks.Use profiling tools to identify bottlenecks.Use profiling tools to identify bottlenecks.",
      deadline: "2024-12-10",
      numberOfMembers: 5,
      priority: "Medium",
      members: [
        { id: 15, name: "Oscar" },
        { id: 16, name: "Paul" },
        { id: 17, name: "Quincy" },
        { id: 18, name: "Rachel" },
        { id: 19, name: "Steve" },
      ],
      taskCategory: "Optimization",
    },
  ];
  