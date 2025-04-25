import { useEffect, useState } from "react";

export const MyPromiseComponent = () => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            console.log(typeof resolve); // function
            console.log(typeof reject);  // function
            resolve('완료');
        });

        promise
            .then(value => {
                console.log('Promise fullfilled with : ', value);
                setResult(value); // 값을 상태에 저장
            })
            .catch(error => {
                console.log('Promise rejected with :', error);
                setResult('오류 발생');
            });
    }, []);

    return (
        <div>
            <h2>Promise 결과</h2>
            <p>Promise 결과 : {result || '로딩 중'}</p>
        </div>
    );
};
