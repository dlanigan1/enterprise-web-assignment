import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './test/stubAPI'
import * as api2 from './api';

class BorrowBook extends React.Component {
  state = {bookTitles: [{}]};

  componentWillMount() {
  }

  async componentDidMount() {
   const booklist = [];
   const q = await api2.getAllBookTitles()
     .then(function(result) {
       var values = Array.prototype.map.call(result, function(obj) {
         booklist.push(obj);
       });

     })

    try{
        console.log("book titles", booklist);
          this.setState({
            bookTitles : booklist
          }
       );

       } catch (e){
         console.log("there was an error :" ,e)
       }

  }

    render() {
      let theBook = api.findBook(1) ;
      let dipdip = this.state.bookTitles;

      let fields = [
                <p key={'author'} ><b>Author :</b> {theBook.author}</p>,
                <p key={'genre'} ><b>Genre :</b> {theBook.genre}</p>,
                <p key={'summary'} ><b>Summary :</b> {theBook.summary}</p>,
                <p key={'status'} ><b>Status :</b> {theBook.status}</p>,
               ] ;


        return (
          <div className="col-sm-12" >
            <div className="panel panel-primary">
              <div className="panel-heading" align="center">
                { theBook.title }
              </div>
              <div className="panel-body">
                {fields}
              </div>
            </div>
            <div className="">
              {dipdip.title};
            </div>

          </div>
        ) ;
    }
}

export default withRouter(BorrowBook);
