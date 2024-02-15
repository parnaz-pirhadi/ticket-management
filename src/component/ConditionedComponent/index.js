function ConditionedComponent(props) {
    const { condition, children, fallback = null } = props

    return condition ? children : fallback
}

export default ConditionedComponent
