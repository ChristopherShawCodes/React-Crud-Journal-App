import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import Entry from './Components/Entry'
import {useState} from 'react'

function App() {


  const [entries,setEntries] = useState([])

  //for edit function
  const [editIndex, setEditIndex] = useState('')
  //pass editIndex down to form so we can edit the entry
  //pass setEditIndex to Entry to create the function

  return (
    <div className="App">
    <Header/>
    <Form 
    setEntries={setEntries}
    entries={entries}
    //passing editIndex & setEditIndex to Form
    editIndex={editIndex}
    setEditIndex={setEditIndex}
    />
    {entries.map((entry,index)=>{
      return<Entry
      entry={entry}
      //whats the difference between the two index's?
      //Key is used by React to keep track of all of the components
      //by using index as the key this gives react the ability to acknowledge each component individually

      //Key is for React and isn't available to us. That is why we make a new index=index
      key={index} 
      //pass over to Entry.JS for Delete functionality
      entries={entries}
      setEntries={setEntries}
      //Here we create our own index for our use within the app
      //index= could be whatever you would like (examples: userID,itemID,etc.)
      //assigning it to index simply gives us access to use it within our app

      //pass over index to Entry.js to use for Update and Delete functions
      index={index}
      //passing setEditIndex to Entry.js so we can Update the entry
      setEditIndex={setEditIndex}
      //we don't need to pass the editIndex because only App will be reading this and sending it to Form (see above line 23)
      />
    })}
    </div>
  );
}

export default App;
