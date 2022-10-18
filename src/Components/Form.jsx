import React,{useState,useEffect} from 'react'
import '../App.css'


//bring over editIndex from App.jsx so we have access to it
const Form = ({setEntries,entries,editIndex,setEditIndex}) => {
  const [thought,setThought] = useState('')
  

  useEffect(() =>{
    editIndex !== '' && setThought(entries[editIndex])
  },[editIndex])

    const handleSubmit = e => {
        e.preventDefault()
        //conditional for edit 
        if(editIndex === ''){
          setEntries([...entries,thought])
          setThought(" ")
        }else{
          const newEntries = [...entries]
          newEntries[editIndex] = thought
          setEntries(newEntries)
          setEditIndex('')
          setThought('')
        }
    }

  return (
    <div>
    <form className='form' onSubmit={handleSubmit}>
        <label>
        <textarea id="entryField" placeholder='Submit Your Thoughts Here.......' cols="30" rows="10" onChange={e=>setThought(e.target.value)} value={thought}>
        </textarea>
        </label>
        <br></br>
        <button className='btn btn-primary' id='submit' type="submit" >Submit Thought</button>
    </form>
    </div>
  )
}

export default Form