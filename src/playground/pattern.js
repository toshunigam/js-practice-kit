function pattern(n){
    // *
    // **
    // ***
    // ****
    for(let i=0; i<n;i++){
        let identity = ''
        for(let j=0;j<=i;j++){
            identity += '*'
        }
        console.log(identity)
     
    }
}
// pattern(4)

function patternA(n){
// ****
// ****
// ****
// ****
    for(let i=0; i<n; i++){
        let identity = '';
        for(let j=0; j<n; j++){
            identity += '*'
        }
        console.log(identity)
    }
}
// patternA(4)

function patternB(n){
// ****
// ***
// **
// *
    for(let i=0; i<n;i++){
        let identity = ''
        for(let j=n;j>i;j--){
            identity += '*'
        }
        console.log(identity)
     
    }
}
// patternB(4)

function patternC(n){
//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 
    for(let i=n; i>n; i--){
        let identity = '';
        for(let j=i; j<n; j--){
            identity += '*'
        }
        console.log(identity)
    }
}
patternC(5)