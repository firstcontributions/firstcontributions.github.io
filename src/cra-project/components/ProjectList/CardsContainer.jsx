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
      hydrated: false
    };

    this.setTags = new Set();
    this.filterOptions = [];
    this.valueList = [];

    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].tags) {
        projectList[i].tags.forEach((tag) => {
          projectList[i].tags.sort();
          this.setTags.add(tag.toLowerCase());
        });
      }
    }

    this.setTags.forEach((v) =>
      this.filterOptions.push({ value: v, label: v })
    );
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSelectChange(selectedOptions) {
    const valueArray = Array.isArray(selectedOptions)
      ? selectedOptions
      : [selectedOptions];
    this.setState({ value: valueArray });
    this.handleFilterListUpdate(valueArray);
  }

  handleFilterListUpdate(value) {
    let updatedList = [...projectList];

    if (
      (!value || value.length === 0) &&
      (!this.inputValue || this.inputValue.length === 0)
    ) {
      return this.setState({ filterList: this.sortArrayRandom(projectList) });
    }

    // If tags filter applied
    if (value.length > 0) {
      const valueList = value.map((v) => v.value.toLowerCase());

      updatedList = updatedList.filter(
        (project) =>
          project.tags &&
          project.tags.some((tag) => valueList.includes(tag.toLowerCase()))
      );
    }

    // If search input value is not empty
    if (this.inputValue && this.inputValue.trim().length > 0) {
      const searchTerm = this.inputValue.toLowerCase();

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

  // Search input handler
  handleChange(event) {
    this.inputValue = event.currentTarget.value;

    this.inputValue = this.inputValue.trim();
    this.inputValue = this.inputValue.toLowerCase();

    this.handleFilterListUpdate(this.value);
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
          <div className="inputContainer">
            <input
              id="search"
              type="text"
              name="search"
              placeholder="Search..."
              onChange={this.handleChange}
              aria-label="Search"
            />
          </div>
          <div id="tag-selector-container" className="inputContainer">
            <Select
              name="tag-selector"
              value={this.state.value}
              onChange={this.handleSelectChange}
              options={this.filterOptions}
              isMulti={true}
              placeholder={
                <div className="filter-placeholder-text">Filter</div>
              }
              aria-labelledby="tag-selector-container"
              instanceId="tag-selector"
              styles={{
                clearIndicator: (base, state) => ({
                  ...base,
                  cursor: 'pointer'
                })
              }}
            />
          </div>
        </div>
        <section id="project-list" className="containerLayout">
          {this.state.filterList.map((item, key) => {
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
          })}
        </section>
      </div>
    );
  }
}
