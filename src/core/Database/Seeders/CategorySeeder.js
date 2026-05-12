import Category from '../../Models/Category.js';

export const seedCategories = async () => {
    try {
        const categoriesPayload = [
            { name: "Frontend Development", icon: "Layout", description: "User interface design and application logic." },
            { name: "Backend Development", icon: "Server", description: "Industrial servers and performant logic engines." },
            { name: "Full-Stack Development", icon: "Globe", description: "Holistic dynamic end-to-end ecosystem orchestration." },
            { name: "Mobile Development", icon: "Smartphone", description: "High performance native mobile applications runtime." },
            { name: "Cross-Platform Dev", icon: "Tablet", description: "Reusable multi-targeted viewport deployment stacks." },
            { name: "Game Development", icon: "Gamepad2", description: "Interactive logic visual rendering processing cores." },
            { name: "UI/UX & Graphics", icon: "Palette", description: "Design visual systems conceptual vector modeling." },
            { name: "Database & Cache", icon: "Database", description: "High-availability storage and retrieval engines." },
            { name: "Cloud Infrastructure", icon: "Cloud", description: "Elastic hyper-distributed serverless architectures." },
            { name: "DevOps & CI/CD", icon: "Terminal", description: "Automated lifecycle continuous shipping workflows." },
            { name: "Version Control Systems", icon: "GitBranch", description: "Collaborative parallel software mutation tracking." },
            { name: "Frameworks & Libraries", icon: "Box", description: "Pre-assembled structural baseline utility suites." },
            { name: "Programming Languages", icon: "Code2", description: "Abstract programmatic machine instruction syntaxes." },
            { name: "API & Web Services", icon: "Webhook", description: "Protocol exchange standardization communication vectors." },
            { name: "Testing & QA", icon: "CheckCircle2", description: "Automated deterministic quality assurance vectors." },
            { name: "Cybersecurity", icon: "ShieldAlert", description: "Cryptographic fortress hardening vulnerability solvers." },
            { name: "AI / Machine Learning", icon: "BrainCircuit", description: "Cognitive heuristic statistical neural model drivers." },
            { name: "Blockchain & Web3", icon: "Link", description: "Permissionless ledger distributed transactional states." },
            { name: "Embedded & IoT", icon: "Cpu", description: "Low-level bare-metal sensor actuation modules." },
            { name: "Payment Systems", icon: "CreditCard", description: "Financial ledger mediation transactional hubs." },
            { name: "Utilities & Tools", icon: "Wrench", description: "Productivity enhancement localized workspace tooling." },
            { name: "Server & Hosting", icon: "HardDrive", description: "Bare metal distribution orchestration environments." },
            { name: "Operating Systems", icon: "Monitor", description: "Core kernel hardware utilization layers environments." },
            { name: "Miscellaneous", icon: "Star", description: "Supplemental specialized domain knowledge clusters." }
        ];
        const categoriesToInsert = categoriesPayload.map(item => ({
            name: item.name,
            icon: item.icon,
            description: item.description,
            is_active: true
        }));
        await Category.deleteMany({});
        const createdRecords = await Category.create(categoriesToInsert);
        return createdRecords;
    } catch (error) {
        throw error;
    }
};
