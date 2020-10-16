import React, { Component } from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";
import withClass from "../../../../hoc/withClass";

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => {
  if (suggestion.hasOwnProperty("url")) {
    return (
      <React.Fragment>
        <img
          src={suggestion.url}
          alt="just shit"
          width={30}
          className="react-autosuggest__suggestion-image"
        />
        <p>{suggestion.text}</p>
      </React.Fragment>
    );
  }

  return <p>{suggestion.text}</p>;
};

const onSuggestionSelected = (
  event,
  { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
) => {
  console.log(suggestion);
  console.log(window.location);

  if (suggestion.hasOwnProperty("url")) {
    window.location.replace("http://127.0.0.1:8000");
  }
};

const renderSectionTitle = (section) => {
  return <strong>{section.title}</strong>;
};

const getSectionSuggestions = (section) => {
  return section.suggestions;
};

const renderSuggestionsContainer = ({ containerProps, children, query }) => {
  // console.log(containerProps);
  return (
    <div {...containerProps}>
      {children}
      <div>
        Press Enter to search <strong>{query}</strong>
      </div>
    </div>
  );
};

class Searchbar extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  componentDidMount() {
    axios
      // .get("http://127.0.0.1:8000/searchbar")
      .get("https://run.mocky.io/v3/881db654-efe0-4412-9dd8-bdd08d903e9e")
      .then((response) => {
        // console.log(response.data);
        this.setState({
          data: response.data,
        });
      })
      .catch((res) => {
        alert("Page not found");
      });
  }

  escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = (value) => {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("^" + escapedValue, "i");

    // console.log(regex.text);

    return this.state.data
      .map((section) => {
        return {
          title: section.title,
          suggestions: section.suggestions.filter((language) =>
            regex.test(language.text)
          ),
        };
      })
      .filter((section) => section.suggestions.length > 0);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    // const data = this.getSuggestions(value);
    // console.log(data);

    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Type a programming language",
      value: value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        renderSuggestionsContainer={renderSuggestionsContainer}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
      />
    );
  }
}

export default withClass(Searchbar, "col-1-of-2");
