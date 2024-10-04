var totalAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;

for( i= noAngkot; i <= totalAngkot; i++
)
{
    if(i <= angkotBeroprasi) {
        console.log('angkot ' + i + ' beroprasi');
    } else if(i === 8 ) 
    {console.log('angkot ' + i + ' lemboor');
    }   else {
        console.log('angkot ' + i + ' tidak beroprasi');
    }
}
