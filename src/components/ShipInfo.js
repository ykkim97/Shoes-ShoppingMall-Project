import React from "react";
import "./ShipInfo.css";

//배송/교환/반품 안내 탭
function ShipInfo() {
    return (
        <div className="shipInfo-div">
            <h5 className="shipInfo-title">배송정보</h5>
            <table className="table-frame">
                <colgroup>
                    <col width="15%" />
                    <col width="35%" />
                    <col width="15%" />
                    <col width="35%" />
                </colgroup>

                <tr>
                    <td>배송방법</td>
                    <td>순차배송</td>
                    <td rowSpan="2">배송비</td>
                    <td rowSpan="2">
                        무료배송<br />
                        - 로켓배송 상품 중 19,800원 이상 구매 시 무료배송<br />
                        - 도서산간 지역 추가비용 없음
                    </td>
                </tr>
                <tr>
                    <td>묶음배송 여부</td>
                    <td>가능</td>
                </tr>
                <tr>
                    <td>배송기간</td>
                    <td colSpan="3">
                        ㆍ배송 지역 : 주문 및 결제 완료 후, 1-2일 이내 도착<br />
                        ㆍ이외 지역 : 주문 및 결제 완료 후, 2-3일 이내 도착<br />
                        - 도서 산간 지역 등은 하루가 더 소요될 수 있습니다.
                    </td>
                    
                </tr>
            </table>
            
            <div className="exchange-div">
                <h5 className="exchange-title">교환/반품 안내</h5>
                <table className="table-frame">
                    <colgroup>
                        <col width="20%" />
                        <col width="80%" />
                    </colgroup>
                    <tr>
                        <td>교환/반품 비용</td>
                        <td>0원
                            - 단, 고객 변심의 경우에만 발생
                            - 부분반품 시, 남은금액이 무료배송 조건을 유지하면 일부 반품비용이 부과
                        </td>
                    </tr>
                    <tr>
                        <td>교환/반품 신청 기준일</td>
                        <td>ㆍ단순변심에 의한 상품의 교환/반품은 제품 수령 후 30일 이내까지, 교환/반품 제한사항에 해당하지 않는 경우에만 가능<br/> (교환/반품 비용 고객부담)<br/>
                            ㆍ상품의 내용이 표시·광고의 내용과 다른 경우에는 상품을 수령한 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터<br/>
                            30일 이내에 청약철회 가능
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ShipInfo;