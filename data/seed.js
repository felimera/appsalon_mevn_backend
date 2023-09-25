

function seedDB(){
    console.log('desde seedDB');
}

function clearDB(){
    console.log('desde clearDB');
}

if(process.argv[2]==='--import')
{
seedDB();
}
else{
    clearDB();
}