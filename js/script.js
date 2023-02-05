const formEl = document.querySelector('form');
formEl.addEventListener('submit', event => {
    event.preventDefault();

    const userInfo = {};

    const inputElements = formEl.childNodes;
    console.log(inputElements);

    inputElements.forEach(node => {
        if (node.name != null && node.name != '') {
            console.log(node.name, node.value);

            userInfo[node.name] = node.value;
        }
    })

    // userInfo.name = document.querySelector('input').value;
    console.log(userInfo);

})

const obj ={};
obj.egenskap =  10;
obj['en till egenskap'] = 99;

const text = 'en tredje egenskap';
obj[text]=87890;
console.log(obj);