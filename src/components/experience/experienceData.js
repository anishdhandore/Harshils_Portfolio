// Experience and education, oldest first (the wheel turns forward through time).
// Dates are YYYY-MM; `end: null` means current. Content comes from the resume
// (public/HarshilPatelResume.pdf).
//
// - `summary`: one line on the role
// - `highlights`: what he did
// - `impact`: what the work delivered; `metric` is optional
export const ROLES = [
  {
    start: '2021-08',
    end: '2021-11',
    role: 'Process Engineering Intern',
    company: 'Dove Pharma LLP',
    location: 'India',
    summary: 'Supported engineering teams with process documentation and data analysis for ongoing operations.',
    highlights: [
      'Supported engineering teams with process documentation, data collection and analysis.',
      'Assisted with engineering calculations and spreadsheet-based tracking for validation and compliance activities.',
      'Prepared technical documentation and summaries for internal engineering review.',
    ],
    impact: 'Kept validation and compliance work traceable with clear calculations, tracking and review-ready documentation.',
    metric: null,
    tags: ['Process documentation', 'Data analysis', 'Validation', 'Technical writing'],
  },
  {
    start: '2022-08',
    end: '2024-07',
    role: 'A.S.-T in Mathematics',
    company: 'Palomar College',
    location: 'San Marcos, CA',
    summary: 'Associate Degree in Science for Transfer in Mathematics, the foundation for transferring into aerospace engineering.',
    highlights: [
      'Dean’s List in Fall 2022, Spring 2023, Fall 2023, Spring 2024 and Summer 2024.',
      'Transferred to UC San Diego’s B.S. in Aerospace Engineering.',
    ],
    impact: 'Built the mathematical base for aerodynamics, controls and computational methods coursework.',
    metric: { value: '3.94', label: 'GPA out of 4.0' },
    tags: ['Mathematics', 'Dean’s List'],
  },
  {
    start: '2024-09',
    end: '2026-12',
    role: 'B.S. Aerospace Engineering',
    company: 'UC San Diego',
    location: 'La Jolla, CA',
    summary: 'Aircraft design, computational analysis and hardware integration, graduating December 2026.',
    highlights: [
      'Coursework: aerodynamics, advanced fluid mechanics, propulsion, linear controls, computational methods, flight simulation techniques, aerospace structures and senior aerospace design.',
      'Senior design: Jäger-QRF hybrid VTOL (MAE 155A) and Nimbus V4 flying-wing cargo aircraft (MAE 155B).',
    ],
    impact: 'Carried two aircraft from requirements through sizing and stability, and one all the way to flight test.',
    metric: { value: '4×', label: 'UCSD Provost Honors' },
    tags: ['Aerodynamics', 'Propulsion', 'Controls', 'Aircraft design'],
  },
  {
    start: '2026-01',
    end: '2026-09',
    role: 'Instructional Assistant',
    company: 'Physics Department, UC San Diego',
    location: 'La Jolla, CA',
    summary: 'Supported physics instruction in the classroom and the lab.',
    highlights: [
      'Collaborated with professors and teaching staff to keep instruction aligned with course objectives.',
      'Helped students connect theoretical physics principles to practical applications in class and lab.',
      'Graded assignments and examinations.',
    ],
    impact: 'Helped students turn physics theory into working intuition, and kept course delivery consistent across the teaching team.',
    metric: null,
    tags: ['Teaching', 'Physics', 'Lab instruction'],
  },
  {
    start: '2026-06',
    end: '2026-08',
    role: 'Test Engineering Intern',
    company: 'Sensor Systems LLC',
    location: 'St. Petersburg, FL',
    summary: 'Qualification testing of precision potentiometers for mission-critical aerospace and defense applications.',
    highlights: [
      'Ran clutch-release-time tests on clutched potentiometer assemblies using controlled-speed actuation and high-speed timing instrumentation.',
      'Executed multi-axis vibration qualification on shaker systems with accelerometers and data acquisition, in 3-hour cycles across X, Y and Z.',
      'Performed full-travel linearity and output-smoothness testing with precision actuators, multimeters, oscilloscopes and automated logging.',
    ],
    impact: 'Verified mechanical response, overtravel protection, durability and electrical stability against customer specifications.',
    metric: { value: '3-axis', label: 'vibration qualification, 3-hour test cycles' },
    tags: ['Vibration testing', 'Data acquisition', 'Instrumentation', 'Qualification'],
  },
  {
    start: '2026-09',
    end: null,
    role: 'Project Engineer',
    company: 'Big Sky Electric',
    location: 'San Marcos, CA',
    summary: 'Planning and coordinating onsite engineering for water and wastewater infrastructure projects.',
    highlights: [
      'Assist the project manager in planning and coordinating onsite engineering activities while tracking budgets, documentation and schedule updates.',
      'Coordinate project submittals and track RFIs and PCOs to resolve technical issues.',
      'Work with foremen, superintendents, suppliers and subcontractors to keep field operations efficient.',
    ],
    impact: 'Keeps technical issues moving to resolution and field work on schedule and on budget.',
    metric: null,
    tags: ['Project coordination', 'RFIs & PCOs', 'Submittals', 'Budget tracking'],
  },
];
