let fromCurrency = "USD";
let toCurrency = "USD";
let currencyRatioArray;
let currencyRatio = 1;

function convert(){
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio;
// 소수점 자리수
    document.getElementById("to-input").value = convertedAmount.toFixed(2);
    document.getElementById("result-quote").textContent = convertedAmount.toFixed(2);
// 숫자 콤마
    document.getElementById("to-input").value = convertedAmount.toLocaleString();
    document.getElementById("result-base").textContent = amount;
    document.getElementById("result-quote").textContent = convertedAmount.toLocaleString();
    document.getElementById("currency-base").textContent = fromCurrency;
    document.getElementById("currency-quote").textContent = toCurrency;
// 환율정보
    document.getElementById("curr1").textContent = fromCurrency;
    document.getElementById("curr2").textContent = toCurrency;
    document.getElementById("rate").textContent = currencyRatio.toFixed(2);
    document.getElementById("rate").textContent = currencyRatio.toLocaleString();
    document.getElementById("curr3").textContent = toCurrency;

// 숫자 자리수 늘어날 때 폰트 사이즈 연동
    let result1 = document.getElementById("result-base").textContent
    let result2 = document.getElementById("result-quote").textContent

    if(amount.length > 9 || result2.length >12){
        document.getElementById("result-base").classList.add("text-size-small")
        document.getElementById("result-quote").classList.add("text-size-small")
        document.getElementById("currency-base").classList.add("text-size-small")
        document.getElementById("currency-quote").classList.add("text-size-small")
        document.getElementById("equal").classList.add("text-size-small")
    } else if (amount.length <= 9 || result.length <= 12){
        document.getElementById("result-base").classList.remove("text-size-small")
        document.getElementById("result-quote").classList.remove("text-size-small")
        document.getElementById("currency-base").classList.remove("text-size-small")
        document.getElementById("currency-quote").classList.remove("text-size-small")
        document.getElementById("equal").classList.remove("text-size-small")
    }

// 베이스커런시 기본값 (백스페이스로 다 지웠을 때 0)
    if(result1.length == 0){
        document.getElementById("result-base").textContent = "0";
    }
}

// 타임존
// $.ajax({
//     method: "GET",
//     url: "https://api.currencyapi.com/v3/latest?apikey=cur_live_HhdAsPb9LmIR64TZ0VlqFW0fQjUfKbwNXGv6Syky",
//     data: { base_currency: fromCurrency, currencies : toCurrency }

// }).done(function (msg) {
//     let timeZone = msg.meta.last_updated_at;
//     document.getElementById("timeZone").innerText = timeZone;
// });
// 환율 메뉴 리스트 배열
let nationTop=[
    {id: 0, unit: "USD", flag: "data/flags/USD.png"},
    {id: 1, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 2, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 3, unit: "USD", flag: "data/flags/USD.png"},
    {id: 4, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 5, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 6, unit: "USD", flag: "data/flags/USD.png"},
    {id: 7, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 8, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 9, unit: "USD", flag: "data/flags/USD.png"}
]

let nation=[
    {id: 0, unit: "USD", flag: "data/flags/USD.png"},
    {id: 1, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 2, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 3, unit: "USD", flag: "data/flags/USD.png"},
    {id: 4, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 5, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 6, unit: "USD", flag: "data/flags/USD.png"},
    {id: 7, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 8, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 9, unit: "USD", flag: "data/flags/USD.png"},
    {id: 10, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 11, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 12, unit: "USD", flag: "data/flags/USD.png"},
    {id: 13, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 14, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 15, unit: "USD", flag: "data/flags/USD.png"},
    {id: 16, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 17, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 18, unit: "USD", flag: "data/flags/USD.png"},
    {id: 19, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 20, unit: "USD", flag: "data/flags/USD.png"},
    {id: 21, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 22, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 23, unit: "USD", flag: "data/flags/USD.png"},
    {id: 24, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 25, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 26, unit: "USD", flag: "data/flags/USD.png"},
    {id: 27, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 28, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 29, unit: "USD", flag: "data/flags/USD.png"},
    {id: 30, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 31, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 32, unit: "USD", flag: "data/flags/USD.png"},
    {id: 33, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 34, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 35, unit: "USD", flag: "data/flags/USD.png"},
    {id: 36, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 37, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 38, unit: "USD", flag: "data/flags/USD.png"},
    {id: 39, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 40, unit: "USD", flag: "data/flags/USD.png"},
    {id: 41, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 42, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 43, unit: "USD", flag: "data/flags/USD.png"},
    {id: 44, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 45, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 46, unit: "USD", flag: "data/flags/USD.png"},
    {id: 47, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 48, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 49, unit: "USD", flag: "data/flags/USD.png"}
]
// 환율 메뉴 구성 from
nationTop.forEach((data) => {
    const dropdownMenu = `
      <div class="dropdown-menu from-currency-list">
          <img src="${data.flag}" alt="">
          <a href="#">${data.unit}</a>
      </div>
      `;
    document
      .querySelector("#from-container-list1")
      .insertAdjacentHTML("beforeend", dropdownMenu);
  });
nation.forEach((data) => {
  const dropdownMenu = `
    <div class="dropdown-menu from-currency-list">
        <img src="${data.flag}" alt="">
        <a href="#">${data.unit}</a>
    </div>
    `;
  document
    .querySelector("#from-container-list2")
    .insertAdjacentHTML("beforeend", dropdownMenu);
});
// 환율 메뉴 구성 to
nationTop.forEach((data) => {
    const dropdownMenu = `
      <div class="dropdown-menu to-currency-list">
          <img src="${data.flag}" alt="">
          <a href="#">${data.unit}</a>
      </div>
      `;
    document
      .querySelector("#to-container-list1")
      .insertAdjacentHTML("beforeend", dropdownMenu);
  });
nation.forEach((data) => {
  const dropdownMenu = `
    <div class="dropdown-menu to-currency-list">
        <img src="${data.flag}" alt="">
        <a href="#">${data.unit}</a>
    </div>
    `;
  document
    .querySelector("#to-container-list2")
    .insertAdjacentHTML("beforeend", dropdownMenu);
});
// 환율 메뉴 클릭 시 메뉴 정보 변경 기능 from
document.querySelectorAll(".from-currency-list").forEach((menu)=>
    menu.addEventListener("click", function(){
        document.getElementById("from-button-text").textContent = this.textContent;
        document.getElementById("from-button-img").src = this.childNodes[1].src;
        fromCurrency = this.textContent;
        

        $.ajax({
            method: "GET",
            url: "https://api.currencyapi.com/v3/latest?apikey=cur_live_HhdAsPb9LmIR64TZ0VlqFW0fQjUfKbwNXGv6Syky",
            data: { base_currency: fromCurrency, currencies : toCurrency }
      
        }).done(function (msg) {
            // 객체를 배열로 변환
            currencyRatioArray = Object.values(msg.data);
            currencyRatio = currencyRatioArray[0].value;
            convert();
        });
    })
);
// 환율 메뉴 클릭 시 메뉴 정보 변경 기능 to
document.querySelectorAll(".to-currency-list").forEach((menu)=>
    menu.addEventListener("click", function(){
        document.getElementById("to-button-text").textContent = this.textContent;
        document.getElementById("to-button-img").src = this.childNodes[1].src;
        toCurrency = this.textContent;
        
        $.ajax({
            method: "GET",
            url: "https://api.currencyapi.com/v3/latest?apikey=cur_live_HhdAsPb9LmIR64TZ0VlqFW0fQjUfKbwNXGv6Syky",
            data: { base_currency: fromCurrency, currencies : toCurrency }

        }).done(function (msg) {
        //   객체를 배열로 변환
          currencyRatioArray = Object.values(msg.data);
          currencyRatio = currencyRatioArray[0].value;
          convert();
        });
})
);


// 드랍다운 메뉴 팝업 관련 기능
const toggleDropdown1 = function(){
    document.querySelector("#from-container").classList.toggle("show");
    document.querySelector("#arrow1").classList.toggle("arrow");
    }
    document.querySelector("#from-dropdown").addEventListener("click", function(e){
        e.stopPropagation();
        toggleDropdown1();
        document.querySelector("#to-container").classList.remove("show");
        document.querySelector("#arrow2").classList.remove("arrow");
    });
const toggleDropdown2 = function(){
    document.querySelector("#to-container").classList.toggle("show");
    document.querySelector("#arrow2").classList.toggle("arrow");
    }
    document.querySelector("#to-dropdown").addEventListener("click", function(e){
        e.stopPropagation();
        toggleDropdown2();
        document.querySelector("#from-container").classList.remove("show");
        document.querySelector("#arrow1").classList.remove("arrow");

    });
document.documentElement.addEventListener("click", function(){
    if(document.querySelector("#from-container").classList.contains("show")){
        toggleDropdown1();
    }
    if(document.querySelector("#to-container").classList.contains("show")){
        toggleDropdown2();
    }
});

document.getElementById("to-input").readOnly = true;



//인풋을 텍스트타입으로 하면서 숫자만 입력 + (마이너스, 소수점, 콤마 제어)
function numberFormat(val, isMinus, isFloat, isComma){
    var str = val;
    //일단 마이너스, 소수점을 제외한 문자열 모두 제거
    str = str.replace(/[^-\.0-9]/g, '');
    //마이너스
    if(isMinus){
       str = chgMinusFormat(str);   
    } else {
       str = str.replace('-','');
    }
    
    //소수점
    if(isFloat){
       str = chgFloatFormat(str);       
    } else {
       if(!isMinus ){
          str = str.replace('-','');
       }
       str = str.replace('.','');
       if(str.length>1){
          str = Math.floor(str);
          str = String(str);
       }
    }
    
    //콤마처리
    if(isComma){
       var parts = str.toString().split('.');
       if(str.substring(str.length - 1, str.length)=='.'){
          str = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",") +".";
       } else {
          str = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",") + (parts[1] ? "." + parts[1] : "");
       }
    }
  
    return str;
  }
  
  function chgFloatFormat(str){
    var idx = str.indexOf('.');  
    if(idx<0){  
       return str;
    } else if(idx>0){
       var tmpStr = str.substr(idx+1);    
       if(tmpStr.length>1){             
          if(tmpStr.indexOf('.')>=0){        
             tmpStr =  tmpStr.replace(/[^\d]+/g, '');                  
             str = str.substr(0,idx+1) + tmpStr;
          }
       }    
    } else if(idx==0){
          str = '0'+str;
    }
    return str;  
  }
    
  function chgMinusFormat(str){
    var idx = str.indexOf('-');
    if(idx==0){
    var tmpStr = str.substr(idx+1);
       //뒤에 마이너스가 또 있는지 확인
       if(tmpStr.indexOf('-')>=0){
             tmpStr = tmpStr.replace('-','');
          str = str.substr(0,idx+1) + tmpStr;  
       }
    } else if(idx>0){
          str = str.replace('-','');
    } else if(idx<0){
          return str;
    }
       return str;
  }