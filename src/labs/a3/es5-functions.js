function ES5Functions() {
    function add(a,b) {
        return a + b;
    }
    const twoPlusFour = add(2,4);
    console.log(twoPlusFour);

    return(
        <div>
            <h3>Legacy ES5 functions</h3>
            twoPlusFour = { twoPlusFour }<br />
            add(2, 4) = { add(2, 4) }<br />
        </div>
    );
}

export default ES5Functions;