import "../style/button2.css";

interface texttype {
    item:string
}

export default function Button2(text:texttype){
    return(
        <>
        
        <button className="button2">{text.item}</button>
        
        </>
        )
};