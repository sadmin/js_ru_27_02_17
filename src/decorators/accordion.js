//HOC === Decorator
import React from 'react'

export default (CustomComponent) => class MyDecoratorComponent extends React.Component {
    state = {
        openItemId: null
    }
    
    toggleOpenItem = openItemId => ev => {
        ev.preventDefault()
        console.log("***")
        this.setState({
            openItemId
        })
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem} openItemId={this.state.openItemId} />
    }
}