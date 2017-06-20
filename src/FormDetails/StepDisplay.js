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
    componentDidUpdate()
    {
        try
        {
            var schema = document.getElementById("Tree");
            var elements = schema.getElementsByClassName("rst__rowContents");
            for (var index in elements){
                if (elements[index].getElementsByClassName("rst__rowSubtitle")[0].innerHTML == 'approved'){
                    elements[index].className = 'rst__rowContents green'
                }
                if (elements[index].getElementsByClassName("rst__rowSubtitle")[0].innerHTML == 'rejected'){
                    elements[index].className = 'rst__rowContents red'
                }
                if (elements[index].getElementsByClassName("rst__rowSubtitle")[0].innerHTML == 'waiting'){
                    elements[index].className = 'rst__rowContents orange'
                }
            }
        }
        catch (e){
            console.error(e);
        }
    }

    render() {
        return (
            <div style={{ height: 400 }} id="Tree">
                <SortableTree
                    treeData={convertToTree(this.props.steps)}
                    refs="tree"
                    canDrag={false} canDrop={false}
                />
            </div>
        );
    }
}

export default StepDisplay;
