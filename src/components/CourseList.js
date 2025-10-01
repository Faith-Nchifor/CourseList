import React, { Component } from 'react'
//import TextArea from '@material-ui/core/TextField'
import TextField from '@material-ui/core/TextField'
import * as Contenful from 'contentful'
import Course from './Course'
import {Grid } from '@material-ui/core';
 
const SPACE_ID ='...'; // use your space ID
const ACCESS_TOKEN = '...'; // Use your access token from contentful

let client = Contenful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

export default class CourseList extends Component {
    state = {
        courses: [],
        searchString: ''
    }
    constructor(){
        super()
        this.getCourses();
    }
    getCourses = () =>{
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response => {
            this.setState({courses:response.items})
        }) )
        .catch((error) =>{
            console.log("error!!")
            console.log(error)
        })
    }
    onSearchInputChange = (event) =>{
        if(event.target.value){
            this.setState({searchString: event.target.value})
        }else {
            this.setState({
                searchString:""
            })

        }
        this.getCourses()
    }
    
    render() {
        return (
            <div>
                {this.state.courses ? (
                    <div>
                        <TextField type='search' placeholder='search for courses' margin='normal' style={{padding:24}} onChange={this.onSearchInputChange}/>
                        <Grid container spacing={24} style={{padding:24}}>
                            {this.state.courses.map(currentCourse =>(
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                
                ): "no courses found" }
            </div>
        )
    }
}
