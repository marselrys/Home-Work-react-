import React from "react";



class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {works: []}
    }

    componentDidMount() {
        this.setState({works: ["work1", "work2", "work3"]})
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.works.map(work => <li>{work}</li>)}
                </ul>
            </>
        )
    }
}
export default MainPage;