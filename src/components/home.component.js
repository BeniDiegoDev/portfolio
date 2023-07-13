import React from "react";
import LeftComponent from "./left.component";
import RightComponent from "./right.component";

export default function HomeComponent() {
    return (
        <div className="section-home" id="section1">
            <div className="section-content-home">
                <LeftComponent/>
                <RightComponent/>
            </div>
        </div>
    );
}
