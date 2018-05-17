import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'
import * as api2 from './api';

class Book extends React.Component {
  render() {
    let fields = [
              <p key={'author'} ><b>Author :</b> {this.props.book.author}</p>,
              <p key={'genre'} ><b>Genre :</b> {this.props.book.genre}</p>,
              <p key={'summary'} ><b>Summary :</b> {this.props.book.summary}</p>,
              <p key={'status'} ><b>Status :</b> {this.props.book.status}</p>,
             ] ;
      return (
        <div className="col-sm-12" >
          <div className="panel panel-primary">
            <div className="panel-heading" align="center">
              { this.props.book.title }
            </div>
            <div className="panel-body">
              {fields}
            </div>
          </div>
        </div>
      ) ;
  }
}

class ViewBooks extends React.Component {
  state = {books: [{}]};

  componentWillMount() {
  }

  async componentDidMount() {
   const booklist = [];
   const q = await api2.getAllBooks()
     .then(function(result) {
       var values = Array.prototype.map.call(result, function(obj) {
         booklist.push(obj);
       });

     })

    try{
          this.setState({
            books : booklist
          }
       );

       } catch (e){
         console.log("there was an error :" ,e)
       }

  }

  render() {


    let bookRows =  this.state.books.map(
           (b) => <Book key={b._id} book={b} />
    );

    return (
      <div className="col-sm-12" >
        <div className="row">
            {bookRows}
        </div>
      </div>
    );
  }

}

export default withRouter(ViewBooks);
