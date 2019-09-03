import React, { Component } from 'react';
import api from '../../services/api';
import Timeline from '../../components/Timeline';

class Main extends Component{
    componentDidMount(){
        this.loadTimeline();
    }

    loadTimeline = async () => {
        const resp = await api.get('/events.json');
        console.log(resp.data.events);
    }
    render(){
        return <Timeline></Timeline>;
    }
}

export default  Main;
