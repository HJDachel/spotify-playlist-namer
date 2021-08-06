import React from 'react'
import { AppBar, Toolbar, Typography} from '@material-ui/core'

export default function NavBar(props) {
    return (
        <div>
            <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            {props.titleText}
                        </Typography>
                    </Toolbar>
                </AppBar>
        </div>
    )
}
