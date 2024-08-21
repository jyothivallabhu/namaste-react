const User = (props) => {
    return (
        <div className="user-card">
            <h2>Name:{props.name} </h2>
            <h4>Email</h4>
            <h4>Contact</h4>
        </div>
    )
}

export default User