export default {
    firstName: 'Emily',
    lastName: 'Johnson',
    jobTitle: 'Software Engineer',
    address: '123 Elm Street, CA 90210',
    phone: '(987)-654-3210',
    email: 'emily.johnson@example.com',
    themeColor: "#66ccff",
    summery: 'Passionate software engineer with 5+ years of experience in developing scalable web applications and working with cross-functional teams.',
    experience: [
        {
            id: 1,
            title: 'Software Engineer',
            companyName: 'Microsoft',
            city: 'Redmond',
            state: 'WA',
            startDate: 'Feb 2020',
            endDate: '',
            currentlyWorking: true,
            workSummery: 'Developed and maintained web applications using Angular and .NET.\n' +
                '• Collaborated with UX designers to create user-friendly interfaces.\n' +
                '• Implemented RESTful APIs to support front-end functionality.\n' +
                '• Participated in code reviews and provided constructive feedback.'
        },
        {
            id: 2,
            title: 'Junior Developer',
            companyName: 'Facebook',
            city: 'Menlo Park',
            state: 'CA',
            startDate: 'Jun 2017',
            endDate: 'Jan 2020',
            currentlyWorking: false,
            workSummery: 'Assisted in the development of web applications using React and Node.js.\n' +
                '• Worked closely with senior developers to learn best practices.\n' +
                '• Contributed to the development of internal tools to improve workflow.\n' +
                '• Wrote unit tests to ensure code quality and reliability.'
        }
    ],
    education: [
        {
            id: 1,
            universityName: 'Stanford University',
            startDate: 'Sep 2015',
            endDate: 'Jun 2017',
            degree: 'Master',
            major: 'Computer Science',
            description: 'Focused on software engineering and artificial intelligence. Completed a thesis on machine learning algorithms.'
        },
        {
            id: 2,
            universityName: 'University of California, Berkeley',
            startDate: 'Sep 2011',
            endDate: 'Jun 2015',
            degree: 'Bachelor',
            major: 'Computer Science',
            description: 'Studied core computer science concepts including algorithms, data structures, and software development.'
        }
    ],
    skills: [
        {
            id: 1,
            name: 'Angular',
            rating: 90,
        },
        {
            id: 2,
            name: 'React',
            rating: 85,
        },
        {
            id: 3,
            name: 'Node.js',
            rating: 80,
        },
        {
            id: 4,
            name: 'Python',
            rating: 95,
        }
    ]
};