import React, { useEffect, useState } from "react";
import axios from "axios";
const ComA = () => {
    const [num, setnum] = useState();
    const [name, setname] = useState();
    const [moves, setmoves] = useState();
    useEffect(() => {
        async function getdata() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name)
            setmoves(res.data.moves.length )
        }
        getdata();
    });

    return (
        <>
            <h1>You chose the number:{num}</h1>
            <h1 style={{color:"rebeccapurple"}}>NAME: {name} </h1>
            <h1 style={{color:"palevioletred"}}>MOVES: {moves} </h1>
            <select value={num}
                onChange={(event) => {
                    setnum(event.target.value);
                }}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>



            </select>


        </>
    );



}

export default ComA;
