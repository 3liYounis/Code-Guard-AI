export default [
    {
        id: 1,
        name: "Auth Module Review",
        file_content: "export const add = (a: number, b: number): number => a + b;",
        programming_language: "TypeScript",
        security: 10,
        cleanliness: 15,
        maintainability: 20,
        recommendations: [
            {
                id: 1,
                type: "Security",
                content: "Use environment variables for API secrets.",
                cite: "OWASP Node.js Security Cheat Sheet"
            },
            {
                id: 2,
                type: "Security",
                content: "Avoid logging sensitive authentication tokens.",
                cite: "OWASP Logging Guidelines"
            },
            {
                id: 3,
                type: "Maintainability",
                content: "Separate login and signup logic into different functions.",
                cite: "Clean Code by Robert C. Martin"
            }
        ],
        upload_date: new Date("2024-10-11T13:50:58.352Z").getTime()
    },
    {
        id: 2,
        name: "CSV Processor Review",
        file_content: "def add(a, b):\n    return a + b",
        programming_language: "Python",
        security: 20,
        cleanliness: 30,
        maintainability: 40,
        recommendations: [
            {
                id: 4,
                type: "Cleanliness",
                content: "Remove unused imports and redundant loops.",
                cite: "PEP8 Guidelines"
            },
            {
                id: 5,
                type: "Maintainability",
                content: "Use `with open()` statements for file handling.",
                cite: "Python Official Docs"
            },
            {
                id: 6,
                type: "Security",
                content: "Sanitize CSV fields before writing to disk.",
                cite: "OWASP File Handling Recommendations"
            }
        ],
        upload_date: new Date("2024-12-10T09:12:44.000Z").getTime()
    },
    {
        id: 3,
        name: "Frontend Form Validation",
        file_content: "function add(a, b) {\n  return a + b;\n}",
        programming_language: "JavaScript",
        security: 40,
        cleanliness: 50,
        maintainability: 60,
        recommendations: [
            {
                id: 7,
                type: "Security",
                content: "Escape input before inserting into the DOM.",
                cite: "OWASP XSS Prevention Cheat Sheet"
            },
            {
                id: 8,
                type: "Maintainability",
                content: "Use a custom hook for form state logic.",
                cite: "React Best Practices"
            },
            {
                id: 9,
                type: "Cleanliness",
                content: "Group validation logic in a separate utility file.",
                cite: "JavaScript Modularization Guide"
            }
        ],
        upload_date: new Date("2024-08-18T15:44:01.000Z").getTime()
    },
    {
        id: 4,
        name: "Database Query Layer",
        file_content: "fun add(a: Int, b: Int): Int = a + b",
        programming_language: "Kotlin",
        security: 60,
        cleanliness: 70,
        maintainability: 80,
        recommendations: [
            {
                id: 10,
                type: "Security",
                content: "Use parameterized queries to prevent SQL injection.",
                cite: "OWASP SQL Injection Prevention"
            },
            {
                id: 11,
                type: "Maintainability",
                content: "Encapsulate DB access inside a repository pattern.",
                cite: "Go Clean Architecture"
            },
            {
                id: 12,
                type: "Cleanliness",
                content: "Avoid mixing query logic with business logic.",
                cite: "Clean Architecture by Uncle Bob"
            }
        ],
        upload_date: new Date("2024-11-30T10:21:31.000Z").getTime()
    },
    {
        id: 5,
        name: "Payment Gateway Wrapper",
        file_content: "public int add(int a, int b) { return a + b; }",
        programming_language: "Java",
        security: 80,
        cleanliness: 90,
        maintainability: 100,
        recommendations: [
            {
                id: 13,
                type: "Security",
                content: "Mask card details in logs and error messages.",
                cite: "PCI-DSS Compliance Guide"
            },
            {
                id: 14,
                type: "Maintainability",
                content: "Implement interfaces to mock external services.",
                cite: "Effective Java"
            },
            {
                id: 15,
                type: "Cleanliness",
                content: "Follow consistent method naming conventions.",
                cite: "Google Java Style Guide"
            }
        ],
        upload_date: new Date("2025-02-05T20:00:00.000Z").getTime()
    },
    {
        id: 6,
        name: "Inventory Microservice",
        file_content: "public int Add(int a, int b) => a + b;",
        programming_language: "C#",
        security: 12,
        cleanliness: 15,
        maintainability: 18,
        recommendations: [
            {
                id: 16,
                type: "Cleanliness",
                content: "Organize models and services into separate folders.",
                cite: "Microsoft C# Coding Conventions"
            },
            {
                id: 17,
                type: "Security",
                content: "Restrict database access to least privilege.",
                cite: "OWASP Access Control Cheat Sheet"
            },
            {
                id: 18,
                type: "Maintainability",
                content: "Add XML comments to public methods.",
                cite: "C# Documentation Guidelines"
            }
        ],
        upload_date: new Date("2025-03-01T13:00:00.000Z").getTime()
    },
    {
        id: 7,
        name: "User Profile Component",
        file_content: "const Add = ({ a, b }) => a + b;",
        programming_language: "JavaScript", // originally "React"
        security: 25,
        cleanliness: 30,
        maintainability: 35,
        recommendations: [
            {
                id: 19,
                type: "Maintainability",
                content: "Break large JSX blocks into smaller subcomponents.",
                cite: "React Docs - Component Design"
            },
            {
                id: 20,
                type: "Cleanliness",
                content: "Use semantic HTML elements where applicable.",
                cite: "W3C HTML Accessibility Guidelines"
            },
            {
                id: 21,
                type: "Security",
                content: "Ensure profile data is not exposed to unauthorized users.",
                cite: "OWASP IDOR Prevention"
            }
        ],
        upload_date: new Date("2024-10-19T08:30:00.000Z").getTime()
    },
    {
        id: 8,
        name: "Analytics Dashboard",
        file_content: `<script>\nexport default {\n  methods: {\n    add(a, b) { return a + b; }\n  }\n}\n</script>`,
        programming_language: "JavaScript", // originally "Vue.js"
        security: 45,
        cleanliness: 50,
        maintainability: 55,
        recommendations: [
            {
                id: 22,
                type: "Cleanliness",
                content: "Use computed properties instead of in-template logic.",
                cite: "Vue Style Guide"
            },
            {
                id: 23,
                type: "Maintainability",
                content: "Move API logic to a service layer.",
                cite: "Vue Project Structure Best Practices"
            },
            {
                id: 24,
                type: "Security",
                content: "Guard routes based on user roles.",
                cite: "Vue Router Security Patterns"
            }
        ],
        upload_date: new Date("2025-01-01T17:20:00.000Z").getTime()
    },
    {
        id: 9,
        name: "Email Scheduler Service",
        file_content: "def add(a, b)\n  a + b\nend",
        programming_language: "Ruby",
        security: 65,
        cleanliness: 70,
        maintainability: 75,
        recommendations: [
            {
                id: 25,
                type: "Security",
                content: "Use secure tokens instead of session IDs.",
                cite: "Ruby on Rails Security Guide"
            },
            {
                id: 26,
                type: "Cleanliness",
                content: "Avoid redundant logic in mailer templates.",
                cite: "Ruby Style Guide"
            },
            {
                id: 27,
                type: "Maintainability",
                content: "Encapsulate email logic into service objects.",
                cite: "Rails Patterns"
            }
        ],
        upload_date: new Date("2024-09-15T22:05:00.000Z").getTime()
    },
    {
        id: 10,
        name: "Notification Manager",
        file_content: "fun add(a: Int, b: Int): Int = a + b",
        programming_language: "Kotlin",
        security: 85,
        cleanliness: 90,
        maintainability: 95,
        recommendations: [
            {
                id: 28,
                type: "Maintainability",
                content: "Favor immutable data structures for predictable state.",
                cite: "Kotlin Coding Conventions"
            },
            {
                id: 29,
                type: "Security",
                content: "Avoid exposing internal notifications via public endpoints.",
                cite: "Android Security Best Practices"
            },
            {
                id: 30,
                type: "Cleanliness",
                content: "Avoid deeply nested conditional blocks.",
                cite: "Kotlin Style Guide"
            }
        ],
        upload_date: new Date("2025-06-18T12:00:00.000Z").getTime()
    }
]