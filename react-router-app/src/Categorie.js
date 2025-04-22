import {Link, useParams} from 'react-router-dom'
export const Categories = () => {

    const categori = [ 
        {categoriId:1, name: "가전제품"},
        {categoriId:2, name: "식품"},
        {categoriId:3, name: "사무용품"}                   
    ];
       
    

    return(
        <div>
            <h2>상품 카테고리</h2>
            <ul>
                {categori.map(prod => (
                    <li style={{listStyle : "none"}} key={prod.categoriId}>
                        <Link to={`/categories/${prod.categoriId}`}>{prod.name}보기</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const Products = () => {
    const {categoriId} = useParams();

        const products = {
            1: [
                {prodId: 11,
                prodName: "선풍기"},
                {prodId: 12,
                prodName: "냉장고"},
                {prodId: 13,
                prodName: "전자레인지"},
                ],
            2: [
                {prodId: 21,
                prodName: "딸기"},
                {prodId: 22,
                prodName: "바나나"},
                {prodId: 23,
                prodName: "수박"},
                ],
            3: [
                {prodId: 31,
                prodName: "연필"},
                {prodId: 32,
                prodName: "종이"},
                {prodId: 33,
                prodName: "볼펜"},
                ]
        }
        
        const categoryProducts = products[parseInt(categoriId)];

        return(
            <div>
                 <h2>상품목록</h2>
                {categoryProducts ? (
                    <ul>
                        {categoryProducts.map(cateprod => (
                            <li key={cateprod.prodId}>
                                <Link to={`/categories/${categoriId}/products/${cateprod.prodId}`}>{cateprod.prodName} 보기</Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>해당 카테고리의 상품이 없습니다.</p>
                )}

                    </div>  
        )
    }

    export const ProductDetail = () => {
        const { prodId } = useParams();  // prodId는 문자열로 들어옵니다.
       
    
        const prod_text = {
            11 : {
                name: "선풍기",
                content: "바람이 시원합니다."
            },
            12 : {
                name: "냉장고",
                content: "음식이 많이 들어갑니다"
            },
            13 : {
                name: "전자레인지",
                content: "성능이 좋습니다"
            },
            21 : {
                name: "딸기",
                content: "새콤달콤 합니다"
            },
            22 : {
                name: "바나나",
                content: "달달하고 부드럽습니다"
            },
            23 : {
                name: "수박",
                content: "달콤하고 시원합니다"
            },
            31 : {
                name: "연필",
                content: "필기감이 좋습니다"
            },
            32 : {
                name: "종이",
                content: "잘 찢어지지 않습니다"
            },
            33 : {
                name: "볼펜",
                content: "잉크가 선명합니다"
            },
        }
    
        const prodetail = prod_text[prodId];  // 숫자로 변환된 prodId를 사용
    
        console.log("prodId:", prodId); // prodId 확인을 위한 로그 추가
        console.log("prodetail:", prodetail); // prodetail 값 확인
    
        return (
            <div>
                <h2>상품상세페이지</h2>
                {prodetail ? (
                    <>
                        <h4>상품 이름: {prodetail.name}</h4>
                        <p>상품 상세 정보: {prodetail.content}</p>
                    </>
                ) : (
                    <p>해당 상품이 없습니다.</p>
                )}
            </div>
        );
    }