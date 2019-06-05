const projectList = [
  {
    name: 'React',
    imageSrc: 'https://camo.githubusercontent.com/22045498095171997ccf6a9554672519b9f67898/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656163742e737667',
    githubLink: 'https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    tags: ['JavaScript', 'UI', 'Web App'],
  }, {
    name: 'React Native',
    imageSrc: 'https://camo.githubusercontent.com/22045498095171997ccf6a9554672519b9f67898/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656163742e737667',
    githubLink: 'https://github.com/facebook/react-native/issues?q=is%3Aissue+is%3Aopen+label%3A%22Good+first+issue%22',
    description: 'A framework for building native apps with React.',
    tags: ['JavaScript', 'React', 'React Native', 'Mobile App'],
  }, {
    name: 'Exercism',
    imageSrc: 'https://avatars2.githubusercontent.com/u/5624255?v=3&s=100',
    githubLink: 'https://github.com/exercism/exercism/labels/difficulty%2Feasy',
    description:  'Quickly ramp up in new programming languages!',
    tags: ['Ruby', 'Exercises', 'CLI', 'Web App'],
  },{
    name: 'Gauge',
    imageSrc: 'https://avatars3.githubusercontent.com/u/7044589?s=400&u=8d2ce328da30e81978c303fdb31a2a7a1f0328e3&v=4',
    githubLink: 'https://github.com/getgauge/gauge/issues',
    description: 'A free and open source test automation framework',
    tags: ['Golang','Automation','command line','testing']
  },{
    name: 'Fun Retros',
    imageSrc: 'https://avatars3.githubusercontent.com/u/15913975?v=3&s=100',
    githubLink: 'https://github.com/funretro/distributed/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3A%22beginner+friendly%22',
    description: 'Easy to use and beautiful restrospective tool!',
    tags: ['JavaScript', 'Web App', 'AngularJS', 'Firebase'],
  }, {
    name: 'Habitat',
    imageSrc: 'https://avatars1.githubusercontent.com/u/18171698?v=3&s=100',
    githubLink: 'https://github.com/habitat-sh/habitat/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3AE-Easy',
    description: 'Modern applications with built-in automation.',
    tags: ['Docs','Front-End','Rust','MultiOS'],
  }, {
    name: 'Scikit-learn',
    imageSrc: 'https://avatars0.githubusercontent.com/u/365630?v=3&s=100',
    githubLink: 'https://github.com/scikit-learn/scikit-learn/issues?q=is%3Aopen+is%3Aissue+label%3AEasy',
    description: 'Machine learning in Python!',
    tags: ['Python', 'Machine Learning', 'Math'],
  }, {
    name: 'AVA',
    imageSrc: 'https://avatars0.githubusercontent.com/u/8527916?v=3&s=100',
    githubLink: 'https://github.com/avajs/ava/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+for+beginner%22',
    description: 'The Futuristic JavaScript test runner!',
    tags: ['JavaScript','Tests', 'Docs', 'Babel'],
  }, {
    name: 'Numpy',
    imageSrc:
      'https://camo.githubusercontent.com/b310fd3c9c5f7da5de0911b77d201408b76b8a58/68747470733a2f2f696d616765732e706c6f742e6c792f706c6f746c792d646f63756d656e746174696f6e2f7468756d626e61696c2f6e756d70792d6c6f676f2e6a7067',
    githubLink:
      'https://github.com/numpy/numpy/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3A%22difficulty%3A+Easy%22',
    description: 'Scientific computing with Python!',
    tags: ['Python', 'Math', 'Module', 'Docs'],
  }, {
    name: 'Elasticsearch',
    imageSrc: 'https://avatars2.githubusercontent.com/u/6764390?v=3&s=100',
    githubLink: 'https://github.com/elastic/elasticsearch/labels/good%20first%20issue',
    description: 'Open Source, Distributed, RESTful Search Engine.',
    tags: ['REST', 'Docs', 'Java', 'Lucene'],
  }, {
    name: 'Homebrew',
    imageSrc: 'https://avatars2.githubusercontent.com/u/1503512?v=3&s=100',
    githubLink: 'https://github.com/Homebrew/brew/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22',
    description: 'The missing package manager for macOS.',
    tags: ['MacOS', 'Ruby', 'C++'],
  }, {
    name: 'Rust',
    imageSrc: 'https://avatars1.githubusercontent.com/u/5430905?v=3&s=100',
    githubLink: 'https://github.com/rust-lang/rust/issues?q=is%3Aopen+is%3Aissue+label%3AE-easy',
    description: 'A safe, concurrent, practical language!',
    tags: ['Rust', 'Compiler', 'Mentored', 'Parser'],
  }, {
    name: 'Vue.js',
    imageSrc: 'https://avatars1.githubusercontent.com/u/6128107?v=3&s=100',
    githubLink: 'https://github.com/vuejs/vue/labels/good%20first%20issue',
    description: 'A progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
    tags: ['JavaScript', 'UI', 'Front-End'],
  }, {
    name: 'Suave',
    imageSrc: 'https://avatars2.githubusercontent.com/u/5822862?v=3&s=100',
    githubLink: 'https://github.com/SuaveIO/suave/issues?q=is%3Aopen+is%3Aissue+label%3Ahardness-easy',
    description: 'Simple web development F# library to manipulate route flow and task composition.',
    tags: ['F#', 'WebDev', 'Library'],
  }, {
    name: 'OpenRA',
    imageSrc: 'https://avatars3.githubusercontent.com/u/409046?v=3&s=100',
    githubLink: 'https://github.com/OpenRA/OpenRA/issues?q=is%3Aopen+is%3Aissue+label%3AEasy',
    description: 'Open Source real-time strategy game engine for early Westwood games.',
    tags: ['AI', 'C#', 'SDL', 'OpenGL'],
  }, {
    name: 'PowerShell',
    imageSrc: 'https://avatars0.githubusercontent.com/u/11524380?v=3&s=100',
    githubLink: 'https://github.com/powershell/powershell/issues?q=is%3Aopen+is%3Aissue+label%3AUp-for-Grabs',
    description: 'PowerShell for every system.',
    tags: ['Shell', 'Linux', 'MacOS', 'Windows', 'BSD'],
  }, {
    name: 'Coala',
    imageSrc: 'https://avatars2.githubusercontent.com/u/10620750?v=3&s=100',
    githubLink: 'https://coala.io/new',
    description: 'Unified command-line interface for linting and fixing all your code.',
    tags: ['UX', 'Linter', 'Python'],
  }, {
    name: 'Moment',
    imageSrc: 'https://avatars2.githubusercontent.com/u/4129662?v=3&s=100',
    githubLink: 'https://github.com/moment/moment/issues?q=is%3Aopen+is%3Aissue+label%3AUp-For-Grabs',
    description: 'Parse, validate, manipulate, and display dates in JavaScript.',
    tags: ['JavaScript', 'Front-End', 'Meta'],
  }, {
    name: 'Leiningen',
    imageSrc:
      'https://camo.githubusercontent.com/0f302c808c8457f6460913e33aed3478124612c2/687474703a2f2f6c65696e696e67656e2e6f72672f696d672f6c65696e696e67656e2e6a7067',
    githubLink:
      'https://github.com/technomancy/leiningen/issues?q=is%3Aopen+is%3Aissue+label%3ANewbie',
    description: 'Automate Clojure projects without setting your hair on fire.',
    tags: ['Clojure', 'Automation'],
  }, {
    name: 'Brackets',
    imageSrc: 'https://github.com/adobe/brackets/raw/gh-pages/images/brackets_128.png?raw=true',
    githubLink: 'https://github.com/adobe/brackets/issues?q=is%3Aopen+is%3Aissue+label%3A%22Starter+bug%22',
    description: 'An open source code editor for the web, written in JavaScript, HTML and CSS.',
    tags: ['Editor', 'Windows', 'Linux', 'MacOS'],
  }, {
    name: 'Webpack',
    imageSrc: 'https://avatars3.githubusercontent.com/u/2105791?v=3&s=100',
    githubLink: 'https://github.com/webpack/webpack/issues?q=is%3Aopen+is%3Aissue+label%3A%22D1%3A+Easy+%28Contrib.+Difficulty%29%22',
    description: 'A bundler for JavaScript and friends. Packs many modules into a few bundled assets.',
    tags: ['Bundler', 'JavaScript', 'Compiler', 'Loader'],
  }, {
    name: 'Babel',
    imageSrc: 'https://avatars2.githubusercontent.com/u/9637642?v=3&s=100',
    githubLink: 'https://github.com/babel/babel/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22',
    description: 'Babel is a compiler for writing next generation JavaScript.',
    tags: ['es2015', 'JavaScript', 'Compiler'],
  }, {
    name: 'Pouchdb',
    imageSrc: 'https://avatars3.githubusercontent.com/u/3406112?v=3&s=100',
    githubLink: 'https://github.com/pouchdb/pouchdb/issues?q=is%3Aopen+is%3Aissue+label%3A%22first+timers+only%22',
    description: 'A pocket-sized database.',
    tags: ['JavaScript','Node.js','CouchDB'],
  }, {
    name: 'Neovim',
    imageSrc: 'https://avatars0.githubusercontent.com/u/6471485?v=3&s=100',
    githubLink: 'https://github.com/neovim/neovim/issues?q=is%3Aopen+is%3Aissue+label%3Acomplexity%3Alow',
    description: 'Vim-fork focused on extensibility and usability.',
    tags: ['Editor', 'API', 'Cross-Platform', 'Vim'],
  }, {
    name: 'Hoodie',
    imageSrc: 'https://hoodiehq.github.io/hoodie-css/src/content_img/animals/low-profile-dog-1.png',
    githubLink: 'https://github.com/hoodiehq/hoodie/issues',
    description: 'The Offline First JavaScript Backend.',
    tags: ['JavaScript', 'Node.js', 'Web development','User-Friendly'],
  }, {
    name: 'freeCodeCamp',
    imageSrc: 'https://avatars0.githubusercontent.com/u/9892522?v=3&s=100',
    githubLink: 'https://github.com/freeCodeCamp/freeCodeCamp/labels/first%20timers%20welcome',
    description: 'Open Source codebase and curriculum.',
    tags: ['Learn', 'Education', 'Non-Profit', 'Certification'],
  }, {
    name: 'Node.js',
    imageSrc: 'https://avatars1.githubusercontent.com/u/9950313?v=3&s=100',
    githubLink: 'https://github.com/nodejs/node/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
    description: 'Node.js JavaScript runtime.',
    tags: ['JavaScript', 'HTML', 'CSS'],
  }, {
    name: 'Semantic-UI-React',
    imageSrc: 'https://avatars1.githubusercontent.com/u/5796209?s=200&v=4',
    githubLink: 'https://github.com/Semantic-Org/Semantic-UI-React/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
    description: 'The official Semantic-UI-React integration.',
    tags: ['React', 'Library', 'Component', 'Front-End'],
  }, {
    name: 'Contribute to Open Source',
    imageSrc: 'https://image.ibb.co/fUM5oG/profile_first_pr.png',
    githubLink: 'https://github.com/danthareja/contribute-to-open-source/issues',
    description: 'Learn GitHub\'s pull request process by contributing code in a fun simulation project.',
    tags: ['GitHub', 'Tutorial'],
  }, {
    name: 'RubyGems ecosystem',
    imageSrc: 'https://avatars.githubusercontent.com/u/17981340',
    githubLink: 'https://github.com/rubygems/contribute',
    description: 'One site to show all related RubyGems ecosystem projects and help developers get involved.',
    tags: ['Ruby', 'Rubygems'],
  }, {
    name: 'Mail For Good',
    imageSrc: 'https://avatars0.githubusercontent.com/u/9892522?v=3&s=100',
    githubLink: 'https://github.com/freeCodeCamp/mail-for-good/labels/First%20Timers%20Only',
    description: 'An open source email campaign management tool.',
    tags: ['Nodejs', 'JavaScript', 'Email-Campaigns'],
  },
  {
    name: 'Visual Studio Code',
    imageSrc: 'https://i.warosu.org/data/g/img/0514/15/1447907357729.png',
    githubLink: 'https://github.com/Microsoft/vscode/labels/good%20first%20issue',
    description: 'VS Code is a new type of tool that combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle.',
    tags: ['TypeScript', 'Text-Editor', 'Electron'],
  },
  {
    name: 'Scrapy',
    imageSrc: 'https://blog-media.scrapinghub.com/production/wp-content/uploads/2016/10/06054611/Scrapy-300x300.png',
    githubLink: 'https://github.com/scrapy/scrapy/labels/good%20first%20issue',
    description: 'Scrapy is a fast high-level web crawling and web scraping framework, used to crawl websites and extract structured data from their pages. ',
    tags: ['Python', 'Module', 'Data-Mining', 'Automated-Testing'],
  },
  {
    name: 'Angular',
    imageSrc: 'https://avatars0.githubusercontent.com/u/139426?s=200&v=4',
    githubLink: 'https://github.com/angular/angular/labels/effort1%3A%20hours',
    description: 'Angular is a development platform for building mobile and desktop Web Applications using TypeScript or JavaScript and other languages.',
    tags: ['Angular', 'TypeScript', 'JavaScript'],
  },
  {
    name: 'React Styleguidist',
    imageSrc: 'https://d3vv6lp55qjaqc.cloudfront.net/items/061f0A2n1B0H3p0T1p1f/react-styleguidist-logo.png',
    githubLink: 'https://github.com/styleguidist/react-styleguidist/labels/good%20first%20issue',
    description: 'React Styleguidist is a component development environment with hot reloaded dev server and a living style guide that you can share with your team. It lists component propTypes and shows live, editable usage examples based on Markdown files.',
    tags: ['JavaScript', 'UI'],
  },
  {
    name: 'Ruby Koans',
    imageSrc: 'https://pbs.twimg.com/profile_images/1133211803/enso_400x400.png',
    githubLink: 'https://github.com/edgecase/ruby_koans/issues',
    description: 'Learn Ruby With the Edgecase Ruby Koans. The Koans walk you along the path to enlightenment in order to learn Ruby. The goal is to learn the Ruby language, syntax, structure, and some common functions and libraries.',
    tags: ['Ruby', 'Exercises', 'CLI', 'Web App'],
  },
  {
    name: 'Python Koans',
    imageSrc: 'https://s3.amazonaws.com/media-p.slid.es/thumbnails/akoebbe/b35d77/python-koans.jpg',
    githubLink: 'https://github.com/gregmalcolm/python_koans/issues',
    description: 'Python Koans is a port of Edgecase\'s "Ruby Koans".',
    tags: ['Python', 'Exercises', 'CLI', 'Web App'],
  },
  {
    name: 'Scala Exercises',
    imageSrc: 'https://avatars1.githubusercontent.com/u/17570897?s=200&v=4',
    githubLink: 'https://github.com/scala-exercises/scala-exercises/labels/low%20hanging%20fruit',
    description: 'Scala Exercises is an Open Source project for learning different technologies based in the Scala Programming Language.',
    tags: ['Scala', 'Exercises', 'Functional Programming'],
  },
  {
    name: 'CodeWorkout',
    imageSrc: 'https://i.imgur.com/ZsSiCqi.png',
    githubLink: 'https://github.com/web-cat/code-workout/issues',
    description: 'CodeWorkout is an online system for people learning a programming language for the first time. It is a free, open-source solution for practicing small programming problems. Students may practice coding exercises on a variety of programming concepts within the convenience of a web browser!',
    tags: ['Java', 'Ruby', 'Python', 'Exercises'],
  },
  {
    name: 'TEAMMATES',
    imageSrc: 'https://raw.githubusercontent.com/TEAMMATES/teammates/master/src/main/webapp/images/teammateslogo-black.png',
    githubLink: 'https://github.com/TEAMMATES/teammates/labels/d.FirstTimers',
    description: 'An online feedback management system for students and teachers',
    tags: ['Java', 'JavaScript', 'HTML', 'Web'],
  },
  {
    name: 'Electron',
    imageSrc: 'https://avatars3.githubusercontent.com/u/13409222?s=200&v=4',
    githubLink: 'https://github.com/electron/electron/labels/good%20first%20issue',
    description: 'Build cross platform desktop apps with JavaScript, HTML, and CSS!',
    tags: ['JavaScript', 'Electron', 'CSS', 'Html', 'Chrome', 'Node.js', 'V8']
  },
  {
    name: 'Oppia',
    imageSrc: 'https://www.oppia.org/build/assets/images/logo/288x128_logo_mint.42f8d38467fe745205b3374b33668068.png',
    githubLink: 'https://github.com/oppia/oppia/labels/good%20first%20issue',
    description: 'Tool for collaboratively building interactive lessons.',
    tags: ['Python', 'JavaScript', 'CSS', 'HTML', 'Shell'],
  },
  {
    name: 'Public Lab',
    imageSrc: 'https://publiclab.org/system/images/photos/000/023/444/large/Screenshot_20180204-101546_2.png',
    githubLink: 'https://publiclab.github.io/community-toolbox/#r=all',
    description: 'PublicLab.org - a collaborative knowledge-exchange platform in Rails; we welcome first-time contributors! 🎈',
    tags: ['Ruby on Rails', 'Ruby', 'JavaScript', 'Non-Profit', 'Web', 'First-Timers', 'Environment', 'Science'],
  },
  {
    name:'MissionControl',
    imageSrc:'https://i.imgur.com/nSRLFas.gif',
    githubLink: 'https://github.com/DAVFoundation/missioncontrol/issues',
    description:'Controls and orchestrates missions between autonomous vehicles and DAV users.',
    tags: ['Javascript','Docker','Thrift','Good First Issue']
  },
  {
    name:'DuckDuckGo',
    imageSrc:'https://avatars3.githubusercontent.com/u/342708?s=200&v=4',
    githubLink: 'https://github.com/duckduckgo/duckduckgo-privacy-extension/labels/good%20first%20issue',
    description:'The search engine that doesn\'t track you!',
    tags: ['Javascript','Perl','Python','Privacy']
  },
  {
    name:'Kinto',
    imageSrc:'https://avatars2.githubusercontent.com/u/13413813?s=200&v=4',
    githubLink: 'https://github.com/Kinto/kinto/labels/easy-pick',
    description:'A generic JSON document store with sharing and synchronisation capabilities.',
    tags: ['Python', 'API', 'HTTP', 'Web', 'Decentralisation'],
  },
  {  
    name:'Atom',
    imageSrc:'https://upload.wikimedia.org/wikipedia/commons/e/e2/Atom_1.0_icon.png',
    githubLink: 'https://github.com/atom/atom/labels/beginner',
    description:'A customizable text editor built on electron.',
    tags: ['Atom', 'Editor', 'Javascript', 'Electron', 'Windows', 'Linux', 'MacOS']
  },
  {
    name: 'OpenGenus',
    imageSrc:'https://raw.githubusercontent.com/notnerb/FamilySite/master/logo.png',
    githubLink: 'https://github.com/OpenGenus/Join_OpenGenus/issues',
    description: 'A positive open-source community working to bring essential programming knowledge offline.',
    tags: ['C++','Python','Java','Good First Issue']
  },
  {
    name:'CSS-Protips',
    imageSrc:'https://camo.githubusercontent.com/9b290de6835cf807aaa81bb6a7cfdf3835636f8c/68747470733a2f2f7261776769742e636f6d2f416c6c5468696e6773536d697474792f6373732d70726f746970732f6d61737465722f6d656469612f6c6f676f2e737667',
    githubLink:'https://github.com/AllThingsSmitty/css-protips/issues',
    description:'Simple but useful tips to improve your CSS skills.',
    tags:['CSS','Tips','Guide','Simple','Useful']
  },
  {
    name:'Systers',
    imageSrc:'https://avatars3.githubusercontent.com/u/6520415?s=200&v=4',
    githubLink:'https://github.com/systers',
    description:'Helping women find their potential in code.',
    tags:['Python','Java','Swift','JavaScript','HTML'],
  },
  {
    name:'CentOS',
    imageSrc:'https://avatars2.githubusercontent.com/u/79192?s=200&v=4',
    githubLink:'https://github.com/CentOS',
    description:'A community-driven free software effort focused on delivering a robust open source ecosystem.',
    tags:['Shell','Python','HTML','Ruby','Puppet'],
  },
  {
    name:'NPM',
    imageSrc:'https://avatars0.githubusercontent.com/u/6078720?s=200&v=4',
    githubLink:'https://github.com/npm',
    description:'Npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways.',
    tags:['JavaScript','Shell','CSS','HTML','Rust'],
  },
  {
    name:'OpenEBS',
    imageSrc:'https://avatars1.githubusercontent.com/u/20769039?s=200&v=4',
    githubLink:'https://github.com/openebs/',
    description:'OpenEBS is an open source storage platform that provides persistent and containerized  block storage for DevOps and container environments.',
    tags:['Containers','DevOps','Go'],
  },
  {
    name: 'Kubernetes',
    imageSrc: 'https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png',
    githubLink: 'https://github.com/kubernetes',
    description: 'Production-Grade Container Scheduling and Management',
    tags: ['Go', 'Container','Orchestration'],
  },

  {
    name:'StreamIt',
    imageSrc:'https://image.ibb.co/faTroc/movie_stream.png',
    githubLink:'https://github.com/hrishi7/streamIt/labels/good%20first%20issue',
    description:'Provides Online free movie streaming service with adfree. flexible for mobile also',
    tags:['Web development','HTML','Javascript','API','CSS','Bootstrap']
  },
  {
    name: 'Ethereum',
    imageSrc: 'https://avatars1.githubusercontent.com/u/6250754?s=200&v=4',
    githubLink: 'https://github.com/ethereum/',
    description: 'Ethereum is a decentralized platform that runs smart contracts applications.',
    tags: ['Go', 'C++', 'Solidity','Python', 'Shell', 'Java'
    ]
  },
  {
    name: 'Rust Lang Nursery',
    imageSrc: 'https://avatars2.githubusercontent.com/u/14631425?s=200&v=4',
    githubLink: 'https://github.com/rust-lang-nursery/rust-clippy/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
    description: 'A collection of lints to catch common mistakes and improve your Rust code.',
    tags: ['Rust','Compiler','Parser','Mentors'
    ]
  },
  {
    name: 'Probot',
    imageSrc: 'https://avatars2.githubusercontent.com/u/26350515?s=400&v=4',
    githubLink: 'https://github.com/probot/probot/labels/good%20first%20issue%20🎈',
    description: 'Probot is a framework for building GitHub Apps in Node.js.',
    tags: ['Node.js','GitHub','JavaScript']
  },
  {
    name: 'Open Data Kit',
    imageSrc: 'https://opendatakit.org/assets/images/logo.png',
    githubLink: 'https://github.com/opendatakit',
    description: 'Free and open-source set of tools for collecting data in challenging environments.',
    tags: ['Open Source','Software','JAVA', 'Android']
  },
  {
    name: 'Sugar Labs',
    imageSrc: 'https://avatars3.githubusercontent.com/u/3996398?s=280&v=4',
    githubLink: 'https://github.com/sugarlabs',
    description: 'Learning Software for children.',
    tags: ['Ubuntu','Rasberry Pi','Debian','Fedora']
  },
  {
    name: 'Jupyter Hub',
    imageSrc: 'https://avatars2.githubusercontent.com/u/17927519?s=400&v=4',
    githubLink: 'https://github.com/jupyterhub/jupyterhub/labels/good%20first%20issue',
    description: 'A multi-user Hub, spawns, manages, and proxies multiple instances of the single-user Jupyter notebook server.',
    tags: ['Proxy Server','Python','REST API']
  },
  {
    name: 'AllenAI',
    imageSrc: 'https://news.cs.washington.edu/wp-content/uploads/2015/10/AI2-logo-300x300.png',
    githubLink: 'https://github.com/allenai/allennlp/labels/Good%20First%20Issue',
    description: 'conducts high-impact research and engineering to tackle key problems in artificial intelligence.',
    tags: ['Artificial Intelligence','Python','NLP']
  },
  {
    name: 'Qute Browser',
    imageSrc: 'https://avatars1.githubusercontent.com/u/21955151?s=200&v=4',
    githubLink: 'https://github.com/qutebrowser/qutebrowser/labels/easy',
    description: 'A keyboard-driven, vim-like browser based on PyQt5',
    tags: ['Python','Qt','PyQt5','Vim','Browser','qtWebEngine','Web']
  },
  {
    name: 'Ghost',
    imageSrc: 'https://avatars1.githubusercontent.com/u/2178663?s=200&v=4',
    githubLink: 'https://github.com/TryGhost/Ghost/labels/good%20first%20issue',
    description: 'Just a blogging platform',
    tags: ['Node.js','JavaScript','Ember','CMS','Blogging']
		  
  },
  {
    name: 'Hyper',
    imageSrc: 'https://hyper.is/static/hyper.png',
    githubLink: 'https://github.com/zeit/hyper/issues',
    description: 'A terminal built on web technologies',
    tags: ['HTML','JavaScript','CSS','React','Terminal']
  },
  {
    name: 'Kap',
    imageSrc: 'https://avatars3.githubusercontent.com/u/16321113?s=200&v=4',
    githubLink: 'https://github.com/wulkano/kap/',
    description: 'An open-source screen recorder built with web technology',
    tags: ['Electron','JavaScript','macOS','OSS','Screencast']
  },
  {
    name: 'Ember.js',
    imageSrc: 'https://avatars0.githubusercontent.com/u/1253363?s=200&v=4',
    githubLink: 'https://github.com/emberjs/ember.js/labels/Good%20for%20New%20Contributors',
    description: 'A JavaScript framework for creating ambitious web applications',
    tags: ['Ember','JavaScript', 'Framework']
  },
  {
    name: 'OpenSourceDesign',
    imageSrc: 'https://avatars3.githubusercontent.com/u/4183553?s=200&v=4',
    githubLink: 'https://github.com/opensourcedesign/opensourcedesign.github.io/labels/starter%20issue',
    description: 'Source code of the website opensourcedesign.net',
    tags: ['Design', 'Open Source Design', 'Open-source']
  },
  {
    name: 'ifme',
    imageSrc: 'https://raw.githubusercontent.com/ifmeorg/ifme/master/public/logo_512.png',
    githubLink: 'https://github.com/ifmeorg/ifme/labels/beginner%20friendly',
    description: 'A community for mental health experiences',
    tags: ['Ruby on Rails', 'JavaScript', 'React']
  },
  {
    name: 'Hacktoberfest',
    imageSrc: 'https://hacktoberfest.digitalocean.com/assets/logo-hacktoberfest-658b5aa2bd34e782d29c40bf6afbdff00f20fe1328efa6da17743878ba8db66f.png',
    githubLink: 'https://github.com/ows-ali/Hacktoberfest/',
    description: 'Opportunity to start open source and PR experience for beginners',
    tags: ['Hacktoberfest','HackerRank','Low-hanging Fruit']
  },
  {
    name: 'Rebus',
    imageSrc: 'https://raw.githubusercontent.com/ollelauribostrom/rebus/master/logo.png',
    githubLink: 'https://github.com/ollelauribostrom/rebus',
    description: 'Helping new developers take their first steps as open source contributors by developing a simple rebus game together',
    tags: ['JavaScript', 'HTML', 'CSS', 'Tutorials']
  },
  {
    name: 'PRoot',
    imageSrc: 'https://avatars2.githubusercontent.com/u/12125707',
    githubLink: 'https://github.com/proot-me/PRoot',
    description: 'chroot, mount --bind, and binfmt_misc without privilege/setup for Linux ',
    tags: ['chroot-environment','userland-exec','rootfs','chroot','C']
  },
  {
    name: 'Techqueria.org',
    imageSrc: 'https://avatars1.githubusercontent.com/u/17460806?s=200&v=4',
    githubLink: 'https://github.com/techqueria',
    description: 'We\'re a community of Latinx professionals in the tech industry.',
    tags: ['Latinx', 'Latinx in Tech', 'Hugo', 'Netlify', 'JAMstack']
  },
  {
    name: 'Nextcloud',
    imageSrc: 'https://avatars0.githubusercontent.com/u/19211038?s=200&v=4',
    githubLink: 'https://github.com/nextcloud/server/labels/good%20first%20issue',
    description: 'Open source collaboration platform for files, calendar, contacts, chat & calls, mail and more.',
    tags: ['JavaScript','PHP','HTML','CSS','Android','C++','Qt','Design','iOS','Vue.js','Web']
  },
  {
    name: 'Open Source Diversity',
    imageSrc: 'https://avatars1.githubusercontent.com/u/31018274?s=200&v=4',
    githubLink: 'https://github.com/opensourcediversity/opensourcediversity.org/labels/good%20first%20issue',
    description: 'For more diversity & inclusion in free & open source software communities 😊',
    tags: ['JavaScript','HTML','CSS','Diversity','Inclusion','🎉','Web','Community']
  }
];
export default projectList;
