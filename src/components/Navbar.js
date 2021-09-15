import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, Button} from '@material-ui/core'


const useStyles = makeStyles({

    component : {

        flexGrow : 1

    },

    container: {

        backgroundColor : 'black',
        color : 'white',
    
    },

    toolbarButtons : {

        marginLeft : 'auto'

    }

})
const Navbar = ({setCategory}) => {

    const classes = useStyles()

    


    return (
        <div className={classes.component}>
            <AppBar className={classes.container} position="static">
                <Toolbar style = {{minHeight : '30px'}}>
                    <Typography><i className="fas fa-newspaper"></i></Typography>
              
                   <div className={classes.toolbarButtons}>
                        <Button style={{fontSize : '8px'}} color="inherit" onClick={() => setCategory('business')}>Business</Button>
                        <Button style={{fontSize : '8px'}} color="inherit" onClick={() => setCategory('science')}>Science</Button>
                        <Button style={{fontSize : '8px'}} color="inherit" onClick={() => setCategory('technology')}>Technology</Button>
                        <Button style={{fontSize : '8px'}} color="inherit" onClick={() => setCategory('sports')}>Sports</Button>
                        <Button style={{fontSize : '8px'}} color="inherit" onClick={() => setCategory('entertainment')}>Entertainment</Button>
                   </div>
                </Toolbar>
             </AppBar>
        </div>
    )
}

export default Navbar
