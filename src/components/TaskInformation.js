import React, {Fragment} from 'react'

export const TaskInformation = props => {
    let {entry} = props

    return (
<Fragment>
    
            <h4>{entry.title}</h4>
            <p>{entry.body}</p>
    
</Fragment>
    )
}
