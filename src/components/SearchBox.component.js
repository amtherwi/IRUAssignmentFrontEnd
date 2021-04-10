import React from 'react';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px 4px',
        display: 'flex',
        width: 'w-full',
        alignContent: 'center',
        alignItems: 'center',
        margin: '15px 1px 3px 1px',
        color:'gray'
        
    },
    input: {
        marginLeft: theme.spacing(2),
        flex: 1,
        alignContent: 'center'
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const SearchBox = ({ searchfield, searchChange }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search Countries"
                inputProps={{ 'aria-label': 'search countries' }}
                onChange={searchChange}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <SearchIcon />
        </Card>
        // <Paper className={classes.root}>


        // </Paper>
    );
    // return (
    //         <Input
    //             placeholder="Search Country"
    //             className="flex flex-1"
    //             disableUnderline
    //             fullWidth
    //             //value={searchText}
    //             inputProps={{
    //                 'aria-label': 'Search'
    //             }}
    //             onChange={searchChange}
    //         />

    // );
}

export default SearchBox;





