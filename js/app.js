let priceFirst = 0;
let countIteam = 0;
function cartItem(target){
    countIteam +=1;
    if(countIteam >5 ){
        alert('You added max number of book');
        return
     }
    const selectedItems = target.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = selectedItems;
    const items = document.getElementById('selected-items');
    items.appendChild(li);
    const forPriceAdd = target.parentNode.childNodes[3].innerText.split(' ')[3]
    const priceNumber = parseFloat(forPriceAdd)
    priceFirst = parseFloat(priceFirst) + priceNumber;
    document.getElementById('priceTotal').innerText = priceFirst;
}
// discount itemsCode

const discounBtn = document.getElementById('coupon-btn').addEventListener('click',function(){
    const inputValue = document.getElementById('discount').value;
    const getDiscountValue = document.getElementById('priceTotal').innerText;
    const getDiscoutPrice = document.getElementById('discountTotal');
    const discount = getDiscountValue;
    const discountParcent = 20;
    if(inputValue === 'Hablu20'){
        const afterDiscount = discount-(discount *  discountParcent / 100);
        getDiscoutPrice.innerText= afterDiscount;
        // Clear the input field
        document.getElementById('discount').value = '';
    }else{
        return alert('Please give right copune for get discount')
    };

})