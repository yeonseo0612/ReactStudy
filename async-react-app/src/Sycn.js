//동기처리
//한 번에 하나의 작업만 처리되며, 작업이 완료될 때까지 다음 작업을 진행할 수 없다.
export const Sync = () => {

    const performHeavyTask = () => {
        for(let i=0; i < 5; i++){
                console.log(`${i}번째 작업시작`)
        }
    }
    console.log('첫번째 작업 시작'
       
    )
    performHeavyTask();
    console.log("다음 작업 시작")

}


export const Async = () => {
    console.log('첫 번째 작업 시작')
    setTimeout(() => {
        console.log('첫번째 작업 완료')
    },2000);
    console.log('다음 작업 진행')


    
}

// 콜백함수
// function fetchData(callback){
//     setTimeout(() => {

//         const data = "서버에서 받는 데이터"
//         callback(data);

//     },2000)

//     console.log('API 요청 시작')
//     fetchData((result) => {
//         console.log('API 응답 : ', result);

//     });
//     console.log('다음 작업 진행');
// }

// //Promise객체
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             if (success) {
//                 resolve('데이터 받아옴');
//             } else {
//                 reject('통신 실패');
//             }
//         }, 2000);
//     });
// };

// console.log('API 요청 시작');

// fetchData()
//     .then(data => {
//         console.log('API 응답:', data);
//     })
//     .catch(error => {
//         console.log('에러 발생:', error);
//     });

//비동기 함수 생성

// const fetchData = async () => {
//     return '데이터'
// }

// const p = fetchData()
// console.log(p)

// fetchData()
//     .then(data => console.log(data))
// // 문자열을 반환하는 것처럼 보이지만 실제로는 Promise객체를 반환한다.

// //await
// const fetchData = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('데이터 받아옴')
//         }, 2000);
//     });
// }

// const getData = async() => {
//     console.log('API 요청 시작');
//     const data = await fetchData();
//     console.log('API 응답 : ' ,  data);
//     console.log('다음작업 진행');
// }

// console.log('함수 밖 진행전')
// getData();
// console.log('함수 밖 진행후')