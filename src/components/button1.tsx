import "../style/button1.css";

interface texttype {
    item:string
}

export default function Button1(text:texttype){
    return(
        <>
        
        <button className="button1">{text.item}</button>
        
        </>
        )
};