import React, { Component } from 'react';
import MainContainer from '../components/MainContainer';
import { TextField, Grid, Button } from '@material-ui/core';

import {
    solution as SolutionThree
} from "../solutions/Solution3/solution"

class Solution3Page extends Component{
    constructor(props){
        super(props);
        this.state={
            data: '["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]',
            dataArr: [],
            answer: "",
            invalidFormat: false
        };
    }

    componentDidMount(){
        const{ data } = this.state;

        let arrData = this.mapDataToArrayData(data);

        this.setState({
            ...this.state,
            dataArr: arrData
        })
    }

    mapDataToArrayData = (data) => {
        let dataChars = data.split('');
        let arrData = [];
        let temp = "";
        try{
            for( let char of dataChars ){
                switch(char){
                    case ']':
                        temp+=char;
                        arrData.push(
                            JSON.parse(temp)
                        )
                        temp = "";
                        break;
                    case ',':
                        if(temp.length > 0){
                            temp+=char;
                        }
                        break;
                    default:
                        temp+=char;
                }
            }
        }
        catch(err){
            throw err;
        }
        
        return arrData;
    }

    handleChangeData = (e) => {
        try{
            let dataArr = this.mapDataToArrayData(e.target.value);
            this.setState({
                ...this.state,
                data: e.target.value,
                dataArr: dataArr,
                invalidFormat: false
            })
        }
        catch(err){
            this.setState(
                {
                    ...this.state,
                    data: e.target.value,
                    invalidFormat: true
                }
            )
        }
        
    }

    handleClick = () => {
        const { dataArr } = this.state;
        let result = SolutionThree( dataArr );
        this.setState({
            ...this.state,
            answer: result
        })
    }

    render(){
        const { data, answer, invalidFormat } = this.state;
        return(
            <MainContainer title="Solution Three">
                <form>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={6}>
                                    <TextField 
                                        value={ data }
                                        variant = "outlined"
                                        label="Data"
                                        fullWidth
                                        multiline
                                        rows={10}
                                        rowsMax="10"
                                        error = { invalidFormat }
                                        helperText = { invalidFormat ?  "Invalid Format" : "" }
                                        onChange = { this.handleChangeData }
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField 
                                        value={ answer }
                                        variant = "outlined"
                                        label="Answer"
                                        fullWidth
                                        rows={10}
                                        rowsMax="10"
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

export default Solution3Page;