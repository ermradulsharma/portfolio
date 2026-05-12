import Technology from '../../Models/Technology.js';
import Category from '../../Models/Category.js';

export const seedTechnologies = async () => {
    try {
        const categories = await Category.find({});
        const findCat = (name) => {
            const match = categories.find(c => c.name.toLowerCase().includes(name.toLowerCase()));
            return match ? match._id : null;
        };

        const frontendId = findCat('Frontend Development');
        const backendId = findCat('Backend Development');
        const fullstackId = findCat('Full-Stack Development');
        const mobileId = findCat('Mobile Development');
        const crossPlatformId = findCat('Cross-Platform Dev');
        const gameId = findCat('Game Development');
        const designId = findCat('UI/UX & Graphics');
        const dbId = findCat('Database & Cache');
        const cloudId = findCat('Cloud Infrastructure');
        const devopsId = findCat('DevOps & CI/CD');
        const versionId = findCat('Version Control Systems');
        const frameworkId = findCat('Frameworks & Libraries');
        const langId = findCat('Programming Languages');
        const apiId = findCat('API & Web Services');
        const testId = findCat('Testing & QA');
        const cyberId = findCat('Cybersecurity');
        const aiId = findCat('AI / Machine Learning');
        const blockId = findCat('Blockchain & Web3');
        const iotId = findCat('Embedded & IoT');
        const payId = findCat('Payment Systems');
        const toolId = findCat('Utilities & Tools');
        const serverId = findCat('Server & Hosting');
        const osId = findCat('Operating Systems');
        const otherId = findCat('Miscellaneous');

        const techData = [
            // 🎨 FRONTEND (The Universal Library)
            { name: 'HTML5/CSS3', category: frontendId, description: 'Core web structure and semantic visual styling language.', icon: 'html' },
            { name: 'JavaScript (ES6+)', category: frontendId, description: 'Native core programming engine of the modern client-side web.', icon: 'js' },
            { name: 'React.js', category: frontendId, description: 'World-standard state-driven component library for user interfaces.', icon: 'react' },
            { name: 'Angular', category: frontendId, description: 'Comprehensive full-scale component-based enterprise framework.', icon: 'angular' },
            { name: 'Vue.js', category: frontendId, description: 'Progressive incrementally-adoptable reactive modern UI framework.', icon: 'vue' },
            { name: 'Svelte / SvelteKit', category: frontendId, description: 'No-virtual-DOM cybernetically enhanced compile-time UI engine.', icon: 'svelte' },
            { name: 'Solid.js', category: frontendId, description: 'Declarative efficient and flexible JavaScript UI library compiler.', icon: 'solidjs' },
            { name: 'Astro', category: frontendId, description: 'All-in-one fast content driven island architecture web framework.', icon: 'astro' },
            { name: 'Qwik', category: frontendId, description: 'Instantly interactive HTML first resumable framework hydration free.', icon: 'qwik' },
            { name: 'Lit', category: frontendId, description: 'Simple library building fast lightweight modern web components.', icon: 'lit' },
            { name: 'Preact', category: frontendId, description: 'Lightweight high-performance alternative to React with same API.', icon: 'preact' },
            { name: 'Alpine.js', category: frontendId, description: 'Minimal tool for composing behavior directly in markup.', icon: 'alpine' },
            { name: 'Redux Toolkit', category: frontendId, description: 'Official opinionated standardized state management logic.', icon: 'redux' },
            { name: 'Zustand', category: frontendId, description: 'Small, fast and scalable bearbones state-management solution.', icon: 'zustand' },
            { name: 'Recoil', category: frontendId, description: 'Experimental state management atomic architecture for React apps.', icon: 'recoil' },
            { name: 'MobX', category: frontendId, description: 'Simple scalable transparent functional reactive state management.', icon: 'mobx' },
            { name: 'Tailwind CSS', category: frontendId, description: 'Modern utility-first rapid layout building utility engine.', icon: 'tailwind' },
            { name: 'Bootstrap', category: frontendId, description: 'Ubiquitous foundational responsive component UI library toolkit.', icon: 'bootstrap' },
            { name: 'Bulma', category: frontendId, description: 'Modern CSS framework based Flexbox completely flexbox grid.', icon: 'bulma' },
            { name: 'Foundation', category: frontendId, description: 'Advanced responsive frontend framework semantic and responsive.', icon: 'foundation' },
            { name: 'Material UI (MUI)', category: frontendId, description: 'Google material design implemented system for React component ecosystem.', icon: 'mui' },
            { name: 'Chakra UI', category: frontendId, description: 'Accessible modular simple building blocks for component interfaces.', icon: 'chakra' },
            { name: 'Ant Design', category: frontendId, description: 'Enterprise-level UI design language and heavy Component suite.', icon: 'antd' },
            { name: 'Semantic UI', category: frontendId, description: 'Modern design development framework empowers beautiful responsive layout.', icon: 'semantic' },
            { name: 'SASS / SCSS', category: frontendId, description: 'Programmatic extension of standard stylesheet scripting language.', icon: 'sass' },
            { name: 'LESS', category: frontendId, description: 'Backward compatible CSS preprocessor language extension.', icon: 'less' },
            { name: 'Styled Components', category: frontendId, description: 'CSS-in-JS visual primitives styling engine for component era.', icon: 'styled' },
            { name: 'Emotion', category: frontendId, description: 'High performance lightweight powerful library designed css-in-js.', icon: 'emotion' },
            { name: 'Vite', category: frontendId, description: 'Next-generation blazing fast development frontend tooling server.', icon: 'vite' },
            { name: 'Webpack', category: frontendId, description: 'Static module universal javascript asset bundler system.', icon: 'webpack' },
            { name: 'Parcel', category: frontendId, description: 'Zero configuration blazing fast web application bundler packer.', icon: 'parcel' },
            { name: 'Gulp', category: frontendId, description: 'Automates slow repetitive workflow enhancement build system.', icon: 'gulp' },
            { name: 'jQuery', category: frontendId, description: 'Classic versatile legacy DOM traversing manipulation library.', icon: 'jquery' },
            { name: 'Handlebars.js', category: frontendId, description: 'Minimal templating build semantic templates effectively with ease.', icon: 'handlebars' },
                      // ⚙️ BACKEND (Comprehensive Engines)
            { name: 'PHP 8+', category: backendId, description: 'High-performance scripting powerhouse dominating the modern server web.', icon: 'php' },
            { name: 'Node.js', category: backendId, description: 'Chrome V8 engine event-driven scalable runtime environment.', icon: 'node' },
            { name: 'Python Backend', category: backendId, description: 'Dynamic interpretative dynamic logic for server computation.', icon: 'python' },
            { name: 'Java Spring', category: backendId, description: 'Enterprise heavy application application JVM execution context.', icon: 'java' },
            { name: 'C# ASP.NET', category: backendId, description: 'High-performance cross-platform server logic microsoft core.', icon: 'dotnet' },
            { name: 'Golang Backend', category: backendId, description: 'Extremely fast concurrent execution performant system backend.', icon: 'golang' },
            { name: 'Ruby on Rails Backend', category: backendId, description: 'Productivity optimized server side scripting implementation.', icon: 'ruby' },
            { name: 'Elixir / Phoenix', category: backendId, description: 'Scalable maintainable concurrent systems fault tolerance.', icon: 'elixir' },
            { name: 'Scala / Play', category: backendId, description: 'Functional and object oriented scalable JVM powerhouse tool.', icon: 'scala' },
            { name: 'WebSocket', category: backendId, description: 'Two-way interactive session realtime persistence core protocol.', icon: 'websocket' },

            // 🏢 FRAMEWORKS & LIBRARIES & CMS (Exhaustive Listing)
            { name: 'Laravel', category: frameworkId, description: 'Rich holistic MVC framework elegant delivery infrastructure.', icon: 'laravel' },
            { name: 'Next.js', category: frameworkId, description: 'Enterprise production React framework hybrid static render.', icon: 'next' },
            { name: 'Remix', category: frameworkId, description: 'Full stack web framework focused on web standards speed.', icon: 'remix' },
            { name: 'Django', category: frameworkId, description: 'Batteries-included high-level secure rapid Python framework.', icon: 'django' },
            { name: 'Flask', category: frameworkId, description: 'Lightweight micro web server gateway python container engine.', icon: 'flask' },
            { name: 'Express.js', category: frameworkId, description: 'Fast unopinionated minimalist web layer server for Node.', icon: 'express' },
            { name: 'NestJS', category: frameworkId, description: 'Progressive Node.js architecture for enterprise-grade apps.', icon: 'nestjs' },
            { name: 'Spring Boot', category: frameworkId, description: 'Stand-alone production-grade heavy application bootstrap.', icon: 'spring' },
            { name: 'Ruby on Rails', category: frameworkId, description: 'Convention over configuration productivity delivery MVP.', icon: 'rails' },
            { name: 'Symfony', category: frameworkId, description: 'Stable enterprise decoupled reusable PHP modular blocks.', icon: 'symfony' },
            { name: 'Nuxt.js', category: frameworkId, description: 'Intuitive hybrid rendering application framework for Vue.', icon: 'nuxt' },
            { name: 'FastAPI', category: frameworkId, description: 'Modern super fast high performance auto-documentation python framework.', icon: 'fastapi' },
            { name: 'WordPress', category: frameworkId, description: 'Ubiquitous content management software powerhouse system web.', icon: 'wordpress' },
            { name: 'Strapi', category: frameworkId, description: 'Leading open-source headless content management system CMS.', icon: 'strapi' },
            { name: 'Ghost', category: frameworkId, description: 'Professional publishing modern node based headless system.', icon: 'ghost' },

            // 💾 DATABASE & CACHE (Global Scale)
            { name: 'MySQL', category: dbId, description: 'World’s most widely deployed robust open-source relational RDBMS.', icon: 'mysql' },
            { name: 'PostgreSQL', category: dbId, description: 'Advanced industrial enterprise object-relational transactional SQL engine.', icon: 'postgres' },
            { name: 'MariaDB', category: dbId, description: 'Community-developed high-integrity robust drop-in replacement for MySQL.', icon: 'mariadb' },
            { name: 'Oracle Database', category: dbId, description: 'Multi-model enterprise relational database management architecture.', icon: 'oracle' },
            { name: 'Microsoft SQL Server', category: dbId, description: 'Enterprise-grade relational core system created by Microsoft.', icon: 'mssql' },
            { name: 'CockroachDB', category: dbId, description: 'Cloud-native distributed SQL transactional survivor database.', icon: 'cockroach' },
            { name: 'MongoDB', category: dbId, description: 'Leading modern scalable schema-flexible distributed NoSQL store.', icon: 'mongodb' },
            { name: 'Firebase Realtime DB', category: dbId, description: 'Cloud-hosted NoSQL database dynamic json synced in real-time.', icon: 'firebase' },
            { name: 'Firestore', category: dbId, description: 'Scalable, hierarchical NoSQL cloud database for mobile/web/server.', icon: 'firestore' },
            { name: 'Redis', category: dbId, description: 'Ultrafast advanced in-memory caching data structure store matrix.', icon: 'redis' },
            { name: 'Memcached', category: dbId, description: 'Distributed high-performance simple generic caching daemon memory.', icon: 'memcached' },
            { name: 'Elasticsearch', category: dbId, description: 'Distributed powerful RESTful analytical text search cluster engine.', icon: 'elastic' },
            { name: 'Amazon DynamoDB', category: dbId, description: 'Key-value document database delivering single-digit millisecond scale.', icon: 'dynamodb' },
            { name: 'Apache Cassandra', category: dbId, description: 'Highly-scalable partitioned row store high-availability distributed NoSQL.', icon: 'cassandra' },
            { name: 'CouchDB', category: dbId, description: 'Seamless multi-master sync distributed database scalable cluster.', icon: 'couchdb' },
            { name: 'Neo4j', category: dbId, description: 'World leading native graph database connected data solver.', icon: 'neo4j' },
            { name: 'InfluxDB', category: dbId, description: 'High-performance purpose-built optimized time-series platform store.', icon: 'influx' },
            { name: 'ClickHouse', category: dbId, description: 'Ultrafast open-source OLAP real-time analytics database columnar.', icon: 'clickhouse' },
            { name: 'Snowflake', category: dbId, description: 'Data cloud unifying warehousing, lakes, analytic engineering cloud.', icon: 'snowflake' },
            { name: 'Google BigQuery', category: dbId, description: 'Completely serverless highly-scalable cloud warehouse intelligence.', icon: 'bigquery' },
            { name: 'RESTful API', category: apiId, description: 'Standard stateless uniform architectural data protocol layer.', icon: 'api' },
            { name: 'GraphQL', category: apiId, description: 'Declarative strongly-typed client-defined query execution.', icon: 'graphql' },
            { name: 'gRPC', category: apiId, description: 'High performance, open source universal RPC framework engine.', icon: 'grpc' },
            { name: 'tRPC', category: apiId, description: 'End-to-end typesafe APIs made easy without code generation.', icon: 'trpc' },
            { name: 'Swagger / OpenAPI', category: apiId, description: 'Standard description language specifying RESTful API data.', icon: 'swagger' },
            { name: 'SOAP / XML', category: apiId, description: 'Historical enterprise standardized communication protocol system.', icon: 'soap' },

            // ☁️ CLOUD INFRASTRUCTURE (Infinite Reach)
            { name: 'AWS Operations', category: cloudId, description: 'Industry-leading global comprehensive on-demand cloud scaling.', icon: 'aws' },
            { name: 'Microsoft Azure', category: cloudId, description: 'Ever-expanding set of enterprise cloud services platform compute.', icon: 'azure' },
            { name: 'Google Cloud Platform', category: cloudId, description: 'Suite of high-performance compute machine-learning cloud stack.', icon: 'gcp' },
            { name: 'DigitalOcean', category: cloudId, description: 'Developer cloud simple platform scalable compute engine droplets.', icon: 'do' },
            { name: 'Linode / Akamai', category: cloudId, description: 'Accelerate innovation simple affordable accessible computing.', icon: 'linode' },
            { name: 'Heroku', category: cloudId, description: 'Platform enabling builders to build deliver deploy monitor apps.', icon: 'heroku' },
            { name: 'Vercel', category: cloudId, description: 'Optimized platform for frontend frameworks dynamic static hosting.', icon: 'vercel' },
            { name: 'Netlify', category: cloudId, description: 'Intuitive comprehensive automated build deploy serverless hosting.', icon: 'netlify' },
            { name: 'Cloudflare Workers', category: cloudId, description: 'Deploy serverless code across global network instantly speed.', icon: 'cloudflare' },

            // 🛠️ DEVOPS & CI/CD (Total Automation Flow)
            { name: 'Docker', category: devopsId, description: 'Standard isolation system containerizing native workloads.', icon: 'docker' },
            { name: 'Kubernetes (K8s)', category: devopsId, description: 'Orchestration framework for automating containerized apps.', icon: 'k8s' },
            { name: 'Helm', category: devopsId, description: 'The package manager tool finding sharing build for kubernetes.', icon: 'helm' },
            { name: 'Terraform', category: devopsId, description: 'Infrastructure as Code open-source automation tool software.', icon: 'terraform' },
            { name: 'Ansible', category: devopsId, description: 'Radically simple agentless IT automation orchestrator suite.', icon: 'ansible' },
            { name: 'ArgoCD', category: devopsId, description: 'Declarative GitOps continuous delivery automated engine ops.', icon: 'argocd' },
            { name: 'GitLab CI/CD', category: devopsId, description: 'Native DevOps integrated tool pipeline lifecycle management.', icon: 'gitlabci' },
            { name: 'GitHub Actions', category: devopsId, description: 'Powerful event-driven workflow automation direct integrated.', icon: 'githubactions' },
            { name: 'Jenkins', category: devopsId, description: 'Leading open source automation continuous integration server.', icon: 'jenkins' },
            { name: 'CircleCI', category: devopsId, description: 'Modern continuous integration cloud platform automation speed.', icon: 'circleci' },
            { name: 'Travis CI', category: devopsId, description: 'Market leader distributed built continuous integration hosting.', icon: 'travis' },
            { name: 'Vagrant', category: devopsId, description: 'Lightweight reproducible portable development environments tool.', icon: 'vagrant' },

            // 🔐 CYBERSECURITY & AUTH (Impenetrable)
            { name: 'JWT', category: cyberId, description: 'RFC 7519 secure compact claim transmission token system.', icon: 'jwt' },
            { name: 'OAuth 2.0', category: cyberId, description: 'Universal delegated access authority framework federation.', icon: 'oauth' },
            { name: 'Auth0', category: cyberId, description: 'Adaptable identity platform easily integration web enterprise.', icon: 'auth0' },
            { name: 'Okta', category: cyberId, description: 'Cloud software helps companies manage automate user auth.', icon: 'okta' },
            { name: 'Firebase Auth', category: cyberId, description: 'Drop-in end-to-end cloud-hosted authentication system.', icon: 'firebaseauth' },
            { name: 'Laravel Passport', category: cyberId, description: 'Full enterprise-ready OAuth2 server system integration.', icon: 'passport' },
            { name: 'Laravel Sanctum', category: cyberId, description: 'Featherweight API mobile token stateless issuing center.', icon: 'sanctum' },
            { name: 'OpenID Connect', category: cyberId, description: 'Simple identity layer on top OAuth 2 protocol verifying.', icon: 'openid' },


            // 🧪 TESTING & QA
            { name: 'Jest', category: testId, description: 'Modern simplistic JavaScript testing verification suite.', icon: 'jest' },
            { name: 'Mocha', category: testId, description: 'Feature-rich dynamic JavaScript test framework running node.', icon: 'mocha' },
            { name: 'PHPUnit', category: testId, description: 'Programmatic assertions unit testing oriented execution framework.', icon: 'phpunit' },
            { name: 'Postman', category: testId, description: 'Collaborative API exploration testing verification platform.', icon: 'postman' },
            { name: 'Cypress', category: testId, description: 'Fast and easy reliable deterministic web testing anywhere.', icon: 'cypress' },
            { name: 'Selenium', category: testId, description: 'Automates universal web browsers for testing scalable flow.', icon: 'selenium' },
            { name: 'Laravel Dusk', category: testId, description: 'Expressive browser automation testing api standalone platform.', icon: 'dusk' },

            // 💳 PAYMENT SYSTEMS
            { name: 'Stripe', category: payId, description: 'Financial infrastructure for high growth globalized internet.', icon: 'stripe' },
            { name: 'PayPal', category: payId, description: 'Easier secure way to pay and get paid online money transfers.', icon: 'paypal' },
            { name: 'Razorpay', category: payId, description: 'Only payments solution in India allowing automated transactions.', icon: 'razorpay' },
            { name: 'Authorize.Net', category: payId, description: 'Payment gateway accepting payments anywhere securely easily.', icon: 'authorize' },

            // 🔧 UTILITIES & TOOLS
            { name: 'VS Code', category: toolId, description: 'Code editor redefined optimized for building debug cloud.', icon: 'vscode' },
            { name: 'PHPStorm', category: toolId, description: 'Intelligent code editor for smart PHP development ecosystem.', icon: 'phpstorm' },
            { name: 'Slack', category: toolId, description: 'New way to communicate with whole team efficiently.', icon: 'slack' },
            { name: 'Trello', category: toolId, description: 'Visual tool enabling users to manage global projects boards.', icon: 'trello' },
            { name: 'Composer', category: toolId, description: 'Dynamic standard dependency manager for high PHP packages.', icon: 'composer' },
            { name: 'NPM / Yarn / pnpm', category: toolId, description: 'Client-side package installer ecosystems package managers.', icon: 'npm' },
            { name: 'Figma', category: toolId, description: 'Collaborative primary UI/UX visual design canvas engine.', icon: 'figma' },
            { name: 'Jira', category: toolId, description: 'Issue tracking product development system software projects.', icon: 'jira' },

            // 📱 MOBILE DEVELOPMENT (NATIVE)
            { name: 'Swift / iOS', category: mobileId, description: 'Powerful intuitive development native programming for Apple.', icon: 'swift' },
            { name: 'Kotlin / Android', category: mobileId, description: 'Modern statically typed official programming for Android apps.', icon: 'kotlin' },
            { name: 'Objective-C', category: mobileId, description: 'Primary legacy general-purpose language used Apple MacOS.', icon: 'objc' },
            { name: 'Java (Android SDK)', category: mobileId, description: 'Classic standard application framework building blocks native.', icon: 'javaandroid' },

            // 🔗 CROSS-PLATFORM DEV
            { name: 'Flutter', category: crossPlatformId, description: 'Google multi-platform UI toolkit compiled mobile web apps.', icon: 'flutter' },
            { name: 'React Native', category: crossPlatformId, description: 'Create native rendering apps for Android iOS using React.', icon: 'reactnative' },
            { name: 'Xamarin', category: crossPlatformId, description: 'Dotnet developer enterprise native apps ecosystem toolkit.', icon: 'xamarin' },
            { name: 'Ionic Framework', category: crossPlatformId, description: 'Open source mobile toolkit high-performance building web.', icon: 'ionic' },

            // 🎮 GAME DEVELOPMENT
            { name: 'Unity Engine', category: gameId, description: 'Real-time interactive comprehensive 3D creation creation world.', icon: 'unity' },
            { name: 'Unreal Engine', category: gameId, description: 'State-of-the-art open 3D creation real-time render power.', icon: 'unreal' },
            { name: 'Godot Engine', category: gameId, description: 'Multi-platform 2D 3D open-source license-free game engine.', icon: 'godot' },

            // 🧠 AI & MACHINE LEARNING (Intelligent Edge)
            { name: 'Python ML Ecosystem', category: aiId, description: 'Master powerhouse libraries powering whole data pipelines.', icon: 'python' },
            { name: 'TensorFlow', category: aiId, description: 'End-to-end open source machine learning AI framework lib.', icon: 'tensorflow' },
            { name: 'PyTorch', category: aiId, description: 'Scalable flexible optimized tensor research machine learning.', icon: 'pytorch' },
            { name: 'LangChain', category: aiId, description: 'Framework developing applications powered language models.', icon: 'langchain' },
            { name: 'Hugging Face', category: aiId, description: 'AI community building future of open-source science community.', icon: 'huggingface' },
            { name: 'OpenCV', category: aiId, description: 'Open source real-time computer vision high performance lib.', icon: 'opencv' },
            { name: 'Scikit-learn', category: aiId, description: 'Simple efficient predictive data analysis mining tool lib.', icon: 'scikit' },

            // 🔗 BLOCKCHAIN & WEB3 (Decentralized)
            { name: 'Solidity', category: blockId, description: 'Contract-oriented language writing smart implementation ledger.', icon: 'solidity' },
            { name: 'Ethereum / Web3.js', category: blockId, description: 'Decentralized open-source blockchain secure state network.', icon: 'ethereum' },
            { name: 'Solana / Rust', category: blockId, description: 'Web-scale blockchain powering scalable crypto apps solutions.', icon: 'solana' },
            { name: 'Polygon', category: blockId, description: 'Decentralized scaling platform for building Ethereum web.', icon: 'polygon' },
            { name: 'Hyperledger Fabric', category: blockId, description: 'Enterprise permissioned blockchain architecture ecosystem.', icon: 'hyperledger' },

            // 📡 EMBEDDED & IOT (Hardware Layer)
            { name: 'Raspberry Pi', category: iotId, description: 'Credit-card computational single hardware module computer.', icon: 'raspberrypi' },
            { name: 'Arduino Ecosystem', category: iotId, description: 'Open-source prototyping simple microcontroller circuits board.', icon: 'arduino' },
            { name: 'ESP32 / ESP8266', category: iotId, description: 'Low-cost low-power system on a chip WiFi integrated.', icon: 'esp32' },
            { name: 'MicroPython', category: iotId, description: 'Lean efficient implementation Python 3 optimized run.', icon: 'micropython' },

            // 🎨 UI/UX & GRAPHICS (Visual Mastery)
            { name: 'Adobe XD', category: designId, description: 'Vector design tool focused User Experience UI Wireframing.', icon: 'adobexd' },
            { name: 'Adobe Photoshop', category: designId, description: 'Professional industry raster graphics editing design studio.', icon: 'photoshop' },
            { name: 'Adobe Illustrator', category: designId, description: 'Standard vector graphics design illustrations master suite.', icon: 'illustrator' },
            { name: 'Figma Advanced', category: designId, description: 'Collaborative interface design platform across product.', icon: 'figma' },
            { name: 'Blender', category: designId, description: 'Free open-source professional 3D computer graphics tools.', icon: 'blender' },

            // 💻 PROGRAMMING LANGUAGES (Universal Core)
            { name: 'TypeScript', category: langId, description: 'Superset over Javascript static typing capabilities safety.', icon: 'typescript' },
            { name: 'Golang', category: langId, description: 'Efficient fast compiled concurrency engineered statically.', icon: 'golang' },
            { name: 'Rust Lang', category: langId, description: 'Empowering systems without garbabge collection type safe.', icon: 'rust' },
            { name: 'Python (Core)', category: langId, description: 'Interpreted object-oriented high-level semantics dynamic.', icon: 'pythoncore' },
            { name: 'Java / Kotlin (Core)', category: langId, description: 'Platform independent class-based object execution engine.', icon: 'java' },
            { name: 'C / C++', category: langId, description: 'Absolute manual memory low-level high-efficiency foundational.', icon: 'cpp' },
            { name: 'Ruby', category: langId, description: 'Focusing simplicity productivity elegant readable code syntax.', icon: 'rubycore' },
            { name: 'C# / .NET', category: langId, description: 'Modern multipurpose strong type safety microsoft runtime.', icon: 'csharp' },
            { name: 'Haskell', category: langId, description: 'Advanced purely-functional statically-typed lazy evaluation.', icon: 'haskell' },
            { name: 'R Language', category: langId, description: 'Software environment statistical computing graphics math.', icon: 'rlang' },
            { name: 'Lua', category: langId, description: 'Powerful efficient lightweight embeddable scripting engine.', icon: 'lua' },
            { name: 'Perl', category: langId, description: 'Highly capable feature-rich language powerful text handling.', icon: 'perl' },

            // 🖥️ SERVER & HOSTING
            { name: 'cPanel / WHM', category: serverId, description: 'Simplifies operations managing complex linux websites core.', icon: 'cpanel' },
            { name: 'Nginx Proxy', category: serverId, description: 'High throughput reverse load balancer web server cache.', icon: 'nginx' },
            { name: 'Apache HTTP', category: serverId, description: 'Standard historical daemon open-source reliable server.', icon: 'apache' },
            { name: 'LiteSpeed', category: serverId, description: 'High performance dynamic content cache enabled web server.', icon: 'litespeed' },

            // 🚀 OPERATING SYSTEMS
            { name: 'Linux (Ubuntu / Debian)', category: osId, description: 'Open robust dependable enterprise standard deployment OS.', icon: 'linux' },
            { name: 'Windows Server', category: osId, description: 'Enterprise grade platform operating system infrastructure.', icon: 'windows' },
            { name: 'MacOS / Unix', category: osId, description: 'Unix-like graphics workstation developer operating context.', icon: 'macos' },

            // 🔄 VERSION CONTROL SYSTEMS
            { name: 'GitHub', category: versionId, description: 'Cloud hosting collaboration distributed version git hub.', icon: 'github' },
            { name: 'GitLab', category: versionId, description: 'Complete DevOps platform single unified delivery server.', icon: 'gitlab' },
            { name: 'Bitbucket', category: versionId, description: 'Git based code hosting collaborating atlassian projects.', icon: 'bitbucket' },
            { name: 'Git (Core CLI)', category: versionId, description: 'Distributed fast version track systems revision core.', icon: 'git' },
            { name: 'SVN (Subversion)', category: versionId, description: 'Centralized Apache versioning revision repository system.', icon: 'svn' },

            // 🌐 FULL-STACK DEVELOPMENT
            { name: 'MERN Stack', category: fullstackId, description: 'MongoDB Express React Node integrated JS full stack.', icon: 'mern' },
            { name: 'MEAN Stack', category: fullstackId, description: 'MongoDB Express Angular Node modern JS full stack.', icon: 'mean' },
            { name: 'LAMP Stack', category: fullstackId, description: 'Linux Apache MySQL PHP web standard infrastructure.', icon: 'lamp' },
            { name: 'T3 Stack', category: fullstackId, description: 'Modern type-safe nextjs typescript modular deployment.', icon: 't3' },

            // 💎 MISCELLANEOUS
            { name: 'SEO Optimization', category: otherId, description: 'Algorithmic search performance ranking engineering visiblity.', icon: 'seo' },
            { name: 'Agile Methodologies / Scrum', category: otherId, description: 'Collaborative incremental adaptive cycles management delivery.', icon: 'agile' },
            { name: 'System Architecture Design', category: otherId, description: 'Conceptual structural blueprint logical distributed layouts.', icon: 'arch' }
        ].filter(t => t.category);
        await Technology.deleteMany({});
        const created = await Technology.create(techData);
        return created;
    } catch (error) {
        throw error;
    }
};
