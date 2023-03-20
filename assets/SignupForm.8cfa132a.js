import{_ as g}from"./UiButton.9479e401.js";import{r as p,p as b,q as f,d as y,i as n,s as h,v as _,j as x,w as S,x as v,y as w,b as F,k as C,t as I}from"./vendor-vue.398eccbf.js";import{_ as V}from"./vite.c27b6911.js";const E={name:"SignupForm",props:{buttonLabel:{type:String,default:"Submit"},placeholder:{type:String,default:"Enter your email..."},name:{type:String,required:!0},siteId:{type:String,default:""}},setup(o){const i=o==null?void 0:o.siteId,a=p(""),e=b(()=>({data:{email:a.value,siteId:i}})),l={immediate:!1},{execute:d,error:s,isFetching:t,onFetchError:c,onFetchResponse:m}=f("https://us-west2-mixo-app.cloudfunctions.net/signup",l).post(e).json(),u=()=>{if(!i){console.error("[SignupForm] Missing siteId"),alert("⚠️ You can only submit an email once your site is published. Please publish first and try again.");return}d()};return m(r=>{console.log(r.status),alert("Success! We'll be in touch soon!"),a.value=""}),c(r=>{console.error(r.message),alert("😮 Sorry we couldn't add your email due to a technical error. Please try again.")}),{email:a,onSubmit:u,isFetching:t,error:s}}},k=["for"],B=["id","placeholder","disabled","onChange","onInvalid"];function q(o,i,a,e,l,d){const s=g;return F(),y("form",{class:v(["grid gap-2 grid-cols-1 sm:w-full sm:flex sm:items-center sm:flex-wrap",{"opacity-50":e.isFetching}]),onSubmit:i[1]||(i[1]=w((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"]))},[n("label",{for:`${a.name}-email`,class:"sr-only"},"Email address",8,k),h(n("input",{id:`${a.name}-email`,"onUpdate:modelValue":i[0]||(i[0]=t=>e.email=t),type:"email",class:"block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1",required:"",placeholder:a.placeholder,disabled:e.isFetching,onChange:t=>t.target.setCustomValidity(""),onInvalid:t=>t.target.setCustomValidity("Please enter a valid email address.")},null,40,B),[[_,e.email]]),n("div",null,[x(s,{type:"submit",theme:"primary",disabled:e.isFetching},{default:S(()=>[C(I(e.isFetching?"Submitting...":a.buttonLabel),1)]),_:1},8,["disabled"])])],34)}const j=V(E,[["render",q]]);export{j as c};
