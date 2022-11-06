import React from "react";

export default function Section(props) {
    return (
        <div>
            <div className="w-60 mx-auto mt-5">
                <select name="teams" className="w-full border-2 border-emerald-500 rounded-md font-medium h-10 outline-none indent-5" value={props.values} onChange={props.selectChange}>
                    <option value="TeamA">Team A</option>
                    <option value="TeamB">Team B</option>
                    <option value="TeamC">Team C</option>
                    <option value="TeamD">Team D</option>
                </select>
            </div>
            <main className="container mx-auto grid grid-flow-row md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 md:grid-rows-9 gap-y-3 p-5 place-items-center ">
                {props.array.map((arrays) => {
                    return (
                        <div className="w-60 p-5 bg-emerald-50 rounded-lg border items-center flex justify-center flex-col space-y-2" key={arrays.id}>
                            <img src={arrays.gender === 'male' ? '../image/images.png' : '../image/download.png'} alt="" className="w-32 rounded-full" />
                            <h3 className="font-medium text-lg">NAME : {arrays.fullName}</h3>
                            <p className="">{arrays.designation}</p>
                            <button type="button" className={arrays.teamName == props.values ? 'tracking-widest w-full h-10 rounded-lg bg-emerald-500 font-bold text-lg text-white' : 'tracking-widest w-full h-10 rounded-lg bg-stone-200 font-bold text-lg'} onClick={props.clickingBtn} id={arrays.id}>{arrays.teamName == props.values ? 'SELECTED' : 'SELECT'}</button>
                        </div>
                    )
                }
                )}
            </main>
        </div>
    )
}