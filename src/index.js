import React from "react";
import ReactDOM from "react-dom";

import PaginationWidget from "./components/PaginationWidget";
import apiService from "./services/apiService";
import userData from "./data/posts.json";
import "./styles.css";

const userCount = userData.length;

const initialPage = 1;
const usersPerPage = 5;
const pagesCount = Math.ceil(userCount / usersPerPage);

class App extends React.Component {
  state = {
    currentPage: initialPage,
    data: userData.slice(
      (initialPage - 1) * usersPerPage,
      initialPage * usersPerPage
    ),
    loading: false
  };

  changePage = async pageNumber => {
    this.setState({ loading: true });

    try {
      const requestedUser = await apiService.getPageStub(
        pageNumber,
        usersPerPage,
        userData
      );

      this.setState({
        loading: false,
        currentPage: pageNumber,
        data: requestedUser
      });
    } catch (e) {
      this.setState({ loading: false });
      // Handle api error here
    }
  };

  render() {
    const { currentPage, data, loading } = this.state;

    return (
      <div className="App">
        <PaginationWidget
          loading={loading}
          currentPage={currentPage}
          pagesCount={pagesCount}
          data={data}
          onPageTileClick={this.changePage}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
