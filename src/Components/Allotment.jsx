import React from "react";

function AllotmentTable({list}) {

  return (
       <div id="allotmentTable">
            <table>
                 <thead>
                      <tr>
                         <th>Student Name</th>
                         <th>Rank</th>
                         <th>College Prefarence1</th>
                         <th>College Prefarence2</th>
                         <th>College Prefarence3</th>
                      </tr>
                 </thead>

                 <tbody>
                      {
                           list.map((a)=>{
                                return(

                                   <tr key={Date.now()}>
                                        <td>{a.name}</td>
                                        <td>{a.rank}</td>
                                        <td>{a.preferance[0]}</td>
                                        <td>{a.preferance[1]}</td>
                                        <td>{a.preferance[2]}</td>
                                   </tr>)})
                      }

                 </tbody>
            </table>
      </div>
  );
}

export default AllotmentTable;
