import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Grid2 } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001',
});


const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          '& .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-cell:focus-within': {
            outline: 'none',
          },
        },
      },
    },
  },
});



const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 150,
      editable: true,
    },
    {
      field: 'created_at',
      headerName: 'Message Created At',
      width: 150,
      editable: true,
    },

  ];



  const MsgManager = (props) => {

    let [buffer2, setBuffer2] = useState("null")


    const [msg, SetMsg] = useState([]);
    // useEffect(() => {
    //   axios
    //     .post('http://localhost:5001/api/test', { message: "Hello from React!" }) 
    //     .then((response) => console.log(response.data))
    //     .catch((error) => console.error(" Error fetching test route:", error));
    // }, []);
    useEffect(() => {
      axios.get('http://localhost:5001/api/messages')
      .then((response) => SetMsg(response.data))
      .catch((error) => console.error("Error fetching messages:", error));
    }, []);
    
    //axiosInstance.post('/test')
    //}
    // );

    const msgList = [...msg];

    const rows = msgList.map((item) => ({

      id: item.id,
      email: item.email,
      created_at: item.created_at

    }));
      
      
      
      
      //{ id: 1, email: 'Snow', created_at: 'Jon PENIS PSOSIJSENFEFSH'},

  
      const handleRowClick = (params) => {
        const clickedRow = params.row;
        console.log('Clicked row data:', clickedRow.email);
        let entry = msgList.find( element => element.id === clickedRow.id)
        props.pass(entry);
        props.bool();
        //let test = props.setMessager()
        
 
        
        // Access specific values:
        // const name = clickedRow.name;
        // const age = clickedRow.age;
      };
    

    return(

      
      <ThemeProvider theme={theme}>
        
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
         disableRowSelectionOnClick
         //onRowClick={(rows)=>{handleClick(rows.email)}}
         onRowClick={handleRowClick}

        //  onCellClick={(params,event) => {
        //    event.stopPropagation();
        //  }}
        // disableSelectionOnCLick
      
      />
      </Box>
      </ThemeProvider>
    );

};


export default MsgManager;
