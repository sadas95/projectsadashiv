const form =document.querySelector('#searchform')
const res =document.querySelector('#tableResult')
var upd;
form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    if(upd)
    {
        clearTimeout(upd);
    }

    
    const ctype = form.elements.coinType.value;
    fetchPrice(ctype);
});
const fetchPrice= async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    console.log(r.data.coin.price);
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const change = r.data.coin.priceChange1d;
    const base = r.data.coin.name;
    const target = 'USD';

    res.innerHTML =`<tr style="background-color:blue; color:white; font-weight:700">
    <td>
        property
    </td>
    <td>value</td>
</tr>
<tr>
    <td>
       ${base}
    </td>
    <td>${price} ${target}</td>
</tr>
<tr>
    <td>
        volume
    </td>
    <td>${volume}</td>
</tr>
<tr>
    <td>
        change
    </td>
    <td>${change}</td>
</tr>`
 
upd = setTimeout(()=>fetchPrice(ctype),10000);
}