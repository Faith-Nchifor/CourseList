import React from 'react'
import Card from '@material-ui/core/Card'
import {CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core'

export default function Course(props) {
    
        return (
            <div>
              {props.course ? (
                  <Card>
                      <CardMedia 
                      style={{height:0, paddingTop:'26.5%'}} 
                      image={props.course.fields.courseImage.file.url}
                      title={props.course.fields.title}
                      />
                      <CardContent>
                          <Typography gutterBottom variant='headline' component='h2'>
                              {props.course.fields.title}
                          </Typography>
                          <Typography component='p' >
                              {props.course.fields.descriptiom}
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size='small' colors='primary' href={props.course.fields.url} target='_blank'>Go to course</Button>
                      </CardActions>
                  </Card>

              ):null}  
            </div>
        )
  
}
