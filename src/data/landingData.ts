export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
  highlights: string[];
}

export const REAL_FEATURES: FeatureItem[] = [
  {
    id: "task-management",
    title: "1. Task Management & Assignment",
    subtitle: "Create, Assign & Track Project Deliverables",
    description: "Assign tasks with estimated hours, task types, project tags, assigned team member, task date, and real-time status updates.",
    iconName: "CheckSquare",
    badge: "Task Module",
    highlights: [
      "Task creation with estimated vs actual worked hours",
      "Status tracking: In Progress, Completed, Not Started",
      "Follow & Timeline progress tracking for each task"
    ]
  },
  {
    id: "calculate-points",
    title: "2. Score & Point Calculation",
    subtitle: "Automatic Total Score & Rating Calculation",
    description: "Calculates live score points based on completed task hours, accuracy, and defect ratio, generating clear numerical total scores.",
    iconName: "Calculator",
    badge: "Scoring Engine",
    highlights: [
      "Live Total Score calculation (e.g. +16.67 pts)",
      "Rating scores from 3/5 to 5/5 based on hours worked",
      "Transparent individual and team score tallies"
    ]
  },
  {
    id: "performance-analytics",
    title: "3. Performance Analytics & Leaderboard",
    subtitle: "Real-Time Employee Standings & Metrics",
    description: "Comprehensive dashboard displaying total score, daily average, completed tasks, defects logged, and full team leaderboard rankings.",
    iconName: "BarChart3",
    badge: "Analytics Hub",
    highlights: [
      "Overview cards: Total Score, Daily Average, Tasks, Defects",
      "Employee Leaderboard with Rank, Tasks, Fixes & Standing",
      "Filter by Personnel, All Time, or specific teams"
    ]
  },
  {
    id: "issue-management",
    title: "4. Issue & Bug Management",
    subtitle: "Centralized Defect Tracking & Priority SLA",
    description: "Log, search, sort, and resolve software issues with issue codes, project tags, priority levels, estimated hours, and status.",
    iconName: "AlertCircle",
    badge: "Issue Module",
    highlights: [
      "Structured bug reporting with unique Issue IDs",
      "Search, filter by assignee, project, status & date range",
      "Quick Add issue modal for instant team logging"
    ]
  },
  {
    id: "daily-average",
    title: "5. Daily Average Point Tracking",
    subtitle: "Past 30 Days Hours & Daily Velocity Report",
    description: "Tracks daily worked hours per employee with automated color-coded rating tiers to maintain consistent daily velocity.",
    iconName: "TrendingUp",
    badge: "Daily Tracking",
    highlights: [
      "Automatic Daily Average score calculation",
      "Color-coded ratings: <7.5h (3/5), 7.5-7.9h (4/5), 7.9-8.25h (5/5)",
      "Daily breakdown of tasks worked vs issues worked"
    ]
  },
  {
    id: "employee-performance",
    title: "6. Employee Performance Level Analysis",
    subtitle: "Overall Rating & Standing Evaluator",
    description: "Evaluates overall employee performance standing (e.g., Needs Attention, Top Standing) with average 5-star rating scores.",
    iconName: "Award",
    badge: "Level Evaluator",
    highlights: [
      "Automated standing evaluation based on output",
      "Average Score index (e.g. 4.35 / 5)",
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
    question: "What are the color-coded daily rating tiers?",
    answer: "Daily hours are automatically rated for clear visibility: Red (< 7.5 hrs, Rating 3/5), Yellow (7.5 - 7.9 hrs, Rating 4/5), Green (7.9 - 8.25 hrs, Rating 5/5), and Blue (> 8.25 hrs, Rating 5/5)."
  },
  {
    question: "How can I start using BMO Projects?",
    answer: "Simply visit https://app.bmoprojects.in/ or click 'Launch App' to log in, create tasks, report issues, and monitor real-time performance analytics."
  }
];
