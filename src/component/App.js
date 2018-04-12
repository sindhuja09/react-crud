import React,{Component} from 'react';
import Card from './card';

import * as FontAwesome from 'react-icons/lib/fa';
class App extends React.Component{
    constructor(props){
        super(props);
        this.emptyQuote = {
            _id: '',
            quoteText: '',
            authorName: ''
          };
          this.state = {
            quotes: props.quotes,
            selectedQuote: this.emptyQuote
          }
    }
    selectQuote(_id) {
        this.setState({
          selectedQuote: this.state.quotes.find(quote => quote._id == _id)
        });
      }
      
      newQuote() {
        this.setState({
          selectedQuote: this.emptyQuote
        });
      };

      updateQuote(updatedQuote) {
        let newQuotes;    
        // new quote
        if(updatedQuote.quoteText!=''){
        if (updatedQuote._id == '') {
          updatedQuote._id = Date.now();
          newQuotes = this.state.quotes;
          newQuotes.push(updatedQuote);      
        // updating existing quote
        } else {
          newQuotes = this.state.quotes.map(quote => {
            if (updatedQuote._id == quote._id) {
              return updatedQuote;
            } else {
              return quote;
            }
          });
        }
       } else{
         alert("Please Enter Quote...");
         return quote;
       }
       this.setState({
          quotes: newQuotes,
          selectedQuote: this.emptyQuote
        });
      }
      
      deleteQuote(_id) {
        this.setState({
          quotes: this.state.quotes.filter(quote => quote._id !== _id),
          selectedQuote: this.emptyQuote
        })
      }
      likeQuote(_id){
          this.state.list[quote].liked = !this.state.list[quote].liked;
          if(this.state.list[quote].liked === true) {
            this.state.list[quote].count++;
          }
          this.forceUpdate();
        }
    
    render(){
        return(
            <main>
              
            <Card
              selectedQuote={this.state.selectedQuote}
              newQuote={() => this.newQuote()}
              updateQuote={(quote) => this.updateQuote(quote)}
              deleteQuote={(_id) => this.deleteQuote(_id)} />
            <hr/>
            <div className="container">
            <h3>Added quotes:</h3>
              {this.state.quotes.map(quote =>(                 
                <React.Fragment key={quote._id}>
                 <div className="row">
                  <div className="list_quotes">
                  <a 
                  href="#" 
                  onClick={() => this.selectQuote(quote._id)}
                  className={this.state.selectedQuote._id == quote._id ? 'selected' : ''}>
                  
                   <blockquote>
                     <q>{quote.quoteText}</q>
                   </blockquote>
                   <p>---{quote.authorName}</p>
                   </a>
                  </div>
                  <a href="#" 
                   className="btn" 
                   onClick={() => this.deleteQuote(quote._id)}
                 ></a>
                 </div>
                 <div className="icons">
                  <span className="like" onClick={()=>this.likeQuote(quote._id)}>{quote.count>0?quote.count:null}<FontAwesome.FaThumbsUp/></span>
                    <span className="delete" onClick={()=>this.deleteQuote(quote._id)}><FontAwesome.FaTrashO/></span>
                  </div>
                
                </React.Fragment>
              ))}
            </div>
            </main>
        );
    }
}

export default App;