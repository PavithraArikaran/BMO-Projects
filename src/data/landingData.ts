export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  highlights: string[];
}

export const REAL_FEATURES: FeatureItem[] = [
  {
    id: "task-management",
    title: "1. Task Management & Assignment",
    subtitle: "Create, Assign & Track Project Deliverables",
    iconName: "CheckSquare",
    badge: "Task Module",
    highlights: [
      "Task creation with estimated vs actual worked hours",
      "Status tracking: In Progress, Completed, Not Started",
      ]
  },
  {
    id: "calculate-points",
    title: "2. Point Calculation",
    subtitle: "Automatic Total Score & Rating Calculation",
    iconName: "Calculator",
    badge: "Scoring Engine",
    highlights: [
      "Live Total Score calculation (e.g. +16.67 pts)",
      "Transparent individual and team score tallies"
    ]
  },
  {
    id: "performance-analytics",
    title: "3. Performance Analytics",
    subtitle: "Real-Time Employee Standings",
    iconName: "BarChart3",
    badge: "Analytics Hub",
    highlights: [
      "Overview cards: Total Score, Daily Average, Tasks, Defects",
      "Filter by Personnel, All Time, or specific teams"
    ]
  },
  {
    id: "issue-management",
    title: "4. Issue Management",
    subtitle: "Centralized Defect Tracking & Priority SLA",
    iconName: "AlertCircle",
    badge: "Issue Module",
    highlights: [
      "Structured bug reporting with unique Issue IDs",
      "Search, filter by assignee, project, status & date range",
    ]
  },
  {
    id: "daily-average",
    title: "5. Daily Average Point Tracking",
    subtitle: "Past 30 Days Hours & Daily Velocity Report",
    iconName: "TrendingUp",
    badge: "Daily Tracking",
    highlights: [
      "Automatic Daily Average score calculation",
      "Daily breakdown of tasks worked vs issues worked"
    ]
  },
  {
    id: "employee-performance",
    title: "6. Employee Performance Level Analysis",
    subtitle: "Overall Rating Evaluator",
    iconName: "Award",
    badge: "Level Evaluator",
    highlights: [
      "Automated standing evaluation based on output",
      "Detailed employee work activity history"
    ]
  }
];

export const REAL_LEADERBOARD_SAMPLE = [
  {
    rank: "1st",
    name: "John",
    role: "Team Lead (TL)",
    tasks: 1,
    defects: 1,
    fixes: 0,
    dailyAverage: 87.78,
    standing: "Top Performer",
    totalScore: "+87.78",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-300"
  },
  {
    rank: "2nd",
    name: "Santhosh",
    role: "Full Stack Dev",
    tasks: 4,
    defects: 0,
    fixes: 2,
    dailyAverage: 75.2,
    standing: "High Achiever",
    totalScore: "+75.2",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-300"
  },
  {
    rank: "3rd",
    name: "Karthik",
    role: "Backend Lead",
    tasks: 3,
    defects: 1,
    fixes: 1,
    dailyAverage: 82.8,
    standing: "Steady Contributor",
    totalScore: "82.8",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-300"
  }
];

export const REAL_FAQS = [
  {
    question: "What is BMO Projects?",
    answer: "BMO Projects is a web-based task delegation, issue tracking, and employee performance analytics platform available at https://app.bmoprojects.in/. It helps teams log tasks, calculate scores, track daily average productivity, and evaluate employee performance standings."
  },
  {
    question: "How does BMO Projects calculate points and daily averages?",
    answer: "Points are calculated automatically based on tasks completed, estimated vs. actual worked hours, and issue resolutions. The platform calculates your Daily Average score (e.g., 16.67 pts) across your activity history."
  },
  {
    question: "How can I start using BMO Projects?",
    answer: "Simply visit https://app.bmoprojects.in/ or click 'Launch App' to log in, create tasks, report issues, and monitor real-time performance analytics."
  }
];
