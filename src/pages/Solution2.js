import React, { Component } from 'react';
import MainContainer from '../components/MainContainer';
import { TextField, Grid, Button } from '@material-ui/core';

import {
    solution as SolutionTwo
} from "../solutions/Solution2/solution"

class Solution2Page extends Component{
    constructor(props){
        super(props);
        this.state={
            stages: 5,
            userString: "2,1,2,6,2,4,3,3",
            answer: ""
        };
    }

    handleStages = (e) => {
        this.setState({
            ...this.state,
            stages: parseInt(e.target.value, 10),
        })
    }

    handleUsersChange = (e) => {
        this.setState({
            ...this.state,
            userString: e.target.value,
        })
    }

    handleClick = () => {
        const { stages, userString } = this.state;
        const users = userString.split(",").map(x => parseInt(x, 10));
        let result = SolutionTwo( parseInt(stages, 10), users );
        this.setState({
            ...this.state,
            answer: '[ '+result.join(", ")+' ]'
        })
    }

    render(){
        const { stages, userString, answer } = this.state;
        return(
            <MainContainer title="Solution Two">
                <form>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={6}>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <TextField 
                                                value={ stages }
                                                variant = "outlined"
                                                label="N-Stages"
                                                fullWidth
                                                type="number"
                                                min = "1"
                                                max = "500"
                                                onChange = { this.handleStages }
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField 
                                                value={ userString }
                                                variant = "outlined"
                                                label="Users"
                                                fullWidth
                                                multiline
                                                rows={6}
                                                rowsMax="10"
                                                onChange = { this.handleUsersChange }
                                            />
                                        </Grid>
                                   </Grid>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField 
                                        value={ answer }
                                        variant = "outlined"
                                        label="Answer"
                                        fullWidth
                                        rows={9}
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

export default Solution2Page;