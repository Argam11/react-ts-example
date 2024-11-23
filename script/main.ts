// import { getMyName } from "../src/Example/asd";
//
// console.log(11, getMyName("ppp"));

import feeders from '../src/widget-feeders';

Object.entries(feeders).forEach(([key, feeder]) => {
    console.log(key, feeder.config.defaultVariantsStyles);


});



