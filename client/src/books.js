import React from 'react';
import { withRouter } from 'react-router-dom';
//import api from './test/stubAPI'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as api2 from './api';

const selectRowProp = {
  mode: 'radio',
  bgColor: 'yellow',
  hideSelectColumn: true,
  clickToSelect: true
};

var booklist = [{}];
var statuslist = [];
var genrelist = [];

function onAfterInsertRow(row) {

  let opts =   {
        "title": row['title'],
        "author": row['author'],
        "genre": row['genre'],
        "summary": row['summary'],
        "status": row['status']
    };

  console.log('Posting request to JSON file.');
  fetch(`http://localhost:8080/books/`, {
    "method": 'post',
    "headers": {"Accept": "application/json","Content-Type":"application/json"},
    "body": JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('Created Book:', data.title);
  });

}

const options = {
  afterInsertRow: onAfterInsertRow,   // A hook for after insert rows
  afterDeleteRow: onAfterDeleteRow  // A hook after deleting rows
};


function onAfterDeleteRow(rowKeys) {

  console.log('Posting request to JSON file.');
  fetch(`http://localhost:8080/books/${rowKeys}`, {
    "method": 'delete'
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('Deleted Book:', data.id);
  });

  alert('you deleted row: ' + rowKeys);
}

class Books extends React.Component {

    componentWillMount() {
    }

    render() {
      let books = api2.getAllBooks()
      .then(function(result) {
        booklist = result;
        console.log("booklist", booklist);

      })
      let statusTypes = api2.getAllStatusTypes()
      .then(function(result) {
        statuslist = [];
        var values = Array.prototype.map.call(result, function(obj) {
          statuslist.push(obj.statustype);
        });
        console.log("statuslist", statuslist);

      })
      let genreTypes = api2.getAllGenreTypes()
      .then(function(result) {
        genrelist = [];
        var values = Array.prototype.map.call(result, function(obj) {
          genrelist.push(obj.genretype);
        });
          console.log("genrelist", genrelist);

      })

        return (
          <div>
            <h1>Add or Delete a Book</h1>
            <p>Click the <b>NEW</b> button to add a book</p>
            <p>Select a row and click the <b>DELETE</b> button to delete a book</p>
            <BootstrapTable data={booklist} striped={true} hover={true} search={ true } selectRow={ selectRowProp } deleteRow={ true } insertRow={ true } options={ options }>
                <TableHeaderColumn dataField="title" isKey true dataAlign="center" dataSort={true}>Title</TableHeaderColumn>
                <TableHeaderColumn dataField="author" dataAlign="center" dataSort={true}>Author</TableHeaderColumn>
                <TableHeaderColumn dataField="genre" dataAlign="center" dataSort={true} editable={ { type: 'select', options: { values: genrelist } } }>Genre</TableHeaderColumn>
                <TableHeaderColumn dataField="summary" dataAlign="center" dataSort={true} >Summary</TableHeaderColumn>
                <TableHeaderColumn dataField="status" dataAlign="center" dataSort={true} editable={ { type: 'select', options: { values: statuslist } } }>Status</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );

    }
}

export default withRouter(Books);
