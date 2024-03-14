import Table from "./Table";
import Form from "./Form";
import { useEffect, useState } from 'react';
import {  getData ,deleteData ,postData,putData} from "./api";
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [initialForm, setForm] = useState({ Title: '', Description: '', Subject: '' })

  useEffect(
    ()=>{
      getEvents()
    },[]
  )
  
let getEvents=async()=>{
  let res=await getData();
  setEvents(res.data)
}

// let deleteEvents=async(i)=>{
//   await deleteData(i);
//   getEvents()
// }
// async function deleteEvent(Title) {
//   await deleteData(Title);
//   getEvents();
// }

let deleteEvents=async(Title)=>{
  await deleteData(Title);
  getEvents()
}

let addEvents=async(data)=>{
  if(edit)
  await putData(data)
 else
 
  await postData(data);
  getEvents()
  setOpenForm(false)
}
let editEvents=(data)=> {
  setEdit(true);
  setOpenForm(true);
  setForm(data)

}

function closeForm() {
  setOpenForm(false)
}
let showForm= ()=> {
 
  setOpenForm(true);
  // setEdit(false);
  setForm({ Title: '', Description: '', Subject: '' })

}

  return (
    <div className="wrapper m-5 w-50">
    <h2 className="text-primary text-center">Event Sheduler</h2>
    <button className="btn btn-primary float-end" onClick={() => { showForm() }}>+  Add</button>
    <Table events={events} deleteEvents={deleteEvents} editEvents={editEvents}></Table>
    {openForm && <Form  close={closeForm} data={initialForm} add={addEvents} ></Form>}
    </div>
  );
}

export default App;
