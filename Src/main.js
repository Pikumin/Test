async function main() {
    //=メモ
    //SetColor("red")
    //DrawText( "ひよこ,",300,300)
//     var x=47585876
//     x=99
// DrawText(x,10,100)
//for=回数指定の繰り返し
// for(var i =0;i<10;i++){
//     DrawText(i,10,100+i*20)
// }
//while=繰り返し
//var=右の文字を変数だということを宣言してる　
// var x=0
// while(true){
//     SetColor("white")
//     //DrawRect=四角形を書く
//     DrawRect(0,0,1000,1000)//x座標，y座標
//     x++

//     //await Sleep(1000)　　//1000=1秒

//     SetColor("pink")
//     DrawText("a",x,100)
//     await Sleep(10)//sleep=休憩時間　1000
// }
// //if文

    while(true){
        SetColor("white")
        DrawRect(0,0,1000,1000)

        SetColor("black")
        DrawText("a", GetMouseX(), GetMouseY())
        await Sleep(1)
    }
}
