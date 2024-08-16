const projectList = [
  {
    name: "appsmith",
    imageSrc:
      "https://raw.githubusercontent.com/appsmithorg/appsmith/release/static/appsmith_logo_white.png",
    projectLink: "https://github.com/appsmithorg/appsmith",
    description: "Drag & Drop internal tool builder",
    tags: ["UI", "Database", "Editor"],
  },

  {
    name: "altair",
    imageSrc:
      "https://raw.githubusercontent.com/altair-graphql/altair/master/icons/favicon-96x96.png",
    projectLink: "https://github.com/altair-graphql/altair",
    description: "A beautiful feature-rich GraphQL Client for all platforms.",
    tags: ["GraphQL", "React", "Typescript"],
  },

  {
    name: "Ancient Beast",
    imageSrc:
      "https://raw.githubusercontent.com/FreezingMoon/AncientBeast-Website/master/favicon.png",
    projectLink: "https://github.com/FreezingMoon/AncientBeast/labels/easy",
    description:
      "Match-based eSport where you duel others by materializing and controlling a squad of creatures.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Web App",
      "Video Game",
      "OpenSource",
      "Mentored",
      "Web",
      "Web Development",
    ],
  },
  {
    name: "Signal-Android",
    imageSrc: "https://signal.org/assets/images/header/logo.png",
    projectLink: "https://github.com/signalapp/Signal-Android",
    description:
      "Signal uses your phone's data connection (WiFi/3G/4G/5G) to communicate securely. Millions of people use Signal every day for free and instantaneous communication anywhere in the world. Send and receive high-fidelity messages, participate in HD voice/video calls, and explore a growing set of new features that help you stay connected. Signal’s advanced privacy-preserving technology is always enabled, so you can focus on sharing the moments that matter with the people who matter to you.",
    tags: ["java", "kotlin", "Python", "css", "handlebars"],
  },
  {
    name: "Reseter.css",
    imageSrc:
      "https://raw.githubusercontent.com/kkrishguptaa/reseter.css/main/.github/assets/gardevoir.png",
    projectLink: "https://github.com/resetercss/reseter.css",
    description:
      "Reseter.css is an awesome CSS boilerplate for a website. It is a great tool for any web designer. Reseter.css resets all the premade styles by the browser. It normalizes the browser's stylesheet for a better cross-browser experience.",
    tags: ["css", "sass", "scss", "less", "stylus"],
  },
  {
    name: "CircuitVerse",
    imageSrc:
      "https://raw.githubusercontent.com/CircuitVerse/CircuitVerse/master/app/assets/images/cvlogo.svg",
    projectLink: "https://github.com/CircuitVerse",
    description:
      "CircuitVerse is a free, open-source platform which allows users to construct digital logic circuits online. We also offer the Interactive Book which teaches users on the fundamentals of modern, digital circuits.",
    tags: ["html", "css", "sass", "javascript", "ruby on rails"],
  },
  {
    name: "MoveIt",
    imageSrc:
      "https://camo.githubusercontent.com/24beba601ee2b6d2251cc0ef1a5abe5619af4097ec3495cdee1f5a53fdbdf8dd/687474703a2f2f6d6f766569742e726f732e6f72672f6173736574732f6c6f676f2f6d6f766569745f6c6f676f2d626c61636b2e706e67",
    projectLink: "https://github.com/ros-planning/moveit",
    description:
      "Easy-to-use open source robotics manipulation platform for developing commercial applications, prototyping designs, and benchmarking algorithms.",
    tags: ["c++", "python", "robotics", "open source", "motion planning"],
  },
  {
    name: "Jina",
    imageSrc: "https://avatars1.githubusercontent.com/u/60539444?s=200&v=4",
    projectLink: "https://github.com/jina-ai/jina",
    description:
      "An easier way to build neural search on the cloud. An AI-powered search framework, empowering developers to create cross-/multi-modal search systems",
    tags: ["Python", "Machine Learning", "Web App", "Deep Learning", "NLP"],
  },
  {
    name: "React",
    imageSrc:
      "https://raw.githubusercontent.com/facebook/react/57768ef90bdb0110c7b9266185a8f6446934b331/fixtures/dom/public/react-logo.svg",
    projectLink: "https://github.com/facebook/react/contribute",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    tags: ["JavaScript", "UI", "Web App"],
  },
  {
    name: "React Native",
    imageSrc:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    projectLink: "https://github.com/facebook/react-native/contribute",
    description: "A framework for building native apps with React.",
    tags: ["JavaScript", "React", "React Native", "Mobile App"],
  },
  {
    name: "Typescript",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    projectLink: "https://github.com/microsoft/TypeScript",
    description:
      "TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.",
    tags: ["TypeScript", "JavaScript"],
  },
  {
    name: "MongoDB",
    imageSrc:
      "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913759/noticon/rewwujgq5wuw2qohwta9.png",
    projectLink:
      "https://github.com/mongodb/mongo/blob/master/CONTRIBUTING.rst",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    tags: ["NOSQL", "Database"],
  },
  {
    name: "Darktable",
    imageSrc:
      "https://raw.githubusercontent.com/darktable-org/darktable/master/data/pixmaps/idbutton.png",
    projectLink: "https://github.com/darktable-org/darktable",
    description:
      "Open source photography workflow application and raw developer.",
    tags: ["C", "Lua", "OpenCL", "Photography"],
  },
  {
    name: "Exercism",
    imageSrc: "https://avatars2.githubusercontent.com/u/5624255?v=3&s=100",
    projectLink: "https://github.com/exercism/exercism/contribute",
    description: "Quickly ramp up in new programming languages!",
    tags: ["Ruby", "Exercises", "CLI", "Web App"],
  },
  {
    name: "React Testing Library",
    imageSrc:
      "https://raw.githubusercontent.com/testing-library/react-testing-library/master/other/goat.png",
    projectLink:
      "https://github.com/testing-library/react-testing-library/blob/master/CONTRIBUTING.md",
    description:
      "Simple and complete React DOM testing utilities that encourage good testing practices.",
    tags: ["Unit testing", "JavaScript", "React", "React Native"],
  },
  {
    name: "Gauge",
    imageSrc:
      "https://avatars3.githubusercontent.com/u/7044589?s=400&u=8d2ce328da30e81978c303fdb31a2a7a1f0328e3&v=4",
    projectLink: "https://github.com/getgauge/gauge/contribute",
    description: "A free and open source test automation framework",
    tags: ["Golang", "Automation", "command line", "testing"],
  },
  {
    name: "Habitat",
    imageSrc: "https://avatars1.githubusercontent.com/u/18171698?v=3&s=100",
    projectLink: "https://github.com/habitat-sh/habitat/contribute",
    description: "Modern applications with built-in automation.",
    tags: ["Docs", "Front-End", "Rust", "MultiOS"],
  },
  {
    name: "Scikit-learn",
    imageSrc: "https://avatars0.githubusercontent.com/u/365630?v=3&s=100",
    projectLink: "https://github.com/scikit-learn/scikit-learn/contribute",
    description: "Machine learning in Python!",
    tags: ["Python", "Machine Learning", "Math"],
  },
  {
    name: "AVA",
    imageSrc: "https://avatars0.githubusercontent.com/u/8527916?v=3&s=100",
    projectLink: "https://github.com/avajs/ava/contribute",
    description: "The Futuristic JavaScript test runner!",
    tags: ["JavaScript", "Tests", "Docs", "Babel"],
  },
  {
    name: "Numpy",
    imageSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAeFBMVEX///9Nq89Nd887pcxDcc1eg9NKdc/V6fKru+VcsdJFqM46bMyVyeDU3fJjhtPJ4u7y+PuLxN2w1ufl8fe52unB3+yezeKBwNtYf9KUqt8wZsoqoMlSe9B/mtpptdV2u9jv8vqNpd6csOG7yOrD0O3f5fVwj9fN1/CWwAPxAAADlUlEQVRYhe3Y2ZaiMBAGYCB01EQFxNYWXLAVff83HJbEpLJAQOZizlhnLlrBz79DZZn2vE996v+uLUGb+K/APvKrf5vpYVLBdU2dvEnMa8rkW0J8UFXyiWDka4XIJPj3WbMJSiYa8MiHOLqk74HxTPz8vRA4Ogs4HhV+U4WTcZYcLaQ3d2REt2wRqYf0LDnbKjnyI+nLm3vIdmji17CC5Fv5BeJ97o43iUUzyLgON/c4Jt8o7VDhe7UhZgvlHpfkIPELz0G3peqXtwF68EWuf6j+2E5usnijzvz2+8/d9sww9chOu00bNR80k6UiOI4kX4rEUnaYHHR7Fy6Sg8UiveTyA5U6tC/xb6EmJzIVJ9UTht3SzBmY2Dzxf7IrwIm8CsVL1jokT2ByOXGc+Eb6C4f0IL41uoDFQowsGKQYwIQsLHQQhJk0LAJWmh0mf8F5dZedrvDwV3l/4+tdrO0FdeL6QhcdYHqS342QYerVD8+X7LRJ3EsHQVYAW10v2j6WFlee2IEOD/CChgPY8xLpcg+NQ7U7I3gOieDVJXGmA+1JSslB4jQdSgfUcDlqz3zyGO/z2WA6nIvPixu+FyDxvpqvw+ng+Hr3eXyabq7h6pcYQdMbf3dF6Y+Gt/A4OggEXU2i9coEj6TpXdD1DP166vBIGq9lusbXZf0yvshLlUYT26IqDwhdAZp3zQxMTIU27aIGGj+G0iTf2Q6XkA6ychBtTWyg8WkA3ZHYQAe0dKURWnafs8XKx6yrI71PjCcVncaPE7Oz2I0WZd/RWUeXGcMOw+h42bWjt5OFxcZh0U0TlMow6tnRa7qkQrPT8DS4dNnRqyl+ZaNN7TQhAEYuO3pNF9mLM9Ogj+Od447eLEzXsPWORhokHrCjN3QRti/ovdRobeY5L6rtcvrLY6t0Lq8VA3f0lo75aPPvYHQEHt7AHZ1tApwUh5M5vL3uioG7DKMLrKxWkG77eBztzUM7zft4JO1RG81nnjv9E0L6Ro20mHnudHHNsEx7RwMtEhtpy47ueeWJYomGsXlf+76dRufIQleL0ZoK2guxTnccFpQTvVbPtThK3ukAuivxCxQ/yjtxN92XWP8VqBvtklgt7ThvohP1PzdOtaIO9Mi/Jz5wPz2y+FZmpvN3aG+eWenBXaHWjWIjPaYr1CoeVKffTszqfgwhPUViXocMC3qqxKyKdcboKROzujV/E4j8t/rtU5/61+sPLqQ7wVykdS0AAAAASUVORK5CYII=",
    projectLink: "https://github.com/numpy/numpy/contribute",
    description: "Scientific computing with Python!",
    tags: ["Python", "Math", "Module", "Docs"],
  },
  {
    name: "pandas",
    imageSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAwFBMVEX///8eGFMAAEbBwcu4tsYAAEkbFVIAAEMAAEUWDk8ZElARB036+vw7N2gAAEr/ywioprienLDi4ukaEVVPTHXnCIqrqrhvbItmZIENAExTUHUQBU2AfpkTB1Jua4oUDE8rJV0PAFAtKVvb2uAAAD3//O7/5Zj/+N//7bf3wtrmAIPrQ6D96fRaWHlGQm+SkKYAADnw7/PV1N15d5LMy9YAADL//O34yeDqNJs6NWeLiqAmIVpiX4JOS3BAPGi1s8VJjRBaAAAJl0lEQVR4nO2da2OiOhqAIRoIF1nxdG1RR7zNnr2pg3rObq3T/v9/dUjeF0iI7els63R2fJ9PBmIuDyE3sHUcgiAIgiAIgiAIgiAIgiAIgiAIgiCI70UnWCjC7keX5MehI0KFICc1HeYqGDmpuVonxRKJrVNX62T7RSh+G1inrtZJmkDFfXJSQ05syIkNObEhJzbkxIac2JATG3JiQ05syIkNObEhJ5LlNlVslzJkOkmRvgxckZPuKlGsOjJkOsm4OsU2MnBNTqqqghMRKVbKyS+eOhXcyMDVOumepopTIUPkxD5HTuxz5MQ+R07sc+REhj7//lnxuzpHTmTob39BfpUhciJD5ERCTmzIiQ05sSEnNuTEhpzYmE5+/TvyWYYSxiXiuvdPTPqIskBObMiJDTmxuVonh2oXv7AiXq2T1Idd/C9qj/ofyH9k4HqdGM8y/vpP4L8yQE7ACfIvGSAn5IScGJATG3JiQ05sXh6LlRIaizUn/66QAXJy1e8pkRMbcmJDTmxecjJaA3sZICfKyTzKJdl171GnK6b4cuYdv1WmWF2bk2UXsd/x202Q3UcW97vw6veUrghyYkNObMiJDTmxISc25MSGnNiQExtyYkNObMiJDTmxeckJ8xWr3vcv1ofykpMBYr+g83Pz6ne3rghyYtNlnkKQk5qumCvICUEQBEEQxE9HjHx0OX4g4rkv/0Tzl/5HF+QHIp6FcuHIyUlDPPPISQtyYkNObMiJDTmxISc2/y9O4sHAfvu5oTz7qlln8eyzCy2D55y8XASZ+nK3+5Mob+KpPxwO+0/q82HiCsaYv0nPVWiwvZdnxf1R/UVUR35x2Icd2CUE1Nfi7ikpI4p8b73wuVMZCLZJZZXOOSnSR5XJosqk32Ti1KmXMLbZXuqF0pngnLN5efUPjyLD55icT9rNodizRE073TATo7LAxW/yT3j4J3V2uJKBL/JN4G7IIpWMl/lTI5XlSMtgX5xxEk84D/RMHMhkXcfoeyyHNNwgEbOzF+/N9EJV/Ng5+lAahccflka0Q5A1Z92I9Z3CV59uwQnH2sUn32viJT1NSl/kWhJZfnDaTpYzrn05F6kTQyZ3VYypnnppjs0u5sQV8VS4BgHXW+bBD42znr8dnHGSOo+JES9rrnBqVscNRffedLITgRHD9Y+F6WSChfRCTCs/Xc5JtJdP8vKEMR5VZf7UtMtlXZ+IM5bIorNpbjnJ0qlSEgS1Qb/qCoarSmdWJpGF8sODqzsZ8OpbeTsTdLKDNDJ/3psxn5U3Ih9ezolbmgj8ddrp9O8YWomatyMWeAEzPh12OumNbDVwIxhOvEUk23Oy+Xrv430SPGKFGVrl4b7b6U4WrG41lZMNfiVip34rE3Ryp0rGJupiFZ39nPnmHf6+Tsr6PmL6gzWHI/U/rEvxcbC4xaZzWFStyXDilvVMFl3ZhwxG2P+s4Ctr+IInttjD9OtWgU76eF+wEw6zu/uqC0MnsUy/ylEd6N9fZD+qcjIeNcduoVMIZ5i1B9eUbesYRa+6qIaTsoK3VSk30Lbglzo7rLD28HQ3r1oOOIHNFJfv6xjxpmqx4AQ6F2PovswWHTrxXD35G6ixOKgQvjUQ6f1ZAeNt20nS1OgAGrKJDOzhkrNUS6IjdCcYyjd6Jq5nO7lMt2qATsyn30um1cc5gSFmzAVSfsZJuGgixA+qQmMVAcbY8N7I+hRpTm7HkInRQTwxwwnMbtj+0q/3gBO9MpJRrt08UJRoasSIE892wvWfb61VGoG8J/HWaY0S2JLACdxJ+ciI4UBDqfpYvB0zNu1ecmqPTrK9ebQPdVyp7pJrHUPDyR6LXV+/gnDllRM8bbY0Jw6b+UnB9L6llUblpI99fTk08dn+8NaqPws4aY/zeAnVUIefRevSbDPLiZfpESZZ7eSYQWNsdYnQkpSHHVRXtJYwcG3qOduimdSVk//FpRbU4KT90hVMUqGThS7Wm7fuYtBgOvmkR9Cc4MevrbynUe0ExbdaEv7OtHYyYPpMNxT3F5meVHP7VkM848Q7X9xXOTk2H3VuLSfZy06cgTbXkyn6F3kxCttJq7NY+k1Txt8EJ617p//t7WRjpoDzUrh38GZtZdJ2Uo53oYgaLR67RGcLTpLUPIoeVBGxuKLVTidn+pPnnMCvsD2v1Z9smmdeOPqzVnvFTktz4sTd6UzwasMgare99wCc5Gvz6BHnWPJzgeNsSxsMjK9zgopbWquEpZMYG+PWiIFzAsOJjDwYrrPn/yjCmwEnXmLeyAswBRfhAaYw5svh2OO8zglGzo5GEn3NiXN/bp40MOZsBsURW9YFehScx+KUtSot05vGJDuT+3T8DU5wMeOZXWi1wlFOtnDdzY4NlwTnnFQ3JH/6X2r9MtUaUB95BjBHraZgO7jKXq7VqIuLlVc6qVYC+t2/x9YPTrBD8biWSbUiqpyYtwk0vgu2k7IHr6UMXDg2rlZbcFe7ea8uVLfaJHylE1yquPxUd7OTalKKc1fMJJjVmXSyKhPcK5jvdSvQSbW7/veg3j/xGORYbHFnoxnnDtBQ3DyCPeHlVNT7bq9z4mzRQAbbK3FnU+0uVE6q7YQgg7+xOtg3mYCTgZ/x2/rKFY+B2546v68TuUWS+bO7u57AG8cVzUCzxwp4XDzenR78sSzMNzlxqg2XkCVfb0dzufUaeLoTBzvNsr8Xvbu7mZ81mdxVmXhj371NO4dDd5LDwsDstt/TifeoChjmeb2TyvV9ik29ax9GamoQZk/fMGcrKZI65SBSmWUjmH3U675RomWiHifwJ329A0sBL+JMCAb3Vdie+L6jk/G+vWkujK2b+IYbZ8eflmf27V9y4gw+jY0k+CaGHqFZC4+YESNPDsa+vfGkA9y11yTv6uTWGfRYfSW9jLUmT85ERHVRAn9dOMVK/jolg12VofqxSjg3vpHIY81QU4wa7V4kJnJckTFYs7w9smbeHvibsj+DTHBPaZLUm7gqER5eZr+gdlJWrMd4lgdRxrKpPTvcrTkrz+YZZzdy/IPHUTm2E2j2v+hfmCiJoTb8dh8Fz4IyCZbcqZUUPAHRlvzLU53Jo5qpqBhBNT8p0p48H5ae8kyMjxfacNOcyMe+k/XmdOyez6t4Op7Ks0P0pb/Iee6tznPHlun+RsvgzKugZSbrzWjSX9qZKAZPx9HCdR9Gx87F3iE1nBAKcmJDTmzIiQ05sSEnNuTEhpzYkBMbcmIz8+WfNV1N/zzm9XDoKH7+v11KEARBEARBEARBEARBEMSb+QNu3dXAPTnlMAAAAABJRU5ErkJggg==",
    projectLink: "https://github.com/pandas-dev/pandas/contribute",
    description: "pandas: powerful Python data analysis toolkit",
    tags: ["Python", "data science", "data analysis", "math", "Module"],
  },
  {
    name: "Elasticsearch",
    imageSrc: "https://avatars2.githubusercontent.com/u/6764390?v=3&s=100",
    projectLink: "https://github.com/elastic/elasticsearch/contribute",
    description: "Open Source, Distributed, RESTful Search Engine.",
    tags: ["REST", "Docs", "Java", "Lucene"],
  },
  {
    name: "Homebrew",
    imageSrc: "https://avatars2.githubusercontent.com/u/1503512?v=3&s=100",
    projectLink: "https://github.com/Homebrew/brew/contribute",
    description: "The missing package manager for macOS.",
    tags: ["MacOS", "Ruby", "C++"],
  },
  {
    name: "Rust",
    imageSrc: "https://avatars1.githubusercontent.com/u/5430905?v=3&s=100",
    projectLink: "https://github.com/rust-lang/rust/contribute",
    description: "A safe, concurrent, practical language!",
    tags: ["Rust", "Compiler", "Mentored", "Parser"],
  },
  {
    name: "Vuejs",
    imageSrc: "https://avatars1.githubusercontent.com/u/6128107?v=3&s=100",
    projectLink: "https://github.com/vuejs/vue/contribute",
    description:
      "A progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
    tags: ["JavaScript", "UI", "Front-End"],
  },
  {
    name: "Suave",
    imageSrc: "https://avatars2.githubusercontent.com/u/5822862?v=3&s=100",
    projectLink: "https://github.com/SuaveIO/suave/contribute",
    description:
      "Simple web development F# library to manipulate route flow and task composition.",
    tags: ["F#", "WebDev", "Library"],
  },
  {
    name: "OpenRA",
    imageSrc: "https://avatars3.githubusercontent.com/u/409046?v=3&s=100",
    projectLink: "https://github.com/OpenRA/OpenRA/contribute",
    description:
      "Open Source real-time strategy game engine for early Westwood games.",
    tags: ["AI", "C#", "SDL", "OpenGL"],
  },
  {
    name: "PowerShell",
    imageSrc: "https://avatars0.githubusercontent.com/u/11524380?v=3&s=100",
    projectLink: "https://github.com/powershell/powershell/contribute",
    description: "PowerShell for every system.",
    tags: ["Shell", "Linux", "MacOS", "Windows", "*BSD"],
  },
  {
    name: "Coala",
    imageSrc: "https://avatars2.githubusercontent.com/u/10620750?v=3&s=100",
    projectLink: "https://coala.io/newcomer",
    description:
      "Unified command-line interface for linting and fixing all your code.",
    tags: ["UX", "Linter", "Python"],
  },
  {
    name: "Moment",
    imageSrc: "https://avatars2.githubusercontent.com/u/4129662?v=3&s=100",
    projectLink: "https://github.com/moment/moment/contribute",
    description:
      "Parse, validate, manipulate, and display dates in JavaScript.",
    tags: ["JavaScript", "Front-End", "Meta"],
  },
  {
    name: "Leiningen",
    imageSrc:
      "https://camo.githubusercontent.com/04388189a6382284af44ca2a2cf66338cd56bfbd3a9b81d6d7e67522aad8425e/68747470733a2f2f6c65696e696e67656e2e6f72672f696d672f6c65696e696e67656e2e6a7067",
    projectLink: "https://github.com/technomancy/leiningen/contribute",
    description: "Automate Clojure projects without setting your hair on fire.",
    tags: ["Clojure", "Automation"],
  },
  {
    name: "Webpack",
    imageSrc: "https://avatars3.githubusercontent.com/u/2105791?v=3&s=100",
    projectLink: "https://github.com/webpack/webpack/contribute",
    description:
      "A bundler for JavaScript and friends. Packs many modules into a few bundled assets.",
    tags: ["Bundler", "JavaScript", "Compiler", "Loader"],
  },
  {
    name: "Babel",
    imageSrc: "https://avatars2.githubusercontent.com/u/9637642?v=3&s=100",
    projectLink: "https://github.com/babel/babel/contribute",
    description: "Babel is a compiler for writing next generation JavaScript.",
    tags: ["es2015", "JavaScript", "Compiler"],
  },
  {
    name: "Pouchdb",
    imageSrc: "https://avatars3.githubusercontent.com/u/3406112?v=3&s=100",
    projectLink: "https://github.com/pouchdb/pouchdb/contribute",
    description: "A pocket-sized database.",
    tags: ["JavaScript", "Node.js", "CouchDB"],
  },
  {
    name: "Neovim",
    imageSrc: "https://avatars0.githubusercontent.com/u/6471485?v=3&s=100",
    projectLink: "https://github.com/neovim/neovim/contribute",
    description: "Vim-fork focused on extensibility and usability.",
    tags: ["Editor", "API", "Cross-Platform", "Vim"],
  },
  {
    name: "Hoodie",
    imageSrc:
      "https://hoodiehq.github.io/hoodie-css/src/content_img/animals/low-profile-dog-1.png",
    projectLink: "https://github.com/hoodiehq/hoodie/contribute",
    description: "The Offline First JavaScript Backend.",
    tags: ["JavaScript", "Node.js", "Web development", "User-Friendly"],
  },
  {
    name: "freeCodeCamp",
    imageSrc: "https://avatars0.githubusercontent.com/u/9892522?v=3&s=100",
    projectLink: "https://github.com/freeCodeCamp/freeCodeCamp/contribute",
    description: "Open Source codebase and curriculum.",
    tags: ["Learn", "Education", "Non-Profit", "Certification"],
  },
  {
    name: "Node.js",
    imageSrc: "https://avatars1.githubusercontent.com/u/9950313?v=3&s=100",
    projectLink: "https://github.com/nodejs/node/contribute",
    description: "Node.js JavaScript runtime.",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Semantic-UI-React",
    imageSrc: "https://avatars1.githubusercontent.com/u/5796209?s=200&v=4",
    projectLink: "https://github.com/Semantic-Org/Semantic-UI-React/contribute",
    description: "The official Semantic-UI-React integration.",
    tags: ["React", "Library", "Component", "Front-End"],
  },
  {
    name: "Contribute to Open Source",
    imageSrc: "https://image.ibb.co/fUM5oG/profile_first_pr.png",
    projectLink:
      "https://github.com/danthareja/contribute-to-open-source/contribute",
    description:
      "Learn GitHub's pull request process by contributing code in a fun simulation project.",
    tags: ["GitHub", "Tutorial"],
  },
  {
    name: "Visual Studio Code",
    imageSrc:
      "data:image/jpeg;base64,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",
    projectLink: "https://github.com/Microsoft/vscode/contribute",
    description:
      "VS Code is a new type of tool that combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle.",
    tags: ["TypeScript", "Text-Editor", "Electron"],
  },
  {
    name: "Scrapy",
    imageSrc:
      "https://repository-images.githubusercontent.com/529502/dab2bd00-0ed2-11eb-8588-5e10679ace4d",
    projectLink: "https://github.com/scrapy/scrapy/contribute",
    description:
      "Scrapy is a fast high-level web crawling and web scraping framework, used to crawl websites and extract structured data from their pages. ",
    tags: ["Python", "Module", "Data-Mining", "Automated-Testing"],
  },
  {
    name: "Angular",
    imageSrc: "https://avatars0.githubusercontent.com/u/139426?s=200&v=4",
    projectLink: "https://github.com/angular/angular/contribute",
    description:
      "Angular is a development platform for building mobile and desktop Web Applications using TypeScript or JavaScript and other languages.",
    tags: ["Angular", "TypeScript", "JavaScript"],
  },
  {
    name: "React Styleguidist",
    imageSrc:
      "https://d3vv6lp55qjaqc.cloudfront.net/items/061f0A2n1B0H3p0T1p1f/react-styleguidist-logo.png",
    projectLink:
      "https://github.com/styleguidist/react-styleguidist/contribute",
    description:
      "React Styleguidist is a component development environment with hot reloaded dev server and a living style guide that you can share with your team. It lists component propTypes and shows live, editable usage examples based on Markdown files.",
    tags: ["JavaScript", "UI"],
  },
  {
    name: "Flutter",
    imageSrc:
      "https://raw.githubusercontent.com/flutter/website/master/src/_assets/image/flutter-lockup.png",
    projectLink: "https://github.com/flutter/flutter/contribute",
    description:
      "Flutter makes it easy and fast to build beautiful apps for mobile and beyond.",
    tags: ["Dart", "Android", "iOS", "UI", "Cross-platform"],
  },
  {
    name: "Python Koans",
    imageSrc:
      "https://s3.amazonaws.com/media-p.slid.es/thumbnails/akoebbe/b35d77/python-koans.jpg",
    projectLink: "https://github.com/gregmalcolm/python_koans/contribute",
    description: 'Python Koans is a port of Edgecase\'s "Ruby Koans".',
    tags: ["Python", "Exercises", "CLI", "Web App"],
  },
  {
    name: "Scala Exercises",
    imageSrc: "https://avatars1.githubusercontent.com/u/17570897?s=200&v=4",
    projectLink:
      "https://github.com/scala-exercises/scala-exercises/contribute",
    description:
      "Scala Exercises is an Open Source project for learning different technologies based in the Scala Programming Language.",
    tags: ["Scala", "Exercises", "Functional Programming"],
  },
  {
    name: "CodeWorkout",
    imageSrc: "https://i.imgur.com/ZsSiCqi.png",
    projectLink: "https://github.com/web-cat/code-workout/contribute",
    description:
      "CodeWorkout is an online system for people learning a programming language for the first time. It is a free, open-source solution for practicing small programming problems. Students may practice coding exercises on a variety of programming concepts within the convenience of a web browser!",
    tags: ["Java", "Ruby", "Python", "Exercises"],
  },
  {
    name: "TEAMMATES",
    imageSrc:
      "https://www.google-melange.com/archive/gsoc/2015/orgs/teammates/logo-200.png",
    projectLink: "https://github.com/TEAMMATES/teammates/contribute",
    description:
      "An online feedback management system for students and teachers",
    tags: ["Java", "Javascript", "HTML", "Web App"],
  },
  {
    name: "electron",
    imageSrc: "https://avatars3.githubusercontent.com/u/13409222?s=200&v=4",
    projectLink: "https://github.com/electron/electron/contribute",
    description:
      "Build cross platform desktop apps with JavaScript, HTML, and CSS!",
    tags: ["JavaScript", "Electron", "Css", "Html", "Chrome", "Nodejs", "V8"],
  },
  {
    name: "Oppia",
    imageSrc:
      "https://www.oppia.org/build/assets/images/logo/288x128_logo_mint.42f8d38467fe745205b3374b33668068.png",
    projectLink: "https://github.com/oppia/oppia/contribute",
    description:
      "Oppia is an open-source project whose aim is to empower learners across the globe by providing access to high-quality, engaging education. We envision a society in which access to high-quality education is a human right rather than a privilege.",
    tags: ["Python", "Typescript", "Angular"],
  },
  {
    name: "Public Lab",
    imageSrc: "https://code.publiclab.org/images/Boots-ground-02.png",
    projectLink: "https://publiclab.github.io/community-toolbox/#r=all",
    description:
      "PublicLab.org - a collaborative knowledge-exchange platform in Rails; we welcome first-time contributors! 🎈",
    tags: [
      "Ruby on Rails",
      "Ruby",
      "JavaScript",
      "Non-Profit",
      "Web App",
      "First-Timers",
      "Environment",
      "Science",
    ],
  },
  {
    name: "MissionControl",
    imageSrc: "https://i.imgur.com/nSRLFas.gif",
    projectLink: "https://github.com/DAVFoundation/missioncontrol/contribute",
    description:
      "Controls and orchestrates missions between autonomous vehicles and DAV users.",
    tags: ["Javascript", "Docker", "Thrift", "Good First Issue"],
  },
  {
    name: "DuckDuckGo",
    imageSrc: "https://avatars3.githubusercontent.com/u/342708?s=200&v=4",
    projectLink:
      "https://github.com/duckduckgo/duckduckgo-privacy-extension/contribute",
    description: "The search engine that doesn't track you!",
    tags: ["Javascript", "Perl", "Python", "Privacy"],
  },
  {
    name: "Kinto",
    imageSrc: "https://avatars2.githubusercontent.com/u/13413813?s=200&v=4",
    projectLink: "https://github.com/Kinto/kinto/contribute",
    description:
      "A generic JSON document store with sharing and synchronisation capabilities.",
    tags: ["Python", "API", "HTTP", "Web", "Decentralisation"],
  },
  {
    name: "atom",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Atom_1.0_icon.png",
    projectLink: "https://github.com/atom/atom/",
    description: "A customizable text editor built on electron.",
    tags: [
      "Atom",
      "Editor",
      "Javascript",
      "Electron",
      "Windows",
      "Linux",
      "Macos",
    ],
  },
  {
    name: "OpenGenus",
    imageSrc:
      "https://raw.githubusercontent.com/notnerb/FamilySite/master/logo.png",
    projectLink: "https://github.com/OpenGenus/Join_OpenGenus/contribute",
    description:
      "A positive open-source community working to bring essential programming knowledge offline.",
    tags: ["C++", "Python", "Java", "Good First Issue"],
  },
  {
    name: "css-protips",
    imageSrc:
      "https://raw.githubusercontent.com/AllThingsSmitty/css-protips/fc4c12dfcdfb26c43a09bc2176525637c3c38268/assets/img/bulb.svg",
    projectLink: "https://github.com/AllThingsSmitty/css-protips/contribute",
    description: "Simple but useful tips to improve your CSS skills.",
    tags: ["CSS", "tips", "guide", "simple", "useful"],
  },
  {
    name: "AnitaB.org ",
    imageSrc:
      "https://user-images.githubusercontent.com/60894542/94313579-9780c080-ff9c-11ea-8853-daa2a1c0fff5.png",
    projectLink: "https://github.com/anitab-org",
    description: "Helping women find their potential in code.",
    tags: ["Python", "Java", "Swift", "Javascript", "HTML", "Kotlin", "Dart"],
  },
  {
    name: "Centos",
    imageSrc: "https://avatars2.githubusercontent.com/u/79192?s=200&v=4",
    projectLink: "https://github.com/CentOS",
    description:
      "A community-driven free software effort focused on delivering a robust open source ecosystem.",
    tags: ["Shell", "Python", "HTML", "Ruby", "Puppet"],
  },
  {
    name: "NPM",
    imageSrc: "https://avatars0.githubusercontent.com/u/6078720?s=200&v=4",
    projectLink: "https://github.com/npm",
    description:
      "Npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways.",
    tags: ["Javascript", "Shell", "CSS", "HTML", "Rust"],
  },
  {
    name: "openEBS",
    imageSrc: "https://avatars1.githubusercontent.com/u/20769039?s=200&v=4",
    projectLink: "https://github.com/openebs/",
    description:
      "OpenEBS is an open source storage platform that provides persistent and containerized  block storage for DevOps and container environments.",
    tags: ["Containers", "DevOps", "Go"],
  },
  {
    name: "Kubernetes",
    imageSrc:
      "https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png",
    projectLink: "https://github.com/kubernetes",
    description: "Production-Grade Container Scheduling and Management",
    tags: ["Go", "Container", "Orchestration"],
  },
  {
    name: "styled-system",
    imageSrc:
      "https://camo.githubusercontent.com/8b3dc6438530a7240e952b187e40bd8380090f64/68747470733a2f2f7374796c65642d73797374656d2e636f6d2f6c6f676f2e737667",
    projectLink: "https://github.com/styled-system/styled-system/contribute",
    description: "Style props for rapid UI development",
    tags: ["ui", "css-in-js", "design-systems", "style-props", "theming"],
  },
  {
    name: "Movie-Stream",
    imageSrc: "https://image.ibb.co/faTroc/movie_stream.png",
    projectLink: "https://github.com/hrishi7/streamIt/contribute",
    description:
      "Provides Online free movie streaming service with adfree. flexible for mobile also",
    tags: ["Web development", "HTML", "Javascript", "API", "CSS", "Bootstrap"],
  },
  {
    name: "ethereum",
    imageSrc: "https://avatars1.githubusercontent.com/u/6250754?s=200&v=4",
    projectLink: "https://github.com/ethereum/",
    description:
      "Ethereum is a decentralized platform that runs smart contracts applications.",
    tags: ["Go", "C++", "Solidity", "Python", "Shell", "Java"],
  },
  {
    name: "Rust Lang Nursery",
    imageSrc: "https://avatars2.githubusercontent.com/u/14631425?s=200&v=4",
    projectLink: "https://github.com/rust-lang-nursery/rust-clippy/contribute",
    description:
      "A collection of lints to catch common mistakes and improve your Rust code.",
    tags: ["Rust", "Compiler", "Parser", "Mentors"],
  },
  {
    name: "probot",
    imageSrc: "https://avatars2.githubusercontent.com/u/26350515?s=400&v=4",
    projectLink: "https://github.com/probot/probot/contribute",
    description: "Probot is a framework for building Github Apps in Node.js.",
    tags: ["Node.js", "Github", "Javascript"],
  },
  {
    name: "Open Data Kit",
    imageSrc: "https://opendatakit.org/assets/images/logo.png",
    projectLink: "https://github.com/getodk",
    description:
      "Free and open-source set of tools for collecting data in challenging environments.",
    tags: ["Open Source", "Software", "JAVA", "Android"],
  },
  {
    name: "Sugar Labs",
    imageSrc: "https://avatars3.githubusercontent.com/u/3996398?s=280&v=4",
    projectLink: "https://github.com/sugarlabs",
    description: "Learning Software for children.",
    tags: ["Ubuntu", "Rasberry Pi", "Debian", "Fedora"],
  },
  {
    name: "Jupyter Hub",
    imageSrc: "https://avatars2.githubusercontent.com/u/17927519?s=400&v=4",
    projectLink: "https://github.com/jupyterhub/jupyterhub/contribute",
    description:
      "A multi-user Hub, spawns, manages, and proxies multiple instances of the single-user Jupyter notebook server.",
    tags: ["Proxy Server", "Python", "REST API"],
  },
  {
    name: "Allenai",
    imageSrc:
      "https://news.cs.washington.edu/wp-content/uploads/2015/10/AI2-logo-300x300.png",
    projectLink: "https://github.com/allenai/allennlp/contribute",
    description:
      "conducts high-impact research and engineering to tackle key problems in artificial intelligence.",
    tags: ["Artificial Intelligence", "Python", "NLP"],
  },
  {
    name: "Qute Browser",
    imageSrc: "https://avatars1.githubusercontent.com/u/21955151?s=200&v=4",
    projectLink: "https://github.com/qutebrowser/qutebrowser/contribute",
    description: "A keyboard-driven, vim-like browser based on PyQt5",
    tags: ["Python", "Qt", "pyqt5", "Vim", "Browser", "qtWebEngine", "web"],
  },
  {
    name: "Ghost",
    imageSrc: "https://avatars1.githubusercontent.com/u/2178663?s=200&v=4",
    projectLink: "https://github.com/TryGhost/Ghost/contribute",
    description: "Just a blogging platform",
    tags: ["nodejs", "javascript", "ember", "cms", "blogging"],
  },
  {
    name: "Hyper",
    imageSrc:
      "https://raw.githubusercontent.com/vercel/hyper/canary/app/static/icon.png",
    projectLink: "https://github.com/zeit/hyper/contribute",
    description: "A terminal built on web technologies",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Typescript",
      "linux",
      "macos",
      "terminal",
    ],
  },
  {
    name: "Kap",
    imageSrc: "https://avatars3.githubusercontent.com/u/16321113?s=200&v=4",
    projectLink: "https://github.com/wulkano/kap/contribute",
    description: "An open-source screen recorder built with web technology",
    tags: ["electron", "javascript", "mac", "oss", "screencast"],
  },
  {
    name: "Ember.js",
    imageSrc: "https://avatars0.githubusercontent.com/u/1253363?s=200&v=4",
    projectLink: "https://github.com/emberjs/ember.js/contribute",
    description:
      "A JavaScript framework for creating ambitious web applications",
    tags: ["ember", "javascript", "javascript-framework"],
  },
  {
    name: "Opensourcedesign",
    imageSrc: "https://avatars3.githubusercontent.com/u/4183553?s=200&v=4",
    projectLink:
      "https://github.com/opensourcedesign/opensourcedesign.github.io/contribute",
    description: "Source code of the website opensourcedesign.net",
    tags: ["design", "opensourcedesign", "open-source", "open-source-design"],
  },
  {
    name: "ifme",
    imageSrc: "https://avatars1.githubusercontent.com/u/23299450?s=200",
    projectLink: "https://github.com/ifmeorg/ifme",
    description: "A community for mental health experiences",
    tags: ["ruby-on-rails", "javascript", "react"],
  },
  {
    name: "Rebus",
    imageSrc:
      "https://raw.githubusercontent.com/ollelauribostrom/rebus/master/logo.png",
    projectLink: "https://github.com/ollelauribostrom/rebus/contribute",
    description:
      "Helping new developers take their first steps as open source contributors by developing a simple rebus game together",
    tags: ["javascript", "html", "css", "tutorial"],
  },
  {
    name: "PRoot",
    imageSrc: "https://avatars2.githubusercontent.com/u/12125707",
    projectLink: "https://github.com/proot-me/PRoot/contribute",
    description:
      "chroot, mount --bind, and binfmt_misc without privilege/setup for Linux ",
    tags: ["chroot-environment", "userland-exec", "rootfs", "chroot", "c"],
  },
  {
    name: "Techqueria.org",
    imageSrc: "https://avatars1.githubusercontent.com/u/17460806?s=200&v=4",
    projectLink: "https://github.com/techqueria",
    description:
      "We're a community of Latinx professionals in the tech industry.",
    tags: ["latinx", "latinx in tech", "hugo", "netlify", "jamstack"],
  },
  {
    name: "Nextcloud",
    imageSrc: "https://avatars0.githubusercontent.com/u/19211038?s=200&v=4",
    projectLink: "https://github.com/nextcloud/server/contribute",
    description:
      "Open source collaboration platform for files, calendar, contacts, chat & calls, mail and more.",
    tags: [
      "javascript",
      "php",
      "html",
      "css",
      "android",
      "c++",
      "qt",
      "design",
      "ios",
      "vuejs",
      "web",
    ],
  },
  {
    name: "Open Source Diversity",
    imageSrc: "https://avatars1.githubusercontent.com/u/31018274?s=200&v=4",
    projectLink:
      "https://github.com/opensourcediversity/opensourcediversity.org/contribute",
    description:
      "For more diversity & inclusion in free & open source software communities 😊",
    tags: [
      "javascript",
      "html",
      "css",
      "diversity",
      "inclusion",
      "🎉",
      "web",
      "community",
    ],
  },
  {
    name: "Bitcoin",
    imageSrc:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v211-mint-aum-currency-13.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=435abda621bceebc1362c7e657e06c79",
    projectLink: "https://github.com/bitcoin/bitcoin/contribute",
    description:
      "Bitcoin is an experimental digital currency that enables instant payments to anyone, anywhere in the world.",
    tags: ["C++", "Python", "Cryptocurrency", "Blockchain", "Peer-to-peer"],
  },
  {
    name: "Tensorflow",
    imageSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAA4VBMVEX////lWy3tjiT4vzzlWS3kVCD98u/pe13nZzLrhyvsixfvnlD64tDtkCP99ezlYDXsiibrfADulz7obC3tjTLnZC34vTP4uybkUyv5wzzshADkVyb5x17ulCv4tgD4uRn98Nn5xVX60oT61o/97M784a/0sDvypzb2uD7iQwD858L6zHD73aX+9ebwnzD4wkbrgDPzu6764t3vpZTnbkvjThP31c330LD76tz72prxoT3qdznvkwDiRyj2wYvriFv31sHtmYPsjXX1ysDys3zxrG/wo132xZ/7zDzytIvhLQBmyegIAAAKWUlEQVR4nO3de2OiOhYAcEBqlS5qfaBQra/6qO9O2+nMuLfXaedxZ7//B9oEfAAmITmA2F3Ov1Otv8khnIQTK0mxxrSd4Yx6txPvRwkbs9s6ryWTMW6nhaQ/MDUKkwz3sGwH53Z2npxCZ9o2xCwo2svJGXI6Xw2BDDuE0Z7enRlnPuiCKDjqxtdO0p/fFYXBtC6eYS5OdzZP2rCLSc8IQ0FhGNPBWeRap78EZ5hrcDK9SdISqdBvhsowF6fb6yRrGTTDZtghDKPbTzDXJtNMZJQtZ5AQZd6LlmJzMs27JCyz6CkOp3fyXLuLYgqjcIzZSSnz6W0sw7KNduZ003Thazu2YXECFWyd01CEC31I1OsnqHAKd81YM+wQaHEQM6fTB6xZgIEWonEuDjqzDPRiMSEvqrf7cd11CoMmlDJqDU0YZznrxEGBF/rDRb5WKY9BGqPeHER+6dz1gHdJc7xoKaVKQ15/g+UaWutEu00w73dhw2KORy1F0UsVVW3UVkOQJmMsexFeOvBCf4goDkaWVTVXBeZadIuDSXMJo5gOZYdBHLlWhk0ERqYbRcFWgI6KuVwoiheDBkfNDf8BvZ1hhF8c9IH5ZZojRTnC2JwVLNfQPD0NRZnANvYymeWwVTpglAMGcRoyMNdQTQDPtU4TWlGOF26Ke2QcTu4bkFNvwxYH8z5422VU8lj8GMxZD4Hv3W52xCkDaKE/HipeCgGDNGp1DLyJ1vtiJUFh0oRWx74Mo2CcXAPOBPWlwPZn4Q5c6CPKsYWIsXMNyEELUd4Kp/MVWuiPR0cZdjybuaLRWI2gBRtXhTMfdIHDgsowMoUyMjanWAUvDgIfhKBCHzqHDRdkCRODci3E4oB910GFfvQUepo5g6MCFwfm+N+MCwcX+jCKXejTgzEyeHDU2moknGsmWr5eUzGFGbjQZ1OCMA5HMNfsipyKmTSBe8fmOIASkGZbTq4skGto+aorVMwc+nDCVejDR0Z2FgcjTo2Z2f5OMgZahpnLEWU2FsVgTmO95FnrmMPd+5IwA+jWsTkk3e+BGOz5qxw4OOb4cGM+xnSWt0DKmHaThGJk+S/1WwDHXfr5MfMedOuYVFGGxgQtDryLCy+mMKtDNymHvMOCgx9jF2wUztHiwo0pTLrgNYsIRWRkZGddPSTM08e/84Ap3IHLMIEMA2DIi4Mx4Rawx4ALfZNeHUeFwTts3sUB+XduMfMZcEcfQFHErpnd4OQOiwNa6edgBlPo1vEwuHY5DvGRsTmV7W4utSLHmAm4G2G4gFggI2Nz1HUZl2HUt0WYV2Cfm/1wAhRa+e+LC4imIa9ZFTnC1PKQpZ0ZWOgzMFeb98v7G9DgVBnvizCqWhHfHzVBF8se8y8p+3BzD9EEYHC5XRF77sNKXE6MJGW/34vnWiDGLrdXIuvuEeMduTGS9OlJeHA4MDIugXiXdryFfjBGkt6fBQeHD2Pvj/JwuAt9Howkfb+4EZkJODGce/GCZVggRsq+yQIcbgzSNNh78dT91hAYSfp8KXMnGz9mtxdP44gV+twYNE1zc0QwTrlNHhz2JmUYDOI8Pl1w5ZoYBu+Pkvbio6OQMCjXvhefY8Bsy23fxRJRhlExUvb9jWOeFsbgmyjeiz94RhEOCw2DL52nwIINgMFLu/2lY0aZYSwMKgkengNqAhAGl9v2XnzIMkwMgzgBBRsMs92LX0ILfV0HYaTsZ+biAIqx9+KhFKVapWtYGDwTyPRcY2C06x8SAyOrRRhFr+ZyeSgG33XuadM0HXNd/iLFgNGVChrTEBh06dByjYaxtBf7hQyMDMHoK1WVQ2LQ4qD4TOKQMZr1un1ZxCOTLzZwm19YjCQ9kqppEkbTfn7ZvShCjK6U1g2nyS88Rvr0Vjwq2I4xmvJrc3hNZGmm66W1ut0QiwKDFwf+gs2P0bSr3+5XRDQyiLLKqfsOv0gwkvRw6d1h82I0q/zH+4ApmpHRS/mK6urviwiDpulLd/3pwVjKj43vx6MYGV3JV2RPd19UGHTpPLpyzYVB1/3L0Q+Hx+h6fp1TPdvHEWLQNP12s+PsMZp19ZvwcDl0munKykeJGIPX1du7zg5jlX9/If1kyJHRWyuUYf5d/WgxeHHg5JqD0ZRXyjuEw+hVAiV6DL50np8djGb92tC6ZMKkma6sSZQ4MFIWFWyqXNWt1gu9FQs+MijDakRKLBi81rm4L1k/WO2YrKUdC6NZ+aPrPl4Miscr4nV/8BapayHWyFhXm0v6fwMLU2qNYzx2+X5DLLdZGK36ImWBmNEyY7RjPB1PLLepaaZprVf0WWCYxdLe9Kkb8X2xBKncpo2MpjjrBwimtX9+atw2O7Fx3hGHB4PWD9uSSBzT8jT3Gbf9TlwaVDPc+D/dEQbdsPbrB1FMa+TfwK4bsRy7tOPT45N3JvCPDFo/vB6mRjFMazEmPFpod+M7sfz58eaZjvGtH4QwC8pDOaPei+/bmd7f3DdRN0azfnrrCAEMjWJzMrGdWMaXzn7PyjUyaP3w4rv58mJKrREpw1ycbnzfzoTK7V1NsMdYyvH6gQ9TUgIoGfucYnxfbOaU24eR0awfhJKIC1MiXveEXJvG9j0Z2734LcYqb7KkHwrGoDKMh7LlxDavZR/wXjzGWNbxvgEfplQSOuOHZoK4NHajTlHRr3/SsjkAgzJMhGJz6vF9ndGny+frMv3CDMC0IG1s7UwnNs7DhvGPbAzwUKxx24tNwwoWRm7IZdgp0mEZvAyNDcPdJeWN8cI6R8y2i1+IgxuNtPPEoMEROnbpnCg4V4zYEd+h08p2vhjMWXFwTNxo5HTnnDMGz2vBJ5ZdjUbnjbG/k4V16Xj7vc8cY3dJMb5ixttodPYY3CVVIZcER2dUPwAGPytYH7e1E86ofgSMzVn5BudwXvSjYeyv/fj2j+nOMEKv5EfB4DOxxX2uUY7dfRwM5qydeY12OOIjYXCrcXXM6Pf+WBi71ZjeWPzBMLJaYz0jTDEpJsWkmBSTYlJMikkxKeb/BsP6OrYPhyH3bgZjrDK71y8BjJpbV6iDw8Bo1i/K4+BEMfnqcet2IIbWe504Rtfzq1yD2CdMwVjKn00yFI4+AF3Jr0mDQ8Zo1s/EKFwdGvj0xvHgkDC40SjJvwbG0ztjHxHycwgYUqPR2WGwBx/e8p5H8WPIjUbniEHhu3R8GJRhidwngRhFXxVduebF7M6LJhsiPZp6a6XuOW4MyrCkHXaIdc/qrf3plAMGZVjSF8s2BPua8fFth7PDaPhEwZmEcMc5Pm+DCzYHo2nl38G/5FQBOAugK+samqcRBlGoXXlJBOiUhl6t1BBGayVZuxACduRE11eVWv7XC6mFNcGAHgbSldWfM5nDDgHFhDlzFlukmBRzgkgxKeYEkWJSzAkixaSYE0SKSTEniBSTYk4QKSbFnCBSTIo5QaSYFHOCSDEp5gTxv4V5ov+NBTYmmc5Fdnym/2UfFsYqb5L+5KTIPjxTBoeO0azXM3uceYjv/yFeOFTM9dU5PTD3R/aSlGsUjKXFe7X8F189gTSO94MgAAAAAElFTkSuQmCC",
    projectLink: "https://github.com/tensorflow/tensorflow/contribute",
    description:
      "A Machine Learning library in Python for implementing Machine Learning and Deep Learning models",
    tags: [
      "python",
      "c++",
      "machine learning",
      "math",
      "deep learning",
      "neural network",
    ],
  },
  {
    name: "Next",
    imageSrc:
      "https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png",
    projectLink: "https://github.com/zeit/next.js/contribute",
    description:
      "Next.js is a framework that most notably allows you to write server-rendered React apps easily",
    tags: ["JavaScript", "server-rendering", "node", "nextjs", "react"],
  },
  {
    name: "Roc Toolkit",
    imageSrc: "https://roc-streaming.org/logo.png",
    projectLink:
      "https://github.com/roc-streaming/roc-toolkit/labels/help%20wanted",
    description: "A toolkit for real-time audio streaming over the network",
    tags: [
      "C++",
      "Audio",
      "Streaming",
      "Networking",
      "Cross-Platform",
      "Linux",
      "MacOS",
      "Windows",
    ],
  },
  {
    name: "Conda",
    imageSrc: "https://avatars.githubusercontent.com/u/6392739?s=200&v=4",
    projectLink: "https://github.com/conda",
    description:
      "Conda is an open source package management system and environment management system that runs on Windows, macOS and Linux. Conda quickly installs, runs and updates packages and their dependencies. Conda easily creates, saves, loads and switches between environments on your local computer. It was created for Python programs, but it can package and distribute software for any language.",
    tags: ["ML", "Python", "Builds", "Package Manager"],
  },
  {
    name: "Light Table",
    imageSrc: "https://avatars1.githubusercontent.com/u/5877010?s=200",
    projectLink: "https://github.com/LightTable",
    description:
      "Light Table is a next generation code editor that connects you to your creation with instant feedback. Light Table is very customizable and can display anything a Chromium browser can.",
    tags: [
      "clojurescript",
      "ide",
      "editor",
      "clojure",
      "lighttable",
      "clojure-development",
    ],
  },
  {
    name: "Dragula",
    imageSrc: "https://bevacqua.github.io/dragula/resources/icon.svg",
    projectLink: "https://github.com/bevacqua/dragula",
    description:
      "Dragula provides the easiest possible API to make drag and drop a breeze in your applications.",
    tags: [
      "Javascript",
      "front-end",
      "drag-and-drop",
      "vanilla",
      "drag-drop",
      "dragging",
      "component",
    ],
  },
  {
    name: "Moby",
    imageSrc:
      "https://github.com/moby/moby/raw/master/docs/static_files/moby-project-logo.png",
    projectLink: "https://github.com/moby/moby",
    description:
      "The Moby project is a collaborative project for the container ecosystem to assemble container-based systems",
    tags: ["docker", "containers", "go"],
  },
  {
    name: "ScyllaDb",
    imageSrc: "https://avatars1.githubusercontent.com/u/14364730?s=200&v=4",
    projectLink: "https://github.com/scylladb/scylla",
    description:
      "NoSQL data store using the seastar framework, compatible with Apache Cassandra",
    tags: ["nosql", "cpp", "cassandra"],
  },
  {
    name: "OSRM (Open Source Routing Machine)",
    imageSrc: "https://avatars2.githubusercontent.com/u/8207060?s=200&v=4",
    projectLink: "https://github.com/Project-OSRM/osrm-backend",
    description:
      "High performance routing engine written in C++14 designed to run on OpenStreetMap data",
    tags: ["osrm", "routing-engine", "cpp", "openstreetmap"],
  },
  {
    name: "Laravel",
    imageSrc: "https://avatars3.githubusercontent.com/u/958072?s=200&v=4",
    projectLink: "https://github.com/laravel/laravel",
    description: "A PHP Framework for Web Artisans",
    tags: ["PHP", "web development"],
  },
  {
    name: "Django",
    imageSrc: "https://avatars3.githubusercontent.com/u/27804?s=200&v=4",
    projectLink: "https://github.com/django/django",
    description:
      "A high-level Python Web framework that encourages rapid development and clean, pragmatic design",
    tags: ["python", "web development"],
  },
  {
    name: "Plotly",
    imageSrc: "https://avatars3.githubusercontent.com/u/5997976?s=200&v=4",
    projectLink: "https://github.com/plotly",
    description: "A high-level Python declarative charting library",
    tags: [
      "python",
      "javascript",
      "graph",
      "graph-based",
      "graph visualization",
    ],
  },
  {
    name: "NetworkX",
    imageSrc: "https://avatars3.githubusercontent.com/u/388785?s=200&v=4",
    projectLink: "https://github.com/networkx/networkx/contribute",
    description: "Python library for studying graphs and networks",
    tags: ["Python", "graph", "graph algorithms", "complex networks"],
  },
  {
    name: "Igraph",
    imageSrc: "https://avatars3.githubusercontent.com/u/3735184?s=200&v=4",
    projectLink: "https://github.com/igraph/igraph/contribute",
    description: "Python Library for creating and manipulating graphs",
    tags: ["Python", "graph", "graph algorithms", "complex networks"],
  },
  {
    name: "D3",
    imageSrc: "https://avatars1.githubusercontent.com/u/1562726?s=200&v=4",
    projectLink: "https://github.com/d3/d3/contribute",
    description: "JavaScript library for visualizing data using web standards",
    tags: [
      "Javascript",
      "graph",
      "graph-based",
      "graph visualization",
      "data visualization",
      "dynamic plots",
    ],
  },
  {
    name: "FontAwesome",
    imageSrc: "https://avatars1.githubusercontent.com/u/1505683?s=200&v=4",
    projectLink: "https://github.com/FortAwesome/Font-Awesome/contribute",
    description: "The iconic SVG, font, and CSS toolkit",
    tags: ["SVG", "CSS", "font"],
  },
  {
    name: "TallyCTF",
    imageSrc:
      "https://raw.githubusercontent.com/CyberNinjas/TallyCTF/master/modules/core/client/img/brand/Tallylogo_1.png",
    projectLink: "https://github.com/CyberNinjas/TallyCTF/contribute",
    description: "Capture-The-Flag Scoreboard & CTF Event Running Software",
    tags: ["ctf", "ctf-scoreboard", "ctf-platform", "JavaScript"],
  },
  {
    name: "Airform",
    imageSrc: "https://avatars1.githubusercontent.com/u/24883621",
    projectLink: "https://github.com/airform/airform/contribute",
    description: "Functional HTML forms for Front-End Developers.",
    tags: [
      "airform",
      "serverless",
      "sendmail",
      "mailer",
      "html-forms",
      "forms",
      "smtp",
      "sendgrid",
      "mailchimp",
      "mailgun",
    ],
  },
  {
    name: "Milligram",
    imageSrc: "https://avatars0.githubusercontent.com/u/16243913",
    projectLink: "https://github.com/milligram/milligram/contribute",
    description: "A minimalist CSS framework.",
    tags: [
      "milligram",
      "css",
      "html",
      "framework",
      "css-framework",
      "design",
      "minimalist",
      "flexbox",
      "amp",
    ],
  },
  {
    name: "Gatsby",
    imageSrc:
      "data:image/png;base64,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",
    projectLink: "https://github.com/gatsbyjs/gatsby/contribute",
    description:
      "A free and open source framework based on React that helps developers build blazing fast websites and apps.",
    tags: [
      "React",
      "Javascript",
      "HTML",
      "CSS",
      "GraphQL",
      "Web Development",
      "Markdown",
    ],
  },
  {
    name: "ClickHouse",
    imageSrc:
      "https://github.com/ClickHouse/clickhouse-presentations/raw/master/images/logo-400x240.png",
    projectLink: "https://github.com/ClickHouse/ClickHouse/contribute",
    description:
      "Column-oriented database management system that allows generating analytical data reports in real time.",
    tags: [
      "C++",
      "C++20",
      "cpp",
      "Linux",
      "DBMS",
      "OLAP",
      "Analytics",
      "SQL",
      "Big Data",
      "Distributed Database",
      "MPP",
    ],
  },
  {
    name: "Game of Life",
    imageSrc:
      "https://avatars0.githubusercontent.com/u/20078201?s=460&u=3e17a0f93f3c87b4dcef5671b623519229a5c4fb&v=4",
    projectLink: "https://github.com/TroyTae/game-of-life/contribute",
    description: "Conway's game of life web version!",
    tags: ["Javascript", "Typescript", "Good First Issue"],
  },
  {
    name: "Mattermost",
    imageSrc:
      "https://raw.githubusercontent.com/mattermost/mattermost-handbook/3b54c2cd1f823d1ea012ce45d1baa61fb4fbedbc/.gitbook/assets/branding/logo-downloads/mattermost-logo-vertical-blue.png",
    projectLink: "https://github.com/mattermost/mattermost-server/contribute",
    description: "Open source Slack-alternative for DevOps teams",
    tags: ["Go", "Javascript", "React", "React Native"],
  },
  {
    name: "Leapcode",
    imageSrc: "https://avatars1.githubusercontent.com/u/66108516?s=200&v=4",
    projectLink: "https://github.com/Leapcode-Open/leapcode-frontend/issues",
    description:
      "Leapcode is an online community & platform that motivates and rewards first-time open source contributors to get started.",
    tags: ["Javascript", "React", "Gatsby"],
  },
  {
    name: "Markdown Dungeon",
    imageSrc: "https://avatars3.githubusercontent.com/u/67384272?v=4",
    projectLink:
      "https://github.com/MakeContributions/markdown-dungeon#contribution-guidelines",
    description:
      "This is an example that how to use Markdown creating a dungeon.",
    tags: ["Markdown", "React", "Gatsby", "Good First Issue", "Beginner"],
  },
  {
    name: "Ansible",
    imageSrc: "https://avatars1.githubusercontent.com/u/1507452?s=200&v=4",
    projectLink: "https://docs.ansible.com/ansible/latest/community/index.html",
    description:
      "Ansible is a radically simple IT automation platform that makes your applications and systems easier to deploy.",
    tags: ["Python", "Automated-Testingg", "Beginner"],
  },
  {
    name: "start-here-guidelines",
    imageSrc: "https://avatars2.githubusercontent.com/u/35373879?s=200&v=4",
    projectLink:
      "https://github.com/zero-to-mastery/start-here-guidelines#a-guide-to-get-started",
    description:
      "Lets Git started in the world of opensource, starting in the Zero To Mastery opensource playground. Especially designed for education and practical experience purposes.",
    tags: ["Markdown", "Beginner"],
  },
  {
    name: "CSS-Art",
    imageSrc: "https://avatars2.githubusercontent.com/u/35373879?s=200&v=4",
    projectLink: "https://github.com/zero-to-mastery/CSS-Art#instructions",
    description: "General Edition - A CSS art challenge, for all skill levels.",
    tags: ["CSS", "HTML", "Javascript", "Beginner"],
  },
  {
    name: "Chat-e2ee",
    imageSrc:
      "https://repository-images.githubusercontent.com/271544524/44353a80-d451-11ea-815c-594e4a0c5fb8",
    projectLink:
      "https://github.com/muke1908/chat-e2ee/labels/good%20first%20issue",
    description:
      "Chat app in end-to-end enctypted environment without registration",
    tags: ["React", "Chat", "Javascript", "Beginner", "NodeJS"],
  },
  {
    name: "Zulip",
    imageSrc: "https://avatars0.githubusercontent.com/u/4921959?s=200&v=4",
    projectLink: "https://github.com/zulip/zulip/contribute",
    description: "Powerful Open Source Group Chat",
    tags: ["OpenSource", "Chat", "Javascript", "Beginner", "Python"],
  },
  {
    name: "SimplQ",
    imageSrc:
      "https://raw.githubusercontent.com/SimplQ/simplQ-frontend/master/simplq/public/images/Simple-Q-144x144.png",
    projectLink: "https://github.com/SimplQ/simplQ-frontend#contributing",
    description:
      "Modern and fully web based queue management solution for crowded businesses.",
    tags: ["OpenSource", "React", "Javascript", "Beginner", "Productivity"],
  },
  {
    name: "Phpmyadmin",
    imageSrc: "https://avatars.githubusercontent.com/u/1351977?s=200&v=4",
    projectLink: "https://www.phpmyadmin.net/contribute/",
    description: "A web interface for MySQL and MariaDB.",
    tags: ["OpenSource", "Mariadb", "Mysql", "HTML", "PHP", "Javascript"],
  },
  {
    name: "Litefy",
    imageSrc:
      "https://raw.githubusercontent.com/mathkruger/litefy/master/src/assets/logo.png",
    projectLink: "https://github.com/mathkruger/litefy/contribute",
    description: "A lighweight Spotify client for low-end devices",
    tags: ["OpenSource", "Angular", "HTML", "CSS", "Javascript", "Typescript"],
  },
  {
    name: "Navy Linux",
    imageSrc:
      "https://raw.githubusercontent.com/navy-linux/navy/master/logo-text.jpg",
    projectLink: "https://github.com/navy-linux/",
    description:
      "Navy Linux is a recompilation of the Red Hat Linux project just as the centOS Linux project has been for all these years.",
    tags: ["Shell", "Python", "HTML", "Ruby", "Puppet"],
  },
  {
    name: "DSA",
    imageSrc: "https://avatars3.githubusercontent.com/u/67384272?v=4",
    projectLink: "https://github.com/MakeContributions/DSA",
    description: "Data structure and Algorithm (DSA) contributions",
    tags: [
      "OpenSource",
      "Javascript",
      "C#",
      "C",
      "C++",
      "Python",
      "Beginner",
      "DSA",
    ],
  },
  {
    name: "Jest",
    imageSrc:
      "https://raw.githubusercontent.com/facebook/jest/master/website/static/img/jest-readme-headline.png",
    projectLink: "https://github.com/facebook/jest/contribute",
    description: "Delightful JavaScript Testing",
    tags: [
      "OpenSource",
      "Facebook",
      "Testing",
      "Immersive",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    name: "Collabora Online",
    imageSrc: "https://avatars.githubusercontent.com/u/22418908?s=200&v=4",
    projectLink: "https://github.com/CollaboraOnline/online/contribute",
    description:
      "A collaborative online office suite based on LibreOffice technology. This is also the source for the Collabora Office apps for iOS and Android.",
    tags: [
      "javascript",
      "css",
      "android",
      "c++",
      "design",
      "ios",
      "web",
      "productivity",
      "typescript",
      "libreoffice",
      "office",
      "documents",
    ],
  },
  {
    name: "Jigsaw",
    imageSrc: "https://avatars.githubusercontent.com/u/19845815?s=200&v=4",
    projectLink: "https://github.com/Jigsaw-Code",
    description:
      "Jigsaw is an incubator within Google that uses technology to address geopolitical issues.",
    tags: ["Go", "TypeScript", "c", "Shell", "Python"],
  },
  {
    name: "Idea Hub",
    imageSrc: "https://avatars3.githubusercontent.com/u/67384272?v=4",
    projectLink:
      "https://github.com/MakeContributions/ideahub#contribution-guidelines",
    description:
      "A collection of ideas and projects that contain from beginner to advance :octocat: 🎯🚀",
    tags: ["Hub", "ideas", "Project List", "Good First Issue", "Beginner"],
  },
  {
    name: "Simple Icons",
    imageSrc:
      "https://raw.githubusercontent.com/simple-icons/simple-icons-website/master/public/images/og.png",
    projectLink: "https://github.com/simple-icons/simple-icons/contribute",
    description: "SVG icons for popular brands",
    tags: ["JavaScript", "OpenSource", "Beginner", "SVG", "NodeJS"],
  },
  {
    name: "Eclipse JKube",
    imageSrc:
      "https://github.com/eclipse/jkube/raw/master/media/JKube-Logo-final-square-color.png",
    projectLink: "https://github.com/eclipse/jkube",
    description:
      "Cloud-Native Java Applications without a hassle, bring your Java applications to Kubernetes",
    tags: [
      "Java",
      "Kubernetes",
      "OpenShift",
      "Eclipse",
      "OpenSource",
      "Beginner",
    ],
  },
  {
    name: "Spaceship Prompt",
    imageSrc:
      "https://raw.githubusercontent.com/spaceship-prompt/brand/main/spaceship-letters-outside.svg",
    projectLink: "https://github.com/spaceship-prompt/spaceship-prompt",
    description: "Minimalistic, powerful and extremely customizable Zsh prompt",
    tags: ["Shell", "Zsh", "Prompt", "Productivity"],
  },
  {
    name: "tldr",
    imageSrc:
      "https://raw.githubusercontent.com/tldr-pages/tldr/main/images/banner.png",
    projectLink: "https://github.com/tldr-pages/tldr",
    description: "Collaborative cheatsheets for console commands",
    tags: ["Markdown", "Docs", "Beginner"],
  },
  {
    name: "Codename One",
    imageSrc:
      "https://www.codenameone.com/wp-content/uploads/2020/08/footer-logo.png",
    projectLink: "https://github.com/codenameone/CodenameOne",
    description:
      "Cross-platform mobile app development framework for Java & Kotlin developers",
    tags: [
      "Cross-Platform",
      "OpenSource",
      "Java",
      "Kotlin",
      "Android",
      "iOS",
      "Framework",
    ],
  },
  {
    name: "SymPy",
    imageSrc: "https://www.sympy.org/static/images/logo.png",
    projectLink: "https://github.com/sympy/sympy",
    description: "A computer algebra system written in pure Python",
    tags: ["Python", "Science", "Math", "Computer-Algebra"],
  },
  {
    name: "Pytorch",
    imageSrc:
      "https://github.com/pytorch/pytorch/raw/main/docs/source/_static/img/pytorch-logo-dark.png",
    projectLink: "https://github.com/pytorch/pytorch",
    description:
      "PyTorch is an optimized tensor library for deep learning using GPUs and CPUs.",
    tags: ["Python", "Machine-Learning", "Deep-Learning", "Neural-Network"],
  },
  {
    name: "Yarn",
    imageSrc:
      "https://github.com/yarnpkg/assets/raw/master/yarn-kitten-full.png?raw=true",
    projectLink: "https://github.com/yarnpkg/yarn",
    description:
      "Yarn is a JavaScript package manager created by Facebook that doubles as a project manager.",
    tags: ["JavaScript", "Package-Manager", "NodeJS", "NPM"],
  },
  {
    name: "Scribe - Language Keyboards",
    imageSrc:
      "https://raw.githubusercontent.com/scribe-org/Organization/main/icon/ScribeIcon1024Rounded.png",
    projectLink: "https://github.com/scribe-org/Scribe-iOS",
    description:
      "Keyboards for language learners with translation, verb conjugation and more!",
    tags: ["iOS", "Swift", "Productivity", "Good First Issue", "Beginner"],
  },
  {
    name: "mindsdb",
    imageSrc:
      "https://raw.githubusercontent.com/mindsdb/mindsdb_native/stable/assets/MindsDBColorPurp%403x.png",
    projectLink: "https://github.com/mindsdb/mindsdb",
    description:
      "MindsDB is a ML-SQL Server that enables machine learning workflows for the most powerful databases and datawarehouses using SQL.",
    tags: [
      "Database",
      "MySQL",
      "Machine Learning",
      "Open Source",
      "Productivity",
    ],
  },
  {
    name: "Osu!",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Osu%21_Logo_2016.svg",
    projectLink: "https://github.com/ppy/osu",
    description:
      "Osu! is a free-to-play rhythm game primarily developed by the community.",
    tags: ["Video Game", "C#", "Music"],
  },
  {
    name: "Salt",
    imageSrc:
      "https://gitlab.com/saltstack/open/salt-branding-guide/-/raw/master/logos/SaltProject_altlogo_teal.png",
    projectLink: "https://github.com/saltstack/salt",
    description:
      "Salt is the world’s fastest, most intelligent and scalable automation engine.",
    tags: ["Python", "Shell", "Automation"],
  },
  {
    name: "aprenda-go-com-testes",
    imageSrc:
      "https://raw.githubusercontent.com/larien/aprenda-go-com-testes/main/.gitbook/assets/red-green-blue-gophers-smaller.png",
    githubLink: "https://github.com/larien/aprenda-go-com-testes",
    description: "learn easily and quickly",
    tags: ["go"],
  },
  {
    name: "Daml",
    imageSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb0AAABxCAMAAAB2rY0NAAAA6lBMVEX///8fKjg8c/ccJzYUITHy8/QGGStyeYAACyJiZ2/o6esSIDAAESbR09W/wcMdKDcAFSjf4ePMzdAzPUqLkZctNkLm7P5tdHyyw/subPdah/iXmp7v8PGssLQEGCr3+PjEx8qAhYw9RVAAAB9FTVgfKTS2ub2ipquvs7dUW2Uravc7cO9mbHPu8/4mMT4eJiwAABe8zPzU3v+NoNZFUmqWr/o1ZdQAChArSIoKGCHc4/0jNFU0YspQgvcvU6knQHZ6nPkmPGmOq/khMEahuPsdIyAuUZ9qkfhIe/eEo/oyXLwpRYPH1f0AABECyRcLAAAOAElEQVR4nO2deZvixhGH0bbQ1YAkDmMbBknAcqxZZu0kjuMjtrOxkzjO9/86EczMDlL9+tABLGPVP/M8u1LR6ldVXV3d1Wq1GmmkkUYaaaSRRl6CfPkpkK+u1hyvm5N++2ptubRE+Wfvhqo7Xr35jMibP12ktUgm+1FWWPdqbbm0eEbu2feJ4o7fXwH54s/TizQXyHDGsrL4A9ELcs/ObcUdf/kM0Pv6ryqTPZsMLSMrzh+IXv7ZTQW9t58j2/vmbyqTPZs09ArQ+xaZ3qvv2PIy7aXS0CtA75+I3ve+YVyrzxp6Bej9gEzv7/cGX1+mwUQaevr0PnmDIs4fXxvm7krTrIaePr1PYcT53jD8/ZWizoaePr2fEL3f7tMbg7sLNTknDT1tet/CYe/n14cbt5dqc1Yaetr0vkSm98XDndZ1Br6GnjY9seNM6V3HdTb0tOnBqfo3D/T4ddItDT1der+j+cLX370+3snmV4k6G3q69P4B5wv3j7da/Ys1+0Qaepr0BBnqJ3rK5YmzSENPk95XCN6r968fb2XG5dr9LA09TXowQ/31L9ftt4aeJj3oOH+9/3CvNbxcwz9IQ0+PnjBD/eHe7RUm7A09PXrYcb5/vtffXyHqbOjp0fsXcpy/3Z/cbF1hka+hp0Xv238jej+/Pr15G12y8Udp6GnRgxnqV/eZuzuX3xjY0NOi9x+Yof4lc/fs8q6zoadD7y10nP/N2p7pXrT1B2no6dCDGeovvnudufsKmeqGng496Di/z91tsNVFm99q6GnRi6Dj/PU+d/u5Fvna03A1TOydnUzWm3B6EtqWpxdNvdUkscc7ezi5i6e1hstRu3+3Htq7cdrgvtdW6I6m4ebwdONkuI49/chPmx4uPsk5ztT2BmeIOr3eZMsWHYtzk3Mr6Di+u46fOqQkvSheu75z0JkqtazAMU50tvqrXkZWHlLRy0n8lGoKV8nACSzr0F5uOZ35+C4WP1283o2cp6ebOc4oWWmOP9r0VBnqJ+nU7rf6ydKwTP/0R3zT2m+HD+9JKXqhQOf6sf9dnq3NcXpIyd7MXGQuw0flA87ZqWrGU90TmEb0hvN9YJ5ebTDO5+OujivQpfcWJlqI46zfdfa2C8588jNpZ894cuitEvS6rmNhnYE5Od7tmtn/6UB6o0ynG+xIr287PPvvT7qNNbHgrt2BLWHcma/USWNdeoLik7zjPESdyt8sIKFtmuQnPnSINRiWoDe19xx02JPOfTKtQK+dGFykm1nLrJppMhJenALcoh/NiC69T3/4nMpP7+mP+kas+k1taa8X4qc7PmEwiof5S+T0ojtmCdk99HHQK00vHkmVM8d+DguiNbeAkT6L6ewUL6K25/wEyNsl+HU+UVLRlNCVszv2x36eb4OU3tSW99hRJ0u2uYv06M2TvUq55T55z3AcSN+ig/CBfAJWuIYoI8RrHRRsa4o6N6Ya3iEiyP+LjF5P4qpOdJKBS4teOrYpeRhm8NC8XkenJayTyKKXavRCBzw6qyfdMkFjv45I6PXK6tSjpyVscFgEnRia9zqJJHipRq+NXGdQS6Z6OFO/x4LnFdJbmyXh1Ukvdcz9VhLo3upbO7H1VaMHXWctRdBDeWghEyG91aK0zjrpGebcFgfS4LfFzrMivZ4BOoSjxEQxuVOP6EIR0evpOisgtdIzWBF4aaQjjAMr0pvCqLOy66zS0SJ6XVZBZ730CoofxIJ+qkivZYPIqfKe6mmlbsH02ludGE8kV6VnmEtB5FKVXg9EnVUX+aJKHS2gl4ARWl+uS0+4UbYqvSgAPya0dD25Ew4LzDQ5N02UGXwWSC+eVdJZgt5RL9eNcn12vFpwOdvjUKIqvdYYuc5dMR25JokGPctcbne27W7no5lk3Ef0IpKReew0bs23rm3vtsuRJbH4wvR4MHB3dpIq1sk5sMDf7saJPXYHAXwyC1OpTG8FjM+3iunIyhCZic86wbAfemnw3PbC7sp18GMamB42ZzbjdqozHVSiVGc8DjoincXosWAxXoXHJdnI6yeBfPbjm85g3fWOV7fDzXIBGuHvYQKrMr0QvdVOXExJRiHMFfLlXXbW0167gk4B9Dxoenw5yeqMNq4gMC1Ejw/WmSjDk6Y/Td/NNri3BUM0juMr02vtwKtSZZGPrBkYh5d5SN+9aIJXjwC9O+QgHJsOJpEguVqAnukMSdDWG4mM2g+Wcf7qtk29Dx+jKXt1emvQM+a29ITdG9AuYXucag+XqFMAPdDNzFjDFEY4Rot/+vT4EtVyeAOMj/lDNBmYkD5lIxTHV6fnLWijfKN0Ocq6Qx9RWNwSTcAYSemtqD35HeHaywSEn7r0/MDF720XvJRpZwteSzC/gS2oTq+F2iVO7qiEJm98KxZfDqZxlF5C6ZmSfNCa6tSlx8ei5bEJWkybi17LkHQDTIHUQI+aeYX9ESH1MLKObkWUDKFHu8KYSetEae5dk541Fi7ntKlFM1+8lkVgswG4qgZ6XTj4lBz41gSG6Up3V0Xb/M8Ten06iphynUlepx496XZImlNkG/HVHmnzAl1Vnd40vwnkIGVdJ3lGX7XJSL0riZonV+z43pSjJ03w9vMDujwdTPwF6oca6MEYv2Q5ikf9vUqRmh6Z7JmuYrMdmdxr0htLdJKrTcmyK3gsFGbVQa8PbI+NSu3K7ZIRR/l1BSW96F1eJ5e4rKOcg9407+Ll06pe3lRRcV0d9FogMekre0ivzeqZo5JelyyDKE8zPAe9aJxTypaypZhuvifQOkMt9OAiH0wOqISg4MpDRJT0NvkAQH2S6DnokeGXDWRuJSRDCMhf1UIvpjNsw/fLbAwkaTdLacJKeiT4VkdUZ6GXb6h8cAn3uRnG2eih7BYcZZVCghZLudCrpEdCTnWhw1no5d8ify+ll+/TEvSiOF/ldCiHIj0KkhlpSCV7FIFQespbitMzlW/EZehJ04mUHjArBb0wW+P0+Jkm8vRo+axUJV8+uPe58pbC9DROr38h9FAWDOyR8VC2vUwRNHHBNdDLx1QfCz3DPzc9tOEPha4kXWXohItUyMT6DJ7TNz4Oev656YVgPIMlXmj5ky2L5zpJ0s1SzjuU9Ogs5OOgd3bbu0Pr3AgKTaqmEhRPt5CZYw0xJ+k1dXH2i7C9CE7D0a6HCGaqi++PyKPwLWX9qJIe8Qvqr7a8CHp4xxHsT7CiiZek5LLOr5WrazmV9Ej2Tb3X+0V4zhjUgvh4aaw/ArtBzMKuk/a0MuFWPM/J9qpmvAjbw/lL+GN0kdQoUwTdzXs5NlANfEp6U7LGYKneqhdhe2h31UyQeIRF0IW/yUd9tfLAVvX6HtlNqZzLvATb66MKE1FinK7DlPomHzF3ZihcZ4m1daVBvwTbg+Yk2mUSoXRL8W/y0X0tqkJqdRI6JtMZVTRMWnF7tkcWg4/PLRzK6imC7pJ3QL4M1lqRRtI9ZTR0Xkj3m8Zkufn26HXzK0zHxxb6nB7aQu4UXqKl6/RctpjapyZP6EU7ulFNlgcCWdvb85xwn6Z4Ckc3FBllXCf41Zl4E1EIzl6gy3cbGn5xMT60v/72bC9/XtBBZF87qacIGpUQma5gsamPChnA4ivQybcCLxKiyt2bsz1UnyCdf6/A/gj5zhv8kKDogI9icOV0COvtAD1YKWOugFuP1j7SeXO2R5JWhmKHV4Rw81j2QLDZaLhlLMn/crRCdW6Gfv0es2xyZW/cgaV2N2d7KO8sn+bCdEvxTDXywKn5DYbh8/AXhclAdOoJ2rZCJyLHxu2T7qnOyVyk89Zsj9x91CDN+JOtd0apb/KFuPSeWcFyslnF3bi3uXMD8VF/cMs4LMBK34nFcpjq7Pd7qzvbEuu8NXqg5s3wmax1uBrRKX76BzYU4wDQYvvR3ueyQwfwljFUXv+k0zzqlB06cHOeE20Tk7cunVeh6X3x/RFgfnbyyL6PTtc6EcF5LQqdcrkx22uX2aIJwsVSH5YKZ/WfleTNix0OlpUbsz2YoRac+fL8iyAILPVNPlKBVUQEm21pFV8BuTHbg45TueCDBj6rcLrl4DuFRxupRbRVOgHzUV25LdtDZwv5XMmh0KqEVCocVSaiF1XAd1u2F4Mps3zf/VG6yGR4mXIUTzAV1xBhmULklnaet0UPnXCgsdwDF5WKZ6oPUv5ERnGRSdsui++mPCde2tOI/Wssgp5qnHh/EHIWg6REKNI8D5rovCnbQ3uojY7GvLuH8omDkudHDHVOAObzQa6rpQVe672GSVOdN2V7cGlPdEDrqcBpoln2m3zxUmV+zLLDfEJWXp7X3aoOm/edsZfPO9yU7cHiE63tffWeOTdNmPiTQQfN5obuRVQUV7Ynplwnm0TlvmTzkdhemPp9/0GMD3+MWNopj7LqnNz1+Le062wdPpIl5sdTwzuEN8XopY839EUnZvomP563eAl657K99SIg4sy1An+v06H3/q/0mXNpoNHdWRb9hAkzrc6uf5hJtreWmZF36h3c3WEwozpTdJ1t/zg+uDmdC/z9PZ69aian18lezU0pvVFOeQCUe072mmMLvBCIpv3Ae6t9mShaj+fW7HndiJk8GLlPp2BGiZsV0ZaHrGzsJT8hyBjv7LfJE/hhXic8tnGXu8qVDi53+atd2WvmjTWUT4nK2j7hVaNEYTzZzTvvFgtn8c4abJO4e/IltHZONJWG/bU95w86O4Nl0us+v6BEJ8wX5S+Sf16W6JQ3VEt5sRZcWaapZdets53q/JifuZFGGmmkkUYaaaSRRhpppJFGUvk/KZ1EZLgArRkAAAAASUVORK5CYII=",
    projectLink: "https://github.com/digital-asset/daml/contribute",
    description:
      "Daml is an open-source smart contract language for building future-proof distributed applications on a safe, privacy-aware runtime.",
    tags: ["Scala", "Haskell"],
  },
  {
    name: "Servo",
    imageSrc:
      "https://raw.githubusercontent.com/servo/servo/master/resources/servo.icns",
    projectLink: "https://github.com/digital-asset/daml/contribute",
    description:
      "A browser engine designed for applications including embedded use.",
    tags: ["Rust,Browser,Servo"],
  },
  {
    name: "matplotlib",
    imageSrc:
      "data:image/png;base64,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",
    projectLink: "https://github.com/matplotlib/matplotlib",
    description:
      "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.",
    tags: [
      "python",
      "gtk",
      "data-science",
      "qt",
      "data-visualization",
      "tk",
      "matplotlib",
      "plotting",
      "hacktoberfest",
      "wx",
    ],
  },
  {
    name: "activist.org",
    imageSrc:
      "https://raw.githubusercontent.com/activist-org/Organization/main/logos/activistLogoRounded.png",
    projectLink: "https://github.com/activist-org/activist",
    description: "Open-source, nonprofit activism platform",
    tags: [
      "Nuxt",
      "Vue",
      "Activism",
      "Good First Issue",
      "Javascript",
      "TypeScript",
      "Django",
      "Python",
    ],
  },
];
export default projectList;
