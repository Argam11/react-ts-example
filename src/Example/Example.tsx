import {useEffect, useState} from "react";
import {getMyName} from "./asd";

import {useTranslation} from "react-i18next";

import {t} from "../i18next";

const obj = {
    m: t("key"),
};

function foo() {
    console.log(555, obj.m);
}

interface ExampleProps<T> {
    title?: T;
    value: string;
    onChange?: (v: any) => void;
}

// console.log('Handle', Handle.toString())

const Example = <T extends number>({onChange, value}: ExampleProps<T>) => {
    const {t} = useTranslation();


    useEffect(() => {
        foo();
    });

    return <div>{t("key11")}
        <input type="text" value={value} onChange={(e) => {


            console.log(e)
        }} />
        <button onClick={() => onChange('')}>Click
        </button>
    </div>;
};

export default Example;
