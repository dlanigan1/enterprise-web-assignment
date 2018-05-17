import React from 'react';
import { withRouter } from 'react-router-dom';
//import api from './test/stubAPI'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as api2 from './api';

const cellEditProp = {
  mode: 'dbclick',
  blurToSave: true,
  afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};


function onAfterSaveCell(row, cellName, cellValue) {

//  let opts =   {
//        "id":row['id'],
//        "title": row['title'],
//        "author": row['author'],
//        "genre": row['genre'],
//        "summary": row['summary'],
//        "status": row['status']
//    };

//  console.log('Posting request to JSON file.');
//  fetch(`http://localhost:8080/books/${row['id']}`, {
//    "method": 'put',
//    "headers": {"Accept": "application/json","Content-Type":"application/json"},
//    "body": JSON.stringify(opts)
//  }).then(function(response) {
//    return response.json();
//  }).then(function(data) {
//    console.log('Modified Book:', data.title);
//  });

  console.log('Posting request to database');
  return api2.editBook(`${row._id}`,`${row.author}`,`${row.title}`,`${row.summary}`,`${row.genre}`,`${row.status}`)
  .then(function(response) {
    console.log('modified Book:', response);
    window.location.reload();
  });

}

class EditBooks extends React.Component {
  state = {books: [{}], statusTypes:[], genreTypes:[]};

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
           console.log("there was an error :" ,e)
         }

    }

    render() {

        return (
          <div>
            <h1>Edit a Book</h1>
            <p align='center'>double click a cell to edit</p>
            <BootstrapTable data={this.state.books} striped={true} hover={true} search={ true } cellEdit={ cellEditProp } >
                <TableHeaderColumn dataField="_id" isKey hidden dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField="title" width='250' dataAlign="left" dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField="author" width='150' dataAlign="left" dataSort={true}>Author</TableHeaderColumn>
                <TableHeaderColumn dataField="genre" dataAlign="center" dataSort={true} editable={ { type: 'select', options: { values: this.state.genreTypes } } }>Genre</TableHeaderColumn>
                <TableHeaderColumn dataField="summary" dataAlign="center" dataSort={true} >Summary</TableHeaderColumn>
                <TableHeaderColumn dataField="status" dataAlign="center" dataSort={true} editable={ { type: 'select', options: { values: this.state.statusTypes } } }>Status</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );

    }
}

export default withRouter(EditBooks);
