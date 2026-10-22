export const dailyRoute = [
  {
    id: '1',
    time: '07:30',
    title: 'Wake up & hydrate',
    location: 'Home',
    completed: true,
    type: 'Personal'
  },
  {
    id: '2',
    time: '08:00',
    title: 'Breakfast & prep',
    location: 'Kitchen',
    completed: true,
    type: 'Routine'
  },
  {
    id: '3',
    time: '08:45',
    title: 'School run',
    location: 'School / Drop-off',
    completed: false,
    type: 'Travel'
  },
  {
    id: '4',
    time: '09:30',
    title: 'Work block',
    location: 'Office',
    completed: false,
    type: 'Work'
  },
  {
    id: '5',
    time: '12:30',
    title: 'Lunch & recharge',
    location: 'Cafe',
    completed: false,
    type: 'Break'
  },
  {
    id: '6',
    time: '18:00',
    title: 'Grocery stop',
    location: 'Market',
    completed: false,
    type: 'Errands'
  },
  {
    id: '7',
    time: '20:00',
    title: 'Family dinner',
    location: 'Home',
    completed: false,
    type: 'Family'
  }
];

export const checklist = [
  { id: 'c1', title: 'Pack work bag', done: true },
  { id: 'c2', title: 'Check school items', done: true },
  { id: 'c3', title: 'Charge phone', done: false },
  { id: 'c4', title: 'Prepare lunch', done: false },
  { id: 'c5', title: 'Buy groceries', done: false }
];

export const profileStats = [
  { label: 'On-time rate', value: '92%' },
  { label: 'Active routes', value: '5' },
  { label: 'Saved trips', value: '18' }
];

export const notifications = [
  {
    id: 'n1',
    title: 'School route reminder',
    message: 'Leave 10 minutes earlier for traffic.',
    time: '8 min ago',
    read: false
  },
  {
    id: 'n2',
    title: 'Lunch break suggestion',
    message: 'A quiet cafe is 5 minutes away.',
    time: '1 hour ago',
    read: false
  },
  {
    id: 'n3',
    title: 'Grocery list update',
    message: 'Your list is ready to review.',
    time: 'Yesterday',
    read: true
  }
];

export const dashboardMetrics = [
  { label: 'Trips today', value: '4', change: '+1 vs yesterday', color: '#4F46E5' },
  { label: 'Minutes saved', value: '26', change: 'Better than last week', color: '#10B981' },
  { label: 'Tasks done', value: '5/7', change: '2 remaining', color: '#F59E0B' }
];

export const upcomingTrips = [
  { id: 't1', title: 'School run', time: '08:40', duration: '18 min', status: 'On time' },
  { id: 't2', title: 'Office commute', time: '09:20', duration: '25 min', status: 'Safe route' },
  { id: 't3', title: 'Grocery stop', time: '18:10', duration: '12 min', status: 'Low traffic' }
];

export const calendarEvents = [
  { id: 'e1', day: 'Mon', title: 'Team meeting', time: '09:00', color: '#4F46E5' },
  { id: 'e2', day: 'Tue', title: 'Lunch with family', time: '12:30', color: '#10B981' },
  { id: 'e3', day: 'Wed', title: 'Grocery run', time: '18:00', color: '#F59E0B' },
  { id: 'e4', day: 'Thu', title: 'Doctor visit', time: '13:45', color: '#EF4444' }
];
