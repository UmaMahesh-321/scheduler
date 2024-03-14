import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs"
//  import './index.css';
function Table({events, deleteEvents,editEvents}){
    // function Table({props}){
    return(
        <table className="table ">
        <thead className="bg-primary text-white">
            {/* <tr  class="header bg-secondary text-white"> */}
            <tr className="trow" >
                <th>Title</th>
                <th className="expand">Description</th>
                <th>Subject</th>
                <th>Schedule</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                events.map((data) => (
                    <tr >
                        <td>{data.Title}</td>
                        <td>{data.Description}</td>
                        <td>{data.Subject}</td>
                        <td>{data.Schedule}</td>
                        
                        {/* <td>
                            <button className='btn btn-primary d-flex btn-secondary m-1' onClick={() => editEvents(data)}>Edit</button>
                            <button className="btn btn-danger d-flex m-1" onClick={() => deleteEvents(data.Title)}>Delete<span class="glyphicon glyphicon-trash"></span></button>
                        </td> */}
                        <td>
                            <span>
                                <BsFillPencilFill onClick={() => editEvents(data)}/>
                                <BsFillTrashFill onClick={() => deleteEvents(data.Title)}/>
                            </span>
                            {/* <button className='btn btn-primary d-flex btn-secondary m-1' onClick={() => editEvents(data)}>Edit</button>
                            <button className="btn btn-danger d-flex m-1" onClick={() => deleteEvents(data.Title)}>Delete<span class="glyphicon glyphicon-trash"></span></button> */}
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    )
}

export default Table