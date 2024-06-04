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
    {id: 1, unit: "EUR", flag: "data/flags/EUR.png"},
    {id: 2, unit: "CNY", flag: "data/flags/CNY.png"},
    {id: 3, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 4, unit: "GBP", flag: "data/flags/GBP.png"},
    {id: 5, unit: "HKD", flag: "data/flags/HKD.png"},
    {id: 6, unit: "AUD", flag: "data/flags/AUD.png"},
    {id: 7, unit: "INR", flag: "data/flags/INR.png"},
    {id: 8, unit: "SGD", flag: "data/flags/SGD.png"},
    {id: 9, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 10, unit: "CHF", flag: "data/flags/CHF.png"},
    {id: 11, unit: "RUB", flag: "data/flags/RUB.png"},
    {id: 12, unit: "BRL", flag: "data/flags/BRL.png"},
    {id: 13, unit: "CAD", flag: "data/flags/CAD.png"},
    {id: 14, unit: "MXN", flag: "data/flags/MXN.png"},
    {id: 14, unit: "VND", flag: "data/flags/VND.png"}
]

let nation=[
    {id: 0, unit: "AED", flag: "data/flags/AED.png"},
    {id: 1, unit: "ARS", flag: "data/flags/ARS.png"},
    {id: 2, unit: "AUD", flag: "data/flags/AUD.png"},
    {id: 3, unit: "AZN", flag: "data/flags/AZN.png"},
    {id: 4, unit: "BDT", flag: "data/flags/BDT.png"},
    {id: 5, unit: "BRL", flag: "data/flags/BRL.png"},
    {id: 6, unit: "CAD", flag: "data/flags/CAD.png"},
    {id: 7, unit: "CHF", flag: "data/flags/CHF.png"},
    {id: 8, unit: "CLP", flag: "data/flags/CLP.png"},
    {id: 9, unit: "CNY", flag: "data/flags/CNY.png"},
    {id: 10, unit: "CZK", flag: "data/flags/CZK.png"},
    {id: 11, unit: "DKK", flag: "data/flags/DKK.png"},
    {id: 12, unit: "DZD", flag: "data/flags/DZD.png"},
    {id: 13, unit: "EGP", flag: "data/flags/EGP.png"},
    {id: 14, unit: "ETB", flag: "data/flags/ETB.png"},
    {id: 15, unit: "EUR", flag: "data/flags/EUR.png"},
    {id: 16, unit: "GBP", flag: "data/flags/GBP.png"},
    {id: 17, unit: "GHS", flag: "data/flags/GHS.png"},
    {id: 18, unit: "HKD", flag: "data/flags/HKD.png"},
    {id: 19, unit: "HRK", flag: "data/flags/HRK.png"},
    {id: 20, unit: "HUF", flag: "data/flags/HUF.png"},
    {id: 21, unit: "IDR", flag: "data/flags/IDR.png"},
    {id: 22, unit: "ILS", flag: "data/flags/ILS.png"},
    {id: 23, unit: "INR", flag: "data/flags/INR.png"},
    {id: 24, unit: "IQD", flag: "data/flags/IQD.png"},
    {id: 25, unit: "IRR", flag: "data/flags/IRR.png"},
    {id: 26, unit: "ISK", flag: "data/flags/ISK.png"},
    {id: 27, unit: "JOD", flag: "data/flags/JOD.png"},
    {id: 28, unit: "JPY", flag: "data/flags/JPY.png"},
    {id: 29, unit: "KES", flag: "data/flags/KES.png"},
    {id: 30, unit: "KHR", flag: "data/flags/KHR.png"},
    {id: 31, unit: "KRW", flag: "data/flags/KRW.png"},
    {id: 32, unit: "LAK", flag: "data/flags/LAK.png"},
    {id: 33, unit: "LYD", flag: "data/flags/LYD.png"},
    {id: 34, unit: "MAD", flag: "data/flags/MAD.png"},
    {id: 35, unit: "MNT", flag: "data/flags/MNT.png"},
    {id: 36, unit: "MOP", flag: "data/flags/MOP.png"},
    {id: 37, unit: "MVR", flag: "data/flags/MVR.png"},
    {id: 38, unit: "MXN", flag: "data/flags/MXN.png"},
    {id: 39, unit: "MYR", flag: "data/flags/MYR.png"},
    {id: 40, unit: "NGN", flag: "data/flags/NGN.png"},
    {id: 41, unit: "NOK", flag: "data/flags/NOK.png"},
    {id: 42, unit: "NPR", flag: "data/flags/NPR.png"},
    {id: 43, unit: "NZD", flag: "data/flags/NZD.png"},
    {id: 44, unit: "PEN", flag: "data/flags/PEN.png"},
    {id: 45, unit: "PHP", flag: "data/flags/PHP.png"},
    {id: 46, unit: "PKR", flag: "data/flags/PKR.png"},
    {id: 47, unit: "PLN", flag: "data/flags/PLN.png"},
    {id: 48, unit: "QAR", flag: "data/flags/QAR.png"},
    {id: 49, unit: "RON", flag: "data/flags/RON.png"},
    {id: 50, unit: "RUB", flag: "data/flags/RUB.png"},
    {id: 51, unit: "SAR", flag: "data/flags/SAR.png"},
    {id: 52, unit: "SEK", flag: "data/flags/SEK.png"},
    {id: 53, unit: "SGD", flag: "data/flags/SGD.png"},
    {id: 54, unit: "THB", flag: "data/flags/THB.png"},
    {id: 55, unit: "TRY", flag: "data/flags/TRY.png"},
    {id: 56, unit: "TWD", flag: "data/flags/TWD.png"},
    {id: 57, unit: "USD", flag: "data/flags/USD.png"},
    {id: 58, unit: "VND", flag: "data/flags/VND.png"},
    {id: 59, unit: "ZAR", flag: "data/flags/ZAR.png"}
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