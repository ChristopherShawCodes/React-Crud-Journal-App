Coding Dojo: React/Mern Stack Office Hour: "Journaling App w/Aaron & Journal App Crud"

This is the final product from coding along with the following Office Hour videos from Coding Dojo

Youtube: 

OH1: https://www.youtube.com/watch?v=80WvUBpdYco&list=PLGgKBNvAhvCnCVIkJOmX-g2Pp6RvbrWEn

OH2: https://www.youtube.com/watch?v=tRlDUA7tuoQ&list=PLGgKBNvAhvCnCVIkJOmX-g2Pp6RvbrWEn


See what I built: https://framed-react-journal-app.netlify.app/

// CRUD Operations // Create Read Update Delete

// Create: Create a new thought
// Read: Display the thought
// Update: Edit the thought
// Delete: Delete the thought




// Delete function take aways:

    //To start we need access to the index so we can delete the appropriate entry
    //back in App.jsx we add index={index}
    //Now we remove the element by the index. How can we do that?
    //create a copy of entries via filter and call it newEntries
    //Return statement tells the index to NO LONGER = index. 
    //so we return our new set of entries minus the one with the delete handler if clicked
    
    `const deleteEntry = () =>{
    const newEntries = entries.filter((entry,i)=>{
      return i !== index
    })
      setEntries(newEntries)
    }`

