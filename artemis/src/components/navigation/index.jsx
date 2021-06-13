import React from 'react';
import { TopHeader } from "./TopHeader"
import { LeftMenu } from "./LeftMenu"

export function Navigation(){
    return (
        <React.Fragment>
            <LeftMenu />
            <TopHeader />
        </React.Fragment>
    )
}