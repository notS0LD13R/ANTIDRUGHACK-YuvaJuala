import {
  Grid,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material'


import { useEffect,useState,useRef   } from 'react'
import { fetchBlog,blogData } from '../../../Firebase/firestore'

export default function Blog() {
  
  const Blogs=useRef([] as blogData[])

  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    const call=async ()=>{
      setLoading(true)
      Blogs.current=await fetchBlog()
      setLoading(false)
      console.log(Blogs)
    }
    call()

  },[])
  
  const centerStyle={
    ml:12,
    p:5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  if(loading)
    return( <CircularProgress /> ) 
  else
    
    return(
      <>
      <Typography 
        component='h1' 
        variant='h1'
        sx={{
          textAlign:'center'
        }}
        >
        Blog Page
      </Typography>
      <Grid container 
        sx={{
          pl:10,
          pt:10
        }}
        spacing={4}
      >

        {
          Blogs.current.map((blog)=>(
            <Grid item>
                <Card sx={{ maxWidth: 345 }} key={blog.id}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1579723798913-390e4be1d6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="pills in hand"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {blog.Heading?blog.Heading:'Heading'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.Para}
                    </Typography>
                  </CardContent>
                </Card>
            </Grid>
            
          ))
        }
      </Grid>
      </>
      
    )
  
}
