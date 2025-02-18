// promise syntax
// new Promise(resolve,reject) =>{
// }
/*function promiseEg(value){
    return new Promise((resolve,reject)=>{ //resolve and reject are anonymous functions passed as attribute to another fn. (CALLBACK FUNCTION)
        setTimeout(() => {
            if(value) resolve("Promise resolved");
            else reject("Rejected due to insuffiecient data")
        }, 5000);
    })
}
// console.log(promiseEg(true))
promiseEg(false).then((res)=>{
    console.log(res);
}).catch((res)=>{
    console.log(res);
})*/

//Location finder
//1. Promise(LocFound,LocNotFound)
//2. Chennai, 10000

isLocationFound=(loc,time)=>{
    location="Chennai"
    t=2000
    if(loc===location && t<=time) return true;
    else return false;
}
function locationFinder(loc,time){
    var loc= new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(isLocationFound(loc,time)) resolve("Location found: chennai")
            else reject(loc+" Location not found")
        }, time);
    })
    loc.then((resolve)=>{
        console.log(resolve);
    }).catch((reject)=>{
        console.log(reject);
    })
}
locationFinder("Chennai",1000);
async function postcode(){
    var post=new Promise((accept,reject)=>{
        setTimeout(()=>{
            accept("Executed Successfully");
        },5000)
    })
    console.log(await post);//await is used to wait until the promise run successfully or you get promise pending
}
postcode();
