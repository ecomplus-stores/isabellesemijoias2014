(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{403:function(e,a,t){"use strict";t.r(a);t(34);var n=t(102),c=t(53),r=t(40);a.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{compreConfieStoreId:a}=e;if(a){const e=window.storefrontApp&&window.storefrontApp.router;if(e){const t=e=>{let{name:t,params:o}=e;if("confirmation"===t&&o.json){let e;const t=decodeURIComponent(o.json);if(t)try{e=JSON.parse(t)}catch(e){}if(e){const t=r.a.getCustomer(),o=e.transactions&&e.transactions[0],i=o&&o.payer,s=Object(n.a)(t),d=new Date;let l="orderSellerID=".concat(a)+"&orderTotalSpent=".concat(e.amount.total)+"&orderDeliveryTax=".concat(e.amount.freight||0)+"&orderID=".concat(e.number||e._id)+"&consumerEmail=".concat(t.main_email)+"&billingEmail=".concat(t.main_email)+"&consumerName=".concat(encodeURIComponent(s))+"&orderDate=".concat(d.getFullYear(),"-").concat(d.getMonth()+1,"-").concat(d.getDate());if("m"===t.gender?l+="&consumerGender=Masculino&billingGender=Masculino":"f"===t.gender&&(l+="&consumerGender=Feminino&billingGender=Feminino"),"p"===t.registry_type&&t.doc_number&&(l+="&consumerCPF=".concat(t.doc_number)+"&billingCPF=".concat(i&&i.doc_number||t.doc_number)),t.birth_date){const{day:e,month:a,year:n}=t.birth_date;l+="&consumerBirthDate=".concat(e.toString().padStart(2,"0"))+"/".concat(a.toString().padStart(2,"0"),"/").concat(n)}navigator&&navigator.userAgent.includes("Mobile")?l+="&orderPlatform=1":l+="&orderPlatform=0";const{items:m}=e;if(m&&m.length){let e=m[0].sku,a=Object(c.a)(m[0]),t=m[0].quantity,n=encodeURIComponent(m[0].name),r="0";for(let o=1;o<m.length;o++)e+="|".concat(m[o].sku),a+="|".concat(Object(c.a)(m[o])),t+="|".concat(m[o].quantity),n+="|".concat(encodeURIComponent(m[o].name)),r+="|0";l+="&productSKU=".concat(e,"&productValue=").concat(a,"&productQuantity=").concat(t)+"&ProductName=".concat(n,"&ProductMktSaleID=").concat(r)}if(e.shipping_lines&&e.shipping_lines[0]){const a=e.shipping_lines[0];if(a.app&&a.app.label)switch(l+="&orderDeliveryType=",a.app.label.toLowerCase()){case"pac":l+="0";break;case"sedex":l+="1";break;case"retirar na loja":l+="3";break;default:l+="4"}a.delivery_time&&a.delivery_time.days&&(l+="&orderDeliveryTime=".concat(a.delivery_time.days)+"&productDeliveryTime=".concat(a.delivery_time.days)),l+="&consumerZipcode=".concat(a.to.zip)+"&billingZipcode=".concat(a.to.zip)}if(o){if(o.app&&o.app.intermediator&&o.app.intermediator.code)switch(l+="&orderPartnerPayment=",o.app.intermediator.code.toLowerCase()){case"mercadopago":l+="1";break;case"paypal":l+="2";break;case"pagseguro":l+="4";break;case"pagarme":l+="7";break;case"wirecard":l+="8";break;case"vindi":l+="12";break;default:l+="17"}switch(l+="&billingName=".concat(encodeURIComponent(i&&i.fullname||s)),l+="&orderParcels=".concat(o.installments&&o.installments.number||1),l+="&orderPaymentType=",o.payment_method.code){case"credit_card":l+="1";break;case"banking_billet":l+="2";break;case"debit_card":case"online_debit":l+="9";break;case"account_deposit":l+="6";break;case"loyalty_points":l+="8";break;default:l+="3"}if(o.credit_card&&o.credit_card.company)switch(l+="&orderCardFlag=",o.credit_card.company.toLowerCase()){case"visa":l+=3;break;case"mastercard":l+=2;break;case"american express":case"amex":l+=5;break;case"elo":l+=8;break;case"aura":l+=7;break;case"hipercard":l+=6;break;case"diners club":l+=1;break;default:l+=9}}const p=setInterval((()=>{const e=document.getElementById("confirmation");if(e){e.insertAdjacentHTML("beforeend",'<a id="bannerEconfy"></a> <param id="TagEConfy" value="'.concat(l,'">'));const t=document.createElement("script");t.id="getData",t.type="text/javascript",t.src="https://banner.compreconfie.com.br/scripts/tagBanner.min.js"+"?".concat(a,"&lightbox=true"),document.body.appendChild(t),clearInterval(p)}}),200)}}};e.currentRoute&&t(e.currentRoute),e.afterEach(t)}}else console.error(new Error("Can't show lightbox without `compreConfieStoreId` option"))}}}]);