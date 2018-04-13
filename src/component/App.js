import React,{Component} from 'react';
import Card from './card';

import * as FontAwesome from 'react-icons/lib/fa';
class App extends React.Component{
    constructor(props){
        super(props);
        this.emptyQuote = {
            _id: '',
            quoteText: '',
            authorName: '',
            likes:0
          };
          this.state = {
            quotes: props.quotes,
            selectedQuote: this.emptyQuote,
            
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
        if(updatedQuote.quoteText!=''){
        if (updatedQuote._id == '') {
          updatedQuote._id = Date.now();
          newQuotes = this.state.quotes;
          newQuotes.push(updatedQuote);      
      
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
      
      
        likeQuote(_id,index){ 
          console.log('clicked');
          this.state.quotes[index].likes++; 
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
            <div id="heading">  <h3>Added quotes:</h3> </div>
            <div className="container">
          
            {this.state.quotes.map((quote,index) =>(                
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
                 
                 </div>
                 <div className="icons">
                
                  <span className="edit" onClick={()=>this.selectQuote(quote._id)}><FontAwesome.FaEdit/></span>
                  <span  onClick={() => this.likeQuote(quote._id,index)}
                      className="like">
                      <FontAwesome.FaThumbsOUp/>{quote.likes>0?quote.likes:0}</span>
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