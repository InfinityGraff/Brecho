// vai virar Biblioteca___________________________________________________
function SheetDB(e,Aba,API,CallBack){
  e.preventDefault() ; const ObJson={'sheet':Aba} ; new FormData(e.target).forEach((v,k)=>{ObJson[k]=v})
  fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ObJson)})
  .then((resp)=>resp.json()).then(data=>{if(CallBack){CallBack()}}).catch((err)=>{console.error(err)})
}

function SavePlan(div,obj,API,Aba){
  Innr(div,`<form onSubmit="SheetDB(event,'${Aba}','${API}',${FetchPlan})">${ObjKey(obj).map(e=>`<input name="${e}" value="${obj[e]}">`).join('')}<button>Submit</button></form>`)
  $('form button',div).click()
  Innr(div,'')
}
function NewData(){
  const newData = new Date().toLocaleString("en-US",{timeZone:"America/Recife"}).replace(',','')
  const [dia,mes,ano,Hor,Min,Seg] = newData.split(' ')[0].split('/').concat(newData.split(' ')[1].split(':')).map(e=>e.padStart(2,'0'))
  const OBjData = {'dia':dia,'mes':mes,'ano':ano,'Hor':Hor,'Min':Min,'Seg': Seg}
  return OBjData
}
function IptDay(e){$(e).value=`${NewData().ano}-${NewData().mes}-${NewData().dia}`}
const ArrEl=(e)=> Array.from(e.target.elements)

const API_Entrada = 'https://sheetdb.io/api/v1/kf9cy1v12ionv'
const ObjPrd = {Vestido: 27.00,Camiseta: 10.00,Blusa: 15.00,Calca: 50.00,Short: 30.00}

//OnLoads__________________________________________________________________
IptDay('#Dat')
Load_opt(ObjPrd)

// Funções Propriamente Ditas______________________________________________
function Load_opt(obj){
    $('#Prd').innerHTML = ''
    $('#Prd').innerHTML += `<option value="" disabled="" selected="">Escolha um Produto</option>`
    $('#Prd').innerHTML += ObjKey(obj).map(e=>`<option value="${e}">${e}</option>`).join('')
    $('#Prd').innerHTML += `<option id="addOutrrro" value="Outtro">Adicione Outro...</option>`
}
function exibirabas(aba,eu){Show($All('nav div')) ;  None(eu) ; None('#Aba-Vendas, #Aba-Produto') ; Show(aba)}
function AddProduto(){if($('#Prd').value==="Outtro"){Show('#Modal')}}
function ProdutoCadastrdo(){None('#Modal') ; ObjPrd[$('#NomeProduto').value] = $('#ValorProduto').value ; Load_opt(ObjPrd)}

const FrLst = $('#Frns')
const FrArr = []

function AddEntrada(e,form){
  e.preventDefault() ; const V = {}
  ArrEl(e).forEach(e=>V[e.id]=e.value);V['Vnd']=ObjPrd[V.Prd];V['Cms']=ObjPrd[V.Prd]*0.20 // Cria o OBJ

  if(!FrArr.includes(V.Frn)){FrArr.push(V.Frn)}
  Innr(FrLst,FrArr.map(e=>`<option value="${e}"></option>`).join(''))

  SavePlan($('#Sheet'),V,API_Entrada,'Entrada')
  form.reset() ; IptDay('#Dat')
  
}

async function FetchPlan(){
  try{const response = await fetch(API_Entrada+'?sheet=Entrada')
    const data = await response.json()
    AddnaTabela('#TablAdd',data)
  }catch(err){console.error('Erro:',err.message)}
}


function AddnaTabela(table,obj){
  $(table).innerHTML = `<thead><tr>${ObjKey(obj[0]).map(e=>`<th>${e}</th>`).join('')}</tr></thead>
                     <tbody>${obj.map(r=>`<tr>${Object.values(r).map(e=>`<td>${e}</td>`).join('')}</tr>`).join('')}</tbody>`
}



// Lembrar dos Nomes Existentes
Innr(FrLst,FrArr.map(e=>`<option value="${e}"></option>`).join(''))
const Frncd = $('#Frn')
Frncd.addEventListener('input',()=>{
    FrLst.innerHTML = ''
    const searchTerm = Frncd.value.toLowerCase()
    FrArr.forEach((f)=>{
        if (f.toLowerCase().includes(searchTerm)) {
            const option = CreateTag('option')
            option.value = f
            FrLst.appendChild(option)
        }
    })
})











