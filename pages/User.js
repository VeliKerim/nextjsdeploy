const User = (props)=>(
<div>
    User detail 
    <br></br>
    {props.url.query.name}
</div>
)
export default User;