import { useEffect,useState } from "react"

import axios from "axios"
import "./adminContact.css"
import { NavbarPrivate } from "../../components/navbar2/NavbarPrivate"


export const AdminContact = () => {
const [data,setData] = useState([])

useEffect(()=>{
      axios.get("http://localhost:6861/api/contact")
      .then((res)=>{
        console.log(res.data)
        setData(res.data.data)
      }).catch((err)=>{
        console.log(err)
      })
},[])


// console.log(data,"data")


  return (
    <div>
        <NavbarPrivate/>
        <div className="newCont">
          <h1>Contact Message from Users</h1>
          <div className="newtable">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            
            <tbody>
            {Array.isArray(data) && data.length > 0 ? (
                data.map((el) => (
                    <tr className="tr" key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.desc}</td>
                    </tr>
                ))
                ) : (
                <tr><td colSpan="3">No data available</td></tr>
                )}
              
            </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}