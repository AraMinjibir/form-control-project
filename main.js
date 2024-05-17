//  Variable declearation

const form = document.querySelector('#addForm');
const listItem = document.querySelector('#items');
const search = document.querySelector('#filter');
const notice =  document.querySelector('#notice');

// Add Items event

form.addEventListener('submit', addItem);

// Remove Items event

listItem.addEventListener('click', removeItem);

// Search event
search.addEventListener('keyup',searchItem);
// Add Items function

function addItem(e){
    e.preventDefault();

    //  result storage
    const addedItem = document.getElementById('item').value;
    // define li
    const li = document.createElement('li');
    
    // define class
    li.className = 'list-group-item';
    
    // Append addedItem

    li.appendChild(document.createTextNode(addedItem));

    // create delete button

   const deleteBtn = document.createElement('button');

    // create classes

    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

    // create textNode

    deleteBtn.appendChild(document.createTextNode('X'));

    // Append deteleBtn
    li.appendChild(deleteBtn);
    
    // Append li

    listItem.appendChild(li);
}

// Remove items function

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure you want delete this?')){
            const li = e.target.parentElement;
            listItem.removeChild(li);
        }
    }
}

// Search function

function searchItem(e){
//    convert to lower case
    const searchValue = e.target.value.toLowerCase();
    
    // Get lists

    const searchedResults = document.getElementsByTagName('li');
    
    // convert to an Array
    Array.from(searchedResults).forEach(function(searchedResult){
        const searchedOutPut = searchedResult.firstChild.textContent;
        
        // Get searchedResult
        if(searchedOutPut.toLowerCase().indexOf(searchValue) != -1){
            searchedResult.style.display = 'block';
        }else {
            searchedResult.style.display = 'none';
            // Note to show
            notice.textContent = 'Result Not Found';
            notice.style.background = 'red';
            notice.style.color = 'pink';
            notice.style.padding = '20px';
            notice.style.width = '200px';
            
        }
    })
}