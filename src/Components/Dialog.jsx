import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import "./Dialog.css";
import Button from "@material-ui/core/Button";

function Dialogform({handleData,list}) {

     const [open, setOpen] = React.useState(false);

     const [openResult, setOpenResult] = React.useState(false);

     let data = [{ name:"IIT Madras", noOfSeats:4 },{ name:"IIT Kanpur", noOfSeats:2 },{ name:"IIT Bombay", noOfSeats:1 },{ name:"IIT Hyderabad", noOfSeats:3 },{ name:"IIT Roorkee", noOfSeats:1 },{ name:"IIM Ahemedabad", noOfSeats:2 },];

     let result = [];
     list  = list.sort((a,b)=>a.rank-b.rank);
     for(let i = 0 ; i < list.length ; i++){
          let person = {
                    name : list[i].name,
                    rank : list[i].rank,
                    alloted : "no college"
          };
          for(let j = 0 ; j < data.length ;j++ ){
               if(data[j].name == list[i].preferance[0]){
                    if(data[j].noOfSeats !== 0){
                         data[j].noOfSeats = data[j].noOfSeats-1;
                         person.name = list[i].name;
                         person.rank = list[i].rank;
                         person.alloted = data[j].name;
                    }
               }else if(data[j].name == list[i].preferance[1]){
                    if(data[j].noOfSeats !== 0){
                         data[j].noOfSeats = data[j].noOfSeats-1;
                         person.name = list[i].name;
                         person.rank = list[i].rank;
                         person.alloted = data[j].name;
                    }
               }else if(data[j].name == list[i].preferance[2]){
                    if(data[j].noOfSeats !== 0){
                         data[j].noOfSeats = data[j].noOfSeats-1;
                         person.name = list[i].name;
                         person.rank = list[i].rank;
                         person.alloted = data[j].name;
                    }
               }
          }
          result.push(person);
     }

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClickOpenResult = () => {
     setOpenResult(!openResult);
     setForm({name:"",rank:"",preferance:[]});
   };
 
  const handleClose = () => {
    setOpen(false);
  };



   
   
  const  [form,setForm] = useState({name:"",rank:"",preferance:[]});

const handleSave = () => {
     handleData(form);
     handleClose();
     setForm({name:"",rank:"",preferance:[]})
}

  return (
       <div id="dialogbox">

      <Dialog open={open} onClose={handleClose}>
           <h2>Add New Student</h2>
           <h3>Add Row</h3>
        <table >
          <tr>
               <td> Student Name </td>
               <td> <input onChange={(e)=>{if(e.target.value !== "" ){setForm({...form,name:e.target.value})}else{alert("Entername")}}} type="text" /></td>
          </tr>
          <tr>
               <td> Rank </td>
               <td> <input onChange={(e)=>{if(e.target.value !== "" ){setForm({...form,rank:e.target.value})}else{alert("Enter Rank")}}} type="number" /></td>
          </tr>
          <tr>
               <td> college preferance1 </td>
               <td> <select onChange={(e)=>{setForm({...form,preferance:[...form.preferance,e.target.value]})}} style={{outline:"none",border:"none"}}>
                         <option value="">select preferance1</option>
                         <option value="IIT Bombay">IIT Bombay</option>
                         <option value="IIT Kanpur">IIT Kanpur</option>
                         <option value="IIT Madras">IIT Madras</option>
                         <option value="IIT Ahemedabad">IIT Ahemedabad</option>
                         <option value="IIT Hyderabad">IIT Hyderabad</option>
                         <option value="IIT Rhoorkee">IIT Rhoorkee</option>
                    </select>
               </td>
          </tr>

          <tr>
               <td> college preferance2 </td>
               <td> <select onChange={(e)=>{setForm({...form,preferance:[...form.preferance,e.target.value]})}} style={{outline:"none",border:"none"}}>
                         <option value="">select preferance2</option>
                         <option value="IIT Bombay">IIT Bombay</option>
                         <option value="IIT Kanpur">IIT Kanpur</option>
                         <option value="IIT Madras">IIT Madras</option>
                         <option value="IIT Ahemedabad">IIT Ahemedabad</option>
                         <option value="IIT Hyderabad">IIT Hyderabad</option>
                         <option value="IIT Rhoorkee">IIT Rhoorkee</option>
                    </select>
               </td>
          </tr>

          <tr>
               <td> college preferance3 </td>
               <td> <select onChange={(e)=>{setForm({...form,preferance:[...form.preferance,e.target.value]})}} style={{outline:"none",border:"none"}}>
                         <option value="">select preferance3</option>
                         <option value="IIT Bombay">IIT Bombay</option>
                         <option value="IIT Kanpur">IIT Kanpur</option>
                         <option value="IIT Madras">IIT Madras</option>
                         <option value="IIT Ahemedabad">IIT Ahemedabad</option>
                         <option value="IIT Hyderabad">IIT Hyderabad</option>
                         <option value="IIT Rhoorkee">IIT Rhoorkee</option>
                    </select>
               </td>
          </tr>

          <tr><th> <button onClick={handleClose}>Cancel</button></th><th> <button onClick={handleSave}>Save</button></th></tr>
          
</table>
      </Dialog>



           <div style={{visibility:openResult?"visible":"hidden"}} id="allotmentTable">
            <table>
                 <thead>
                      <tr>
                         <th>Student Name</th>
                         <th>Rank</th>
                         <th>College Alloted</th>
                      </tr>
                 </thead>

                 <tbody>
                      {
                           result.map((a)=>{
                                return(
                                   <tr key={Date.now()}> 
                                        <td>{a.name}</td>
                                        <td>{a.rank}</td>
                                        <td>{a.alloted}</td>
                                   </tr>)})
                      }

                 </tbody>
            </table>
      </div>


      <Button style={{backgroundColor:"blue",color:"white"}} variant="outlined" onClick={handleClickOpen}>
        Add New Student
      </Button>
      <Button style={{backgroundColor:"blue",color:"white"}} variant="outlined" onClick={handleClickOpenResult}>
        Result
      </Button>
      </div>
  );
}

export default Dialogform;
