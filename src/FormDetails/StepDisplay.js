import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';

const convertToTree = function(steps){

    return steps.map((step)=>{
        var newStep  = {
            title: step.step_name,
            subtitle: step.status,
            expanded : true
        };
        if(step.next_steps != undefined){
            newStep.children = convertToTree(step.next_steps)
        }
        return newStep;
    });
}
class StepDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            treeData : convertToTree(props.steps)
        }
    }

    render() {
        return (
            <div style={{ height: 400 }}>
                <SortableTree
                    treeData={convertToTree(this.props.steps)}

                />
            </div>
        );
    }
}

export default StepDisplay;
