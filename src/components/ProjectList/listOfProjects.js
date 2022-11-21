const projectList = [
   {
    name: 'Ancient Beast',
    imageSrc: 'https://raw.githubusercontent.com/FreezingMoon/AncientBeast-Website/master/favicon.png',
    projectLink: 'https://github.com/FreezingMoon/AncientBeast/labels/easy',
    description: 'Match-based eSport where you duel others by materializing and controlling a squad of creatures.',
    tags: ['JavaScript', 'TypeScript', 'Node.js', 'Web App', 'Video Game', 'OpenSource', 'Mentored', 'Web', 'Web Development']
  },
  {
    name: 'Reseter.css',
    imageSrc: 'https://raw.githubusercontent.com/resetercss/reseter.css/main/logo.png',
    projectLink: 'https://github.com/resetercss/reseter.css',
    description: 'Reseter.css is an awesome CSS boilerplate for a website. It is a great tool for any web designer. Reseter.css resets all the premade styles by the browser. It normalizes the browser\'s stylesheet for a better cross-browser experience.',
    tags: ['css', 'sass', 'scss', 'less', 'stylus']
  },
  {
    name: 'CircuitVerse',
    imageSrc: 'https://github.com/CircuitVerse/CircuitVerse/blob/master/app/assets/images/CircuitVerse.png',
    projectLink: 'https://github.com/CircuitVerse',
    description: 'CircuitVerse is a free, open-source platform which allows users to construct digital logic circuits online. We also offer the Interactive Book which teaches users on the fundamentals of modern, digital circuits.',
    tags: ['html', 'css', 'sass','javascript', 'ruby on rails']
  },
  {
    name: 'MoveIt',
    imageSrc:
      'https://camo.githubusercontent.com/8dc96fd1c0547dcf77efe1b4fa579dd628bc4069b91cdb401b56da570064b115/68747470733a2f2f6d6f766569742e726f732e6f72672f6173736574732f6c6f676f2f6d6f766569745f6c6f676f2d626c61636b2e706e67',
    projectLink: 'https://github.com/ros-planning/moveit',
    description:
      'Easy-to-use open source robotics manipulation platform for developing commercial applications, prototyping designs, and benchmarking algorithms.',
    tags: ['c++', 'python', 'robotics', 'open source', 'motion planning'],
  },
  {
    name: 'Jina',
    imageSrc: 'https://avatars1.githubusercontent.com/u/60539444?s=200&v=4',
    projectLink: 'https://github.com/jina-ai/jina',
    description:
      'An easier way to build neural search on the cloud. An AI-powered search framework, empowering developers to create cross-/multi-modal search systems',
    tags: ['Python', 'Machine Learning', 'Web App', 'Deep Learning', 'NLP'],
  },
  {
    name: 'React',
    imageSrc:
      'https://raw.githubusercontent.com/facebook/react/57768ef90bdb0110c7b9266185a8f6446934b331/fixtures/dom/public/react-logo.svg',
    projectLink: 'https://github.com/facebook/react/contribute',
    description:
      'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    tags: ['JavaScript', 'UI', 'Web App'],
  },
  {
    name: 'React Native',
    imageSrc:
      'https://github.com/facebook/react-native/blob/main/Libraries/NewAppScreen/components/logo.png?raw=true',
    projectLink: 'https://github.com/facebook/react-native/contribute',
    description: 'A framework for building native apps with React.',
    tags: ['JavaScript', 'React', 'React Native', 'Mobile App'],
  },
  {
    name: 'Typescript',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    projectLink: 'https://github.com/microsoft/TypeScript',
    description:
      'TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.',
    tags: ['TypeScript', 'JavaScript'],
  },
  {
    name: 'MongoDB',
    imageSrc: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913759/noticon/rewwujgq5wuw2qohwta9.png',
    projectLink: 'https://github.com/mongodb/mongo/blob/master/CONTRIBUTING.rst',
    description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    tags: ['NOSQL','Database']
  },
  {
    name: 'Darktable',
    imageSrc:
      'https://raw.githubusercontent.com/darktable-org/darktable/master/data/pixmaps/idbutton.png',
    projectLink: 'https://github.com/darktable-org/darktable',
    description:
      'Open source photography workflow application and raw developer.',
    tags: ['C', 'Lua', 'OpenCL', 'Photography'],
  },
  {
    name: 'Exercism',
    imageSrc: 'https://avatars2.githubusercontent.com/u/5624255?v=3&s=100',
    projectLink: 'https://github.com/exercism/exercism/contribute',
    description: 'Quickly ramp up in new programming languages!',
    tags: ['Ruby', 'Exercises', 'CLI', 'Web App'],
  },
  {
    name: 'React Testing Library',
    imageSrc:
      'https://raw.githubusercontent.com/testing-library/react-testing-library/master/other/goat.png',
    projectLink:
      'https://github.com/testing-library/react-testing-library/blob/master/CONTRIBUTING.md',
    description:
      'Simple and complete React DOM testing utilities that encourage good testing practices.',
    tags: ['Unit testing', 'JavaScript', 'React', 'React Native'],
  },
  {
    name: 'Gauge',
    imageSrc:
      'https://avatars3.githubusercontent.com/u/7044589?s=400&u=8d2ce328da30e81978c303fdb31a2a7a1f0328e3&v=4',
    projectLink: 'https://github.com/getgauge/gauge/contribute',
    description: 'A free and open source test automation framework',
    tags: ['Golang', 'Automation', 'command line', 'testing'],
  },
  {
    name: 'Habitat',
    imageSrc: 'https://avatars1.githubusercontent.com/u/18171698?v=3&s=100',
    projectLink: 'https://github.com/habitat-sh/habitat/contribute',
    description: 'Modern applications with built-in automation.',
    tags: ['Docs', 'Front-End', 'Rust', 'MultiOS'],
  },
  {
    name: 'Scikit-learn',
    imageSrc: 'https://avatars0.githubusercontent.com/u/365630?v=3&s=100',
    projectLink: 'https://github.com/scikit-learn/scikit-learn/contribute',
    description: 'Machine learning in Python!',
    tags: ['Python', 'Machine Learning', 'Math'],
  },
  {
    name: 'AVA',
    imageSrc: 'https://avatars0.githubusercontent.com/u/8527916?v=3&s=100',
    projectLink: 'https://github.com/avajs/ava/contribute',
    description: 'The Futuristic JavaScript test runner!',
    tags: ['JavaScript', 'Tests', 'Docs', 'Babel'],
  },
  {
    name: 'Numpy',
    imageSrc:
      'https://camo.githubusercontent.com/b310fd3c9c5f7da5de0911b77d201408b76b8a58/68747470733a2f2f696d616765732e706c6f742e6c792f706c6f746c792d646f63756d656e746174696f6e2f7468756d626e61696c2f6e756d70792d6c6f676f2e6a7067',
    projectLink: 'https://github.com/numpy/numpy/contribute',
    description: 'Scientific computing with Python!',
    tags: ['Python', 'Math', 'Module', 'Docs'],
  }, {
    name: 'pandas',
    imageSrc: 'https://camo.githubusercontent.com/981d48e57e23a4907cebc4eb481799b5882595ea978261f22a3e131dcd6ebee6/68747470733a2f2f70616e6461732e7079646174612e6f72672f7374617469632f696d672f70616e6461732e737667',
    projectLink: 'https://github.com/pandas-dev/pandas/contribute',
    description: 'pandas: powerful Python data analysis toolkit',
    tags: ['Python', 'data science', 'data analysis', 'math', 'Module']
  }, {
    name: 'Elasticsearch',
    imageSrc: 'https://avatars2.githubusercontent.com/u/6764390?v=3&s=100',
    projectLink: 'https://github.com/elastic/elasticsearch/contribute',
    description: 'Open Source, Distributed, RESTful Search Engine.',
    tags: ['REST', 'Docs', 'Java', 'Lucene'],
  },
  {
    name: 'Homebrew',
    imageSrc: 'https://avatars2.githubusercontent.com/u/1503512?v=3&s=100',
    projectLink: 'https://github.com/Homebrew/brew/contribute',
    description: 'The missing package manager for macOS.',
    tags: ['MacOS', 'Ruby', 'C++'],
  },
  {
    name: 'Rust',
    imageSrc: 'https://avatars1.githubusercontent.com/u/5430905?v=3&s=100',
    projectLink: 'https://github.com/rust-lang/rust/contribute',
    description: 'A safe, concurrent, practical language!',
    tags: ['Rust', 'Compiler', 'Mentored', 'Parser'],
  },
  {
    name: 'Vuejs',
    imageSrc: 'https://avatars1.githubusercontent.com/u/6128107?v=3&s=100',
    projectLink: 'https://github.com/vuejs/vue/contribute',
    description:
      'A progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
    tags: ['JavaScript', 'UI', 'Front-End'],
  },
  {
    name: 'Suave',
    imageSrc: 'https://avatars2.githubusercontent.com/u/5822862?v=3&s=100',
    projectLink: 'https://github.com/SuaveIO/suave/contribute',
    description:
      'Simple web development F# library to manipulate route flow and task composition.',
    tags: ['F#', 'WebDev', 'Library'],
  },
  {
    name: 'OpenRA',
    imageSrc: 'https://avatars3.githubusercontent.com/u/409046?v=3&s=100',
    projectLink: 'https://github.com/OpenRA/OpenRA/contribute',
    description:
      'Open Source real-time strategy game engine for early Westwood games.',
    tags: ['AI', 'C#', 'SDL', 'OpenGL'],
  },
  {
    name: 'PowerShell',
    imageSrc: 'https://avatars0.githubusercontent.com/u/11524380?v=3&s=100',
    projectLink: 'https://github.com/powershell/powershell/contribute',
    description: 'PowerShell for every system.',
    tags: ['Shell', 'Linux', 'MacOS', 'Windows', '*BSD'],
  },
  {
    name: 'Coala',
    imageSrc: 'https://avatars2.githubusercontent.com/u/10620750?v=3&s=100',
    projectLink: 'https://coala.io/newcomer',
    description:
      'Unified command-line interface for linting and fixing all your code.',
    tags: ['UX', 'Linter', 'Python'],
  },
  {
    name: 'Moment',
    imageSrc: 'https://avatars2.githubusercontent.com/u/4129662?v=3&s=100',
    projectLink: 'https://github.com/moment/moment/contribute',
    description:
      'Parse, validate, manipulate, and display dates in JavaScript.',
    tags: ['JavaScript', 'Front-End', 'Meta'],
  },
  {
    name: 'Leiningen',
    imageSrc:
      'https://camo.githubusercontent.com/0f302c808c8457f6460913e33aed3478124612c2/687474703a2f2f6c65696e696e67656e2e6f72672f696d672f6c65696e696e67656e2e6a7067',
    projectLink: 'https://github.com/technomancy/leiningen/contribute',
    description: 'Automate Clojure projects without setting your hair on fire.',
    tags: ['Clojure', 'Automation'],
  },
  {
    name: 'Webpack',
    imageSrc: 'https://avatars3.githubusercontent.com/u/2105791?v=3&s=100',
    projectLink: 'https://github.com/webpack/webpack/contribute',
    description:
      'A bundler for JavaScript and friends. Packs many modules into a few bundled assets.',
    tags: ['Bundler', 'JavaScript', 'Compiler', 'Loader'],
  },
  {
    name: 'Babel',
    imageSrc: 'https://avatars2.githubusercontent.com/u/9637642?v=3&s=100',
    projectLink: 'https://github.com/babel/babel/contribute',
    description: 'Babel is a compiler for writing next generation JavaScript.',
    tags: ['es2015', 'JavaScript', 'Compiler'],
  },
  {
    name: 'Pouchdb',
    imageSrc: 'https://avatars3.githubusercontent.com/u/3406112?v=3&s=100',
    projectLink: 'https://github.com/pouchdb/pouchdb/contribute',
    description: 'A pocket-sized database.',
    tags: ['JavaScript', 'Node.js', 'CouchDB'],
  },
  {
    name: 'Neovim',
    imageSrc: 'https://avatars0.githubusercontent.com/u/6471485?v=3&s=100',
    projectLink: 'https://github.com/neovim/neovim/contribute',
    description: 'Vim-fork focused on extensibility and usability.',
    tags: ['Editor', 'API', 'Cross-Platform', 'Vim'],
  },
  {
    name: 'Hoodie',
    imageSrc:
      'https://hoodiehq.github.io/hoodie-css/src/content_img/animals/low-profile-dog-1.png',
    projectLink: 'https://github.com/hoodiehq/hoodie/contribute',
    description: 'The Offline First JavaScript Backend.',
    tags: ['JavaScript', 'Node.js', 'Web development', 'User-Friendly'],
  },
  {
    name: 'freeCodeCamp',
    imageSrc: 'https://avatars0.githubusercontent.com/u/9892522?v=3&s=100',
    projectLink: 'https://github.com/freeCodeCamp/freeCodeCamp/contribute',
    description: 'Open Source codebase and curriculum.',
    tags: ['Learn', 'Education', 'Non-Profit', 'Certification'],
  },
  {
    name: 'Node.js',
    imageSrc: 'https://avatars1.githubusercontent.com/u/9950313?v=3&s=100',
    projectLink: 'https://github.com/nodejs/node/contribute',
    description: 'Node.js JavaScript runtime.',
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Semantic-UI-React',
    imageSrc: 'https://avatars1.githubusercontent.com/u/5796209?s=200&v=4',
    projectLink: 'https://github.com/Semantic-Org/Semantic-UI-React/contribute',
    description: 'The official Semantic-UI-React integration.',
    tags: ['React', 'Library', 'Component', 'Front-End'],
  },
  {
    name: 'Contribute to Open Source',
    imageSrc: 'https://image.ibb.co/fUM5oG/profile_first_pr.png',
    projectLink:
      'https://github.com/danthareja/contribute-to-open-source/contribute',
    description:
      "Learn GitHub's pull request process by contributing code in a fun simulation project.",
    tags: ['GitHub', 'Tutorial'],
  },
  {
    name: 'Visual Studio Code',
    imageSrc:
      'https://camo.githubusercontent.com/a7f6e01cc208b478047eade76755f46cf1098c05/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f322f32642f56697375616c5f53747564696f5f436f64655f312e31385f69636f6e2e737667',
    projectLink: 'https://github.com/Microsoft/vscode/contribute',
    description:
      'VS Code is a new type of tool that combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle.',
    tags: ['TypeScript', 'Text-Editor', 'Electron'],
  },
  {
    name: 'Scrapy',
    imageSrc:
      'https://camo.githubusercontent.com/40d00cefb120a829517e503658aaf6c987d5f9cc6be5e2e35fb20bd63bdbceb5/68747470733a2f2f7363726170792e6f72672f696d672f7363726170796c6f676f2e706e67',
    projectLink: 'https://github.com/scrapy/scrapy/contribute',
    description:
      'Scrapy is a fast high-level web crawling and web scraping framework, used to crawl websites and extract structured data from their pages. ',
    tags: ['Python', 'Module', 'Data-Mining', 'Automated-Testing'],
  },
  {
    name: 'Angular',
    imageSrc: 'https://avatars0.githubusercontent.com/u/139426?s=200&v=4',
    projectLink: 'https://github.com/angular/angular/contribute',
    description:
      'Angular is a development platform for building mobile and desktop Web Applications using TypeScript or JavaScript and other languages.',
    tags: ['Angular', 'TypeScript', 'JavaScript'],
  },
  {
    name: 'React Styleguidist',
    imageSrc:
      'https://d3vv6lp55qjaqc.cloudfront.net/items/061f0A2n1B0H3p0T1p1f/react-styleguidist-logo.png',
    projectLink:
      'https://github.com/styleguidist/react-styleguidist/contribute',
    description:
      'React Styleguidist is a component development environment with hot reloaded dev server and a living style guide that you can share with your team. It lists component propTypes and shows live, editable usage examples based on Markdown files.',
    tags: ['JavaScript', 'UI'],
  },
  {
    name: 'Flutter',
    imageSrc:
      'https://raw.githubusercontent.com/flutter/website/master/src/_assets/image/flutter-lockup.png',
    projectLink: 'https://github.com/flutter/flutter/contribute',
    description:
      'Flutter makes it easy and fast to build beautiful apps for mobile and beyond.',
    tags: ['Dart', 'Android', 'iOS', 'UI', 'Cross-platform'],
  },
  {
    name: 'Python Koans',
    imageSrc:
      'https://s3.amazonaws.com/media-p.slid.es/thumbnails/akoebbe/b35d77/python-koans.jpg',
    projectLink: 'https://github.com/gregmalcolm/python_koans/contribute',
    description: 'Python Koans is a port of Edgecase\'s "Ruby Koans".',
    tags: ['Python', 'Exercises', 'CLI', 'Web App'],
  },
  {
    name: 'Scala Exercises',
    imageSrc: 'https://avatars1.githubusercontent.com/u/17570897?s=200&v=4',
    projectLink:
      'https://github.com/scala-exercises/scala-exercises/contribute',
    description:
      'Scala Exercises is an Open Source project for learning different technologies based in the Scala Programming Language.',
    tags: ['Scala', 'Exercises', 'Functional Programming'],
  },
  {
    name: 'CodeWorkout',
    imageSrc: 'https://i.imgur.com/ZsSiCqi.png',
    projectLink: 'https://github.com/web-cat/code-workout/contribute',
    description:
      'CodeWorkout is an online system for people learning a programming language for the first time. It is a free, open-source solution for practicing small programming problems. Students may practice coding exercises on a variety of programming concepts within the convenience of a web browser!',
    tags: ['Java', 'Ruby', 'Python', 'Exercises'],
  },
  {
    name: 'TEAMMATES',
    imageSrc:
      'https://www.google-melange.com/archive/gsoc/2015/orgs/teammates/logo-200.png',
    projectLink: 'https://github.com/TEAMMATES/teammates/contribute',
    description:
      'An online feedback management system for students and teachers',
    tags: ['Java', 'Javascript', 'HTML', 'Web App'],
  },
  {
    name: 'electron',
    imageSrc: 'https://avatars3.githubusercontent.com/u/13409222?s=200&v=4',
    projectLink: 'https://github.com/electron/electron/contribute',
    description:
      'Build cross platform desktop apps with JavaScript, HTML, and CSS!',
    tags: ['JavaScript', 'Electron', 'Css', 'Html', 'Chrome', 'Nodejs', 'V8'],
  },
  {
    name: 'Oppia',
    imageSrc:
      'https://www.oppia.org/build/assets/images/logo/288x128_logo_mint.42f8d38467fe745205b3374b33668068.png',
    projectLink: 'https://github.com/oppia/oppia/contribute',
    description: 'Oppia is an open-source project whose aim is to empower learners across the globe by providing access to high-quality, engaging education. We envision a society in which access to high-quality education is a human right rather than a privilege.',
    tags: ['Python', 'Typescript', 'Angular'],
  },
  {
    name: 'Public Lab',
    imageSrc:
      'https://publiclab.org/system/images/photos/000/023/444/large/Screenshot_20180204-101546_2.png',
    projectLink: 'https://publiclab.github.io/community-toolbox/#r=all',
    description:
      'PublicLab.org - a collaborative knowledge-exchange platform in Rails; we welcome first-time contributors! 🎈',
    tags: [
      'Ruby on Rails',
      'Ruby',
      'JavaScript',
      'Non-Profit',
      'Web App',
      'First-Timers',
      'Environment',
      'Science',
    ],
  },
  {
    name: 'MissionControl',
    imageSrc: 'https://i.imgur.com/nSRLFas.gif',
    projectLink: 'https://github.com/DAVFoundation/missioncontrol/contribute',
    description:
      'Controls and orchestrates missions between autonomous vehicles and DAV users.',
    tags: ['Javascript', 'Docker', 'Thrift', 'Good First Issue'],
  },
  {
    name: 'DuckDuckGo',
    imageSrc: 'https://avatars3.githubusercontent.com/u/342708?s=200&v=4',
    projectLink:
      'https://github.com/duckduckgo/duckduckgo-privacy-extension/contribute',
    description: "The search engine that doesn't track you!",
    tags: ['Javascript', 'Perl', 'Python', 'Privacy'],
  },
  {
    name: 'Kinto',
    imageSrc: 'https://avatars2.githubusercontent.com/u/13413813?s=200&v=4',
    projectLink: 'https://github.com/Kinto/kinto/contribute',
    description:
      'A generic JSON document store with sharing and synchronisation capabilities.',
    tags: ['Python', 'API', 'HTTP', 'Web', 'Decentralisation'],
  },
  {
    name: 'atom',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/e/e2/Atom_1.0_icon.png',
    projectLink: 'https://github.com/atom/atom/contribute',
    description: 'A customizable text editor built on electron.',
    tags: [
      'Atom',
      'Editor',
      'Javascript',
      'Electron',
      'Windows',
      'Linux',
      'Macos',
    ],
  },
  {
    name: 'OpenGenus',
    imageSrc:
      'https://raw.githubusercontent.com/notnerb/FamilySite/master/logo.png',
    projectLink: 'https://github.com/OpenGenus/Join_OpenGenus/contribute',
    description:
      'A positive open-source community working to bring essential programming knowledge offline.',
    tags: ['C++', 'Python', 'Java', 'Good First Issue'],
  },
  {
    name: 'css-protips',
    imageSrc:
      'https://raw.githubusercontent.com/AllThingsSmitty/css-protips/fc4c12dfcdfb26c43a09bc2176525637c3c38268/assets/img/bulb.svg',
    projectLink: 'https://github.com/AllThingsSmitty/css-protips/contribute',
    description: 'Simple but useful tips to improve your CSS skills.',
    tags: ['CSS', 'tips', 'guide', 'simple', 'useful'],
  },
  {
    name: 'AnitaB.org ',
    imageSrc:
      'https://user-images.githubusercontent.com/60894542/94313579-9780c080-ff9c-11ea-8853-daa2a1c0fff5.png',
    projectLink: 'https://github.com/anitab-org',
    description: 'Helping women find their potential in code.',
    tags: ['Python', 'Java', 'Swift', 'Javascript', 'HTML', 'Kotlin', 'Dart'],
  },
  {
    name: 'Centos',
    imageSrc: 'https://avatars2.githubusercontent.com/u/79192?s=200&v=4',
    projectLink: 'https://github.com/CentOS',
    description:
      'A community-driven free software effort focused on delivering a robust open source ecosystem.',
    tags: ['Shell', 'Python', 'HTML', 'Ruby', 'Puppet'],
  },
  {
    name: 'NPM',
    imageSrc: 'https://avatars0.githubusercontent.com/u/6078720?s=200&v=4',
    projectLink: 'https://github.com/npm',
    description:
      'Npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways.',
    tags: ['Javascript', 'Shell', 'CSS', 'HTML', 'Rust'],
  },
  {
    name: 'openEBS',
    imageSrc: 'https://avatars1.githubusercontent.com/u/20769039?s=200&v=4',
    projectLink: 'https://github.com/openebs/',
    description:
      'OpenEBS is an open source storage platform that provides persistent and containerized  block storage for DevOps and container environments.',
    tags: ['Containers', 'DevOps', 'Go'],
  },
  {
    name: 'Kubernetes',
    imageSrc:
      'https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png',
    projectLink: 'https://github.com/kubernetes',
    description: 'Production-Grade Container Scheduling and Management',
    tags: ['Go', 'Container', 'Orchestration'],
  },
  {
    name: 'styled-system',
    imageSrc:
      'https://camo.githubusercontent.com/8b3dc6438530a7240e952b187e40bd8380090f64/68747470733a2f2f7374796c65642d73797374656d2e636f6d2f6c6f676f2e737667',
    projectLink: 'https://github.com/styled-system/styled-system/contribute',
    description: 'Style props for rapid UI development',
    tags: ['ui', 'css-in-js', 'design-systems', 'style-props', 'theming'],
  },
  {
    name: 'Movie-Stream',
    imageSrc: 'https://image.ibb.co/faTroc/movie_stream.png',
    projectLink: 'https://github.com/hrishi7/streamIt/contribute',
    description:
      'Provides Online free movie streaming service with adfree. flexible for mobile also',
    tags: ['Web development', 'HTML', 'Javascript', 'API', 'CSS', 'Bootstrap'],
  },
  {
    name: 'ethereum',
    imageSrc: 'https://avatars1.githubusercontent.com/u/6250754?s=200&v=4',
    projectLink: 'https://github.com/ethereum/',
    description:
      'Ethereum is a decentralized platform that runs smart contracts applications.',
    tags: ['Go', 'C++', 'Solidity', 'Python', 'Shell', 'Java'],
  },
  {
    name: 'Rust Lang Nursery',
    imageSrc: 'https://avatars2.githubusercontent.com/u/14631425?s=200&v=4',
    projectLink: 'https://github.com/rust-lang-nursery/rust-clippy/contribute',
    description:
      'A collection of lints to catch common mistakes and improve your Rust code.',
    tags: ['Rust', 'Compiler', 'Parser', 'Mentors'],
  },
  {
    name: 'probot',
    imageSrc: 'https://avatars2.githubusercontent.com/u/26350515?s=400&v=4',
    projectLink: 'https://github.com/probot/probot/contribute',
    description: 'Probot is a framework for building Github Apps in Node.js.',
    tags: ['Node.js', 'Github', 'Javascript'],
  },
  {
    name: 'Open Data Kit',
    imageSrc: 'https://opendatakit.org/assets/images/logo.png',
    projectLink: 'https://github.com/getodk',
    description:
      'Free and open-source set of tools for collecting data in challenging environments.',
    tags: ['Open Source', 'Software', 'JAVA', 'Android'],
  },
  {
    name: 'Sugar Labs',
    imageSrc: 'https://avatars3.githubusercontent.com/u/3996398?s=280&v=4',
    projectLink: 'https://github.com/sugarlabs',
    description: 'Learning Software for children.',
    tags: ['Ubuntu', 'Rasberry Pi', 'Debian', 'Fedora'],
  },
  {
    name: 'Jupyter Hub',
    imageSrc: 'https://avatars2.githubusercontent.com/u/17927519?s=400&v=4',
    projectLink: 'https://github.com/jupyterhub/jupyterhub/contribute',
    description:
      'A multi-user Hub, spawns, manages, and proxies multiple instances of the single-user Jupyter notebook server.',
    tags: ['Proxy Server', 'Python', 'REST API'],
  },
  {
    name: 'Allenai',
    imageSrc:
      'https://news.cs.washington.edu/wp-content/uploads/2015/10/AI2-logo-300x300.png',
    projectLink: 'https://github.com/allenai/allennlp/contribute',
    description:
      'conducts high-impact research and engineering to tackle key problems in artificial intelligence.',
    tags: ['Artificial Intelligence', 'Python', 'NLP'],
  },
  {
    name: 'Qute Browser',
    imageSrc: 'https://avatars1.githubusercontent.com/u/21955151?s=200&v=4',
    projectLink: 'https://github.com/qutebrowser/qutebrowser/contribute',
    description: 'A keyboard-driven, vim-like browser based on PyQt5',
    tags: ['Python', 'Qt', 'pyqt5', 'Vim', 'Browser', 'qtWebEngine', 'web'],
  },
  {
    name: 'Ghost',
    imageSrc: 'https://avatars1.githubusercontent.com/u/2178663?s=200&v=4',
    projectLink: 'https://github.com/TryGhost/Ghost/contribute',
    description: 'Just a blogging platform',
    tags: ['nodejs', 'javascript', 'ember', 'cms', 'blogging'],
  },
  {
    name: 'Hyper',
    imageSrc:
      'https://raw.githubusercontent.com/vercel/hyper/canary/app/static/icon.png',
    projectLink: 'https://github.com/zeit/hyper/contribute',
    description: 'A terminal built on web technologies',
    tags: ['HTML',
      'CSS',
      'JavaScript',
      'React',
      'Typescript',
      'linux',
      'macos',
      'terminal'
    ],
  },
  {
    name: 'Kap',
    imageSrc: 'https://avatars3.githubusercontent.com/u/16321113?s=200&v=4',
    projectLink: 'https://github.com/wulkano/kap/contribute',
    description: 'An open-source screen recorder built with web technology',
    tags: ['electron', 'javascript', 'mac', 'oss', 'screencast'],
  },
  {
    name: 'Ember.js',
    imageSrc: 'https://avatars0.githubusercontent.com/u/1253363?s=200&v=4',
    projectLink: 'https://github.com/emberjs/ember.js/contribute',
    description:
      'A JavaScript framework for creating ambitious web applications',
    tags: ['ember', 'javascript', 'javascript-framework'],
  },
  {
    name: 'Opensourcedesign',
    imageSrc: 'https://avatars3.githubusercontent.com/u/4183553?s=200&v=4',
    projectLink:
      'https://github.com/opensourcedesign/opensourcedesign.github.io/contribute',
    description: 'Source code of the website opensourcedesign.net',
    tags: ['design', 'opensourcedesign', 'open-source', 'open-source-design'],
  },
  {
    name: 'ifme',
    imageSrc: 'https://avatars1.githubusercontent.com/u/23299450?s=200',
    projectLink: 'https://github.com/ifmeorg/ifme',
    description: 'A community for mental health experiences',
    tags: ['ruby-on-rails', 'javascript', 'react'],
  },
  {
    name: 'Rebus',
    imageSrc:
      'https://raw.githubusercontent.com/ollelauribostrom/rebus/master/logo.png',
    projectLink: 'https://github.com/ollelauribostrom/rebus/contribute',
    description:
      'Helping new developers take their first steps as open source contributors by developing a simple rebus game together',
    tags: ['javascript', 'html', 'css', 'tutorial'],
  },
  {
    name: 'PRoot',
    imageSrc: 'https://avatars2.githubusercontent.com/u/12125707',
    projectLink: 'https://github.com/proot-me/PRoot/contribute',
    description:
      'chroot, mount --bind, and binfmt_misc without privilege/setup for Linux ',
    tags: ['chroot-environment', 'userland-exec', 'rootfs', 'chroot', 'c'],
  },
  {
    name: 'Techqueria.org',
    imageSrc: 'https://avatars1.githubusercontent.com/u/17460806?s=200&v=4',
    projectLink: 'https://github.com/techqueria',
    description:
      "We're a community of Latinx professionals in the tech industry.",
    tags: ['latinx', 'latinx in tech', 'hugo', 'netlify', 'jamstack'],
  },
  {
    name: 'Nextcloud',
    imageSrc: 'https://avatars0.githubusercontent.com/u/19211038?s=200&v=4',
    projectLink: 'https://github.com/nextcloud/server/contribute',
    description:
      'Open source collaboration platform for files, calendar, contacts, chat & calls, mail and more.',
    tags: [
      'javascript',
      'php',
      'html',
      'css',
      'android',
      'c++',
      'qt',
      'design',
      'ios',
      'vuejs',
      'web',
    ],
  },
  {
    name: 'Open Source Diversity',
    imageSrc: 'https://avatars1.githubusercontent.com/u/31018274?s=200&v=4',
    projectLink:
      'https://github.com/opensourcediversity/opensourcediversity.org/contribute',
    description:
      'For more diversity & inclusion in free & open source software communities 😊',
    tags: [
      'javascript',
      'html',
      'css',
      'diversity',
      'inclusion',
      '🎉',
      'web',
      'community',
    ],
  },
  {
    name: 'Bitcoin',
    imageSrc:
      'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v211-mint-aum-currency-13.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=435abda621bceebc1362c7e657e06c79',
    projectLink: 'https://github.com/bitcoin/bitcoin/contribute',
    description:
      'Bitcoin is an experimental digital currency that enables instant payments to anyone, anywhere in the world.',
    tags: ['C++', 'Python', 'Cryptocurrency', 'Blockchain', 'Peer-to-peer'],
  },
  {
    name: 'Tensorflow',
    imageSrc:
      'https://camo.githubusercontent.com/0905c7d634421f8aa4ab3ddf19a582572df568e1/68747470733a2f2f7777772e74656e736f72666c6f772e6f72672f696d616765732f74665f6c6f676f5f736f6369616c2e706e67',
    projectLink: 'https://github.com/tensorflow/tensorflow/contribute',
    description:
      'A Machine Learning library in Python for implementing Machine Learning and Deep Learning models',
    tags: [
      'python',
      'c++',
      'machine learning',
      'math',
      'deep learning',
      'neural network',
    ],
  },
  {
    name: 'Next',
    imageSrc:
      'https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png',
    projectLink: 'https://github.com/zeit/next.js/contribute',
    description:
      'Next.js is a framework that most notably allows you to write server-rendered React apps easily',
    tags: ['JavaScript', 'server-rendering', 'node', 'nextjs', 'react'],
  },
  {
    name: 'Roc Toolkit',
    imageSrc: 'https://roc-streaming.org/icon.png',
    projectLink:
      'https://github.com/roc-streaming/roc-toolkit/labels/help%20wanted',
    description: 'A toolkit for real-time audio streaming over the network',
    tags: [
      'C++',
      'Audio',
      'Streaming',
      'Networking',
      'Cross-Platform',
      'Linux',
      'MacOS',
      'Windows',
    ],
  },
  {
    name: 'Conda',
    imageSrc: 'https://conda.io/en/latest/_images/conda_logo.svg',
    projectLink: 'https://github.com/conda',
    description:
      'Conda is an open source package management system and environment management system that runs on Windows, macOS and Linux. Conda quickly installs, runs and updates packages and their dependencies. Conda easily creates, saves, loads and switches between environments on your local computer. It was created for Python programs, but it can package and distribute software for any language.',
    tags: ['ML', 'Python', 'Builds', 'Package Manager'],
  },
  {
    name: 'Light Table',
    imageSrc: 'https://avatars1.githubusercontent.com/u/5877010?s=200',
    projectLink: 'https://github.com/LightTable',
    description:
      'Light Table is a next generation code editor that connects you to your creation with instant feedback. Light Table is very customizable and can display anything a Chromium browser can.',
    tags: [
      'clojurescript',
      'ide',
      'editor',
      'clojure',
      'lighttable',
      'clojure-development',
    ],
  },
  {
    name: 'Dragula',
    imageSrc: 'https://bevacqua.github.io/dragula/resources/icon.svg',
    projectLink: 'https://github.com/bevacqua/dragula',
    description:
      'Dragula provides the easiest possible API to make drag and drop a breeze in your applications.',
    tags: [
      'Javascript',
      'front-end',
      'drag-and-drop',
      'vanilla',
      'drag-drop',
      'dragging',
      'component',
    ],
  },
  {
    name: 'Moby',
    imageSrc:
      'https://github.com/moby/moby/raw/master/docs/static_files/moby-project-logo.png',
    projectLink: 'https://github.com/moby/moby',
    description:
      'The Moby project is a collaborative project for the container ecosystem to assemble container-based systems',
    tags: ['docker', 'containers', 'go'],
  },
  {
    name: 'ScyllaDb',
    imageSrc: 'https://avatars1.githubusercontent.com/u/14364730?s=200&v=4',
    projectLink: 'https://github.com/scylladb/scylla',
    description:
      'NoSQL data store using the seastar framework, compatible with Apache Cassandra',
    tags: ['nosql', 'cpp', 'cassandra'],
  },
  {
    name: 'OSRM (Open Source Routing Machine)',
    imageSrc: 'https://avatars2.githubusercontent.com/u/8207060?s=200&v=4',
    projectLink: 'https://github.com/Project-OSRM/osrm-backend',
    description:
      'High performance routing engine written in C++14 designed to run on OpenStreetMap data',
    tags: ['osrm', 'routing-engine', 'cpp', 'openstreetmap'],
  },
  {
    name: 'Laravel',
    imageSrc: 'https://avatars3.githubusercontent.com/u/958072?s=200&v=4',
    projectLink: 'https://github.com/laravel/laravel',
    description: 'A PHP Framework for Web Artisans',
    tags: ['PHP', 'web development'],
  },
  {
    name: 'Django',
    imageSrc: 'https://avatars3.githubusercontent.com/u/27804?s=200&v=4',
    projectLink: 'https://github.com/django/django',
    description:
      'A high-level Python Web framework that encourages rapid development and clean, pragmatic design',
    tags: ['python', 'web development'],
  },
  {
    name: 'Plotly',
    imageSrc: 'https://avatars3.githubusercontent.com/u/5997976?s=200&v=4',
    projectLink: 'https://github.com/plotly',
    description: 'A high-level Python declarative charting library',
    tags: [
      'python',
      'javascript',
      'graph',
      'graph-based',
      'graph visualization',
    ],
  },
  {
    name: 'NetworkX',
    imageSrc: 'https://avatars3.githubusercontent.com/u/388785?s=200&v=4',
    projectLink: 'https://github.com/networkx/networkx/contribute',
    description: 'Python library for studying graphs and networks',
    tags: ['Python', 'graph', 'graph algorithms', 'complex networks'],
  },
  {
    name: 'Igraph',
    imageSrc: 'https://avatars3.githubusercontent.com/u/3735184?s=200&v=4',
    projectLink: 'https://github.com/igraph/igraph/contribute',
    description: 'Python Library for creating and manipulating graphs',
    tags: ['Python', 'graph', 'graph algorithms', 'complex networks'],
  },
  {
    name: 'D3',
    imageSrc: 'https://avatars1.githubusercontent.com/u/1562726?s=200&v=4',
    projectLink: 'https://github.com/d3/d3/contribute',
    description: 'JavaScript library for visualizing data using web standards',
    tags: [
      'Javascript',
      'graph',
      'graph-based',
      'graph visualization',
      'data visualization',
      'dynamic plots',
    ],
  },
  {
    name: 'FontAwesome',
    imageSrc: 'https://avatars1.githubusercontent.com/u/1505683?s=200&v=4',
    projectLink: 'https://github.com/FortAwesome/Font-Awesome/contribute',
    description: 'The iconic SVG, font, and CSS toolkit',
    tags: ['SVG', 'CSS', 'font'],
  },
  {
    name: 'TallyCTF',
    imageSrc:
      'https://raw.githubusercontent.com/CyberNinjas/TallyCTF/master/modules/core/client/img/brand/Tallylogo_1.png',
    projectLink: 'https://github.com/CyberNinjas/TallyCTF/contribute',
    description: 'Capture-The-Flag Scoreboard & CTF Event Running Software',
    tags: ['ctf', 'ctf-scoreboard', 'ctf-platform', 'JavaScript'],
  },
  {
    name: 'Airform',
    imageSrc: 'https://avatars1.githubusercontent.com/u/24883621',
    projectLink: 'https://github.com/airform/airform/contribute',
    description: 'Functional HTML forms for Front-End Developers.',
    tags: [
      'airform',
      'serverless',
      'sendmail',
      'mailer',
      'html-forms',
      'forms',
      'smtp',
      'sendgrid',
      'mailchimp',
      'mailgun',
    ],
  },
  {
    name: 'Milligram',
    imageSrc: 'https://avatars0.githubusercontent.com/u/16243913',
    projectLink: 'https://github.com/milligram/milligram/contribute',
    description: 'A minimalist CSS framework.',
    tags: [
      'milligram',
      'css',
      'html',
      'framework',
      'css-framework',
      'design',
      'minimalist',
      'flexbox',
      'amp',
    ],
  },
  {
    name: 'Gatsby',
    imageSrc:
      'https://camo.githubusercontent.com/b0972dd62bbf6ee0e28ed0ebceb48427a481568caeeb639066b23c754f0c60e5/68747470733a2f2f7777772e6761747362796a732e636f6d2f4761747362792d4d6f6e6f6772616d2e737667',
    projectLink: 'https://github.com/gatsbyjs/gatsby/contribute',
    description:
      'A free and open source framework based on React that helps developers build blazing fast websites and apps.',
    tags: [
      'React',
      'Javascript',
      'HTML',
      'CSS',
      'GraphQL',
      'Web Development',
      'Markdown',
    ],
  },
  {
    name: 'ClickHouse',
    imageSrc:
      'https://github.com/ClickHouse/clickhouse-presentations/raw/master/images/logo-400x240.png',
    projectLink: 'https://github.com/ClickHouse/ClickHouse/contribute',
    description:
      'Column-oriented database management system that allows generating analytical data reports in real time.',
    tags: [
      'C++',
      'C++20',
      'cpp',
      'Linux',
      'DBMS',
      'OLAP',
      'Analytics',
      'SQL',
      'Big Data',
      'Distributed Database',
      'MPP',
    ],
  },
  {
    name: 'Game of Life',
    imageSrc:
      'https://avatars0.githubusercontent.com/u/20078201?s=460&u=3e17a0f93f3c87b4dcef5671b623519229a5c4fb&v=4',
    projectLink: 'https://github.com/TroyTae/game-of-life/contribute',
    description: "Conway's game of life web version!",
    tags: ['Javascript', 'Typescript', 'Good First Issue'],
  },
  {
    name: 'Mattermost',
    imageSrc:
      'https://raw.githubusercontent.com/mattermost/mattermost-handbook/3b54c2cd1f823d1ea012ce45d1baa61fb4fbedbc/.gitbook/assets/branding/logo-downloads/mattermost-logo-vertical-blue.png',
    projectLink: 'https://github.com/mattermost/mattermost-server/contribute',
    description: 'Open source Slack-alternative for DevOps teams',
    tags: ['Go', 'Javascript', 'React', 'React Native'],
  },
  {
    name: 'Leapcode',
    imageSrc: 'https://avatars1.githubusercontent.com/u/66108516?s=200&v=4',
    projectLink: 'https://github.com/Leapcode-Open/leapcode-frontend/issues',
    description:
      'Leapcode is an online community & platform that motivates and rewards first-time open source contributors to get started.',
    tags: ['Javascript', 'React', 'Gatsby'],
  },
  {
    name: 'Markdown Dungeon',
    imageSrc: 'https://avatars3.githubusercontent.com/u/67384272?v=4',
    projectLink:
      'https://github.com/MakeContributions/markdown-dungeon#contribution-guidelines',
    description:
      'This is an example that how to use Markdown creating a dungeon.',
    tags: ['Markdown', 'React', 'Gatsby', 'Good First Issue', 'Beginner'],
  },
  {
    name: 'Ansible',
    imageSrc: 'https://avatars1.githubusercontent.com/u/1507452?s=200&v=4',
    projectLink: 'https://docs.ansible.com/ansible/latest/community/index.html',
    description:
      'Ansible is a radically simple IT automation platform that makes your applications and systems easier to deploy.',
    tags: ['Python', 'Automated-Testingg', 'Beginner'],
  },
  {
    name: 'start-here-guidelines',
    imageSrc: 'https://avatars2.githubusercontent.com/u/35373879?s=200&v=4',
    projectLink:
      'https://github.com/zero-to-mastery/start-here-guidelines#a-guide-to-get-started',
    description:
      'Lets Git started in the world of opensource, starting in the Zero To Mastery opensource playground. Especially designed for education and practical experience purposes.',
    tags: ['Markdown', 'Beginner'],
  },
  {
    name: 'CSS-Art',
    imageSrc: 'https://avatars2.githubusercontent.com/u/35373879?s=200&v=4',
    projectLink: 'https://github.com/zero-to-mastery/CSS-Art#instructions',
    description: 'General Edition - A CSS art challenge, for all skill levels.',
    tags: ['CSS', 'HTML', 'Javascript', 'Beginner'],
  },
  {
    name: 'Chat-e2ee',
    imageSrc:
      'https://repository-images.githubusercontent.com/271544524/44353a80-d451-11ea-815c-594e4a0c5fb8',
    projectLink:
      'https://github.com/muke1908/chat-e2ee/labels/good%20first%20issue',
    description:
      'Chat app in end-to-end enctypted environment without registration',
    tags: ['React', 'Chat', 'Javascript', 'Beginner', 'NodeJS'],
  },
  {
    name: 'Zulip',
    imageSrc: 'https://avatars0.githubusercontent.com/u/4921959?s=200&v=4',
    projectLink: 'https://github.com/zulip/zulip/contribute',
    description: 'Powerful Open Source Group Chat',
    tags: ['OpenSource', 'Chat', 'Javascript', 'Beginner', 'Python'],
  },
  {
    name: 'SimplQ',
    imageSrc: 'https://www.simplq.me/images/Simple-Q.png',
    projectLink: 'https://github.com/SimplQ/simplQ-frontend#contributing',
    description:
      'Modern and fully web based queue management solution for crowded businesses.',
    tags: ['OpenSource', 'React', 'Javascript', 'Beginner', 'Productivity'],
  },
  {
    name: 'Phpmyadmin',
    imageSrc:
      'https://raw.githubusercontent.com/phpmyadmin/phpmyadmin/master/themes/original/img/logo_right.png',
    projectLink: 'https://www.phpmyadmin.net/contribute/',
    description: 'A web interface for MySQL and MariaDB.',
    tags: ['OpenSource', 'Mariadb', 'Mysql', 'HTML', 'PHP', 'Javascript'],
  },
  {
    name: 'Litefy',
    imageSrc:
      'https://raw.githubusercontent.com/mathkruger/litefy/master/src/assets/logo.png',
    projectLink: 'https://github.com/mathkruger/litefy/contribute',
    description: 'A lighweight Spotify client for low-end devices',
    tags: ['OpenSource', 'Angular', 'HTML', 'CSS', 'Javascript', 'Typescript'],
  },
  {
    name: 'Navy Linux',
    imageSrc:
      'https://raw.githubusercontent.com/navy-linux/navy/master/logo-text.jpg',
    projectLink: 'https://github.com/navy-linux/',
    description:
      'Navy Linux is a recompilation of the Red Hat Linux project just as the centOS Linux project has been for all these years.',
    tags: ['Shell', 'Python', 'HTML', 'Ruby', 'Puppet'],
  },
  {
    name: 'DSA',
    imageSrc: 'https://avatars3.githubusercontent.com/u/67384272?v=4',
    projectLink: 'https://github.com/MakeContributions/DSA',
    description: 'Data structure and Algorithm (DSA) contributions',
    tags: [
      'OpenSource',
      'Javascript',
      'C#',
      'C',
      'C++',
      'Python',
      'Beginner',
      'DSA',
    ],
  },
  {
    name: 'Jest',
    imageSrc:
      'https://raw.githubusercontent.com/facebook/jest/master/website/static/img/jest-readme-headline.png',
    projectLink: 'https://github.com/facebook/jest/contribute',
    description: 'Delightful JavaScript Testing',
    tags: ['OpenSource', 'Facebook', 'Testing', 'Immersive', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'Collabora Online',
    imageSrc: 'https://avatars.githubusercontent.com/u/22418908?s=200&v=4',
    projectLink: 'https://github.com/CollaboraOnline/online/contribute',
    description: 'A collaborative online office suite based on LibreOffice technology. This is also the source for the Collabora Office apps for iOS and Android.',
    tags: ['javascript', 'css', 'android', 'c++', 'design', 'ios', 'web', 'productivity', 'typescript', 'libreoffice', 'office', 'documents']
  },
  {
    name: 'Jigsaw',
    imageSrc: 'https://avatars.githubusercontent.com/u/19845815?s=200&v=4',
    projectLink: 'https://github.com/Jigsaw-Code',
    description: 'Jigsaw is an incubator within Google that uses technology to address geopolitical issues.',
    tags: ['Go', 'TypeScript', 'c', 'Shell', 'Python'],
  },
  {
    name: 'Idea Hub',
    imageSrc: 'https://avatars3.githubusercontent.com/u/67384272?v=4',
    projectLink: 'https://github.com/MakeContributions/ideahub#contribution-guidelines',
    description: 'A collection of ideas and projects that contain from beginner to advance :octocat: 🎯🚀',
    tags: ['Hub', 'ideas', 'Project List', 'Good First Issue', 'Beginner'],
  },
  {
    name: 'Simple Icons',
    imageSrc: 'https://raw.githubusercontent.com/simple-icons/simple-icons-website/master/public/images/og.png',
    projectLink: 'https://github.com/simple-icons/simple-icons/contribute',
    description: 'SVG icons for popular brands',
    tags: ['JavaScript', 'OpenSource', 'Beginner', 'SVG', 'NodeJS']
  },
  {
    name: 'Eclipse JKube',
    imageSrc: 'https://github.com/eclipse/jkube/raw/master/media/JKube-Logo-final-square-color.png',
    projectLink: 'https://github.com/eclipse/jkube',
    description: 'Cloud-Native Java Applications without a hassle, bring your Java applications to Kubernetes',
    tags: ['Java', 'Kubernetes', 'OpenShift', 'Eclipse', 'OpenSource', 'Beginner']
  },
  {
    name: 'Spaceship Prompt',
    imageSrc: 'https://raw.githubusercontent.com/spaceship-prompt/brand/main/spaceship-letters-outside.svg',
    projectLink: 'https://github.com/spaceship-prompt/spaceship-prompt',
    description: 'Minimalistic, powerful and extremely customizable Zsh prompt',
    tags: ['Shell', 'Zsh', 'Prompt', 'Productivity']
  },
  {
    name: 'tldr',
    imageSrc: 'https://raw.githubusercontent.com/tldr-pages/tldr/main/images/banner.png',
    projectLink: 'https://github.com/tldr-pages/tldr',
    description: 'Collaborative cheatsheets for console commands',
    tags: ['Markdown', 'Docs', 'Beginner']
  },
  {
    name: 'Codename One',
    imageSrc: 'https://www.codenameone.com/wp-content/uploads/2020/08/footer-logo.png',
    projectLink: 'https://github.com/codenameone/CodenameOne',
    description: 'Cross-platform mobile app development framework for Java & Kotlin developers',
    tags: ['Cross-Platform', 'OpenSource', 'Java', 'Kotlin', 'Android', 'iOS', 'Framework']
  },
  {
    name: 'SymPy',
    imageSrc: 'https://www.sympy.org/static/images/logo.png',
    projectLink: 'https://github.com/sympy/sympy',
    description: 'A computer algebra system written in pure Python',
    tags: ['Python', 'Science', 'Math', 'Computer-Algebra']
  },
  {
    name: 'Pytorch',
    imageSrc: 'https://github.com/pytorch/pytorch/raw/master/docs/source/_static/img/pytorch-logo-dark.png',
    projectLink: 'https://github.com/pytorch/pytorch',
    description: 'PyTorch is an optimized tensor library for deep learning using GPUs and CPUs.',
    tags: ['Python', 'Machine-Learning', 'Deep-Learning', 'Neural-Network',]
  },
  {
    name: 'Yarn',
    imageSrc: 'https://github.com/yarnpkg/assets/raw/master/yarn-kitten-full.png?raw=true',
    projectLink: 'https://github.com/yarnpkg/yarn',
    description: 'Yarn is a JavaScript package manager created by Facebook that doubles as a project manager.',
    tags: ['JavaScript', 'Package-Manager', 'NodeJS', 'NPM',]
    },
  {
    name: 'Scribe - Language Keyboards',
    imageSrc: 'https://raw.githubusercontent.com/scribe-org/Organization/main/icon/ScribeIcon1024Rounded.png',
    projectLink: 'https://github.com/scribe-org/Scribe-iOS',
    description: 'Keyboards for language learners with translation, verb conjugation and more!',
    tags: ['iOS', 'Swift', 'Productivity', 'Good First Issue', 'Beginner']
  },
  {
    name: 'mindsdb',
    imageSrc: 'https://raw.githubusercontent.com/mindsdb/mindsdb_native/stable/assets/MindsDBColorPurp%403x.png',
    projectLink: 'https://github.com/mindsdb/mindsdb',
    description: 'MindsDB is a ML-SQL Server that enables machine learning workflows for the most powerful databases and datawarehouses using SQL.',
    tags: ['Database', 'MySQL', 'Machine Learning', 'Open Source', 'Productivity']
  },
  {
    name: 'Osu!',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Osu%21_Logo_2016.svg',
    projectLink: 'https://github.com/ppy/osu',
    description: 'Osu! is a free-to-play rhythm game primarily developed by the community.',
    tags: ['Video Game', 'C#' , 'Music']
  },
  {
    name: 'Salt',
    imageSrc: 'https://gitlab.com/saltstack/open/salt-branding-guide/-/raw/master/logos/SaltProject_altlogo_teal.png',
    projectLink: 'https://github.com/saltstack/salt',
    description: 'Salt is the world’s fastest, most intelligent and scalable automation engine.',
    tags: ['Python', 'Shell', 'Automation']
  },
  {
    name: 'aprenda-go-com-testes',
    imageSrc: 'https://github.com/larien/aprenda-go-com-testes/blob/main/.gitbook/assets/red-green-blue-gophers-smaller.png',
    githubLink:
      'https://github.com/larien/aprenda-go-com-testes',
    description: 'learn easily and quickly',
    tags: ['go']
  },
  {
    name: 'Daml',
    imageSrc: 'https://raw.githubusercontent.com/digital-asset/daml/main/daml-logo.png',
    projectLink: 'https://github.com/digital-asset/daml/contribute',
    description: 'Daml is an open-source smart contract language for building future-proof distributed applications on a safe, privacy-aware runtime.',
    tags: ['Scala','Haskell']
  },
];
export default projectList;
