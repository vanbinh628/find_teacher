import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';


const API_USER_URL = 'https://mocki.io/v1/b646795d-8f72-4cb1-a82d-b97ea555fb2e'

async function printLog(name) {
    await console.log('start function ' + name);

    for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('await ' + i)
    }


    await console.log('end function ' + name);

}

async function Count() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('await ' + i);
        count = count + 1;
    }
   return count;

}

async function printResult(){
    console.log('start fuction');

    var valueCount = await Count();

    console.log(valueCount);
    console.log('end fuction');
}

async function fetchUserInfor () {
    let result = await fetch(API_USER_URL, {
        method: 'GET',
        headers: {
            'Content-Type':'applicaiton/json',
    }
    });
    const json = await result.json();
    console.log(json);
    return json;
}


const batdongbo = () => {

    fetchUserInfor();
    console.log('end app')

    return (
        <View>
            <Text>abc</Text>
        </View>
    )
}

export default batdongbo;





// const count = true;
//     let countValue = new Promise(function (resolve, reject) {
//         if (count) {
//             resolve("Promise resolved");
//         } else {
//             reject("There is no count value");
//         }
//     });

//     // executes when promise is resolved successfully

//     countValue
//         .then(resolve = (result) => {
//             console.log(result);
//         })
//         .catch(reject = (result) => {
//             console.log(result);
//         });