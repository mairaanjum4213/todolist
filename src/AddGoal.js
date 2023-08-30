import React , {useState} from 'react'

export const AddGoal = () => {
    let goalArray=[]
    const [goal, setGoal] = useState("");
    const [goallist, setGoalList]= useState(goalArray);
  

    const goalhandler = (event) =>{
        setGoal(event.target.value);
    }
    
   const addgoalhandler = (event)=>{
   event.preventDefault();
   if(goal===""){
    alert("Please enter goal first");
   }
   
   else{
   setGoalList((prevlist)=>
    [...prevlist , goal]
   )
   setGoal("");
   }
   }
   

  const removehandler = (index)=>{
 
    const updatedlist = goallist.filter((item,i)=>{
          
                return i!==index;
            
    }
    )
    setGoalList(updatedlist);
  }

  const removeall=()=>{
    setGoalList([]);
  }

  
  /*const edithandler=(index)=>{
    setshowEdit(true);
    let edititem = goallist.find((elem,id)=>{
      return index===id;  
    })
    setGoal(edititem);
    setEditIndex(index); 
  }

  const updategoalHandler = ()=>{
    goallist.splice(editIndex,1,goal);
    setGoalList((prevlist)=>
    [...prevlist]
   )
    setshowEdit(false);  
    console.log(goallist);
  }
*/
  return (
   <div style={{background:"black"}}>
    <div style={{justifyContent:"center", alignItems:"center",display:"flex", flexDirection:"column"}}>

    <h1 style={{color:"white"}}>To do List</h1>

    <form>
        <input type="text" value={goal} onChange={goalhandler}/>
     <button type="submit" onClick={addgoalhandler} style={{background:"white", color:"black", borderRadius:3, marginLeft:5 ,padding:5}}>Add Goal</button> 
    </form>

        {goallist.length===0 ? (<h4 style={{color:"white"}}>Empty array</h4>): (goallist.map((data,index)=> 
        <>
            <div key={index} style={{display:"flex", justifyContent:"space-around", border:"2px solid white", marginBottom:20, marginTop:20}}>
                <div style={{color:"white"}}>{data} </div>
               
                <div><button type="submit"  style={{background:"white", color:"black", borderRadius:3, marginLeft:10,padding:5}}onClick={()=>removehandler(index)}>Remove </button></div>
            </div>
            
        </> 
         ))}

        {goallist.length>=1 && <button type="submit" style={{background:"white", color:"black", borderRadius:3 ,padding:5}} onClick={removeall}>Remove All  Goal</button>}
          
    </div>
    </div>
  )
} 
