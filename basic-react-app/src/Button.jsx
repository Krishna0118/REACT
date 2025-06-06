function printHello(event){
    console.log("Hello");
    console.log(event);
}

function handleHover(){
    console.log("Hover");
}

export default function Button(){
    return ( 
    <div>
        <button onClick={printHello}>Click me!</button>
        <button onMouseOver={handleHover} >  Hover Over Me</button>
    </div>
     );
} 