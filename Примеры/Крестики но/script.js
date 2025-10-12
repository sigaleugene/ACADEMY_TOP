let N=0;
const pole = [[0,0,0],
              [0,0,0],
              [0,0,0]];
$(function(){
    let table = $('#tab').first();
    
    for (let r = 0; r < 3; r++) {
        
        table.append($(`<tr id='row${r}'></tr>`)); 
        const row = $(`#row${r}`).first(); 
        for (let c = 0; c < 3; c++) {
            let cell = $(`<td id='cell${r}${c}'></td>`);
            row.append(cell);
            $(`#cell${r}${c}`).one('click',function(){
                pole[r][c]=N++ % 2+1;
                console.log(pole);
                if(N % 2 == 0)
                    $(this).addClass("redCell");
                else
                    $(this).addClass("darkCell");});
        }
    }

});

