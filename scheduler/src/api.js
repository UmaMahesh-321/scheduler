import axios from "axios"

const url="http://localhost:3000/events"

export async function getData(){

     return await axios.get(url);
}

export async function deleteData(Title){

    return await axios.delete(`${url}/${Title}`);
}
export async function postData(data) {
    return await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export async function putData(Title,data) {
    return await axios.put(url+"/"+Title, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}