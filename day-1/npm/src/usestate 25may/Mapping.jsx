function Mapping({students}){
// console.log({students});
    return (
    <div>
        <h1>Mapping</h1>
        <div>
            <ul>
           {students.map((stud) =>(
               <li> <h3>{stud} </h3></li>
            ))} 
            </ul>
        </div>
    </div>
    )   
};


export default Mapping;
