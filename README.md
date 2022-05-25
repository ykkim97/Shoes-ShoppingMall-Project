# 프로젝트 소개

## 프로젝트명
신발판매 쇼핑몰사이트 개발

## 개발인원
2명

## 프로젝트 개요 및 동기
최근 웹 개발 시장에서는 바닐라JS만으로 웹 개발을 하지않고 프레임워크 혹은 라이브러리를 거의 필수적으로 사용하고 있습니다. 대표적으로 React, Vue, Angular 등이 있습니다. 웹 개발 시장에서 요구하는 웹서비스의 규모가 커지면서 보다 복잡한 웹 애플리케이션을 개발하게 되었습니다. 따라서 생산성을 향상시키고 유지보수하기 편하며 많은 양의 데이터를 관리하기 쉽도록하는 프레임워크들이 등장하게 되었습니다. 이러한 것들을 사용하면 모바일 앱처럼 부드럽게 동작하는 웹앱(Web-App)을 만들 수 있는데 모바일 앱처럼 발행하기 쉽고, 사용자에게 긍정적인  느낌을 주며, 일반적인 웹사이트보다 비즈니스적인 강점을 줄 수 있습니다. 

본 프로젝트에서는 React를 사용하여 신발 판매 쇼핑몰사이트를 제작하였습니다. 위에서 설명한 프레임워크(혹은 라이브러리)중 하나인 React는 시장에서 가장 많이 사용되고 있고 위에서 설명했다시피 많은 장점을 가지고 있기 때문에, React를 사용하게 되었습니다. 또한 쇼핑몰이라는 것은 어떻게 보면 흔하고 기본적인 웹사이트일 수 있지만 가장 실용적인 주제라고 생각했기 때문에 쇼핑몰 사이트를 제작하게 되었습니다.

## 기술 스택

- HTML
- CSS
- Bootstrap
- Javascript
- React
- Redux
- Firebase

## 구현 기능
### 메인 페이지

<img src="https://user-images.githubusercontent.com/17917009/170274217-ef862e00-3c38-43aa-9310-4b230810d49e.gif" style="text-align : center">
사용자가 처음 보게 되는 메인 페이지입니다. 메인 페이지에는 광고나 제품 이미지가 들어갈 수 있는 슬라이더 배너(캐러셀)이 위치해 있고 그 밑에는 본 쇼핑몰의 인기 상품이 배치되어 있습니다.

### 카테고리 별 페이지
<img src="https://user-images.githubusercontent.com/17917009/170276347-c347bde4-29d3-473e-a5f2-53249a1345c1.gif" style="text-align : center">
카테고리 별 등록된 상품 목록을 확인할 수 있는 페이지입니다.  남성, 여성, 키즈로 구분지었고 각각 등록된 상품의 개수가 표시됩니다. 또한 라우팅을 이용하여 페이지가 새로고침되지 않고 모바일 앱처럼 부드럽게 전환됩니다.

### 상품 상세 페이지
<img src="https://user-images.githubusercontent.com/17917009/170281897-93cc1351-dff5-4af6-a015-3be294149c44.gif">
상품을 클릭하면 그 상품의 상세정보를 확인할 수 있는 페이지로 전환됩니다. 상세 페이지에서 상품 사진을 확인할 수있고 "장바구니 담기"버튼으로 장바구니에 추가할 수 있으며 "장바구니로"버튼을 클릭하면 장바구니 페이지로 이동할 수도 있습니다.

###  장바구니 기능
<img src="https://user-images.githubusercontent.com/17917009/170284937-45a7dacb-476d-4f6d-a4ba-2dbfb423149d.gif" style="text-align : center">
상세 페이지에서 "장바구니 담기" 버튼을 클릭하면 장바구니에 상품이 담기게 됩니다. 장바구니 페이지에서는 결제 전 장바구니에 등록된 상품을 확인하고 수량을 조절하고 필요하지 않은 경우 삭제할 수 있습니다. 또한 총 결제가격도 보여줍니다.

### 최근 본 상품 확인하기
<img src="https://user-images.githubusercontent.com/17917009/170285112-07e8558e-4144-4c0d-a86e-82aa33af694a.gif" style="text-align : center">
페이지 상단의 "최근 본 상품"탭을 클릭하면 최근 본 상품의 기록을 확인할 수 있는 페이지로 전환됩니다.

## 부족한 기능 & 추가적으로 필요한 기능

Firebase를 이용하여 계정을 생성하고, 로그인할 수 있도록 하는 것까지는 개발을 완료했다. 하지만 Firebase Database와 이 프로젝트를 연동하는데 있어서 내가 잘 알지 못하는 오류가 많이 발생하여 아직 개발을 완료하지 못했던 부분이 있다. 최근 본 상품 기능의 경우, 로그인한 사용자 계정마다 각기 다른 상품이 출력되도록 해야하는데 완료하지 못했고, 장바구니 기능도 마찬가지로, 계정마다 다른 장바구니를 사용해야하는데 아직 완료하지 못했다. 이 부분들은 계속해서 수정해나갈 것이다.

## 느낀점
처음에는 그냥 단순히 쇼핑몰을 만들어보는 것이 맞는지 많이 고민했다. 하지만 실제로 만들어보니 고려해야 할 점이 한두가지가 아니었던 것 같다. 혼자 구글 검색도 해보고 유튜브 영상도 찾아보면서 이론을 공부했을 때는 이해하는데 큰 어려움이 없었는데 막상 이러한 프로젝트를 개발해보니 너무 쉽게 생각했던 것 같다. 또한 오류가 발생하여 코드를 수정해야할 때가 있었는데 내가 짠 코드를 다시 살펴봤을 때 순간 이해가 힘들었던 적이 있었다. 물론 최대한 이해하기 쉽고 가독성을 높이도록 코드를 수정하긴 했지만 다음부터는 깔끔한 코드를 작성할 수 있도록 주의를 기울여야겠다.
