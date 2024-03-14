import { useState } from "react";

function Form(props){
const [events, setEvents]=useState(props.data)
let changeFormData = (event) => {
    const { name, value } = event.target;
    setEvents({ ...events, [name]: value })
}

    return(
       <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control mt-2" value={events.Title} type="text" name="Title" placeholder="Enter Title"
                     onChange={changeFormData}/>

                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input className="form-control mt-2"value={events.Description} type="text" name="Description" placeholder="Enter Description"
                     onChange={changeFormData}/>

                </div> <div className="form-group">
                    <label>Subject</label>
                    <input className="form-control mt-2" value={events.Subject} type="text" name="Subject" placeholder="Enter Subject"
                     onChange={changeFormData}/>

                </div>
                <div className="form-group">
                    <label>Frequency</label>
                    <select className="form-control mt-2" name="Frequency" value={events.Frequency}
                     onChange={changeFormData}>
                   
                    <option value='-1'></option>
                        <option value={'Daily'}>Daily</option>
                        <option value={'Weekly'}>Weekly</option>
                        <option value={'Montly'}>Monthly</option>
                    </select>
                    
                </div>
                 <div className="form-group">
                    <label>Time</label>
                    <input className="form-control mt-2" type="date" name="time" />

                </div>

                <button className="btn btn-primary float-end"

                    onClick={(e) => {
                        // setSubmitted(true)
                        e.preventDefault();
                        // if (!!product.name && !!product.price && !!product.category) {
                            props.add(events)
                        // }



                    }}

                >Done</button>

                <button className="btn btn-danger float-end"
                    onClick={(e) => {
                        e.preventDefault();
                         props.close()


                    }}
                >Cancel</button>
                


            </form>
            </div>
    )
}

export default Form