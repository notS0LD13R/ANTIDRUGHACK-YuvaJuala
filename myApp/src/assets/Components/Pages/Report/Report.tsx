
import {
  Box,
  Card,
  Typography,
  Avatar,
  TextField,
  Button,
  Container
} from '@mui/material'


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import Map from 'react-map-gl';
import { useState } from 'react';
import mapboxgl from 'mapbox-gl';

import { addReport } from '../../../Firebase/firestore';


export default function Report() {
  const [viewport,setViewport]=useState(
    {
      latitude:10,
      longitude:76, 
      zoom:10,
      
    }
  )
  const [cood,setCood]=useState<mapboxgl.LngLat|null>(null)
  const [date,setDate]=useState(new Date())

  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const remarks=new FormData(event.currentTarget).get('remark')
    const data={
      date:String(date),
      lat:cood?.lat?cood?.lat:0,
      long:cood?.lng?cood?.lng:0,
      remarks:String(remarks)
    }
    console.log(data)
    addReport(data)
  }
 
  const centerStyle={
    ml:12,
    p:5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  return (
    <Box
    sx={centerStyle}>
     
      <Card
      sx={centerStyle}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <TextSnippetIcon />
          </Avatar>
      <Typography component="h1" variant="h5">
            Drug Report
      </Typography>
        
        <Box component='form' onSubmit={handleSubmit} noValidate >
        
        <Container sx={{
          border:1,
        }}>
          {String(cood?cood:'')}
          <Map 
          {...viewport } 
          mapboxAccessToken={import.meta.env.VITE_REACT_APP_mapbox}
          onClick={(event)=>{setCood(event.lngLat)}}
          style={{width: 600, height: 400}}
          onMove={evt => setViewport(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          />
        </Container>
        

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker 
            label="Basic date picker"
            onChange={(e)=>setDate(e as Date)}
            />
          </DemoContainer>
        </LocalizationProvider>

        <TextField
              margin="normal"
              required
              fullWidth
              id="remark"
              label="Enter remarks"
              name="remark"
              autoComplete="remark"
              autoFocus
              sx={{
                width:500
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
        </Box>
      </Card>
    </Box>
  )
}
