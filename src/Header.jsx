import React from "react";

export default function Header(props) {
    return (
        <div className="container-xl bg-emerald-600 mx-auto space-y-1 p-3">
            <p className="font-semibold text-center text-2xl">{props.values} has <span className="text-emerald-200">'{props.lengthofMember.length}'</span> {props.lengthofMember.length > 1 ? 'members' : 'member'}</p>
        </div>
    )
}