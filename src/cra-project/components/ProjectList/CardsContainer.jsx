import React from "react";
import Select from "react-select";
import each from "lodash/each";

import Card from "./ProjectsCards";
import projectList from "./listOfProjects";

import "./css/cards-container.css";
import "./css/search.css";

export default class CardsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [],
      filterList: this.sortArrayRandom(projectList),
      hydrated: false,
      searchValue: '',
      showClearButton: false,
      searchSuggestions: [],
      showSuggestions: false
    };

    this.setTags = new Set();
    this.filterOptions = [];
    this.valueList = [];
    this.searchTimeout = null;

    // Categorize tags for better organization
    this.tagCategories = {
      language: new Set(),
      framework: new Set(),
      tool: new Set(),
      platform: new Set(),
      concept: new Set(),
      other: new Set()
    };

    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].tags) {
        projectList[i].tags.forEach((tag) => {
          projectList[i].tags.sort();
          const lowerTag = tag.toLowerCase();
          this.setTags.add(lowerTag);
          
          // Categorize tags
          const category = this.getTagCategory(lowerTag);
          this.tagCategories[category].add(lowerTag);
        });
      }
    }

    // Create organized filter options
    this.createFilterOptions();
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleSearchFocus = this.handleSearchFocus.bind(this);
    this.handleSearchBlur = this.handleSearchBlur.bind(this);
  }

  getTagCategory(tag) {
    const languageTags = ['javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'go', 'rust', 'php', 'ruby', 'swift', 'kotlin', 'dart', 'scala', 'clojure', 'f#', 'haskell', 'r', 'matlab'];
    const frameworkTags = ['react', 'vue', 'angular', 'svelte', 'ember', 'django', 'flask', 'express', 'laravel', 'rails', 'spring', 'next', 'nuxt', 'gatsby', 'sveltekit', 'astro'];
    const toolTags = ['webpack', 'babel', 'eslint', 'prettier', 'jest', 'cypress', 'docker', 'kubernetes', 'git', 'npm', 'yarn', 'vite', 'rollup', 'parcel'];
    const platformTags = ['android', 'ios', 'web', 'desktop', 'mobile', 'server', 'cloud', 'aws', 'azure', 'gcp', 'heroku', 'netlify', 'vercel'];
    const conceptTags = ['machine learning', 'ai', 'blockchain', 'cryptocurrency', 'open source', 'api', 'database', 'nosql', 'sql', 'graphql', 'rest', 'microservices', 'devops', 'ci/cd'];

    if (languageTags.includes(tag)) return 'language';
    if (frameworkTags.includes(tag)) return 'framework';
    if (toolTags.includes(tag)) return 'tool';
    if (platformTags.includes(tag)) return 'platform';
    if (conceptTags.includes(tag)) return 'concept';
    return 'other';
  }

  createFilterOptions() {
    const categoryIcons = {
      language: '💻',
      framework: '⚛️',
      tool: '🔧',
      platform: '📱',
      concept: '💡',
      other: '🏷️'
    };

    // Create a flat array of options for better compatibility
    this.filterOptions = [];
    
    Object.entries(this.tagCategories).forEach(([category, tags]) => {
      if (tags.size > 0) {
        const categoryOptions = Array.from(tags).map(tag => ({
          value: tag,
          label: `${categoryIcons[category]} ${tag}`,
          category: category
        }));
        this.filterOptions.push({
          label: `${categoryIcons[category]} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
          options: categoryOptions
        });
      }
    });

    // Also create a simple flat array for testing
    this.simpleFilterOptions = Array.from(this.setTags).map(tag => ({
      value: tag,
      label: tag
    }));
  }

  handleSelectChange(selectedOptions) {
    const valueArray = Array.isArray(selectedOptions)
      ? selectedOptions
      : [selectedOptions];
    this.setState({ value: valueArray });
    this.handleFilterListUpdate(valueArray, this.state.searchValue);
  }

  handleFilterListUpdate(selectedTags, searchValue) {
    let updatedList = [...projectList];

    // If no filters applied, show all projects
    if (
      (!selectedTags || selectedTags.length === 0) &&
      (!searchValue || searchValue.trim().length === 0)
    ) {
      return this.setState({ filterList: this.sortArrayRandom(projectList) });
    }

    // Apply tag filters
    if (selectedTags && selectedTags.length > 0) {
      const valueList = selectedTags.map((v) => v.value.toLowerCase());

      updatedList = updatedList.filter(
        (project) =>
          project.tags &&
          project.tags.some((tag) => valueList.includes(tag.toLowerCase()))
      );
    }

    // Apply search filter
    if (searchValue && searchValue.trim().length > 0) {
      const searchTerm = searchValue.toLowerCase();

      updatedList = updatedList.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm) ||
          project.description.toLowerCase().includes(searchTerm) ||
          (project.tags &&
            project.tags.some((tag) => tag.toLowerCase().includes(searchTerm)))
      );
    }

    this.setState({ filterList: updatedList });
  }

  // Enhanced search input handler with debouncing
  handleChange(event) {
    const searchValue = event.currentTarget.value;
    this.setState({ 
      searchValue: searchValue,
      showClearButton: searchValue.length > 0
    });

    // Clear previous timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Debounce search to avoid too many updates
    this.searchTimeout = setTimeout(() => {
      this.handleFilterListUpdate(this.state.value, searchValue);
    }, 300);
  }

  handleClearSearch() {
    this.setState({ 
      searchValue: '',
      showClearButton: false,
      searchSuggestions: [],
      showSuggestions: false
    });
    this.handleFilterListUpdate(this.state.value, '');
  }

  handleSearchFocus() {
    this.setState({ showSuggestions: true });
  }

  handleSearchBlur() {
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => {
      this.setState({ showSuggestions: false });
    }, 200);
  }

  sortArrayRandom(array) {
    if (Array.isArray(array)) {
      return array.sort(() => 0.5 - Math.random());
    }
    return array;
  }

  // Triggers re-render after mount to remove hydration errors caused by sortArrayRandom
  componentDidMount() {
    this.setState({ hydrated: true})
  }

  render() {
    return this.state.hydrated && (
      <div>
        <div id="container">
          <div className="search-section">
            <label htmlFor="search" className="search-label">
              Search Projects
            </label>
            <div className="search-wrapper">
              <div className="search-input-container">
                <span className="search-icon">🔍</span>
                <input
                  id="search"
                  type="text"
                  name="search"
                  placeholder="Search projects, technologies, or concepts..."
                  value={this.state.searchValue}
                  onChange={this.handleChange}
                  onFocus={this.handleSearchFocus}
                  onBlur={this.handleSearchBlur}
                  aria-label="Search projects"
                />
                <button
                  className={`clear-button ${this.state.showClearButton ? 'visible' : ''}`}
                  onClick={this.handleClearSearch}
                  aria-label="Clear search"
                  type="button"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
          <div className="inputContainer">
            <div className="filter-section">
              <label htmlFor="tag-selector" className="filter-label">
                Filter by Technology
              </label>
              <div className="filter-wrapper">
                <Select
                  name="tag-selector"
                  value={this.state.value}
                  onChange={this.handleSelectChange}
                  options={this.simpleFilterOptions}
                  isMulti={true}
                  isSearchable={true}
                  placeholder="Select technologies..."
                  aria-labelledby="tag-selector-container"
                  instanceId="tag-selector"
                  classNamePrefix="react-select"
                  className="react-select-container"
                  isClearable={true}
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  menuShouldScrollIntoView={false}
                />
              </div>
            </div>
          </div>
        </div>
        <section id="project-list" className="containerLayout">
          {this.state.filterList.length > 0 ? (
            this.state.filterList.map((item, key) => {
              return (
                <Card
                  key={key}
                  name={item.name}
                  logoLink={item.imageSrc}
                  projectLink={item.projectLink}
                  description={item.description}
                  tags={item.tags}
                  className="testing-testing"
                />
              );
            })
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No projects found</h3>
              <p>Try adjusting your search terms or filters</p>
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  this.setState({ 
                    value: [], 
                    searchValue: '', 
                    showClearButton: false 
                  });
                  this.handleFilterListUpdate([], '');
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </div>
    );
  }
}
