const input = document.querySelector('input')
let inputData = '';
let counter = 0;

input.addEventListener('keyup',(e)=>{
    inputData+=e.key
})

fetchData = () => {
    counter++
    console.log('fetching Data for', inputData);
}


optimlaNetworkCalls = (fetchFunction, delay) => {
    let timer;
    return function () {
        let context = this
        args = arguments
        // lets suppose ten key press events are there
        // so for each ten strokes ten function will be returned, if timer is not cleared
        //so we need to clear every timer created in <300 msec. 
        clearTimeout(timer)
        timer = setTimeout(() => {
            fetchFunction.apply(context,arguments)
        }, delay);
    }
}

fetchOptimalData = optimlaNetworkCalls(fetchData, 300)