import{_ as h,r as j,a as T,b as A,u as I,c as n,d as t,e as S,n as R,t as o,f as x,g as r,h as d,I as u,w as v,i as D,o as a}from"./index-CGLOrgAJ.js";const N={class:"container mx-auto flex flex-col items-start p-4 lg:p-0"},P={class:"frame rounded-2xl overflow-hidden w-full md:w-[720px] m-auto mt-4 bg-blue-200/40 p-[3px]"},C={class:"frame_in bg-blue-900/70 rounded-2xl overflow-hidden w-full h-full px-6 md:px-12 pt-4 pb-6"},L={key:0},z={key:1},B={key:2},E={key:0,class:"bg-orange-50 rounded-lg overflow-hidden"},V={class:"w-full text-left border-collapse text-blue-950 mb-4"},K={class:"bg-blue-950"},M={class:"align-middle text-center py-2 text-blue-50"},G={class:"flex justify-between px-4 py-1 text-sm"},U={class:"font-medium"},H={class:"flex justify-between px-4 py-1 text-sm"},J={class:"font-medium"},Y={class:"flex justify-between px-4 py-1 text-[] bg-amber-400/40 font-bold"},$={class:"flex flex-row items-center gap-1"},q={class:"flex justify-between px-4 py-1 text-sm"},F={class:"flex flex-row items-center gap-1"},O={class:"flex justify-between px-4 py-1 text-sm"},Q={class:"font-medium"},W={class:"flex justify-between px-4 py-1 text-sm"},X={class:"font-medium capitalize"},Z={class:"flex justify-between px-4 py-1 text-sm"},tt={class:"font-medium"},et={class:"flex justify-between px-4 py-1 text-sm"},st={class:"font-medium"},ot={class:"flex justify-between px-4 py-1 text-sm"},lt={class:"font-medium"},nt={class:"flex justify-between px-4 py-1 text-sm"},at={class:"font-medium"},it={class:"flex justify-between px-4 py-1 text-sm"},rt={class:"font-medium"},dt={class:"flex justify-between px-4 py-1 text-sm"},ut={class:"font-medium"},pt={class:"flex justify-between px-4 py-1 text-sm"},ft={class:"font-medium"},mt={key:1,class:"py-8 text-center text-red-500 font-bold"},bt={key:2,class:"flex flex-col items-center justify-center gap-4 mt-4"},ct={__name:"InvoiceView",props:{invoiceNumber:{type:String,required:!0}},setup(g){const y=I(),_=g,s=j(null),i=l=>parseInt(l).toLocaleString("id-ID"),w=l=>{const e={year:"numeric",month:"long",day:"numeric"};return new Date(l).toLocaleDateString("id-ID",e)},p=l=>{navigator.clipboard.writeText(l.toString()).then(()=>alert("Teks berhasil disalin")).catch(()=>alert("Gagal menyalin teks"))};return T(()=>{s.value=A.find(l=>l.no_invoice.toLowerCase()===_.invoiceNumber.toLowerCase()),s.value||y.push("/track-order")}),(l,e)=>{var m,b,c;const f=D("RouterLink");return a(),n("div",N,[t("div",P,[t("div",C,[t("div",{class:R(["md:text-lg lg:text-xl font-bold w-full bg-gradient-to-r from-green-600 to-amber-300 mb-3 relative rounded-t-lg overflow-hidden",{"bg-red-500":((m=s.value)==null?void 0:m.status)==="failed"}])},[((b=s.value)==null?void 0:b.status)==="success"?(a(),n("div",L,e[2]||(e[2]=[t("img",{src:"https://testweb.imatechcom.com/viptop/berhasil2.webp",alt:"",class:"w-full h-full object-contain"},null,-1)]))):((c=s.value)==null?void 0:c.status)==="failed"?(a(),n("div",z,e[3]||(e[3]=[t("img",{src:"https://testweb.imatechcom.com/viptop/gagal.webp",alt:"",class:"w-full h-full object-contain"},null,-1)]))):(a(),n("div",B,"STATUS TRANSAKSI TIDAK DIKETAHUI"))],2),s.value?(a(),n("div",E,[t("table",V,[t("tbody",null,[t("tr",K,[t("td",M,[t("span",null,"Invoice #"+o(s.value.no_invoice),1)])]),e[17]||(e[17]=t("tr",null,[t("td",{class:"text-xl font-bold tracking-wider px-4 py-2 border-b border-slate-300"}," 1. Detail Pembayaran ")],-1)),t("tr",null,[t("td",G,[e[4]||(e[4]=t("span",null,"Metode Pembayaran",-1)),t("span",U,o(s.value.metode),1)])]),t("tr",null,[t("td",H,[e[5]||(e[5]=t("span",null,"Tipe Transaksi",-1)),t("span",J,o(s.value.tipe),1)])]),t("tr",null,[t("td",Y,[e[6]||(e[6]=t("span",null,"TOTAL PEMBAYARAN",-1)),t("div",$,[x(" Rp "+o(i(s.value.harga))+" ",1),t("button",{class:"cursor-pointer focus:font-bold",onClick:e[0]||(e[0]=k=>p(s.value.harga))},[r(d(u),{icon:"solar:copy-broken",class:"text-lg"})])])])]),e[18]||(e[18]=t("tr",null,[t("td",{class:"text-xl font-bold tracking-wider px-4 py-2 border-b border-slate-300"}," 2. Detail Pesanan ")],-1)),t("tr",null,[t("td",q,[e[7]||(e[7]=t("span",null,"No. Invoice",-1)),t("div",F,[x(" #"+o(s.value.no_invoice)+" ",1),t("button",{class:"cursor-pointer",onClick:e[1]||(e[1]=k=>p(s.value.no_invoice))},[r(d(u),{icon:"solar:copy-broken",class:"text-lg"})])])])]),t("tr",null,[t("td",O,[e[8]||(e[8]=t("span",null,"Tgl Pemesanan",-1)),t("span",Q,o(w(s.value.tanggal)),1)])]),t("tr",null,[t("td",W,[e[9]||(e[9]=t("span",null,"Status Transaksi",-1)),t("span",X,o(s.value.status),1)])]),t("tr",null,[t("td",Z,[e[10]||(e[10]=t("span",null,"Game",-1)),t("span",tt,o(s.value.game),1)])]),t("tr",null,[t("td",et,[e[11]||(e[11]=t("span",null,"Produk",-1)),t("span",st,"Rp "+o(i(s.value.produk)),1)])]),t("tr",null,[t("td",ot,[e[12]||(e[12]=t("span",null,"Harga Satuan",-1)),t("span",lt,"Rp "+o(i(s.value.harga)),1)])]),t("tr",null,[t("td",nt,[e[13]||(e[13]=t("span",null,"Jumlah Pembelian",-1)),t("span",at,o(s.value.jumlah),1)])]),t("tr",null,[t("td",it,[e[14]||(e[14]=t("span",null,"Sub Total",-1)),t("span",rt,"Rp "+o(i(s.value.sub_total)),1)])]),t("tr",null,[t("td",dt,[e[15]||(e[15]=t("span",null,"Diskon",-1)),t("span",ut,"Rp "+o(i(s.value.diskon)),1)])]),t("tr",null,[t("td",pt,[e[16]||(e[16]=t("span",null,"Payment Fee",-1)),t("span",ft,"Rp "+o(i(s.value.fee)),1)])])])])])):(a(),n("div",mt," Invoice tidak ditemukan atau data tidak tersedia ")),s.value?(a(),n("div",bt,[r(f,{to:"/",class:"w-full p-3 flex flex-row justify-center items-center gap-2 rounded-xl text-blue-900 font-bold border border-amber-200 bg-gradient-to-bl from-amber-500 via-amber-300 to-amber-200 hover:font-bold relative overflow-hidden group"},{default:v(()=>[r(d(u),{icon:"solar:copy-broken",class:"text-lg z-10"}),e[19]||(e[19]=t("span",{class:"z-10"},"BELANJA LAGI",-1)),e[20]||(e[20]=t("div",{class:"absolute w-full h-full bg-amber-500/30 inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"},null,-1))]),_:1}),r(f,{to:"/track-order",class:"w-full p-3 flex flex-row justify-center items-center gap-2 rounded-xl text-blue-900 font-bold border border-indigo-400 bg-gradient-to-b from-10% from-indigo-500 via-40% via-indigo-300 to-70% to-indigo-200 hover:font-bold relative overflow-hidden group"},{default:v(()=>[r(d(u),{icon:"solar:copy-broken",class:"text-lg z-10"}),e[21]||(e[21]=t("span",{class:"z-10"},"PERIKSA STATUS PEMBAYARAN",-1)),e[22]||(e[22]=t("div",{class:"absolute w-full h-full bg-indigo-500/30 inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"},null,-1))]),_:1})])):S("",!0)])])])}}},vt=h(ct,[["__scopeId","data-v-b773e197"]]);export{vt as default};
