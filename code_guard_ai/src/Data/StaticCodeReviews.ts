export default [
    {
        id: 1,
        name: "Auth Module Review",
        programmingLanguage: "TypeScript",
        security: 10,
        cleanliness: 15,
        maintainability: 20,
        File: new File(["export const add = (a: number, b: number): number => a + b;"], "code.ts", { type: "text/plain" }),
        modificationDate: new Date("2024-10-11T13:50:58.352Z"),
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
        ]
    },
    {
        id: 2,
        name: "CSV Processor Review",
        programmingLanguage: "Python",
        security: 20,
        cleanliness: 30,
        maintainability: 40,
        File: new File(["def add(a, b):\n    return a + b"], "code.py", { type: "text/plain" }),
        modificationDate: new Date("2024-12-10T09:12:44.000Z"),
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
        ]
    },
    {
        id: 3,
        name: "Frontend Form Validation",
        programmingLanguage: "JavaScript",
        security: 40,
        cleanliness: 50,
        maintainability: 60,
        File: new File(["function add(a, b) {\n  return a + b;\n}"], "code.js", { type: "text/plain" }),
        modificationDate: new Date("2024-08-18T15:44:01.000Z"),
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
        ]
    },
    {
        id: 4,
        name: "Database Query Layer",
        programmingLanguage: "Kotlin",
        security: 60,
        cleanliness: 70,
        maintainability: 80,
        File: new File(["fun add(a: Int, b: Int): Int = a + b"], "code.kt", { type: "text/plain" }),
        modificationDate: new Date("2024-11-30T10:21:31.000Z"),
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
        ]
    },
    {
        id: 5,
        name: "Payment Gateway Wrapper",
        programmingLanguage: "Java",
        security: 80,
        cleanliness: 90,
        maintainability: 100,
        File: new File(["public int add(int a, int b) { return a + b; }"], "code.java", { type: "text/plain" }),
        modificationDate: new Date("2025-02-05T20:00:00.000Z"),
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
        ]
    },
    {
        id: 6,
        name: "Inventory Microservice",
        programmingLanguage: "C#",
        security: 12,
        cleanliness: 15,
        maintainability: 18,
        File: new File(["public int Add(int a, int b) => a + b;"], "code.cs", { type: "text/plain" }),
        modificationDate: new Date("2025-03-01T13:00:00.000Z"),
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
        ]
    },
    {
        id: 7,
        name: "User Profile Component",
        programmingLanguage: "React",
        security: 25,
        cleanliness: 30,
        maintainability: 35,
        File: new File(["const Add = ({ a, b }) => a + b;"], "code.jsx", { type: "text/plain" }),
        modificationDate: new Date("2024-10-19T08:30:00.000Z"),
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
        ]
    },
    {
        id: 8,
        name: "Analytics Dashboard",
        programmingLanguage: "Vue.js",
        security: 45,
        cleanliness: 50,
        maintainability: 55,
        File: new File(["<script>\nexport default {\n  methods: {\n    add(a, b) { return a + b; }\n  }\n}\n</script>"], "code.vue", { type: "text/plain" }),
        modificationDate: new Date("2025-01-01T17:20:00.000Z"),
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
        ]
    },
    {
        id: 9,
        name: "Email Scheduler Service",
        programmingLanguage: "Ruby",
        security: 65,
        cleanliness: 70,
        maintainability: 75,
        File: new File(["def add(a, b)\n  a + b\nend"], "code.rb", { type: "text/plain" }),
        modificationDate: new Date("2024-09-15T22:05:00.000Z"),
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
        ]
    },
    {
        id: 10,
        name: "Notification Manager",
        programmingLanguage: "Kotlin",
        security: 85,
        cleanliness: 90,
        maintainability: 95,
        File: new File(["fun add(a: Int, b: Int): Int = a + b"], "code.kt", { type: "text/plain" }),
        modificationDate: new Date("2025-06-18T12:00:00.000Z"),
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
        ]
    }
];