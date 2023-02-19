const sucessBtn = document.querySelector('.btn-success');

const snackbarContainer = document.getElementById('snackbar-container')


sucessBtn.addEventListener('click',()=>{
    snackbar('success', 'This is a growl dialog box! This was difficult to create to say the least.',3000);
})
function snackbar(type,msg,time){
    const para = document.createElement9('P');
    para.classlist.add('snackbar');
    para.innerHTML = ` ${msg} <span>&times</span>`;

    if(type === 'success'){
        para.classlist.add('success');
    }

    snackbarContainer.appendChild(para);
    para.classList.add('fade-out');

    setTimeout(()=>{
        snackbarContainer.removeChild(para)

    },time);

}


