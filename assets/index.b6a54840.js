import{_ as l,o as s,c as _,F as i,v as g,s as u,w as h,d as v,t as a,e as f,y as x,a as e,b as I}from"./entry.cc4037a7.js";import{u as S}from"./store.28ea6d24.js";const L={props:["categories"]},k={class:"filters items-filter"};function w(o,p,r,m,d,t){const c=f;return s(),_("div",k,[(s(!0),_(i,null,g(r.categories,n=>(s(),u(c,{to:"#"+n.toLowerCase().replace(" ","_")},{default:h(()=>[v(a(n),1)]),_:2},1032,["to"]))),256))])}const b=l(L,[["render",w]]),B={props:["productId"],setup(){const o=S();return o.loadStores(),{storeStore:o}},computed:{product(){return this.storeStore.getProduct(x().params.restaurant_id,this.productId)}}},N=["src"],C={class:"flex flex-between"},F={class:"text-grey text-small text-light"};function V(o,p,r,m,d,t){const c=f;return s(),u(c,{to:"item/"+r.productId+"/",class:"item-card",append:""},{default:h(()=>[e("img",{src:"/adam-eats/images/items/"+t.product.image},null,8,N),e("p",C,a(t.product.price),1),e("p",F,a(t.product.name),1)]),_:1},8,["to"])}const D=l(B,[["render",V]]),j={props:["category","productIdList"],data(){return{hash_slug:""}},mounted(){this.hash_slug=this.category.toLowerCase().replace(" ","_"),console.log()}},E=["id"],O={class:"item-list"};function P(o,p,r,m,d,t){const c=D;return s(),_(i,null,[e("div",{class:"item-list-title",id:d.hash_slug},a(r.category),9,E),e("div",O,[(s(!0),_(i,null,g(r.productIdList,n=>(s(),u(c,{key:n,productId:n},null,8,["productId"]))),128))])],64)}const R=l(j,[["render",P]]),T={setup(){const o=S();return o.loadStores(),{storeStore:o}},computed:{getStore(){return this.storeStore.getStoreById(x().params.restaurant_id)}}},q={class:"full-banner"},z=["src"],A={class:"padding-x padding-bottom"},G={class:"text-grey text-small text-light"},H={class:"flex"},J={class:"item-list-holder"};function K(o,p,r,m,d,t){const c=b,n=R;return s(),_("div",null,[e("div",q,[e("img",{src:"/adam-eats/images/restaurants/"+t.getStore.image},null,8,z)]),e("div",A,[e("h1",null,a(t.getStore.name),1),e("p",G,a(t.getStore.delivery_fee)+" Delivery Fee - "+a(t.getStore.delivery_window),1)]),e("div",H,[I(c,{categories:Object.keys(t.getStore.categories)},null,8,["categories"]),e("div",J,[(s(!0),_(i,null,g(t.getStore.categories,($,y)=>(s(),u(n,{category:y,productIdList:$},null,8,["category","productIdList"]))),256))])])])}const U=l(T,[["render",K]]);export{U as default};