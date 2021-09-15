import React from 'react'
import {Card, CardContent, Grid, makeStyles, Typography} from '@material-ui/core'
import news from '../images/news.jpg'

const useStyles = makeStyles(theme => ({

    component: {
        boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
        marginBottom: 20
    },

    container: {
        display: 'flex',
        padding: 8,
        paddingBottom: '4px!important'
    },

    image: {
        height: 130,
        width: '88%',
        borderRadius: 5,
        objectFit: 'cover'
    },
    rightContainer: {
        margin: '5px 0px 0 -25px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 0'
        }
    },

    title: {
        fontWeight: 300,
        color: '#44444d',
        fontSize: 10,
        fontWeight : 'bold'
        
    },
    publishedAt: {
        color: '#808290',
        fontSize: 7,
        
    },
    description: {
        
        fontSize : '8px',
        color: '#44444d',
        marginTop: 5,
        fontFamily: "'Roboto',sans-serif",
        
    },
    publisher: {
        fontSize: 8,
        marginTop: 'auto',
        marginBottom: 10,
        '& > *': {
            textDecoration: 'none',
            color: '#000',
            fontWeight: 'bold'
        }
    }

}))


const Article = ({article}) => {

    const classes = useStyles()

    return (
        
        <Card className={classes.component}>
            <CardContent className={classes.container}>
               <Grid container>
                   <Grid item lg={5} md={5} sm={5} xs={12}>
                        {article.urlToImage ? (<img src={article.urlToImage} alt="article-image" className={classes.image} />) : (<img src={news} alt="image" className={classes.image} />)}
                    </Grid>
                   <Grid item lg={7} md={7} sm={7} xs={12} className={classes.rightContainer}>
                        <Typography className={classes.title}>{article.title}</Typography>
                        <Typography className={classes.publishedAt}>{new Date(article.publishedAt).toLocaleString()}</Typography>
                        <Typography className={classes.description}>{article.description}</Typography>
                        <Typography className={classes.publisher}>Read more at <a href={article.url} target="_blank">{article.source.name}</a></Typography>
                   </Grid>
               </Grid>
            </CardContent>
        </Card>

    )
}

export default Article
