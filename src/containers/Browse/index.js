/* @flow */
// Dependencies
import React, { PureComponent } from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
// Custom
import Container from '../../components/atoms/Container';
import TextField from '../../components/atoms/TextField';
import Table from '../../components/molecules/Table';
// Actions
import { searchPhrase, clearSearch } from '../../actions';

class Browser extends PureComponent<any, void> {
  _handleChange = (event: any): void => {
    const { searchPhrase } = this.props;
    const value = event.target.value;

    searchPhrase(value);
  }

  _handleRemove = () => {
    const { searchPhrase } = this.props;

    searchPhrase("");
  }

  render() {
    const { searchedPhrase, documents } = this.props;

    return (
      <Container>
        <TextField
          searchable
          name="searchbar"
          handleRemove={this._handleRemove}
          onChange={this._handleChange}
          value={searchedPhrase}
        />
        {!isEmpty(documents) && <Table collection={documents} />}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  searchedPhrase: state.appReducer.searchedPhrase,
  documents: state.documentsReducer.documents,
})

export default connect(mapStateToProps, {
  clearSearch,
  searchPhrase,
})(Browser);
