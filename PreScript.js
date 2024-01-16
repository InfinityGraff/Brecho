function Eeu(e){return e}
function Pai(e){return e.parentNode}
function Avo(e){return e.parentNode.parentNode}
function Bzv(e){return e.parentNode.parentNode.parentNode}
function Ttv(e){return e.parentNode.parentNode.parentNode.parentNode}
function Vo5(e){return e.parentNode.parentNode.parentNode.parentNode.parentNode}

function InnerSVGPre(e,Svg){e.innerHTML = Svg}

// Retornos DOM______________________________________________________________
const     $ = (Stg,e=document)=>(typeof Stg==='string'?e.querySelector(Stg):Stg)
const  $All = (Stg,e=document)=>(typeof Stg==='string'?Array.from(e.querySelectorAll(Stg)):Stg)
const $All2 = (Stg,e=document)=>(typeof Stg==='string'?e.querySelectorAll(Stg):Stg)
const  $Val = (Stg,e=document)=>$All(Stg,e).map(e=>e.value)
const  $Inn = (Stg,e=document)=>$All(Stg,e).map(e=>e.innerHTML)

const  $Vl = (Stg,e=document)=>$(Stg,e).value

const CreateTag = e=>document.createElement(e)
const  IndiceDe = e=>Array.from(Pai(e).children).indexOf(e)
const      Filh = e=>Array.from($(e).children)

const Inn   = e=>$(e).innerHTML
const Innr  = (e,stg)=>$(e).innerHTML = stg
const Innr_ = (e,stg)=>$(e).innerHTML+= stg

// Retornos de Arrays_________________________________________________________
const Angrm=arr=>arr.length===0?[[]]:arr.flatMap((e,x)=>Angrm([...arr.slice(0,x),...arr.slice(x+1)]).map(i=>[e,...i]))

// Funções de Objeto e Array______________________________________________
const ObjKey=e=>Object.keys(e) // Cria Array com as Chaves do Objeto
function For(e){return Array.from({length:e},(_,idx)=>idx)} // Cria um array apartir de um Unico Numero// Alternativa a For
function Fbj(obj){return For(ObjKey(obj).length)} // argumento é um obj
const NewImg=Src=>Object.assign(new Image(),{src:Src})
const NewDiv=Cls=>Object.assign(CreateTag('div'),{className:Cls})



// Funções de Disparar Eventos________________________________________________
const DisparoInpt = new Event('input',{bubbles:true})
const EventClick = new MouseEvent('click',{bubbles: true,cancelable: true,view: window})


const ENone=e=>window.getComputedStyle($(e)).display==='none'
const EShow=e=>window.getComputedStyle($(e)).display!=='none'


const Randomm = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function Cm(e){return parseFloat(e).toFixed(2).replace('.',',')}
function RS(e){return `R$ ${Cm(e)}`}

const FirstFunc = {}
const First=(e)=>!FirstFunc[e]&&(FirstFunc[e]=true)

const RndCor=(e)=>{$All(e).forEach(c=>{c.value='#'+Math.floor(Math.random()*16777215).toString(16)})}

const Ctrl=e=>e.button === 0 && e.ctrlKey ? true : false


