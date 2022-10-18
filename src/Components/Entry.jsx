import React from 'react'


//Where are we deleting the entry from? -STATE
//in App.jsx we pass in     
// entries={entries}
// setEntries={setEntries}
const Entry = ({entry,entries,setEntries,index, setEditIndex}) => {

  const deleteEntry = () =>{
    //To start we need access to the index so we can delete the appropriate entry
    //back in App.jsx we add index={index}
    //Now we remove the element by the index. How can we do that?
    //create a copy of entries via filter and call it newEntries
    //Return statement tells the index to NO LONGER = index. 
    //so we return our new set of entries minus the one with the delete handler if clicked
    //because onClick the index is no longer = to index so it is filtered out. 
    const newEntries = entries.filter((entry,i)=>{
      console.log('i',i)
      return i !== index
    })
    setEntries(newEntries)
    console.log('index',index)
  }
  //How do we know which entry to edit? The index.
  const editEntry = () =>{
    //when we click edit it will take the index of the component
    //and put it in App.jsx which will pass it to form. 
    return setEditIndex(index)

  }

  return (
    <div id="entry" className="card">
    <h5 className='card-title'>Journal Entry</h5>
    <p className='card-body'>{entry}</p>
    <button onClick={deleteEntry} id="delete" className='btn btn-outline-danger'>Delete Entry</button>
    <button onClick={editEntry} id="update" className='btn btn-outline-primary'>Edit Entry</button>

    </div>
  )
}

export default Entry