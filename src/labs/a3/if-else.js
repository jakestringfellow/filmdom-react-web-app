function IfElse() {
    console.log('If else');
    const true1 = true;
    if(true1) {
        console.log('true1');
    }
    
    const false1 = false;
    if(!false1) {
        console.log('!false1');
    } else {
        console.log('false1');
    }
    return(
        <div>
        <h2>If Else</h2>
        { true1 && <p>true1</p> }
        { !false1 ? <p>!false1</p> : <p>false1</p> }
        </div>
    )
}
export default IfElse;
