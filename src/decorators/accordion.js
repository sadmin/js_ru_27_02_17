//HOC === Decorator
import React from 'react'

export default (CustomComponent) => class MyDecoratorComponent extends React.Component {
    state = {
        openItemId: null
    }
    
    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId
        })
        console.log('---','test')
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem} />
    }
}