const projectList = [
  {
    name: 'React',
    imageSrc: 'https://camo.githubusercontent.com/22045498095171997ccf6a9554672519b9f67898/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656163742e737667',
    projectLink: 'https://github.com/facebook/react/contribute',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    tags: ['JavaScript', 'UI', 'Web App'],
  }, {
    name: 'React Native',
    imageSrc: 'https://camo.githubusercontent.com/22045498095171997ccf6a9554672519b9f67898/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656163742e737667',
    projectLink: 'https://github.com/facebook/react-native/contribute',
    description: 'A framework for building native apps with React.',
    tags: ['JavaScript', 'React', 'React Native', 'Mobile App'],
  },
  {
    name: 'Typescript',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    projectLink: 'https://github.com/microsoft/TypeScript',
    description: 'TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.',
    tags: ['TypeScript', 'JavaScript'],
  }, {
    name: 'Darktable',
    imageSrc: 'https://raw.githubusercontent.com/darktable-org/darktable/master/data/pixmaps/idbutton.png',
    projectLink: 'https://github.com/darktable-org/darktable',
    description: 'Open source photography workflow application and raw developer.',
    tags: ['C', 'Lua', 'OpenCL', 'Photography'],
  }, {
    name: 'Exercism',
    imageSrc: 'https://avatars2.githubusercontent.com/u/5624255?v=3&s=100',
    projectLink: 'https://github.com/exercism/exercism/contribute',
    description: 'Quickly ramp up in new programming languages!',
    tags: ['Ruby', 'Exercises', 'CLI', 'Web App'],
  }, {
    name: 'Gauge',
    imageSrc: 'https://avatars3.githubusercontent.com/u/7044589?s=400&u=8d2ce328da30e81978c303fdb31a2a7a1f0328e3&v=4',
    projectLink: 'https://github.com/getgauge/gauge/contribute',
    description: 'A free and open source test automation framework',
    tags: ['Golang', 'Automation', 'command line', 'testing']
  }, {
    name: 'Habitat',
    imageSrc: 'https://avatars1.githubusercontent.com/u/18171698?v=3&s=100',
    projectLink: 'https://github.com/habitat-sh/habitat/contribute',
    description: 'Modern applications with built-in automation.',
    tags: ['Docs', 'Front-End', 'Rust', 'MultiOS'],
  }, {
    name: 'Scikit-learn',
    imageSrc: 'https://avatars0.githubusercontent.com/u/365630?v=3&s=100',
    projectLink: 'https://github.com/scikit-learn/scikit-learn/contribute',
    description: 'Machine learning in Python!',
    tags: ['Python', 'Machine Learning', 'Math'],
  }, {
    name: 'AVA',
    imageSrc: 'https://avatars0.githubusercontent.com/u/8527916?v=3&s=100',
    projectLink: 'https://github.com/avajs/ava/contribute',
    description: 'The Futuristic JavaScript test runner!',
    tags: ['JavaScript', 'Tests', 'Docs', 'Babel'],
  }, {
    name: 'Numpy',
    imageSrc:
      'https://camo.githubusercontent.com/b310fd3c9c5f7da5de0911b77d201408b76b8a58/68747470733a2f2f696d616765732e706c6f742e6c792f706c6f746c792d646f63756d656e746174696f6e2f7468756d626e61696c2f6e756d70792d6c6f676f2e6a7067',
    projectLink:
      'https://github.com/numpy/numpy/contribute',
    description: 'Scientific computing with Python!',
    tags: ['Python', 'Math', 'Module', 'Docs'],
  }, {
    name: 'Elasticsearch',
    imageSrc: 'https://avatars2.githubusercontent.com/u/6764390?v=3&s=100',
    projectLink: 'https://github.com/elastic/elasticsearch/contribute',
    description: 'Open Source, Distributed, RESTful Search Engine.',
    tags: ['REST', 'Docs', 'Java', 'Lucene'],
  }, {
    name: 'Homebrew',
    imageSrc: 'https://avatars2.githubusercontent.com/u/1503512?v=3&s=100',
    projectLink: 'https://github.com/Homebrew/brew/contribute',
    description: 'The missing package manager for macOS.',
    tags: ['MacOS', 'Ruby', 'C++'],
  }, {
    name: 'Rust',
    imageSrc: 'https://avatars1.githubusercontent.com/u/5430905?v=3&s=100',
    projectLink: 'https://github.com/rust-lang/rust/contribute',
    description: 'A safe, concurrent, practical language!',
    tags: ['Rust', 'Compiler', 'Mentored', 'Parser'],
  }, {
    name: 'Vuejs',
    imageSrc: 'https://avatars1.githubusercontent.com/u/6128107?v=3&s=100',
    projectLink: 'https://github.com/vuejs/vue/contribute',
    description: 'A progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
    tags: ['JavaScript', 'UI', 'Front-End'],
  }, {
    name: 'Suave',
    imageSrc: 'https://avatars2.githubusercontent.com/u/5822862?v=3&s=100',
    projectLink: 'https://github.com/SuaveIO/suave/contribute',
    description: 'Simple web development F# library to manipulate route flow and task composition.',
    tags: ['F#', 'WebDev', 'Library'],
  }, {
    name: 'OpenRA',
    imageSrc: 'https://avatars3.githubusercontent.com/u/409046?v=3&s=100',
    projectLink: 'https://github.com/OpenRA/OpenRA/contribute',
    description: 'Open Source real-time strategy game engine for early Westwood games.',
    tags: ['AI', 'C#', 'SDL', 'OpenGL'],
  }, {
    name: 'PowerShell',
    imageSrc: 'https://avatars0.githubusercontent.com/u/11524380?v=3&s=100',
    projectLink: 'https://github.com/powershell/powershell/contribute',
    description: 'PowerShell for every system.',
    tags: ['Shell', 'Linux', 'MacOS', 'Windows', '*BSD'],
  }, {
    name: 'Coala',
    imageSrc: 'https://avatars2.githubusercontent.com/u/10620750?v=3&s=100',
    projectLink: 'https://coala.io/newcomer',
    description: 'Unified command-line interface for linting and fixing all your code.',
    tags: ['UX', 'Linter', 'Python'],
  }, {
    name: 'Moment',
    imageSrc: 'https://avatars2.githubusercontent.com/u/4129662?v=3&s=100',
    projectLink: 'https://github.com/moment/moment/contribute',
    description: 'Parse, validate, manipulate, and display dates in JavaScript.',
    tags: ['JavaScript', 'Front-End', 'Meta'],
  }, {
    name: 'Leiningen',
    imageSrc:
      'https://camo.githubusercontent.com/0f302c808c8457f6460913e33aed3478124612c2/687474703a2f2f6c65696e696e67656e2e6f72672f696d672f6c65696e696e67656e2e6a7067',
    projectLink:
      'https://github.com/technomancy/leiningen/contribute',
    description: 'Automate Clojure projects without setting your hair on fire.',
    tags: ['Clojure', 'Automation'],
  }, {
    name: 'Brackets',
    imageSrc: 'https://github.com/adobe/brackets/raw/gh-pages/images/brackets_128.png?raw=true',
    projectLink: 'https://github.com/adobe/brackets/contribute',
    description: 'An open source code editor for the web, written in JavaScript, HTML and CSS.',
    tags: ['Editor', 'Windows', 'Linux', 'MacOS'],
  }, {
    name: 'Webpack',
    imageSrc: 'https://avatars3.githubusercontent.com/u/2105791?v=3&s=100',
    projectLink: 'https://github.com/webpack/webpack/contribute',
    description: 'A bundler for JavaScript and friends. Packs many modules into a few bundled assets.',
    tags: ['Bundler', 'JavaScript', 'Compiler', 'Loader'],
  }, {
    name: 'Babel',
    imageSrc: 'https://avatars2.githubusercontent.com/u/9637642?v=3&s=100',
    projectLink: 'https://github.com/babel/babel/contribute',
    description: 'Babel is a compiler for writing next generation JavaScript.',
    tags: ['es2015', 'JavaScript', 'Compiler'],
  }, {
    name: 'Pouchdb',
    imageSrc: 'https://avatars3.githubusercontent.com/u/3406112?v=3&s=100',
    projectLink: 'https://github.com/pouchdb/pouchdb/contribute',
    description: 'A pocket-sized database.',
    tags: ['JavaScript', 'Node.js', 'CouchDB'],
  }, {
    name: 'Neovim',
    imageSrc: 'https://avatars0.githubusercontent.com/u/6471485?v=3&s=100',
    projectLink: 'https://github.com/neovim/neovim/contribute',
    description: 'Vim-fork focused on extensibility and usability.',
    tags: ['Editor', 'API', 'Cross-Platform', 'Vim'],
  }, {
    name: 'Hoodie',
    imageSrc: 'https://hoodiehq.github.io/hoodie-css/src/content_img/animals/low-profile-dog-1.png',
    projectLink: 'https://github.com/hoodiehq/hoodie/contribute',
    description: 'The Offline First JavaScript Backend.',
    tags: ['JavaScript', 'Node.js', 'Web development', 'User-Friendly'],
  }, {
    name: 'freeCodeCamp',
    imageSrc: 'https://avatars0.githubusercontent.com/u/9892522?v=3&s=100',
    projectLink: 'https://github.com/freeCodeCamp/freeCodeCamp/contribute',
    description: 'Open Source codebase and curriculum.',
    tags: ['Learn', 'Education', 'Non-Profit', 'Certification'],
  }, {
    name: 'Node.js',
    imageSrc: 'https://avatars1.githubusercontent.com/u/9950313?v=3&s=100',
    projectLink: 'https://github.com/nodejs/node/contribute',
    description: 'Node.js JavaScript runtime.',
    tags: ['JavaScript', 'HTML', 'CSS'],
  }, {
    name: 'Semantic-UI-React',
    imageSrc: 'https://avatars1.githubusercontent.com/u/5796209?s=200&v=4',
    projectLink: 'https://github.com/Semantic-Org/Semantic-UI-React/contribute',
    description: 'The official Semantic-UI-React integration.',
    tags: ['React', 'Library', 'Component', 'Front-End'],
  }, {
    name: 'Contribute to Open Source',
    imageSrc: 'https://image.ibb.co/fUM5oG/profile_first_pr.png',
    projectLink: 'https://github.com/danthareja/contribute-to-open-source/contribute',
    description: 'Learn GitHub\'s pull request process by contributing code in a fun simulation project.',
    tags: ['GitHub', 'Tutorial'],
  }, {
    name: 'Mail For Good',
    imageSrc: 'https://avatars0.githubusercontent.com/u/9892522?v=3&s=100',
    projectLink: 'https://github.com/freeCodeCamp/mail-for-good/contribute',
    description: 'An open source email campaign management tool.',
    tags: ['Nodejs', 'JavaScript', 'Email-Campaigns'],
  },
  {
    name: 'Visual Studio Code',
    imageSrc: 'https://camo.githubusercontent.com/a7f6e01cc208b478047eade76755f46cf1098c05/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f322f32642f56697375616c5f53747564696f5f436f64655f312e31385f69636f6e2e737667',
    projectLink: 'https://github.com/Microsoft/vscode/contribute',
    description: 'VS Code is a new type of tool that combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle.',
    tags: ['TypeScript', 'Text-Editor', 'Electron'],
  },
  {
    name: 'Scrapy',
    imageSrc: 'https://blog-media.scrapinghub.com/production/wp-content/uploads/2016/10/06054611/Scrapy-300x300.png',
    projectLink: 'https://github.com/scrapy/scrapy/contribute',
    description: 'Scrapy is a fast high-level web crawling and web scraping framework, used to crawl websites and extract structured data from their pages. ',
    tags: ['Python', 'Module', 'Data-Mining', 'Automated-Testing'],
  },
  {
    name: 'Angular',
    imageSrc: 'https://avatars0.githubusercontent.com/u/139426?s=200&v=4',
    projectLink: 'https://github.com/angular/angular/contribute',
    description: 'Angular is a development platform for building mobile and desktop Web Applications using TypeScript or JavaScript and other languages.',
    tags: ['Angular', 'TypeScript', 'JavaScript'],
  },
  {
    name: 'React Styleguidist',
    imageSrc: 'https://d3vv6lp55qjaqc.cloudfront.net/items/061f0A2n1B0H3p0T1p1f/react-styleguidist-logo.png',
    projectLink: 'https://github.com/styleguidist/react-styleguidist/contribute',
    description: 'React Styleguidist is a component development environment with hot reloaded dev server and a living style guide that you can share with your team. It lists component propTypes and shows live, editable usage examples based on Markdown files.',
    tags: ['JavaScript', 'UI'],
  },
  {
    name: 'Flutter',
    imageSrc: 'https://raw.githubusercontent.com/flutter/website/master/src/_assets/image/flutter-lockup.png',
    projectLink: 'https://github.com/flutter/flutter/contribute',
    description: 'Flutter makes it easy and fast to build beautiful apps for mobile and beyond.',
    tags: ['Dart','Android','iOS','UI','Cross-platform'],
  },
  {
    name: 'Python Koans',
    imageSrc: 'https://s3.amazonaws.com/media-p.slid.es/thumbnails/akoebbe/b35d77/python-koans.jpg',
    projectLink: 'https://github.com/gregmalcolm/python_koans/contribute',
    description: 'Python Koans is a port of Edgecase\'s "Ruby Koans".',
    tags: ['Python', 'Exercises', 'CLI', 'Web App'],
  },
  {
    name: 'Scala Exercises',
    imageSrc: 'https://avatars1.githubusercontent.com/u/17570897?s=200&v=4',
    projectLink: 'https://github.com/scala-exercises/scala-exercises/contribute',
    description: 'Scala Exercises is an Open Source project for learning different technologies based in the Scala Programming Language.',
    tags: ['Scala', 'Exercises', 'Functional Programming'],
  },
  {
    name: 'CodeWorkout',
    imageSrc: 'https://i.imgur.com/ZsSiCqi.png',
    projectLink: 'https://github.com/web-cat/code-workout/contribute',
    description: 'CodeWorkout is an online system for people learning a programming language for the first time. It is a free, open-source solution for practicing small programming problems. Students may practice coding exercises on a variety of programming concepts within the convenience of a web browser!',
    tags: ['Java', 'Ruby', 'Python', 'Exercises'],
  },
  {
    name: 'TEAMMATES',
    imageSrc: 'https://www.google-melange.com/archive/gsoc/2015/orgs/teammates/logo-200.png',
    projectLink: 'https://github.com/TEAMMATES/teammates/contribute',
    description: 'An online feedback management system for students and teachers',
    tags: ['Java', 'Javascript', 'HTML', 'Web App'],
  },
  {
    name: 'electron',
    imageSrc: 'https://avatars3.githubusercontent.com/u/13409222?s=200&v=4',
    projectLink: 'https://github.com/electron/electron/contribute',
    description: 'Build cross platform desktop apps with JavaScript, HTML, and CSS!',
    tags: ['JavaScript', 'Electron', 'Css', 'Html', 'Chrome', 'Nodejs', 'V8']
  },
  {
    name: 'Oppia',
    imageSrc: 'https://www.oppia.org/build/assets/images/logo/288x128_logo_mint.42f8d38467fe745205b3374b33668068.png',
    projectLink: 'https://github.com/oppia/oppia/contribute',
    description: 'Tool for collaboratively building interactive lessons.',
    tags: ['Python', 'Javascript', 'Css', 'Html', 'Shell'],
  },
  {
    name: 'Public Lab',
    imageSrc: 'https://publiclab.org/system/images/photos/000/023/444/large/Screenshot_20180204-101546_2.png',
    projectLink: 'https://publiclab.github.io/community-toolbox/#r=all',
    description: 'PublicLab.org - a collaborative knowledge-exchange platform in Rails; we welcome first-time contributors! 🎈',
    tags: ['Ruby on Rails', 'Ruby', 'JavaScript', 'Non-Profit', 'Web App', 'First-Timers', 'Environment', 'Science'],
  },
  {
    name: 'MissionControl',
    imageSrc: 'https://i.imgur.com/nSRLFas.gif',
    projectLink: 'https://github.com/DAVFoundation/missioncontrol/contribute',
    description: 'Controls and orchestrates missions between autonomous vehicles and DAV users.',
    tags: ['Javascript', 'Docker', 'Thrift', 'Good First Issue']
  },
  {
    name: 'DuckDuckGo',
    imageSrc: 'https://avatars3.githubusercontent.com/u/342708?s=200&v=4',
    projectLink: 'https://github.com/duckduckgo/duckduckgo-privacy-extension/contribute',
    description: 'The search engine that doesn\'t track you!',
    tags: ['Javascript', 'Perl', 'Python', 'Privacy']
  },
  {
    name: 'Kinto',
    imageSrc: 'https://avatars2.githubusercontent.com/u/13413813?s=200&v=4',
    projectLink: 'https://github.com/Kinto/kinto/contribute',
    description: 'A generic JSON document store with sharing and synchronisation capabilities.',
    tags: ['Python', 'API', 'HTTP', 'Web', 'Decentralisation'],
  },
  {
    name: 'atom',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Atom_1.0_icon.png',
    projectLink: 'https://github.com/atom/atom/contribute',
    description: 'A customizable text editor built on electron.',
    tags: ['Atom', 'Editor', 'Javascript', 'Electron', 'Windows', 'Linux', 'Macos']
  },
  {
    name: 'OpenGenus',
    imageSrc: 'https://raw.githubusercontent.com/notnerb/FamilySite/master/logo.png',
    projectLink: 'https://github.com/OpenGenus/Join_OpenGenus/contribute',
    description: 'A positive open-source community working to bring essential programming knowledge offline.',
    tags: ['C++', 'Python', 'Java', 'Good First Issue']
  },
  {
    name: 'css-protips',
    imageSrc: 'https://camo.githubusercontent.com/9b290de6835cf807aaa81bb6a7cfdf3835636f8c/68747470733a2f2f7261776769742e636f6d2f416c6c5468696e6773536d697474792f6373732d70726f746970732f6d61737465722f6d656469612f6c6f676f2e737667',
    projectLink: 'https://github.com/AllThingsSmitty/css-protips/contribute',
    description: 'Simple but useful tips to improve your CSS skills.',
    tags: ['CSS', 'tips', 'guide', 'simple', 'useful']
  },
  {
    name: 'AnitaB.org ',
    imageSrc: 'https://user-images.githubusercontent.com/60894542/94313579-9780c080-ff9c-11ea-8853-daa2a1c0fff5.png',
    projectLink: 'https://github.com/anitab-org',
    description: 'Helping women find their potential in code.',
    tags: ['Python', 'Java', 'Swift', 'Javascript', 'HTML' , 'Kotlin' , 'Dart'],
  },
  {
    name: 'Centos',
    imageSrc: 'https://avatars2.githubusercontent.com/u/79192?s=200&v=4',
    projectLink: 'https://github.com/CentOS',
    description: 'A community-driven free software effort focused on delivering a robust open source ecosystem.',
    tags: ['Shell', 'Python', 'HTML', 'Ruby', 'Puppet'],
  },
  {
    name: 'NPM',
    imageSrc: 'https://avatars0.githubusercontent.com/u/6078720?s=200&v=4',
    projectLink: 'https://github.com/npm',
    description: 'Npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways.',
    tags: ['Javascript', 'Shell', 'CSS', 'HTML', 'Rust'],
  },
  {
    name: 'openEBS',
    imageSrc: 'https://avatars1.githubusercontent.com/u/20769039?s=200&v=4',
    projectLink: 'https://github.com/openebs/',
    description: 'OpenEBS is an open source storage platform that provides persistent and containerized  block storage for DevOps and container environments.',
    tags: ['Containers', 'DevOps', 'Go'],
  },
  {
    name: 'Kubernetes',
    imageSrc: 'https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png',
    projectLink: 'https://github.com/kubernetes',
    description: 'Production-Grade Container Scheduling and Management',
    tags: ['Go', 'Container', 'Orchestration'],
  },
  {
    name: 'styled-system',
    imageSrc: 'https://camo.githubusercontent.com/8b3dc6438530a7240e952b187e40bd8380090f64/68747470733a2f2f7374796c65642d73797374656d2e636f6d2f6c6f676f2e737667',
    projectLink: 'https://github.com/styled-system/styled-system/contribute',
    description: 'Style props for rapid UI development',
    tags: ['ui', 'css-in-js', 'design-systems', 'style-props', 'theming'],
   },
  {
    name: 'Movie-Stream',
    imageSrc: 'https://image.ibb.co/faTroc/movie_stream.png',
    projectLink: 'https://github.com/hrishi7/streamIt/contribute',
    description: 'Provides Online free movie streaming service with adfree. flexible for mobile also',
    tags: ['Web development', 'HTML', 'Javascript', 'API', 'CSS', 'Bootstrap']
  },
  {
    name: 'ethereum',
    imageSrc: 'https://avatars1.githubusercontent.com/u/6250754?s=200&v=4',
    projectLink: 'https://github.com/ethereum/',
    description: 'Ethereum is a decentralized platform that runs smart contracts applications.',
    tags: ['Go', 'C++', 'Solidity', 'Python', 'Shell', 'Java'
    ]
  },
  {
    name: 'Rust Lang Nursery',
    imageSrc: 'https://avatars2.githubusercontent.com/u/14631425?s=200&v=4',
    projectLink: 'https://github.com/rust-lang-nursery/rust-clippy/contribute',
    description: 'A collection of lints to catch common mistakes and improve your Rust code.',
    tags: ['Rust', 'Compiler', 'Parser', 'Mentors'
    ]
  },
  {
    name: 'probot',
    imageSrc: 'https://avatars2.githubusercontent.com/u/26350515?s=400&v=4',
    projectLink: 'https://github.com/probot/probot/contribute',
    description: 'Probot is a framework for building Github Apps in Node.js.',
    tags: ['Node.js', 'Github', 'Javascript']
  },
  {
    name: 'Open Data Kit',
    imageSrc: 'https://opendatakit.org/assets/images/logo.png',
    projectLink: 'https://github.com/getodk',
    description: 'Free and open-source set of tools for collecting data in challenging environments.',
    tags: ['Open Source', 'Software', 'JAVA', 'Android']
  },
  {
    name: 'Sugar Labs',
    imageSrc: 'https://avatars3.githubusercontent.com/u/3996398?s=280&v=4',
    projectLink: 'https://github.com/sugarlabs',
    description: 'Learning Software for children.',
    tags: ['Ubuntu', 'Rasberry Pi', 'Debian', 'Fedora']
  },
  {
    name: 'Jupyter Hub',
    imageSrc: 'https://avatars2.githubusercontent.com/u/17927519?s=400&v=4',
    projectLink: 'https://github.com/jupyterhub/jupyterhub/contribute',
    description: 'A multi-user Hub, spawns, manages, and proxies multiple instances of the single-user Jupyter notebook server.',
    tags: ['Proxy Server', 'Python', 'REST API']
  },
  {
    name: 'Allenai',
    imageSrc: 'https://news.cs.washington.edu/wp-content/uploads/2015/10/AI2-logo-300x300.png',
    projectLink: 'https://github.com/allenai/allennlp/contribute',
    description: 'conducts high-impact research and engineering to tackle key problems in artificial intelligence.',
    tags: ['Artificial Intelligence', 'Python', 'NLP']
  },
  {
    name: 'Qute Browser',
    imageSrc: 'https://avatars1.githubusercontent.com/u/21955151?s=200&v=4',
    projectLink: 'https://github.com/qutebrowser/qutebrowser/contribute',
    description: 'A keyboard-driven, vim-like browser based on PyQt5',
    tags: ['Python', 'Qt', 'pyqt5', 'Vim', 'Browser', 'qtWebEngine', 'web']
  },
  {
    name: 'Ghost',
    imageSrc: 'https://avatars1.githubusercontent.com/u/2178663?s=200&v=4',
    projectLink: 'https://github.com/TryGhost/Ghost/contribute',
    description: 'Just a blogging platform',
    tags: ['nodejs', 'javascript', 'ember', 'cms', 'blogging']
  },
  {
    name: 'Hyper',
    imageSrc: 'https://raw.githubusercontent.com/vercel/hyper/canary/app/static/icon.png',
    projectLink: 'https://github.com/zeit/hyper/contribute',
    description: 'A terminal built on web technologies',
    tags: ['html', 'javascript', 'css', 'react', 'terminal']
  },
  {
    name: 'Kap',
    imageSrc: 'https://avatars3.githubusercontent.com/u/16321113?s=200&v=4',
    projectLink: 'https://github.com/wulkano/kap/contribute',
    description: 'An open-source screen recorder built with web technology',
    tags: ['electron', 'javascript', 'mac', 'oss', 'screencast']
  },
  {
    name: 'Ember.js',
    imageSrc: 'https://avatars0.githubusercontent.com/u/1253363?s=200&v=4',
    projectLink: 'https://github.com/emberjs/ember.js/contribute',
    description: 'A JavaScript framework for creating ambitious web applications',
    tags: ['ember', 'javascript', 'javascript-framework']
  },
  {
    name: 'Opensourcedesign',
    imageSrc: 'https://avatars3.githubusercontent.com/u/4183553?s=200&v=4',
    projectLink: 'https://github.com/opensourcedesign/opensourcedesign.github.io/contribute',
    description: 'Source code of the website opensourcedesign.net',
    tags: ['design', 'opensourcedesign', 'open-source', 'open-source-design']
  },
  {
    name: 'ifme',
    imageSrc: 'https://avatars1.githubusercontent.com/u/23299450?s=200',
    projectLink: 'https://github.com/ifmeorg/ifme',
    description: 'A community for mental health experiences',
    tags: ['ruby-on-rails', 'javascript', 'react']
  },
  {
    name: 'Rebus',
    imageSrc: 'https://raw.githubusercontent.com/ollelauribostrom/rebus/master/logo.png',
    projectLink: 'https://github.com/ollelauribostrom/rebus/contribute',
    description: 'Helping new developers take their first steps as open source contributors by developing a simple rebus game together',
    tags: ['javascript', 'html', 'css', 'tutorial']
  },
  {
    name: 'PRoot',
    imageSrc: 'https://avatars2.githubusercontent.com/u/12125707',
    projectLink: 'https://github.com/proot-me/PRoot/contribute',
    description: 'chroot, mount --bind, and binfmt_misc without privilege/setup for Linux ',
    tags: ['chroot-environment', 'userland-exec', 'rootfs', 'chroot', 'c']
  },
  {
    name: 'Techqueria.org',
    imageSrc: 'https://avatars1.githubusercontent.com/u/17460806?s=200&v=4',
    projectLink: 'https://github.com/techqueria',
    description: 'We\'re a community of Latinx professionals in the tech industry.',
    tags: ['latinx', 'latinx in tech', 'hugo', 'netlify', 'jamstack']
  },
  {
    name: 'Nextcloud',
    imageSrc: 'https://avatars0.githubusercontent.com/u/19211038?s=200&v=4',
    projectLink: 'https://github.com/nextcloud/server/contribute',
    description: 'Open source collaboration platform for files, calendar, contacts, chat & calls, mail and more.',
    tags: ['javascript', 'php', 'html', 'css', 'android', 'c++', 'qt', 'design', 'ios', 'vuejs', 'web']
  },
  {
    name: 'Open Source Diversity',
    imageSrc: 'https://avatars1.githubusercontent.com/u/31018274?s=200&v=4',
    projectLink: 'https://github.com/opensourcediversity/opensourcediversity.org/contribute',
    description: 'For more diversity & inclusion in free & open source software communities 😊',
    tags: ['javascript', 'html', 'css', 'diversity', 'inclusion', '🎉', 'web', 'community']
  },
  {
    name: 'Bitcoin',
    imageSrc: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v211-mint-aum-currency-13.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=435abda621bceebc1362c7e657e06c79',
    projectLink: 'https://github.com/bitcoin/bitcoin/contribute',
    description: 'Bitcoin is an experimental digital currency that enables instant payments to anyone, anywhere in the world.',
    tags: ['C++', 'Python', 'Cryptocurrency', 'Blockchain', 'Peer-to-peer']
  },
  {
    name: 'Tensorflow',
    imageSrc: 'https://camo.githubusercontent.com/0905c7d634421f8aa4ab3ddf19a582572df568e1/68747470733a2f2f7777772e74656e736f72666c6f772e6f72672f696d616765732f74665f6c6f676f5f736f6369616c2e706e67',
    projectLink: 'https://github.com/tensorflow/tensorflow/contribute',
    description: 'A Machine Learning library in Python for implementing Machine Learning and Deep Learning models',
    tags: ['python', 'c++', 'machine learning', 'math', 'deep learning', 'neural network']
  },
  {
    name: 'Next',
    imageSrc: 'https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png',
    projectLink: 'https://github.com/zeit/next.js/contribute',
    description: 'Next.js is a framework that most notably allows you to write server-rendered React apps easily',
    tags: ['JavaScript', 'server-rendering', 'node', 'nextjs', 'react']
  },
  {
    name: 'Roc Toolkit',
    imageSrc: 'https://roc-streaming.org/icon.png',
    projectLink: 'https://github.com/roc-streaming/roc-toolkit/labels/help%20wanted',
    description: 'A toolkit for real-time audio streaming over the network',
    tags: ['C++', 'Audio', 'Streaming', 'Networking', 'Cross-Platform', 'Linux', 'MacOS', 'Windows']
  },
  {
    name: 'Conda',
    imageSrc: 'https://conda.io/en/latest/_images/conda_logo.svg',
    projectLink: 'https://github.com/conda',
    description: 'Conda is an open source package management system and environment management system that runs on Windows, macOS and Linux. Conda quickly installs, runs and updates packages and their dependencies. Conda easily creates, saves, loads and switches between environments on your local computer. It was created for Python programs, but it can package and distribute software for any language.',
    tags: ['ML', 'Python', 'Builds', 'Package Manager']
  },
  {
    name: 'Light Table',
    imageSrc: 'https://avatars1.githubusercontent.com/u/5877010?s=200',
    projectLink: 'https://github.com/LightTable',
    description: 'Light Table is a next generation code editor that connects you to your creation with instant feedback. Light Table is very customizable and can display anything a Chromium browser can.',
    tags: ['clojurescript', 'ide', 'editor', 'clojure', 'lighttable', 'clojure-development']
  },
  {
    name: 'Dragula',
    imageSrc: 'https://bevacqua.github.io/dragula/resources/icon.svg',
    projectLink: 'https://github.com/bevacqua/dragula',
    description: 'Dragula provides the easiest possible API to make drag and drop a breeze in your applications.',
    tags: ['Javascript', 'front-end', 'drag-and-drop', 'vanilla', 'drag-drop', 'dragging', 'component']
  },
  {
    name: 'Moby',
    imageSrc: 'https://github.com/moby/moby/raw/master/docs/static_files/moby-project-logo.png',
    projectLink: 'https://github.com/moby/moby',
    description: 'The Moby project is a collaborative project for the container ecosystem to assemble container-based systems',
    tags: ['docker', 'containers', 'go']
  },
  {
    name: 'ScyllaDb',
    imageSrc: 'https://avatars1.githubusercontent.com/u/14364730?s=200&v=4',
    projectLink: 'https://github.com/scylladb/scylla',
    description: 'NoSQL data store using the seastar framework, compatible with Apache Cassandra',
    tags: ['nosql', 'cpp', 'cassandra']
  },
  {
    name: 'OSRM (Open Source Routing Machine)',
    imageSrc: 'https://avatars2.githubusercontent.com/u/8207060?s=200&v=4',
    projectLink: 'https://github.com/Project-OSRM/osrm-backend',
    description: 'High performance routing engine written in C++14 designed to run on OpenStreetMap data',
    tags: ['osrm', 'routing-engine', 'cpp', 'openstreetmap']
  },
  {
    name: 'Laravel',
    imageSrc: 'https://avatars3.githubusercontent.com/u/958072?s=200&v=4',
    projectLink: 'https://github.com/laravel/laravel',
    description: 'A PHP Framework for Web Artisans',
    tags: ['PHP', 'web development']
  },
  {
    name: 'Django',
    imageSrc: 'https://avatars3.githubusercontent.com/u/27804?s=200&v=4',
    projectLink: 'https://github.com/django/django',
    description: 'A high-level Python Web framework that encourages rapid development and clean, pragmatic design',
    tags: ['python', 'web development']
  },
  {
    name: 'Plotly',
    imageSrc: 'https://avatars3.githubusercontent.com/u/5997976?s=200&v=4',
    projectLink: 'https://github.com/plotly',
    description: 'A high-level Python declarative charting library',
    tags: ['python', 'javascript', 'graph', 'graph-based', 'graph visualization']
  },
  {
    name: 'NetworkX',
    imageSrc: 'https://avatars3.githubusercontent.com/u/388785?s=200&v=4',
    projectLink: 'https://github.com/networkx/networkx/contribute',
    description: 'Python library for studying graphs and networks',
    tags: ['Python', 'graph', 'graph algorithms', 'complex networks']
  },
  {
    name: 'Igraph',
    imageSrc: 'https://avatars3.githubusercontent.com/u/3735184?s=200&v=4',
    projectLink: 'https://github.com/igraph/igraph/contribute',
    description: 'Python Library for creating and manipulating graphs',
    tags: ['Python', 'graph', 'graph algorithms', 'complex networks']
  },
  {
    name: 'D3',
    imageSrc: 'https://avatars1.githubusercontent.com/u/1562726?s=200&v=4',
    projectLink: 'https://github.com/d3/d3/contribute',
    description: 'JavaScript library for visualizing data using web standards',
    tags: ['Javascript', 'graph', 'graph-based', 'graph visualization', 'data visualization', 'dynamic plots']
  },
  {
    name: 'FontAwesome',
    imageSrc: 'https://avatars1.githubusercontent.com/u/1505683?s=200&v=4',
    projectLink: 'https://github.com/FortAwesome/Font-Awesome/contribute',
    description: 'The iconic SVG, font, and CSS toolkit',
    tags: ['SVG', 'CSS', 'font']
  },
  {
    name: 'TallyCTF',
    imageSrc: 'https://raw.githubusercontent.com/CyberNinjas/TallyCTF/master/modules/core/client/img/brand/Tallylogo_1.png',
    projectLink: 'https://github.com/CyberNinjas/TallyCTF/contribute',
    description: 'Capture-The-Flag Scoreboard & CTF Event Running Software',
    tags: ['ctf', 'ctf-scoreboard', 'ctf-platform', 'JavaScript']
  },
  {
    name: 'Airform',
    imageSrc: 'https://avatars1.githubusercontent.com/u/24883621',
    projectLink: 'https://github.com/airform/airform/contribute',
    description: 'Functional HTML forms for Front-End Developers.',
    tags: ['airform',  'serverless',  'sendmail',  'mailer',  'html-forms',  'forms',  'smtp',  'sendgrid',  'mailchimp',  'mailgun'],
  },
  {
    name: 'Milligram',
    imageSrc: 'https://avatars0.githubusercontent.com/u/16243913',
    projectLink: 'https://github.com/milligram/milligram/contribute',
    description: 'A minimalist CSS framework.',
    tags: ['milligram', 'css', 'html', 'framework', 'css-framework', 'design', 'minimalist', 'flexbox', 'amp'],
  },
  {
    name: 'Gatsby',
    imageSrc: 'https://raw.githubusercontent.com/gatsbyjs/gatsby/master/www/static/Gatsby-Monogram.svg',
    projectLink: 'https://github.com/gatsbyjs/gatsby/contribute',
    description: 'A free and open source framework based on React that helps developers build blazing fast websites and apps.',
    tags: ['React', 'Javascript', 'HTML', 'CSS', 'GraphQL', 'Web Development', 'Markdown'],
  },
  {
    name: 'ClickHouse',
    imageSrc: 'https://raw.githubusercontent.com/ClickHouse/ClickHouse/master/website/images/logo.png',
    projectLink: 'https://github.com/ClickHouse/ClickHouse/contribute',
    description: 'Column-oriented database management system that allows generating analytical data reports in real time.',
    tags: ['C++', 'C++20', 'cpp', 'Linux', 'DBMS', 'OLAP', 'Analytics', 'SQL', 'Big Data', 'Distributed Database', 'MPP'],
  },
  {
    name: 'Game of Life',
    imageSrc: 'https://avatars0.githubusercontent.com/u/20078201?s=460&u=3e17a0f93f3c87b4dcef5671b623519229a5c4fb&v=4',
    projectLink: 'https://github.com/TroyTae/game-of-life/contribute',
    description: 'Conway\'s game of life web version!',
    tags: ['Javascript', 'Typescript', 'Good First Issue'],
  },
  {
    name: 'Mattermost',
    imageSrc: 'https://raw.githubusercontent.com/mattermost/mattermost-handbook/3b54c2cd1f823d1ea012ce45d1baa61fb4fbedbc/.gitbook/assets/branding/logo-downloads/mattermost-logo-vertical-blue.png',
    projectLink: 'https://github.com/mattermost/mattermost-server/contribute',
    description: 'Open source Slack-alternative for DevOps teams',
    tags: ['Go', 'Javascript', 'React', 'React Native'],
  },
  {
    name: 'Markdown Dungeon',
    imageSrc: 'https://avatars3.githubusercontent.com/u/67384272?v=4',
    projectLink: 'https://github.com/MakeContributions/markdown-dungeon#contribution-guidelines',
    description: 'This is an example that how to use Markdown creating a dungeon.',
    tags: ['Markdown', 'React', 'Gatsby', 'Good First Issue', 'Beginner'],
  },
  {
    name: 'Ansible',
    imageSrc: 'https://avatars1.githubusercontent.com/u/1507452?s=200&v=4',
    projectLink: 'https://docs.ansible.com/ansible/latest/community/index.html',
    description: 'Ansible is a radically simple IT automation platform that makes your applications and systems easier to deploy.',
    tags: ['Python', 'Automated-Testingg', 'Beginner'],
  },
  {
    name: 'start-here-guidelines',
    imageSrc: 'https://avatars2.githubusercontent.com/u/35373879?s=200&v=4',
    projectLink: 'https://github.com/zero-to-mastery/start-here-guidelines#a-guide-to-get-started',
    description: 'Lets Git started in the world of opensource, starting in the Zero To Mastery opensource playground. Especially designed for education and practical experience purposes.',
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
    imageSrc: 'https://repository-images.githubusercontent.com/271544524/44353a80-d451-11ea-815c-594e4a0c5fb8',
    projectLink: 'https://github.com/muke1908/chat-e2ee/labels/good%20first%20issue',
    description: 'Chat app in end-to-end enctypted environment without registration',
    tags: ['React', 'Chat', 'Javascript', 'Beginner', 'NodeJS'],
  },
  {
    name: 'Open Source Code',
    imageSrc: 'https://raw.githubusercontent.com/OpenSouceCode/Frontend/master/public/logo/favicon-logo.png',
    projectLink: 'https://github.com/OpenSouceCode',
    description: 'Contributing to open source can be a rewarding way to learn, teach, and build experience in just about any skill you can imagine.',
    tags: ['React', 'Chat', 'Javascript', 'Beginner', 'NodeJS', 'NextJS'],
  },
  {
    name: 'Zulip',
    imageSrc: 'https://avatars0.githubusercontent.com/u/4921959?s=200&v=4',
    projectLink: 'https://github.com/zulip/zulip/contribute',
    description: 'Powerful Open Source Group Chat',
    tags: ['OpenSource', 'Chat', 'Javascript', 'Beginner', 'Python'],
  }
];
export default projectList;
