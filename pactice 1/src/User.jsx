function User({children,color}){
return(
    <>
    <div style={{color:color}}>
    {children}
    </div>
    </>
)
}
export default User