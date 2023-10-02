import { Button, Card, CardHeader } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Datagridtoolbar from "./Datagridtoolbar";

function Data() {
    const [todos , setTodos] = useState({});
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        async function getData()
        {
            setLoading(true);
            const res = await fetch("https://dummyjson.com/todos");
            const data = await res.json();
            setTodos(data.todos);
            setLoading(false);
        }
        getData();
    },[])
    console.log(todos);
    const columns = [
        {field:"id" , headerName:"ID" , width:100},
        {field:"userId" , headerName:"UserID" , width:200},
        {field:"todo" , headerName:"Todo" , width:500},
        {field:"completed" , headerName:"Completed" , width:400}
    ];
    return (
        <>
        <Card sx={{padding:5}}>
            <CardHeader title = "Todos List 🐣🐤"></CardHeader>
            <DataGrid components = {{Toolbar:Datagridtoolbar , BaseButton:Button}} loading = {loading} columns={columns} rows={todos} sx={{padding:2 ,height:500}}
            componentsProps={{baseButton:{
                variant:"contained",
            }}}
            ></DataGrid>
        </Card>
        </>
    );
  }
  
export default Data;
  