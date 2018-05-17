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

function onAfterInsertRow(row) {

  console.log('Posting request to database');
  return api2.addBook(`${row.author}`,`${row.title}`,`${row.summary}`,`${row.genre}`,`${row.status}`)
  .then(function(response) {
    console.log('added Book:', response);
    window.location.reload();
  });

}

const options = {
  afterInsertRow: onAfterInsertRow,   // A hook for after insert rows
  afterDeleteRow: onAfterDeleteRow  // A hook after deleting rows
};


function onAfterDeleteRow(rowKeys) {

  console.log('Posting request to database');
  return api2.deleteBook(`${rowKeys}`)
  .then(function(response) {
    console.log('Deleted Book:', response);
    window.location.reload();
  });

}

class Books extends React.Component {
  state = {bookList: [{}], statusTypes:[], genreTypes:[]};

  componentWillMount() {
  }
  async componentDidMount() {
   const booklist = [];
   const statuslist = [];
   const genrelist = [];
   const q = await api2.getAllBooks()
     .then(function(result) {
       var values = Array.prototype.map.call(result, function(obj) {
         booklist.push(obj);
       });

     })

   const y = await api2.getAllStatusTypes()
   .then(function(result) {
     var values = Array.prototype.map.call(result, function(obj) {
       statuslist.push(obj.statustype);
     });
   });
   const z = await api2.getAllGenreTypes()
   .then(function(result) {
     var values = Array.prototype.map.call(result, function(obj) {
       genrelist.push(obj.genretype);
     });
   });

    try{
          this.setState({
            books : booklist,
            statusTypes:statuslist,
            genreTypes:genrelist
          }
       );

       } catch (e){
         this.setState({
                  isHidden: true
                });
       }

  }

    render() {

        return (
          <div>
            <h1>Add or Delete a Book</h1>
            <p>Click the <b>NEW</b> button to add a book</p>
            <p>Select a row and click the <b>DELETE</b> button to delete a book</p>
            <BootstrapTable data={this.state.books} striped={true} hover={true} search={ true } selectRow={ selectRowProp } deleteRow={ true } insertRow={ true } options={ options }>
                <TableHeaderColumn dataField="_id" isKey autoValue hidden dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" dataAlign="center" dataSort={true}>Title</TableHeaderColumn>
                <TableHeaderColumn dataField="author" dataAlign="center" dataSort={true}>Author</TableHeaderColumn>
                <TableHeaderColumn dataField="genre" dataAlign="center" dataSort={true} editable={ { type: 'select', options: { values: this.state.genreTypes } } }>Genre</TableHeaderColumn>
                <TableHeaderColumn dataField="summary" dataAlign="center" dataSort={true} >Summary</TableHeaderColumn>
                <TableHeaderColumn dataField="status" dataAlign="center" dataSort={true} editable={ { type: 'select', options: { values: this.state.statusTypes } } }>Status</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );

    }
}

export default withRouter(Books);
