import React, {UseState} from 'react'
function UseStateHooks(){
const[State, setColor]=UseState(0)

cons mouseOver=() => {
    setColor(color=='#F04'?'#999':'#F04');

}
return(
    <>
    <p style="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Cumque non architecto repellendus totam sit. Maiores,
         sint nulla eveniet quasi natus minus quo,
         amet voluptatum optio adipisci ipsum voluptatem deserunt! Officiis.</p>
    </>
)
};

export default UseState