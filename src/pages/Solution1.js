import React, { Component } from 'react';
import MainContainer from '../components/MainContainer';
import { TextField, Grid, Button } from '@material-ui/core';

import {
    solution as SolutionOne
} from "../solutions/Solution1"

class Solution1Page extends Component{
    constructor(props){
        super(props);
        this.state={
            recordString: "Enter uid1234 Muzi,Enter uid4567 Prodo,Leave uid1234,Enter uid1234 Prodo,Change uid4567 Ryan",
            record: ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"],
            answer: ""
        };
    }

    mapRecordStringToArray = () => {
        const { recordString } = this.state;

        return (recordString+",").split(",");
    }

    handleChangeRecordString = (e) => {
        this.setState({
            ...this.state,
            recordString: e.target.value,
        })
    }

    handleClick = () => {
        const { recordString } = this.state;
        let result = SolutionOne( this.mapRecordStringToArray(recordString) );
        console.log(result);
        this.setState({
            ...this.state,
            answer: '[ '+result.join(", ")+' ]'
        })
    }

    render(){
        const { recordString, answer } = this.state;
        return(
            <MainContainer title="Solution One">
                <form>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={6}>
                                    <TextField 
                                        value={ recordString }
                                        variant = "outlined"
                                        label="Record"
                                        fullWidth
                                        multiline
                                        rows={10}
                                        rowsMax="10"
                                        onChange = { this.handleChangeRecordString }
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField 
                                        value={ answer }
                                        variant = "outlined"
                                        label="Answer"
                                        fullWidth
                                        rows={10}
                                        rowsMax=""
                                        multiline
                                    />
                                </Grid>
                            </Grid>
                            
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" fullWidth onClick = { this.handleClick }>
                                Process
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </MainContainer>
        );
    }
}

export default Solution1Page;