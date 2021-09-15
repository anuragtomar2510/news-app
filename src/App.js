import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import {Box, makeStyles} from '@material-ui/core'
import axios from 'axios'
const API_KEY = 'YOUR_API_KEY'


const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 20,
    width: '39%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '55%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '75%'
    }
  }
}))


function App() {

    const classes = useStyles()

    const [category, setCategory] = useState('')
    const [articles, setArticles] = useState([])


    useEffect(() => {

        const fetchTopHeadlines = async () => {

            try {

                    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)

                    console.log(res.data.articles)
                    setArticles(res.data.articles)


            } catch(err) {

                console.log(err)

            }
        }

        fetchTopHeadlines()

    },[])

   useEffect(() => {

    const fetchCategoryHeadlines = async () => {

        try {

              const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`)

              setArticles(res.data.articles)
              console.log(res.data.articles)

        } catch(err) {

           console.log(err)

        }

    }

    if(category === '') {

        return;

    }

    fetchCategoryHeadlines()

   }, [category])

  return (
    
    <Box>
      <Navbar setCategory={setCategory}/>
   
      <Box className={classes.container}>
        <Articles articles={articles} />
      </Box>

    </Box>


  )
}

export default App;
